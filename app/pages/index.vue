<script setup lang="ts">
import LandingShowcase from '~/components/landingShowcase.vue'
import LandingPopularRegionSection from '~/components/landingPopularRegionSection.vue'
import PartnersAndSponsors from '~/components/partnersAndSponsors.vue'
import PropertiesAndListings from '~/components/propertiesAndListings.vue'
import Testimonials from '~/components/testimonials.vue'
import ReelsSection from '@/components/reels/ReelsSection.vue'


const featuredReels = [
  { 
    id: 1, 
    title: 'Modern Loft in Downtown', 
    views: '2.5k', 
    thumbnailUrl: '/images/reelThumbnail.jpg',
    videoUrl: '/videos/sampleReel.mp4' 
  },
  { 
    id: 2, 
    title: 'Luxury Villa Pool', 
    views: '5.1k', 
    thumbnailUrl: '/images/reelThumbnail1.jpg',
    videoUrl: '/videos/sampleReel1.mp4' 
  },
  { 
    id: 1, 
    title: 'Modern Loft in Downtown', 
    views: '2.5k', 
    thumbnailUrl: '/images/reelThumbnail.jpg',
    videoUrl: '/videos/sampleReel.mp4' 
  },
  { 
    id: 2, 
    title: 'Luxury Villa Pool', 
    views: '5.1k', 
    thumbnailUrl: '/images/reelThumbnail1.jpg',
    videoUrl: '/videos/sampleReel1.mp4' 
  },
  { 
    id: 1, 
    title: 'Modern Loft in Downtown', 
    views: '2.5k', 
    thumbnailUrl: '/images/reelThumbnail.jpg',
    videoUrl: '/videos/sampleReel.mp4' 
  },
  { 
    id: 2, 
    title: 'Luxury Villa Pool', 
    views: '5.1k', 
    thumbnailUrl: '/images/reelThumbnail1.jpg',
    videoUrl: '/videos/sampleReel1.mp4' 
  },
  { 
    id: 1, 
    title: 'Modern Loft in Downtown', 
    views: '2.5k', 
    thumbnailUrl: '/images/reelThumbnail.jpg',
    videoUrl: '/videos/sampleReel.mp4' 
  },
  { 
    id: 2, 
    title: 'Luxury Villa Pool', 
    views: '5.1k', 
    thumbnailUrl: '/images/reelThumbnail1.jpg',
    videoUrl: '/videos/sampleReel1.mp4' 
  },
]
</script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <Hero />
    <div>
      <ClientOnly>
        <div>
            <ReelsSection :reels="featuredReels" />
        </div>
        <div class="pt-15">
            <PropertiesAndListings />
        </div>
      </ClientOnly>
    </div>
    <div class="pt-15">
      <ClientOnly>
        <LandingPopularRegionSection />
      </ClientOnly>
    </div>
    <div class="pt-15">
      <LandingShowcase />
    </div>
    <div class="flex items-center justify-center pt-15">
      <ClientOnly>
        <TestimonialsCard />
      </ClientOnly>
    </div>
    <div class="pt-15">
      <ClientOnly>
        <Backlinks />
      </ClientOnly>
    </div>
    <div class="pt-15">
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </div>
  </div>
</template>
