import { type FC } from 'react';

interface Props {
	productId: string;
}

const ProductsPublished: FC<Props> = ({ productId }) => {
	return (
		<>
			<h1>this is the products published route</h1>
			<h2>this is a second header</h2>
			<p>{productId || ''}</p>
		</>
	);
};

export default ProductsPublished;
