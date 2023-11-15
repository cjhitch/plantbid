'use client';

import { type NextComponentType } from 'next';
import { useEffect, useState } from 'react';

import { Box, Modal, Typography } from '@mui/material';
import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost:3000',
});
const config = {
	headers: { Authorization: 'Bearer 7nlC_PB5ByWzYqrF9lIr' },
};

const Home: NextComponentType = () => {
	const [characters, setCharacters] = useState<unknown>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedCharacter, setSelectedCharacter] = useState(null);
	const [selectedCharacterQuotes, setSelectedCharacterQuotes] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		init();
	}, []);

	useEffect(() => {
		getQuotes(selectedCharacter?._id);
	}, [page]);

	async function init() {
		// await API.get(
		// 	'https://the-one-api.dev/v2/character?limit=10',
		// 	config,
		// ).then(({ data }) => {
		// 	setCharacters(data.docs);
		// });
		await API.get(
			'https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfe9e',
			config,
		).then(({ data }) => {
			setCharacters(data.docs);
		});
	}

	async function getQuotes(id: string) {
		await API.get(
			`https://the-one-api.dev/v2/character/${id}/quote?limit=10?page=${page}`,
			config,
		).then(({ data }) => {
			setSelectedCharacterQuotes(data?.docs);
		});
	}

	const setChacter = async (char) => {
		if (char !== selectedCharacter) {
			setSelectedCharacter(char);
			await getQuotes(char?._id);
		}
		setIsOpen(true);
	};

	useEffect(() => {
		console.log('page: ', page);
	}, [page]);
	return (
		<main
			style={{
				height: '100vh',
				display: 'grid',
				justifyContent: 'center',
				gridTemplateRows: '5rem 1fr',
			}}
		>
			<h1 style={{ marginTop: '1rem' }}>Lord of the Rings characters</h1>
			<ul
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{characters.map((char) => {
					return (
						<li
							style={{
								margin: '.75rem',
								cursor: 'pointer',
								listStyle: 'none',
								color: 'lightblue',
							}}
							onClick={() => {
								setChacter(char);
							}}
							key={char?._id}
						>
							{char?.name}
						</li>
					);
				})}
			</ul>
			<div
				style={{
					top: 0,
					right: 0,
					left: 0,
					bottom: 0,
					height: '100vh',
					width: '100vw',
					display: isOpen ? 'flex' : 'none',
				}}
			>
				<Modal
					open={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
					sx={{
						position: 'relative',
						marginX: '2rem',
						backgroundColor: 'rgba(0,0,0,1)',
					}}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box
						sx={{
							backgroundColor: 'white',
							borderRadius: '.75rem',
							padding: '1rem',
						}}
					>
						<a
							style={{
								color: 'black',
								position: 'absolute',
								right: '1rem',
								top: '1rem',
							}}
							onClick={() => {
								setIsOpen(false);
							}}
							href="#"
						>
							X
						</a>
						<h2
							style={{
								color: 'black',
								textAlign: 'center',
								marginBottom: '1rem',
								marginX: '.5rem',
							}}
						>
							Selected character
						</h2>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
							sx={{ color: 'black' }}
						>
							<b>Character: </b>
							{selectedCharacter?.name}
						</Typography>
						<Typography
							id="modal-modal-description"
							sx={{ mt: 2, color: 'black' }}
						>
							<b>Race: </b>
							{selectedCharacter?.race}
						</Typography>
						<Typography
							id="modal-modal-description"
							sx={{ mt: 2, color: 'black' }}
						>
							<b>Gender: </b>
							{selectedCharacter?.gender}
						</Typography>
						<a
							style={{ color: 'black' }}
							href="#"
							onClick={() => {
								setPage(page - 1);
							}}
						>
							{'<'}
						</a>
						<p>Page {page}</p>
						<a
							style={{ color: 'black' }}
							href="#"
							onClick={() => {
								setPage(page + 1);
							}}
						>
							{'>'}
						</a>
						<ul style={{ listStyle: 'none' }}>
							{selectedCharacterQuotes?.length > 0 &&
								selectedCharacterQuotes?.map((quote) => {
									return (
										<li
											style={{ color: 'black' }}
											key={quote?._id}
										>
											<b>Quote: </b>
											<i>{quote?.dialog}</i>
										</li>
									);
								})}
						</ul>
					</Box>
				</Modal>
			</div>
		</main>
	);
};

export default Home;
