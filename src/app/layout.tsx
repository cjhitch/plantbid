import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type FC, type ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next application',
	description: 'Next application',
	viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
};

interface Props {
	children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<body style={{ height: '100vh', padding: '1rem' }} className={inter.className}>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
