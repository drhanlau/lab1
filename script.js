// Cart functionality
let cart = [];
let cartTotal = 0;

// Order button functionality
document.getElementById('orderBtn').addEventListener('click', function() {
    alert('Thank you for your interest! Please visit our booth at Central Park Pavilion on October 15, 2025 to order your ice cream.');
});

// Function to add item to cart
function addToCart(itemName, price) {
    cart.push({name: itemName, price: price});
    cartTotal += price;
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    console.log('Cart items:', cart);
    console.log('Total: RM' + cartTotal.toFixed(2));

    // In a real implementation, you would update the UI to show cart items and total
    // For this simple example, we'll just log to the console
}

// Add event listeners to flavor cards
document.addEventListener('DOMContentLoaded', function() {
    const flavorCards = document.querySelectorAll('.flavor-card');

    flavorCards.forEach(card => {
        card.addEventListener('click', function() {
            const flavorName = this.querySelector('h3').textContent;
            const priceText = this.querySelector('.price').textContent;
            const price = parseFloat(priceText.replace('RM', ''));

            if (!isNaN(price)) {
                addToCart(flavorName, price);
                // Visual feedback for adding to cart
                this.style.backgroundColor = '#aaffaa';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 300);

                alert(`${flavorName} added to your cart! Total: RM${cartTotal.toFixed(2)}`);
            }
        });
    });
});

// Smooth scrolling for any anchor links (if we had navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple animation for the hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    heroSection.style.opacity = '0';
    heroSection.style.transform = 'translateY(20px)';

    setTimeout(() => {
        heroSection.style.transition = 'opacity 1s ease, transform 1s ease';
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }, 300);
});
