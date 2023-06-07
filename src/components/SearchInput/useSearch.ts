import { useQuery } from '@apollo/client';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

import { GET_MOVIES } from '~/apollo/queries/getMovies';
import { GetMoviesData, GetMoviesVariables } from '~/apollo/queries/types';

import { UseSearchOutput } from './types';

const SEARCH_DEBOUNCE_TIME: number = 500;

export const useSearch = (): UseSearchOutput => {
  const [text, setText] = useState<string>('');

  const {
    data: {
      moviesList: {
        results = []
      } = {}
    } = {},
    loading
  } = useQuery<GetMoviesData, GetMoviesVariables>(GET_MOVIES, {
    skip: !text,
    variables: { input: text }
  });

  const handleSearch = useCallback(debounce(setText, SEARCH_DEBOUNCE_TIME), []);

  return {
    handleSearch,
    loading,
    results
  }
}
