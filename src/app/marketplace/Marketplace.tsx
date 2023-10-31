import { type NextComponentType } from 'next';
import MARKETPLACE_TESTID from './model/Marketplace.testid';

const Marketplace: NextComponentType = () => {
	return (
		<h1 data-testid={MARKETPLACE_TESTID}>
			this is the default marketplace route
		</h1>
	);
};

export default Marketplace;
