import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import React from 'react';
import { Text } from 'react-native';

import { Search } from '~/components/SearchInput';

export const Home = () => (
  <StyledContainer>
    <Text>The Movie Searcher</Text>
    <Search />
    <StatusBar style="auto" />
  </StyledContainer>
);

const StyledContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
