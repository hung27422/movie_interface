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
export interface FilmItems {
  name: string;
  origin_name: string;
  slug: string;
  thumb_url: string;
  time: string;
  type: string;
  year: number;
  _id: string;
  modified: {
    time: string;
  };
  category: Category[];
}
