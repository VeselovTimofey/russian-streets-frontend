import { createSlice } from '@reduxjs/toolkit';
import { type IEventState } from '../../utils/interface/eventInterface';
import { lastEventsAction } from '../actions/eventAction';

const initialState: IEventState = {
  lastEvents: [
    {
      id: '-1',
      name: '',
      description: '',
      imageUrl: '',
      place: '',
      startDate: '',
    },
  ],
  savedEventsId: [],
  events: [
    {
      id: '-1',
      name: '',
      description: '',
      imageUrl: '',
      place: '',
      startDate: '',
      discipline: '',
      rules: '',
      deadlineRegistrationDate: '',
    },
  ],
  isLoading: false,
  error: '',
};

const eventSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(lastEventsAction.pending, (state: IEventState) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(lastEventsAction.fulfilled, (state: IEventState, action) => {
        state.lastEvents = [];
        action.payload.forEach((newEvent) => {
          const { id, name, description, imageUrl, place, startDate } = newEvent;
          state.lastEvents.push({ id, name, description, imageUrl, place, startDate });
          if (!state.savedEventsId.includes(id)) {
            state.events.push(newEvent);
            state.savedEventsId.push(id);
          }
        });
        state.isLoading = false;
      })
      .addCase(lastEventsAction.rejected, (state: IEventState, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default eventSlice.reducer;