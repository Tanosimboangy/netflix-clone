import React, { useState, useEffect } from 'react';
import { Card, Header, Loading } from '../components';
import Fuse from 'fuse.js'
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import SelectProfileContainer from './profiles';
import FooterContainer from './footer';

export default function BrowseContainer({slide}) {
	const [category, setCategory] = useState('series');
	const [profile, setProfile] = useState({});
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(true);
	const [slideRows, setSlideRows] = useState([]);

	const user = {
		displayName: 'Jacquit',
		photoURL: '1',
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [user]);

	useEffect(() => {
		setSlideRows(slide[category])
	}, [slide, category])

	useEffect(() => {
		const fuse = new Fuse(slideRows, {key: ['data.description', 'data', 'data.genre']})
		const results = fuse.search(searchTerm).map(({item}) => item);

		if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
			setSlideRows(results);
		} else {
			setSlideRows(slide[category])
		}
	}, [searchTerm])

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
			<Header src="joker1" dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Group>
						<Header.Logo
							to={ROUTES.HOME}
							src="/images/misc/logo.svg"
							alt="Netflix"
						/>
						<Header.Link
							onClick={() => setCategory('series')}
							active={category === 'series' ? 'true' : 'false'}
						>
							Series
						</Header.Link>
						<Header.Link
							onClick={() => setCategory('films')}
							active={category === 'films' ? 'true' : 'false'}
						>
							Films
						</Header.Link>
					</Header.Group>
					<Header.Group>
						<Header.Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.Link>{user.displayName}</Header.Link>
								</Header.Group>
								<Header.Group>
									<Header.Link onClick={() => firebase.auth().signOut()}>
										Sign out
									</Header.Link>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>

				<Header.Feature>
					<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks
						connection as he walks the streets of Gotham City. Arthur wears two
						masks -- the one he paints for his day job as a clown, and the guise
						he projects in a futile attempt to feel like he's part of the world
						around him.
					</Header.Text>
					<Header.PlayButton>Play</Header.PlayButton>
				</Header.Feature>
			</Header>
			<Card.Group>
				{slideRows.map((slideItem) => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
						<Card.Entities>
							{slideItem.data.map((item) => (
								<Card.Item key={item.docId} item={item}>
									<Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} alt="Image" />
									<Card.Meta>
										<Card.SubTitle>{item.title}</Card.SubTitle>
										<Card.Text>{item.description}</Card.Text>
									</Card.Meta>
								</Card.Item>
							))}
						</Card.Entities>
						<Card.Feature category={category}></Card.Feature>
					</Card>
				) )}
			</Card.Group>

			<FooterContainer></FooterContainer>
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	);
}