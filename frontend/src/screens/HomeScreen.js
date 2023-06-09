import axios from 'axios'
import Rating from '../components/Rating';

const HomeScreen = {
    render: async () => {
        // //static way to call data file in frontend
        // const { products } = data;

        // // calling data file through backend
        const response = await axios({
            url: 'http://localhost:5000/api/products',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response || response.statusText !== 'OK') {
            return `<div>Error in getting data</div>`;
        }

        const products = response.data;

        return `
        <ul class="products">
        ${products.map((product) => `
        <li>
        <div class="product">
            <a href="/#/product/${product._id}">
                <img src="${product.image}" alt="product 1">
            </a>
            <div class="product-name">
                <a href="/#/product/1">
                    ${product.name}
                </a>
            
            </div>
            <div class="product-rating">
            ${Rating.render({
            value: product.rating,
            text: `${product.numReviews} reviews`,
        })}
            </div>
            <div class="product-brand">
                ${product.brand}
            </div>
            <div class="product-price"><span>&#8377;</span>
                ${product.price}
            </div>
        </div>
    </li>
        `).join('\n')}
    </ul>`;
    },
};

export default HomeScreen;

