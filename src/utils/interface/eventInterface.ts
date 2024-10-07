export interface IEvent {
  id: string,
  name: string,
  description: string,
  imageUrl: string,
  place: string,
  startDate?: string,
  discipline?: string,
  rules?: string,
  deadlineRegistrationDate?: string,
}

export interface IEventState {
  lastEvents: IEvent[],
  savedEventsId: string[],
  events: IEvent[],
  isLoading: boolean,
  error: string | undefined,
}