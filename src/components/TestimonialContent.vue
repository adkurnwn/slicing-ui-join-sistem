<script setup lang="ts">
</script>

<template>
    <div class="bg-x-lightyellow p-8 flex items-center justify-between rounded-lg w-11/12 mx-auto h-[464px] mb-24">
        <div class="px-12 flex">
        <!-- Left section: Title and description -->
        <div class="space-y-4 max-w-1/2">
            <h3 class="text-sm font-semibold tracking-widest text-gray-500">TESTIMONIALS</h3>
            <h2 class="text-3xl font-bold text-gray-800">
                What people say <br /> about our blog
            </h2>
            <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
        </div>

        <!-- Right section: Testimonial content -->
        <div class="border-l pl-16 max-w-1/2 space-y-24">
            <p class="text-lg font-medium text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
            <div class="flex justify-between">
            <div class="flex items-center space-x-4">
                <img src="@/assets/images/misc/jonathan.png" alt="Profile picture of Jonathan Vallem"
                    class="w-12 h-12 rounded-full object-cover" />
                <div>
                    <p class="font-semibold text-gray-800">Jonathan Vallem</p>
                    <p class="text-gray-500 text-sm">New York, USA</p>
                </div>
            </div>
            <!-- Navigation buttons -->
            <div class="flex space-x-3 pt-6 pr-12">
                <button
                    class="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-x-verydarkgrey hover:bg-x-verydarkgrey hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M12.293 4.293a1 1 0 010 1.414L8.414 10l3.879 3.879a1 1 0 01-1.414 1.414l-4.586-4.586a1 1 0 010-1.414l4.586-4.586a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <button
                    class="w-10 h-10 flex items-center justify-center bg-white text-x-verydarkgrey rounded-full shadow-sm hover:bg-x-verydarkgrey hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.707 15.707a1 1 0 010-1.414L11.586 10 7.707 6.121a1 1 0 011.414-1.414l4.586 4.586a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>