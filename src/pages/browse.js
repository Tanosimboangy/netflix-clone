import React from 'react';
import BrowseContainer from '../containers/browse';
import { useContent } from '../hooks';
import { selectionMap } from '../utils';

export default function Browse() {
	const { series } = useContent('series');
	const { films } = useContent('films');

	const slide = selectionMap({ series, films });
	console.log(slide);

	return <BrowseContainer slide={slide}></BrowseContainer>;
}
