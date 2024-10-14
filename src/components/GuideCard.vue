<template>
  <div class="card">
    <!-- Guide Image -->
    <img :src="imageSrc" alt="Guide Image" class="card-img" />
    
    <!-- Card Content -->
    <div class="card-content">
      <p class="category">{{ category }}</p>
      <h3 class="title">{{ title }}</h3>
      <p class="date">{{ date }}</p>
      <p class="description">{{ description }}</p>
      <a :href="link" class="read-more" target="_blank">Read More →</a> <!-- Link to external article -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    category: String,
    title: String,
    date: String,
    description: String,
    link: String // Receive link as prop
  }
};
</script>

<style scoped>
/* Card Container */
.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

/* Hover effect */
.card:hover {
  transform: translateY(-5px);
}

/* Image Styling */
.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Card Content */
.card-content {
  padding: 20px;
}

.category {
  font-size: 0.9rem;
  color: #777;
}

.title {
  font-size: 1.4rem;
  font-weight: bold;
  margin: 10px 0;
}

.date {
  font-size: 0.9rem;
  color: #bbb;
}

.description {
  font-size: 1rem;
  color: #555;
  margin: 10px 0;
}

.read-more {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
