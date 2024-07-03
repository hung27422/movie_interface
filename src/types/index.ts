export interface DataFilms {
  data: {
    items: FilmItems[];
    params: {
      pagination: {
        currentPage: number;
        totalItems: number;
        totalItemsPerPage: number;
        totalPages: number;
      };
    };
    titlePage: string;
  };
}
export interface Category {
  id: string;
  name: string;
  slug: string;
}
export interface Country {
  id: string;
  name: string;
  slug: string;
}
export interface FilmItems {
  name: string;
  origin_name: string;
  slug: string;
  thumb_url: string;
  poster_url: string;
  time: string;
  type: string;
  year: number;
  _id: string;
  modified: {
    time: string;
  };
  category: Category[];
}
export interface NewReleaseFilm {
  items: FilmItems[];
  pagination: {
    currentPage: number;
    totalItems: number;
    totalItemsPerPage: number;
    totalPages: number;
  };
}
export interface EpisodesDetails {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}
export interface Episodes {
  server_name: string;
  server_data: EpisodesDetails[];
}
export interface DetailFilm {
  movie: {
    name: string;
    origin_name: string;
    poster_url: string;
    thumb_url: string;
    trailer_url: string;
    type: string;
    _id: string;
    year: number;
    time: string;
    view: number;
    chieurap: boolean;
    content: string;
    lang: string;
    actor: string[];
    episode_current: string;
    category: Category[];
    country: Country[];
    director: string[];
    modified: {
      time: string;
    };
    created: {
      time: string;
    };
  };
  episodes: Episodes[];
}
