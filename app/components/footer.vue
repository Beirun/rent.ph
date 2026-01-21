<script setup lang="ts">
const qlinks = [
    {
        link: '/',
        label: 'Home',
    },
    {
        link: '/aboutus',
        label: 'About Us    ',
    },
    {
        link: '/properties',
        label: 'Properties',
    },
    {
        link: '/blog',
        label: 'Blog',
    },
]
const suplinks = [
    {
        link: '/contactus',
        label: 'Contact Us',
    },
    {
        link: '/helpcenter',
        label: 'Help Center',
    },
    {
        link: '/privacyandpolicy',
        label: 'Privacy and Policy',
    },
    {
        link: '/termsofservice',
        label: 'Terms of Service',
    },
]

</script>



<template>
    <div class="w-screen h-full bg-[#111827] ">
        <div class="w-screen h-full flex justify-center gap-[8em] p-[4em]">
            <div class="flex flex-col gap-4 ">
                <div>
                    <NuxtImg src="/rentph-logo.png" class="h-12" />
                </div>
                <div class="flex flex-col gap-4">
                    <p class="text-[#9CA3AF]">Find your perfect rental home with ease. <br /> Trusted by thousands of
                        renters</p>
                    <div class="flex gap-3">
                        <Icon name="lucide:facebook" class="text-[#9CA3AF]  cursor-pointer" />
                        <Icon name="lucide:twitter" class="text-[#9CA3AF]  cursor-pointer" />
                        <Icon name="lucide:instagram" class="text-[#9CA3AF]  cursor-pointer" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="text-[#FFFF] pl-2">Quick Links</h3>
                <div class="flex flex-col gap-1">
                    <NuxtLink v-for="qlink in qlinks" :key="qlink.label" :to="qlink.link"
                        class="relative group pl-2 font-medium dark:hover:text-[#2b68df] text-[#9CA3AF] hover:text-[#1b4fb5] drop-shadow-md dark:drop-shadow-black/40">
                        <span
                            class="absolute left-0 top-0 h-full w-0.5 bg-[#205ed7] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100">
                        </span>

                        {{ qlink.label }}
                    </NuxtLink>

                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="text-[#FFFF] pl-2 ">Support</h3>
                <div class="flex flex-col gap-1">
                    <NuxtLink v-for="suplink in suplinks" :key="suplink.label" :to="suplink.label"
                        class="relative group pl-2 font-medium dark:hover:text-[#2b68df] text-[#9CA3AF] hover:text-[#1b4fb5] drop-shadow-md dark:drop-shadow-black/40">
                        <span
                            class="absolute left-0 top-0 h-full w-0.5 bg-[#205ed7] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100">
                        </span>
                        {{ suplink.label }}
                    </NuxtLink>

                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="text-[#FFFF]">Contact Info</h3>
                <div class="flex flex-col gap-1">
                    <NuxtLink class="text-[#9CA3AF]">
                        <Icon name="lucide:phone" class="text-[#9CA3AF]" />
                        (032) 254-8900 (Landline)
                    </NuxtLink>
                    <NuxtLink class="text-[#9CA3AF]">
                        <Icon name="lucide:mail" class="text-[#9CA3AF]" />
                        official.rentph@gmail.com
                    </NuxtLink>
                    <NuxtLink class="text-[#9CA3AF]">
                        <Icon name="lucide:map-pin" class="text-[#9CA3AF]" />
                        Aznar Road Cebu City, Philippines, 6000
                    </NuxtLink>
                </div>
            </div>
        </div>
        <hr class="border-0 h-[0.5px] bg-gray-800 mx-[4em]" />
    </div>
    <footer class="w-screen text-[#9CA3AF] py-18 p-12 h-full bg-[#111827] flex justify-center">
        © 2026 Rent.ph. All rights reserved.
    </footer>
</template>