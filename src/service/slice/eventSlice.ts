import { createSlice } from '@reduxjs/toolkit';
import { type IEventState } from '../../utils/interface/eventInterface';
import { DEFAULT_EVENT } from '../../utils/constans/defaultEventConstans';
import { lastEventsAction, dailyEventsAction, eventAction } from '../actions/eventAction';

const initialState: IEventState = {
  lastEvents: [ DEFAULT_EVENT ],
  dayEvents: [ DEFAULT_EVENT ],
  currentEvent: DEFAULT_EVENT,
  savedEventsId: [],
  events: [ DEFAULT_EVENT ],
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
      })
      .addCase(dailyEventsAction.pending, (state: IEventState) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(dailyEventsAction.fulfilled, (state: IEventState, action) => {
        state.dayEvents = [];
        action.payload.forEach((newEvent) => {
          const { id, name, description, imageUrl, place, discipline } = newEvent;
          state.dayEvents.push({ id, name, description, imageUrl, place, discipline });
          if (!state.savedEventsId.includes(id)) {
            state.events.push(newEvent);
            state.savedEventsId.push(id);
          }
        });
        state.isLoading = false;
      })
      .addCase(dailyEventsAction.rejected, (state: IEventState, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(eventAction.pending, (state: IEventState) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(eventAction.fulfilled, (state: IEventState, action) => {
        if (action.payload.alreadyInStore) {
          state.currentEvent = state.events.find(event => event.id === action.payload.id);
        } else {
          state.currentEvent = action.payload.event;
        }
      })
      .addCase(eventAction.rejected, (state: IEventState, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default eventSlice.reducer;