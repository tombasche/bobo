import React from 'react';
import styled from 'styled-components';
import { titleCase } from '../stringUtils/titlecase';
import { SmallFont } from './SmallFont';

type Genres = string[]

interface GenreDisplayProps {
  genres: Genres
}

export const genresToString = (genres: Genres): string => {
  return genres.map((g) => titleCase(g)).join(", ")
}

export default function GenreDisplay({ genres }: GenreDisplayProps) {
  return (
    <SmallFont>
      {genresToString(genres)}
    </SmallFont>
  );
}
