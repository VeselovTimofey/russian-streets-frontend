export interface INews {
  id: string,
  name: string,
  image_urls: string[],
  discription: string,
  pub_date?: string,
}

export interface INewsState {
  lastNews: INews[],
  news: INews[],
  isLoading: boolean,
  error: string | undefined,
}