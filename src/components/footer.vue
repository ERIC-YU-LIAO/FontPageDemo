<template>
<div>
    
    <router-view name="orderlist" class="m-3"></router-view>
     <router-view name="checkout" class="m-2"></router-view>
    <footer class="blog-footer p-5">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <ul >
                        <li class="footertitle">Ticket.com</li>
                        <li>&</li>
                        <li>與您一起享受分享快樂</li>
                    </ul>
                </div>
                <div class="col-4">
                    <ul>
                        <li class="footertitle">聯絡資訊</li>
                        <li>Phone： 0977-184-071</li>
                        <li>E-mail： acc90301@gmail.com</li>
                        <li>Product by : Eric Liao/廖御欽</li>
                    </ul>
                </div>
                <div class="col-4">
                    <ul>
                        <li class="footertitle">
                            訂閱，分享，按讚
                        </li>
                        <li>
                        <li>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-line"></i>
                        </li>
                    </ul>
                </div>
                     <div class="col-12 text-center DemoScript">本網頁為作品使用</div>
            </div>
        </div>
    </footer>
  
    </div>
</template>


<style scoped>

*{
      /* border: 1px solid red; */

}
li{
    list-style: none;
    color: #f6f6f6;
    font-weight: 600;
    margin: 6px;
}

.blog-footer{
    background-color: #323530;
}

.footertitle{
    color: #f6f6f6;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
    /* border-bottom: 12px solid red; */
}
.fab{
    /* border-radius: 120px; */
    margin: 10px;
    padding-top: 20px;
    font-size: 2rem;
    color: #f6f6f6;
}

.DemoScript{
    margin-top: 30px;
    color: white
}
</style>