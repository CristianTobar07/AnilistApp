
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
  id:          number;
  siteUrl:     string;
  format:      string;
  episodes:    number;
  genres:      string[];
  coverImage:  CoverImage;
  meanScore:   number;
  title:       Title;
  description: string;
  status:      string;
}

export interface CoverImage {
  medium: string;
  extraLarge: string;
}

export interface Title {
  english: string;
  native:  string;
}