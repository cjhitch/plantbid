import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type FC, type ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'DigiKey Marketplace',
	description: "DigiKey's Marketplace application",
	viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
};

interface Props {
	children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
