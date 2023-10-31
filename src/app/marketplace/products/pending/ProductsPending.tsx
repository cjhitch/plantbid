import { type FC } from 'react';

interface Props {
	productId: string;
}

const ProductsPending: FC<Props> = ({ productId }) => {
	return (
		<>
			<h1>this is the products pending route</h1>
			<h2>this is a second header</h2>
			<p>{productId || ''}</p>
		</>
	);
};

export default ProductsPending;
