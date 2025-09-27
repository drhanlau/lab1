<template>
  <div>
    <header>
      <div class="container">
        <h1>Lions Club Ice Cream Charity Event</h1>
        <p>Helping communities one scoop at a time</p>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2025 Lions Club International. All rights reserved.</p>
        <p>Helping communities through service and compassion</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Layout component for the default layout
</script>

<style scoped>
/* Header styles */
header {
  background: linear-gradient(135deg, #c62828 0%, #2e7d32 100%);
  color: #fff;
  text-align: center;
  padding: 40px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Footer styles */
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 30px 0;
  margin-top: 40px;
}

footer p {
  margin-bottom: 10px;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Responsive design */
@media (max-width: 768px) {
  header h1 {
    font-size: 2rem;
  }

  header p {
    font-size: 1rem;
  }

  .container {
    padding: 0 15px;
  }
}
</style>
