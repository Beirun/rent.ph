<script setup lang="ts"></script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <navbar />
    </ClientOnly>
    <div class="container mx-auto px-10 pt-30 pb-20">
      <div class="flex flex-row p-5">
        <div class="w-1/2">
          <p class="text-7xl w-3/4 text-[#FE8E0A] font-semibold">Get in-</p>
          <p class="text-7xl w-3/4 mb-5 text-[#FE8E0A] font-semibold">touch with us</p>
          <p class="text-gray-500 mb-5 w-5/6">
            Found a property you love? Have a question about a lease? Get in touch with us today.
            Our agents are standing by to provide the details you need to make your next move with
            confidence.
          </p>
          <label for="" class="text-sm text-gray-500">Contact Number:</label>
          <p class="text-lg">+639178886298 (Globe)</p>
          <p class="text-lg">(032) 254-8900 (Landline)</p>

          <br />
          <label for="" class="text-sm text-gray-500 mt-5">Addess:</label>
          <p class="text-lg">Rent.ph Headquarters</p>
          <p class="text-lg">Aznar Road Cebu City, Philippines, 6000</p>

          <br />
          <label for="" class="text-sm text-gray-500 mt-5">Mail:</label>
          <p class="text-lg">official.rentph@gmail.com</p>

          <br />
          <label for="" class="text-sm text-gray-500 mt-5">Follow Us:</label>
          <div class="flex flex-row gap-2">
            <Icon name="lucide:facebook" class="size-8 text-blue-500" />
            <Icon name="lucide:instagram" class="size-8 text-pink-500" />
            <Icon name="ic:baseline-whatsapp" class="size-8 text-green-500" />
          </div>
        </div>
        <div
          class="flex flex-col shadow-lg border border-gray-500/10 rounded-3xl p-15 pb-5 w-1/2 gap-5 dark:bg-[#212121]"
        >
          <div class="flex justify-between">
            <div class="flex flex-col w-1/2">
              <label for="Name" class="text-[#FE8E0A] text-sm mb-2">Name</label>
              <Input
                name="keyword"
                class="w-19/20 py-2 pl-3 border border-dark-100 rounded-xl text-sm h-10.5"
                placeholder="Name"
              />
            </div>
            <div class="flex flex-col w-1/2">
              <label for="Email" class="text-[#FE8E0A] text-sm mb-2">Email</label>
              <Input
                name="keyword"
                class="py-2 pl-3 border border-dark-100 rounded-xl text-sm h-10.5"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex flex-col w-1/2">
              <label for="Contact" class="text-[#FE8E0A] text-sm mb-2">Contact</label>
              <Input
                name="keyword"
                class="w-19/20 py-2 pl-3 border border-dark-100 rounded-xl text-sm h-10.5"
                placeholder="Contact"
              />
            </div>
            <div class="flex flex-col w-1/2">
              <label for="Subject" class="text-[#FE8E0A] text-sm mb-2">Subject</label>
              <Input
                name="keyword"
                class="py-2 pl-3 border border-dark-100 rounded-xl text-sm h-10.5"
                placeholder="Subject"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <label for="" class="text-[#FE8E0A] text-sm mb-2">How can we help you?</label>
            <textarea
              name="keyword"
              id=""
              rows="12"
              autoresize
              class="w-full py-2 pl-3 border border-dark-100 rounded-xl text-sm"
              placeholder="Your Message"
            />
          </div>
          <button
            class="border rounded-3xl max-w-fit px-5 py-3 place-self-center bg-[#FE8E0A] text-white"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
