<script setup lang="ts"></script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <navbar />
    </ClientOnly>
    <div
      class="w-screen min-h-screen bg-[url(/blogBackGround.png)] dark:bg-[url(/blogBackGroundDark.png)] bg-no-repeat bg-cover bg-bottom fixed -z-10"
    ></div>
    <div class="container mx-auto px-4 md:px-10 pt-30 pb-20">
      <div class="flex flex-col md:flex-row p-4 md:p-5 gap-6 md:gap-8">
        <div class="w-full md:w-1/2">
          <p class="text-4xl md:text-7xl text-[#FE8E0A] font-semibold">Get in-</p>
          <p class="text-4xl md:text-7xl mb-5 text-[#FE8E0A] font-semibold">touch with us</p>
          <p class="text-gray-500 mb-5 text-sm md:text-base">
            Found a property you love? Have a question about a lease? Get in touch with us today.
            Our agents are standing by to provide the details you need to make your next move with
            confidence.
          </p>
          <label for="" class="text-sm text-gray-500">Contact Number:</label>
          <p class="text-base md:text-lg">+639178886298 (Globe)</p>
          <p class="text-base md:text-lg">(032) 254-8900 (Landline)</p>

          <br />
          <label for="" class="text-sm text-gray-500 mt-5">Address:</label>
          <p class="text-base md:text-lg">Rent.ph Headquarters</p>
          <p class="text-base md:text-lg">Aznar Road Cebu City, Philippines, 6000</p>

          <br />
          <label for="" class="text-sm text-gray-500 mt-5">Mail:</label>
          <p class="text-base md:text-lg">official.rentph@gmail.com</p>

          <br />
          <label for="" class="text-sm text-gray-500 mt-5">Follow Us:</label>
          <div class="flex flex-row gap-2">
            <Icon name="lucide:facebook" class="size-6 md:size-8 text-blue-500" />
            <Icon name="lucide:instagram" class="size-6 md:size-8 text-pink-500" />
            <Icon name="ic:baseline-whatsapp" class="size-6 md:size-8 text-green-500" />
          </div>
        </div>
        <div
          class="flex flex-col border border-gray rounded-3xl p-6 md:p-8 pb-4 md:pb-5 w-full md:w-1/2 gap-4 md:gap-5 dark:bg-[#212121]"
        >
          <div class="flex flex-col md:flex-row justify-between gap-4">
            <div class="flex flex-col w-full md:w-1/2">
              <label for="Name" class="text-[#FE8E0A] text-sm mb-2">Name</label>
              <Input
                name="keyword"
                class="w-full py-2 md:py-3 pl-3 border border-dark-100 rounded-xl text-sm h-10 md:h-12"
                placeholder="Name"
              />
            </div>
            <div class="flex flex-col w-full md:w-1/2">
              <label for="Email" class="text-[#FE8E0A] text-sm mb-2">Email</label>
              <Input
                name="keyword"
                class="w-full py-2 md:py-3 pl-3 border border-dark-100 rounded-xl text-sm h-10 md:h-12"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="flex flex-col md:flex-row justify-between gap-4">
            <div class="flex flex-col w-full md:w-1/2">
              <label for="Contact" class="text-[#FE8E0A] text-sm mb-2">Contact</label>
              <Input
                name="keyword"
                class="w-full py-2 md:py-3 pl-3 border border-dark-100 rounded-xl text-sm h-10 md:h-12"
                placeholder="Contact"
              />
            </div>
            <div class="flex flex-col w-full md:w-1/2">
              <label for="Subject" class="text-[#FE8E0A] text-sm mb-2">Subject</label>
              <Input
                name="keyword"
                class="w-full py-2 md:py-3 pl-3 border border-dark-100 rounded-xl text-sm h-10 md:h-12"
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
              class="w-full py-2 md:py-3 pl-3 border border-dark-100 rounded-xl text-sm"
              placeholder="Your Message"
            />
          </div>
          <button
            class="border rounded-3xl max-w-fit px-5 py-3 place-self-center bg-[#FE8E0A] text-white text-sm md:text-base"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
    <div class="pt-15">
      <ClientOnly>
        <Backlinks />
      </ClientOnly>
    </div>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
