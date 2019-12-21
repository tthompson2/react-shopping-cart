import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { productContext } from './components/context/productContext';
import { cartContext } from './components/context/cartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (

		<productContext.Provider value={{ products, addItem }}>
			<cartContext.Provider value={{ products }}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route
						exact
						path="/"
						render={() => (
							<Products
								products={products}
								addItem={addItem}
							/>
						)}
					/>

					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</div>
			</cartContext.Provider>
		</productContext.Provider>
	);
}

export default App;
