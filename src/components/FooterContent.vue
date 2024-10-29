<script setup lang="ts">
import SocialWrapper from './SocialWrapper.vue';

</script>

<template>
  <footer class="bg-x-black text-x-lightgrey py-10 px-12">
   
    <div class="container mx-auto flex justify-between items-center mb-10">
      
      <img src="@/assets/images/logo/logo-join-sistem.png" alt="Join Sistem Logo">
      
      <nav class="space-x-6">
        <a href="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</a>
        <a href="blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</a>
        <a href="about" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About us</a>
        <a href="contact" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact us</a>
        <a href="privacy" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Privacy Policy</a>
      </nav>
    </div>

    
    <div class="bg-x-verydarkgrey py-10 mb-12">
      <div class="container mx-auto px-10 text-center flex justify-between">
        <div class="w-1/2">
          <h2 class="text-3xl font-semibold mb-6 text-left">Subscribe to our newsletter to get latest updates and news
          </h2>
        </div>
        <div class="flex items-center space-x-4">
          <div>
            <input type="email" placeholder="Enter Your Email"
              class="bg-x-verydarkgrey text-x-lightgrey border-x-darkgrey border-[1px] px-4 py-2 w-full focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <button
              class="bg-x-blue text-white hover:bg-x-yellow transition duration-150 ease-in-out px-6 py-2 ">Subscribe</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container flex justify-between items-center">
      <div>
        <div class="mb-4">Finstreet 118 2561 Fintown</div>
        <div class="mb-4">
          <a href="mailto:Hello@finsweet.com" class="hover:text-x-yellow">Hello@finsweet.com</a> | 020 7993 2905
        </div>
      </div>
      <SocialWrapper/>
    </div>
  </footer>
</template>
