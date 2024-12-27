export interface SimpleMovieResponse {
  data: Data;
}

export interface Data {
  Page: Page;
}

export interface Page {
  media: Media[];
}

export interface Media {
  id: number;
  format: string;
  episodes: number;
  genres: string[];
  coverImage: CoverImage;
  meanScore: number;
  title: Title;
  description: string;
  status: string;
  endDate: EndDate;
  season: string;
  duration: number
  bannerImage: string;
}

export interface CoverImage {
  extraLarge: string;
  color: string
}

export interface Title {
  english: string;
  native: string;
}

export interface EndDate {
  day: number;
  month: number;
  year: number;
}
