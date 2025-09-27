<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h2>Delicious Ice Cream for a Great Cause!</h2>
        <p>Join us for our annual ice cream fundraiser to support Lions Club's community service initiatives.</p>
        <button @click="showOrderAlert" id="orderBtn">Order Ice Cream Now</button>
      </div>
    </section>

    <!-- Event Details Section -->
    <section class="event-details">
      <div class="container">
        <h2>Event Details</h2>
        <div class="details-grid">
          <div class="detail-card">
            <h3>Date & Time</h3>
            <p>October 15, 2025</p>
            <p>10:00 AM - 6:00 PM</p>
          </div>
          <div class="detail-card">
            <h3>Location</h3>
            <p>Central Park Pavilion</p>
            <p>123 Community Street</p>
            <p>Kuala Lumpur, Malaysia</p>
          </div>
          <div class="detail-card">
            <h3>Prices</h3>
            <p>Single Scoop: RM5</p>
            <p>Double Scoop: RM8</p>
            <p>Triple Scoop: RM10</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Section -->
    <section class="menu">
      <div class="container">
        <h2>Our Ice Cream Flavors</h2>
        <div class="menu-grid">
          <div v-for="(flavor, index) in flavors" :key="index" class="flavor-card" @click="addToCart(flavor)"
            :class="{ 'added-to-cart': flavor.added }">
            <h3>{{ flavor.name }}</h3>
            <p>{{ flavor.description }}</p>
            <p class="price">RM{{ flavor.price }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <h2>About Lions Club</h2>
        <p>Lions Clubs International is the world's largest service club organization, with over 1.4 million members in
          more than 46,000 clubs worldwide. We're dedicated to serving communities and helping those in need through
          various charitable initiatives.</p>
        <p>All proceeds from this ice cream event will go directly to supporting local community projects, including
          vision care programs, youth education, and environmental initiatives.</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <h2>Contact Us</h2>
        <p>Have questions about the event? Want to volunteer or donate?</p>
        <p>Email: icecream@lionsclub.my</p>
        <p>Phone: +60 123 456 789</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Cart state
const cart = ref([])
const cartTotal = ref(0)

// Flavors data
const flavors = ref([
  { name: 'Vanilla Dream', description: 'Classic and creamy', price: 5, added: false },
  { name: 'Chocolate Fudge', description: 'Rich and indulgent', price: 5, added: false },
  { name: 'Strawberry Swirl', description: 'Fresh and fruity', price: 5, added: false },
  { name: 'Mint Chocolate Chip', description: 'Cool and refreshing', price: 5, added: false },
  { name: 'Cookies & Cream', description: 'Crunchy and satisfying', price: 5, added: false },
  { name: 'Butter Pecan', description: 'Nutty and delicious', price: 5, added: false }
])

// Show order alert
const showOrderAlert = () => {
  alert('Thank you for your interest! Please visit our booth at Central Park Pavilion on October 15, 2025 to order your ice cream.')
}

// Add to cart function
const addToCart = (flavor) => {
  cart.value.push({ name: flavor.name, price: flavor.price })
  cartTotal.value += flavor.price
  flavor.added = true

  // Visual feedback
  setTimeout(() => {
    flavor.added = false
  }, 300)

  alert(`${flavor.name} added to your cart! Total: RM${cartTotal.value.toFixed(2)}`)
}

// Hero section animation
onMounted(() => {
  const heroSection = document.querySelector('.hero')
  if (heroSection) {
    heroSection.style.opacity = '0'
    heroSection.style.transform = 'translateY(20px)'

    setTimeout(() => {
      heroSection.style.transition = 'opacity 1s ease, transform 1s ease'
      heroSection.style.opacity = '1'
      heroSection.style.transform = 'translateY(0)'
    }, 300)
  }
})
</script>

<style scoped>
/* Hero section styles */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1591261260023-14959b05754d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin-bottom: 40px;
}

.hero h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

#orderBtn {
  background-color: #c62828;
  color: white;
  border: 2px solid #ffd700;
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-weight: bold;
}

#orderBtn:hover {
  background-color: #d32f2f;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  border-color: #ffcc00;
}

/* Event details section */
.event-details {
  margin-bottom: 40px;
}

.event-details h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #c62828;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.detail-card {
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.detail-card h3 {
  color: #c62828;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

/* Menu section */
.menu {
  margin-bottom: 40px;
  background-color: #fff;
  padding: 40px 0;
}

.menu h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #c62828;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.flavor-card {
  background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 2px solid #2e7d32;
  cursor: pointer;
}

.flavor-card:hover {
  transform: translateY(-10px);
}

.flavor-card.added-to-cart {
  background-color: #aaffaa !important;
}

.flavor-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.flavor-card p {
  margin-bottom: 15px;
}

.flavor-card .price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #c62828;
}

/* About section */
.about {
  background-color: #f8f9fa;
  padding: 40px 0;
  margin-bottom: 40px;
}

.about h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #c62828;
}

.about p {
  max-width: 800px;
  margin: 0 auto 15px auto;
  font-size: 1.1rem;
}

/* Contact section */
.contact {
  background-color: #fff;
  padding: 40px 0;
  margin-bottom: 40px;
  text-align: center;
}

.contact h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #c62828;
}

.contact p {
  max-width: 600px;
  margin: 0 auto 10px auto;
  font-size: 1.1rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }

  .hero h2 {
    font-size: 1.8rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .details-grid,
  .menu-grid {
    grid-template-columns: 1fr;
  }
}
</style>
