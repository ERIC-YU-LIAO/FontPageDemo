<template>
  <div>

        <swiper :options="swiperOption">
            <swiper-slide class="bg-cover" v-for="item in swiperData" :key="item.id"  :style="item.imgpath" 
            style="height:360px; background-size: cover; background-position:center;   opacity:0.9;">
              <p  class="text-center font-weight-bold text-white" style="font-size:11rem; text-shadow: 4px 12px black;">{{item.title}}</p>
            </swiper-slide>
               <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
       
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 export default {
   data(){
    return{
      swiperData:[
        {
            title:'Life',
            imgpath: {
            backgroundImage:
              "url(https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          },
      
          
        },
        {
             title:'Sport',
           imgpath: {
          
            backgroundImage:
              "url(https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          },
        },
        {
            title:'Community',
          imgpath: {  
            backgroundImage:
              "url(https://images.pexels.com/photos/3321789/pexels-photo-3321789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          },
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          },
        autoplay: true,
        speed: 2000,
        loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      },
   
    }
  }
    
  }
</script>
<style  scoped>

</style>