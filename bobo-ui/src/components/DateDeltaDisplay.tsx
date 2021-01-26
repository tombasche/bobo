import React from 'react';
import styled from 'styled-components';
import { diffDate } from '../dateUtils/diff';
import { parseServerDate } from '../dateUtils/parse';
import { SmallFont } from './SmallFont';

interface DateDeltaDisplayProps {
    date: string
}

export default function DateDeltaDisplay({ date }: DateDeltaDisplayProps) {
    return (
        <SmallFont>
            <p>Updated {diffDate(new Date(), parseServerDate(date))}</p>
        </SmallFont>
    );
}
