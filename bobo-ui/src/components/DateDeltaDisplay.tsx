import React from 'react';
import { dateDiffTilNow } from '../dateUtils/diff';
import { parseServerDate } from '../dateUtils/parse';
import SmallFont from './SmallFont';

export default function DateDeltaDisplay({ date }: { date: string }) {
  return (
    <SmallFont>
      <p>Updated {dateDiffTilNow(parseServerDate(date))}</p>
    </SmallFont>
  );
}
