import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput
} from 'react-native';

import { Movie } from '~/apollo/queries/types';

import { StyledContainer, StyledImage, StyledItem } from './styles';
import { useSearch } from './useSearch';

const IMAGE_BASE_PATH: string = 'https://image.tmdb.org/t/p/original/';

const keyExtractor = (item: Movie) => item?.id?.toString();

const renderItem = ({ item }: { item: Movie }) => (
  <StyledItem>
    <StyledImage source={{ uri: `${IMAGE_BASE_PATH}${item?.poster_path}` }} />
    <Text>{item?.original_title}</Text>
  </StyledItem>
);

export const Search = () => {
  const { handleSearch, loading, results } = useSearch();

  return (
    <StyledContainer>
      <TextInput onChangeText={handleSearch} placeholder="Type the movie name here..." />
      {loading ? (
        <ActivityIndicator color="gray" size="large" />
      ) : (
        <FlatList<Movie>
          data={results}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
    </StyledContainer>
  );
};
