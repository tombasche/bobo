import React from 'react';
import styled from 'styled-components';
import { titleCase } from '../stringUtils/titlecase';

type Genres = string[]

interface GenreDisplayProps {
  genres: Genres
}

const SmallFontDiv = styled.div`
  font-size: 12px;
  
`;

export const genresToString = (genres: Genres): string => {
  return genres.map((g) => titleCase(g)).join(", ")
}

export default function GenreDisplay({ genres }: GenreDisplayProps) {
  return (
    <SmallFontDiv>
      {genresToString(genres)}
    </SmallFontDiv>
  );
}
