export type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
};

export type MoviesList = {
  results: Movie[];
};

export type GetMoviesData = {
  moviesList: MoviesList;
};

export type GetMoviesVariables = {
  input: string;
};
