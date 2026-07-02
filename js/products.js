/* Product Specific Scripts */

const products = [
    {
        id: 1,
        name: "Yellow One-Shoulder Drape Gown",
        price: "₹7,999",
        image: "assets/images/product-1.jpg",
        category: "Dresses"
    },
    {
        id: 2,
        name: "Elegant Embellished Strapless Evening Dress",
        price: "₹9,999",
        image: "assets/images/product-2.jpg",
        category: "Dresses"
    },
    {
        id: 3,
        name: "White Corset Mini Dress with Sheer Sleeves",
        price: "₹9,499",
        image: "assets/images/product-3.jpg",
        category: "Mini Dresses"
    },
    {
        id: 4,
        name: "White One Shoulder Bodycon Maxi Dress",
        price: "₹7,499",
        image: "assets/images/product-4.jpg",
        category: "Maxi Dresses"
    },
    {
        id: 5,
        name: "Tropical Escape Maxi Dress",
        price: "₹4,599",
        image: "assets/images/product-5.jpg",
        category: "Maxi Dresses"
    },
    {
        id: 6,
        name: "Designer Rhinestoned Dress",
        price: "Price on Request",
        image: "assets/images/product-6.jpg",
        category: "Statement Wear"
    }
];

function renderProducts(filter = 'all') {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = '';

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card reveal';
        card.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <span class="price">${product.price}</span>
                <button class="btn btn-dark" onclick="enquireWhatsApp('${product.name}')">Enquire on WhatsApp</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Initialize if on products page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
