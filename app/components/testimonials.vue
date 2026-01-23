<script setup lang="ts">
import DesignTestimonials from './ui/design-testimonials/DesignTestimonials.vue'
const testimonials = [
  {
    quote:
      'We are incredibly grateful to Filipino Homes for providing this extraordinary opportunity for us to learn additional expertise from Harvard Leadership Techniques graduates and to enjoy the journey of success with team MINDANAO.',
    author: 'Rica Grate',
    role: 'Rent Manager ',
    image: '/rica.jpg',
  },
  {
    quote:
      'When it comes to reliability, Rent.ph stands head and shoulders above the rest. Their team of rent managers goes above and beyond to ensure a smooth rental process. I cannot express my recommendation for them enough. They are truly exceptional!',
    author: 'Elaine Mae Ofiaza',
    role: 'Leasee',
    image: '/elaine-gemini.png',
  },
  {
    quote:
      'Rent.ph has been an invaluable asset in our rental management journey. This platform has simplified and streamlined our operations, allowing us to effectively manage our rental properties with ease.',
    author: 'Sammy & Jave',
    role: 'Rent Manager',
    image: '/javie-gemini.png',
  },
  {
    quote:
      "Highly Recommend, Best Brand, easy to be Rented when we entrusted our Properties one of my client favorite line. She's enjoying here low labor business.",
    author: 'Christine Joy Cabisada Dabatos',
    role: 'Rent Manager',
    image: '/christine-gemini.png',
  },
  {
    quote:
      'The most reliable and trusted brand to help you finding your suitable units away from your home. Kudos to all the rent managers for always doing their best to meet the necessary request for the clients.',
    author: 'Christine Saludar',
    role: 'Leasee',
    image: '/christine2.jpg',
  },
]
</script>
<template>
  <div class="px-12 mt-20">
    <div class="flex flex-col w-full">
      <h1 class="text-4xl font-bold">What Our Clients Say About Us</h1>
      <p class="uppercase pt-4 text-gray-300 dark:text-gray-500">Testimonials</p>
    </div>
    <div>
      <DesignTestimonials :testimonials="testimonials" />
    </div>
  </div>
</template>
