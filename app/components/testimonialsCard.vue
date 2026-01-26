<script setup lang="ts">
const testimonialsData = [
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

// Add an 'expanded' property to each testimonial
const testimonials = ref(testimonialsData.map((t) => ({ ...t, expanded: false })))

// const toggleExpand = (index: number) => {
//   const item = testimonials.value[index]
//   if (!item) return
//   item.expanded = !item.expanded
// }
</script>

<template>
  <div class="px-4 md:px-12 mt-10 w-[98%]">
    <div class="flex flex-col w-full mb-8 md:mb-12">
      <h1 class="text-4xl font-bold">What Our Clients Say About Us</h1>
      <p class="uppercase pt-4 text-gray-400 dark:text-gray-500">Testimonials</p>
    </div>

    <div class="flex flex-col md:flex-row w-full gap-4 md:gap-6 justify-center items-stretch">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="[
          'flex flex-col gap-4 bg-[#fafafa] dark:bg-zinc-900 p-4 md:p-6 w-full md:w-80 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 transform-transition duration-300 hover:scale-105',
        ]"
      >
        <div class="flex-1 overflow-hidden">
          <p :class="['text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed text-justify ']">
            <span class="font-black text-2xl md:text-4xl">"</span> {{ testimonial.quote }} "
          </p>
        </div>
        <div class="flex items-center gap-3 md:gap-4">
          <NuxtImg :src="testimonial.image" class="size-10 md:size-12 rounded-full object-cover" />
          <div class="flex flex-col">
            <span class="font-bold text-gray-900 dark:text-gray-400 text-sm md:text-base">{{ testimonial.author }}</span>
            <span class="text-xs text-gray-500">{{ testimonial.role }}</span>
          </div>
        </div>

        <!-- <div class="mt-auto flex flex-end">
          <button 
            @click="toggleExpand(index)"
            class="text-blue-600 dark:text-blue-400 align-right text-xs font-bold hover:underline cursor-pointer "
          >
            {{ testimonial.expanded ? 'Show Less' : 'View More' }}
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>
