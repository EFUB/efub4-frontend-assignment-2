export interface Cast {
  name: string;
  character_name: string;
  url_small_image?: string;
}

export interface MovieDetail {
  title: string;
  year: number;
  rating: number;
  genres: string[];
  cast: Cast[];
  description_intro: string;
  background_image: string;
}
