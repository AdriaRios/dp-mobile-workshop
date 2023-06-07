import { MoviesList } from '~/apollo/queries/types';

export type UseSearchOutput = {
  handleSearch: (text: string) => void;
  loading: boolean;
} & MoviesList;
