<script setup lang="ts">
    const route = useRoute()
    const { id } = route.params
</script>
<template>
    <div id="wholePage" class="w-screen overflow-hidden flex flex-col">
            <ClientOnly>
                <navbar />
            </ClientOnly>
            <div class="bg-[url(/blogBackGround.png)] bg-contain bg-no-repeat w-screen h-screen bg-cover fixed -z-10"></div>
            <div id="scrollAraa" class="">
                <div id="HeadSection" class="justify-items-center">
                    <p class="text-5xl pt-50 font-bold w-1/2 text-center">How Much Rent Can You Really Afford in 2026? A Practical Budgeting Guide for Filipino Renters</p>    
                    <div id="DetailsSection" class="flex flex-row gap-5 mt-5">
                        <div class="flex flex-row gap-3 items-center">
                            <Icon name="lucide:calendar-clock" />
                            <p>01/26/2026</p>
                        </div>
                        <p>|</p>
                        <div class="flex flex-row gap-3 items-center">
                            <Icon name="lucide:eye" />
                            <p>376 views</p>
                        </div>
                    </div>
                </div>
                <div id="SocialSection mx-auto" class="justify-items-center mt-10">
                    <img src="/blog-news.jpg" alt="" class="w-150 h-150 shadow-sm round-sm">
                    <div class="justify-start items-center w-215 flex flex-row gap-3 mt-20">
                        <p>Share</p>
                        <Icon name="lucide:facebook" class="text-blue-500"/>
                        <Icon name="ic:baseline-whatsapp" class="text-green-500"/>
                        <Icon name="lucide:link"/>
                    </div>
                </div>
                <div class="max-w-4xl mx-auto px-4 py-8 text-gray-900 font-sans leading-relaxed">

                    <div class="mb-8">
                    <h1 class="text-3xl font-bold mb-6 text-black">
                        How Much Rent Can You Really Afford in 2026?
                    </h1>
                    <p class="mb-4">
                        Renting a home in the Philippines has never been a simple decision—but in 2026, it’s more important than ever to get your budget right. With rising living costs, changing work setups, and higher expectations for comfort and safety, many Filipinos are asking the same question:
                    </p>
                    <p class="font-bold text-xl italic mb-4">
                        “How much rent can I really afford?”
                    </p>
                    <p>
                        The good news? You don’t need to be a finance expert to figure it out. This guide breaks down rent affordability in a simple, realistic way.
                    </p>
                    </div>

                    <div class="mb-8">
                    <h2 class="text-2xl font-bold mb-4">Why Rent Budgeting Matters More in 2026</h2>
                    <p class="mb-4">
                        In previous years, renters often focused only on monthly rent. But in 2026, affordability goes beyond just paying the landlord. Careful planning matters because:
                    </p>
                    <ul class="list-disc ml-6 mb-4 space-y-2">
                        <li><strong>Utility costs</strong> continue to rise.</li>
                        <li><strong>Transportation expenses</strong> vary by location.</li>
                        <li><strong>Remote and hybrid work</strong> affect housing needs.</li>
                        <li><strong>Emergency savings</strong> are no longer optional.</li>
                    </ul>
                    <p class="font-semibold">
                        Note: Choosing a rent that’s too high can quickly lead to stress, debt, or having to move again sooner than planned.
                    </p>
                    </div>

                    <hr class="my-8 border-gray-300" />

                    <div class="mb-8">
                    <h2 class="text-2xl font-bold mb-4">The 30% Rule: A Good Starting Point</h2>
                    <p class="mb-4">
                        A common guideline is the 30% rule, which suggests spending no more than 30% of your monthly income on rent.
                    </p>
                    <div class="mb-4 pl-4 border-l-4 border-gray-300">
                        <p><strong>Monthly income:</strong> ₱30,000</p>
                        <p><strong>Ideal rent budget:</strong> ₱9,000</p>
                    </div>
                    <p>
                        This rule is helpful—but it doesn’t work perfectly for everyone. In the Philippines, factors like extended family support, side hustles, and shared housing often change the equation.
                    </p>
                    </div>

                    <div class="mb-8">
                    <h2 class="text-2xl font-bold mb-4">A More Realistic Filipino Rent Formula</h2>
                    <p class="mb-6">Instead of focusing on rent alone, consider your total monthly living expenses.</p>

                    <div class="space-y-6">
                        <div>
                        <h3 class="font-bold text-lg">Step 1: List Your Monthly Income</h3>
                        <p>Include salary (net take-home pay) and conservative estimates of freelance/side income.</p>
                        </div>

                        <div>
                        <h3 class="font-bold text-lg">Step 2: List Essential Expenses</h3>
                        <ul class="list-disc ml-6 mt-2">
                            <li>Food & groceries</li>
                            <li>Transportation</li>
                            <li>Utilities (electricity, water, internet)</li>
                            <li>Mobile load or plan</li>
                            <li>Insurance & healthcare</li>
                            <li>Debt payments (loans, credit cards)</li>
                        </ul>
                        </div>

                        <div>
                        <h3 class="font-bold text-lg">Step 3: Add Savings (Non-Negotiable)</h3>
                        <p>Aim for an emergency fund, short-term goals, and future housing plans.</p>
                        </div>

                        <div>
                        <h3 class="font-bold text-lg">Step 4: What’s Left Is Your Rent Budget</h3>
                        <p>If rent leaves you with nothing to save, it’s not affordable—no matter how nice the place looks.</p>
                        </div>
                    </div>
                    </div>

                    <div class="mb-8">
                    <h2 class="text-2xl font-bold mb-4">Hidden Costs Many Renters Forget</h2>
                    <p class="mb-4">Rent isn’t your only housing expense. Before committing, factor in:</p>
                    <ul class="list-disc ml-6 space-y-1">
                        <li>Security deposit & advance rent (usually 1–2 months each)</li>
                        <li>Association dues (for condos and gated communities)</li>
                        <li>Parking fees</li>
                        <li>Furnishing costs</li>
                        <li>Moving expenses</li>
                    </ul>
                    </div>

                    <div class="mb-10">
                    <h2 class="text-2xl font-bold mb-4">Rent Budget Examples for 2026</h2>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse border border-gray-300">
                        <thead class="bg-gray-100">
                            <tr>
                            <th class="border border-gray-300 px-4 py-2 font-bold">Persona</th>
                            <th class="border border-gray-300 px-4 py-2 font-bold">Income Range</th>
                            <th class="border border-gray-300 px-4 py-2 font-bold">Ideal Rent</th>
                            <th class="border border-gray-300 px-4 py-2 font-bold">Best Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="border border-gray-300 px-4 py-2 font-semibold">Single Professional</td>
                            <td class="border border-gray-300 px-4 py-2">₱25,000–₱35,000</td>
                            <td class="border border-gray-300 px-4 py-2">₱7,000–₱10,000</td>
                            <td class="border border-gray-300 px-4 py-2">Studio, bedspace, shared</td>
                            </tr>
                            <tr>
                            <td class="border border-gray-300 px-4 py-2 font-semibold">Couple / Young Family</td>
                            <td class="border border-gray-300 px-4 py-2">₱45,000–₱70,000</td>
                            <td class="border border-gray-300 px-4 py-2">₱12,000–₱18,000</td>
                            <td class="border border-gray-300 px-4 py-2">1–2 BR apartment, townhouse</td>
                            </tr>
                            <tr>
                            <td class="border border-gray-300 px-4 py-2 font-semibold">Remote Worker</td>
                            <td class="border border-gray-300 px-4 py-2">Variable</td>
                            <td class="border border-gray-300 px-4 py-2">Flexible</td>
                            <td class="border border-gray-300 px-4 py-2">Prioritize strong internet</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>

                    <div class="mb-8">
                    <h2 class="text-2xl font-bold mb-4">Signs You’re Renting Beyond Your Means</h2>
                    <ul class="list-none space-y-2">
                        <li>🚩 You struggle to pay rent before every payday</li>
                        <li>🚩 You rely on loans or credit for basic expenses</li>
                        <li>🚩 You have no savings at the end of the month</li>
                        <li>🚩 You delay bills to cover rent</li>
                    </ul>
                    </div>

                    <div class="mt-12 pt-8 border-t border-gray-300">
                    <h2 class="text-2xl font-bold mb-4">How RentPH Makes Rent Budgeting Easier</h2>
                    <p class="mb-6">
                        RentPH isn’t just a listing site—it’s a renter’s guide. With RentPH, you can filter homes by budget, see transparent pricing, and access renter-friendly guides.
                    </p>
                    <p class="italic font-medium mb-6">
                        In 2026, smart renters don’t ask, “What’s the nicest place I can get?” They ask, “What home supports the life I want to build?”
                    </p>
                    <p class="font-bold">
                        <RouterLink to="/" class="text-blue-600 underline hover:text-blue-800">
                            Click here to find a place that fits your budget on RentPH.
                        </RouterLink>
                    </p>
                </div>

                <div id="RelatedBlogsScetion">
                </div>

                </div>

            </div>
    </div>
</template>

