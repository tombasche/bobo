import React from 'react';
import { dateDiffTilNow } from '../dateUtils/diff';
import { parseServerDate } from '../dateUtils/parse';
import SmallFont from './SmallFont';

interface DateDeltaDisplayProps {
  date: string;
}

export default function DateDeltaDisplay({ date }: DateDeltaDisplayProps) {
  return (
    <SmallFont>
      <p>Updated {dateDiffTilNow(parseServerDate(date))}</p>
    </SmallFont>
  );
}
