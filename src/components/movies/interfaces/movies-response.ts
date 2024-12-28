export interface MoviesResponse {
  Page: Page;
}

export interface Page {
  pageInfo: PageInfo;
  media: Movie[];
}

export interface Movie {
  id: number;
  siteUrl: string;
  format: string;
  episodes: number;
  genres: string[];
  coverImage: CoverImage;
  title: Title;
  description: string;
  status: string;
  meanScore: number;
}

export interface CoverImage {
  extraLarge: string;
}

export interface Title {
  english: string;
  native: string;
}

export interface PageInfo {
  currentPage: number;
  hasNextPage: boolean;
  perPage: number;
}
