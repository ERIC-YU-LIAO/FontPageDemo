<template>
    <div>
        <!-- header -->

                <div id="header">
                            <div class="landing-text">
                                <h1 class="p-3">CTick.com</h1>
                                <h2 class="p-3">輕鬆流暢購買票務</h2>
                                <!-- <a class="btn btn-light btn-lg my-2">馬上前往</a> -->
                                <div class="signdown">
                                    <i class="fas fa-angle-double-down" @click.prevent="signdown"></i>
                                </div>
                            </div>
                           
                    </div>
    
        
                    <!-- main -->
            <div id="main">
                    <div class="container border-bottom">
                        <div class="row">
                            <div class="col-6 mt-4 concert">
                                <img src="https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">        
                            </div>
                            <div class="col-6 text-center concert">
                                    <h2>演唱會</h2>
                                <p>2020  年即將到來，明年又有哪些大咖要開演唱會呢？不管是你喜歡的偶像、還是你欣賞的歌手，聽CD看電視是不夠的，一定要到演唱會現場感受一下他的魅力以及實力，
                                    沒聽過現場演唱會別說你喜歡某位歌手，一起來看看2020的演唱會清單吧！</p>
                                     <router-link to="/main/cardorder">
                                        <button type="button" class="btn btn-danger btn-lg m-4">馬上購票</button>
                                    </router-link>
                                        <!-- <button type="button" class="btn btn-danger btn-lg m-4" @click.prevent='goshopping'>上前往</button> -->
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-6 text-center concert">
                                    <h2>講座活動</h2>
                                    <p>今年最活耀的活動，最熱門的活動票劵包含生活,旅遊/玩樂,體驗活動,文化/藝文,課程/講座等你來搶票!</p>
                                    <router-link to="/main/cardorder">
                                        <button type="button" class="btn btn-danger btn-lg m-4">馬上購票</button>
                                    </router-link>
                                     <!-- <button type="button" class="btn btn-danger btn-lg m-4" @click.prevent='goshopping'>馬上前往</button> -->
                            </div>
                            <div class="col-6  mt-4 concert">
                                    <img src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
                            </div>
                            
                        </div>
                    </div>
            </div>

<footer2></footer2>
    </div>
</template>

<script>
import footer2 from './footer'
export default {
    components:{
        footer2
    },
    methods:{
        // goshopping(){
        //     this.router.push('home')
    
        // },
        signdown(){
            window.scrollTo(0,700);
        }
    },
}
</script>
<style scoped> 

*{
    /* border: 1px solid red; */
}

a{
    color: seashell;
      /* border: 1px solid red; */
}


#header{
    background-image:url("https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    position: relative;
    height: 650px;
    width: 100%;
}
/*  */
.signdown{
     cursor: pointer;
    animation-name: signdown;
    color: rgb(255, 230, 0);
    position: relative;
    font-size: 4rem;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
    @keyframes signdown{
        0%   { top:-5px;}
        50%  { top:25px;}
        100% { top:0px;}
    }

#main{
    background-color: #efece8;
}

/* 標題 */
.landing-text{
    /* background-color:red; */
    display: block;
    position: relative;
    top: 20%;
    text-align: center;
     background: linear-gradient(140deg,#ffcdbc,#cd8d7b);
     color: seashell;
    opacity: 0.9;
    box-shadow:1px 5px 13px sienna;
    text-shadow: 3px 2px 2px rgb(170, 170, 170);
}
.landing-text>h1{

    font-size: 6rem;
    font-weight: 700;
}


.container{
    padding: 50px;
    /* background-color: white; */
    /* margin-top: 10px; */
}

.concert{
    animation-name: concert;
    position: relative;
    animation-duration: 3.5s;
}
@keyframes concert{
0%   { left:0px;}
50%  { left:1200px;}
100% { left:10px;}
}

.concert > h2{
    font-size: 2rem;
    position: relative;
    font-weight: 800;
    top: 60px;
    text-align: center;
     /* margin-top: 110px; */
}

p{
    font-weight: 700;
    margin-top: 90px;
    /* vertical-align: middle; */
    text-align: center;
}

.concert > img{
    opacity: 0.9;
    height: 100%;
    width: 100%;
    /* border-radius: 100%; */
    
}

</style>