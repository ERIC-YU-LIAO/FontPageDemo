<template>
<div>
        <alert></alert>
        <navbar></navbar>
        <swiper></swiper>
    <div class="container-fluid">
        <div class="row">
              <siderbar class="col-2"></siderbar>
             <main class="col-md-10 ml-sm-auto col-lg-10 px-1">
                <router-view name="cardorder"></router-view>
            </main>
            </div>
        </div>
  <footer2></footer2>
</div>

</template>


<script>
import navbar from './navbar'
import footer2 from './footer'
import siderbar from './siderbar'
import alert from './alert'
import swiper from './page/swiper'
export default {
    components:{
        navbar,
        siderbar,
        footer2,
        alert,
        swiper,
    }
    
}
</script>

