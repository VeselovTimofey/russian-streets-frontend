export interface INews {
  id: string,
  name: string,
  imageUrl: string,
  description: string,
  pubDate?: string,
}

export interface INewsState {
  lastNews: INews[],
  news: INews[],
  isLoading: boolean,
  error: string | undefined,
}