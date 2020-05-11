<template>
    <div>
              <!-- isLoading 元件讀取效果 -->
        <loading :active.sync="isLoading"></loading> 
        <div class="nav-scrolle search col-11 m-3">
                <nav class="nav navbar-expand-lg d-flex justify-content-around nav-bar">
                <a class="p-3 search" href="" style="text-decoration:none"
                @click.prevent="change('全部')" :class="{'searchbt' : search =='全部'}">
                <i class="fas fa-align-center"></i>
                全部</a>
                <a class="p-3 search" href="#" style="text-decoration:none"
                @click.prevent="change('親子')" :class="{'searchbt':search =='親子'}" >
                <i class="fas fa-baby"></i>
                親子</a>
                <a class="p-3 search" href="#" style="text-decoration:none"
                @click.prevent="change('演唱會')" :class="{'searchbt':search =='演唱會'}" >
                <i class="fas fa-microphone"></i>
                演唱會</a>
                <a class="p-3 search" href="#" style="text-decoration:none"
                @click.prevent="change('講座')" :class="{'searchbt':search =='講座'}" >
                <i class="fas fa-landmark"></i>
                講座</a>
                </nav>
                <br>
                
            </div>  

  <!-- <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
     </div> -->
        <!--  -->
        <div class="card-deck">
            <div class="container p-2">
            <div class="row no-gutters rounded overflow-hidden flex-md-row position-relative  mb-3" >
            <div class="m-3 col-3 bg-light cardborder" style="" v-for="item in filterproducts" :key="item.id">
                    <div class=" mt-1 d-flex flex-column position-static">
                        <h6 class="text-center font-weight-bolder ">{{item.category}}</h6>
                    </div>
                    <br>
            <div class="cardImg" style="height: 50%; width :100%; background-size: cover; background-position: center" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                <div class="card-body">
                <h6 class="card-title">{{item.title}}</h6>
                <p class="card-text">{{item.content}}</p>
                </div>
                    <div class="card-footer">
                        <button type="button" class="btn btn-danger btn btn-block morebtn" 
                        @click.prevent="getticket(item.id)" data-toggle="modal" data-target="#cardModal"> 
                            <!-- 去判斷說 假設status.isLoading 空字串會等於抓到respone.data的id --> 
                        <i class="" v-if="status.loading == item.id"></i> 
                            查看更多
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        <!-- 顯示產品列表卡片 -->
        <div class="modal fade" id="cardModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <!-- 產品表單內容 -->
            <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title" id="exampleModalLabel">{{ticket.category}}</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        <div class="modal-body">
                                <img :src="ticket.imageUrl" class="img-fluid" alt="">
                                <blockquote class="blockquote mt-3">
                                    <h3>{{ticket.title}}</h3>
                                    <br>
                                    <p class="mb-0">{{ticket.description}}</p>
                                
                                </blockquote>
                                    <div class="d-flex justify-content-between align-items-baseline">
                                    <div class="h4" v-if="!ticket.price">{{ ticket.origin_price|currency }} 元</div>
                                    <del class="h6" v-if="ticket.price">原價 {{ ticket.origin_price|currency }} 元</del>
                                    <div class="h2" v-if="ticket.price" style="">特價 {{ ticket.price|currency }} 元</div>
                                </div>
                                <select name="" class="form-control mt-3" v-model="ticket.num">
                            <option :value="num" v-for="num in 10" :key="num">
                                選購 {{num}} 張
                            </option>
                            </select>
                        </div>
                                <div class="modal-footer">
                                    <div class="text-muted text-nowrap mr-3">
                                    小計 <strong>{{ticket.num * ticket.price|currency}}</strong>元
                                    </div>
                                    <button type="button" class="btn btn-danger"  @click.prevent="addcart(ticket.id,ticket.num)"> 
                                    <!-- 方法 addcart product的id 和數量 -->
                                    <i class="fa fa-spinner fa-spin fa-1x fa-fw" v-if="status.isloading"></i>
                                    加到購物車
                                    </button>
                                </div>
                        </div>
                    </div>
            </div>

            <!-- 購物車訂單 -->
        <!-- <div class="mt-5 row justify-content-center table table-striped">
            <table class="table col-10">
                <thead class="bg-warning">
                    <th></th>
                    <th>場次</th>
                    <th>數量</th>
                    <th>單價</th>
                </thead>
                <tbody>
                    
                    <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                        <button type="button" class="btn btn-outline-danger btn-sm"><i class="far fa-trash-alt"></i></button>
                    </td>
                    <td>{{item.product.title}}</td>
                    <td> {{item.qty}} / 張</td>
                    <td> ${{item.total}}</td>
                    </tr>
                </tbody>
                <tfoot>
                        <tr>
                            <td colspan="3" class="text-right">
                                <p class="font-weight-bolder">Total</p>
                                
                            </td>
                           <td class="text-left">
                               <p class="text-danger font-weight-bold" style="text-decoration:underline;">{{cart.final_total}}</p>
                            </td>
                        </tr>
                </tfoot> 
            </table>
        </div> -->
    </div>
    
</template>


<script>
import $ from 'jquery'
// import swiper from './swiper'
// import Loading from 'vue-loading-overlay';
export default {
    components:{
        // swiper,
        // Loading,
    },
    data(){
        return{
            products:[],
            ticket:{},
            // 空字串去裝API 抓到的id 
            status:{
                loading: '',
            },
            cart:{},
            search:'全部',
            // currentPage:0,
            isLoading:false,
            status:{
                isloading: false,  
            },
        }
    },
    methods:{
        getproducts(){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
            const vm = this
            vm.isLoading = true  // 還沒抓到API 先轉圈圈(讀取)
            this.$http.get(api).then((response) => {
                console.log('products',response.data)
                vm.products = response.data.products  
                 vm.isLoading = false 
            })
        },
        change(item){
            this.search = item
        },
        getticket(id,qty){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
            const vm  = this
            vm.status.loading = id
             // 還沒抓到API 先轉圈圈(讀取)
            this.$http.get(api).then((response) =>{
                console.log('get',response.data)
                // vm.isLoading = true 
                vm.ticket = response.data.product
                if(response.data.success){
                    $('#cardModal').modal('show');
                    vm.getproducts()
                }else{
                    console.log('fail')
                }
            }) 
        },
        addcart(id,qty=1){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
            const vm = this;
            vm.status.loading = id;
            vm.isloading = true;
            const cart = {
                product_id:id,
                qty,
            }
            vm.status.isloading = true
            this.$http.post(api,{data:cart}).then((response)=>{
                console.log(response.data);
                this.$bus.$emit("refreshCart"); // emit 方式navbar將商品加入購物車中
                if(response.data.success){     
                    //使用 eventbus 'message:push' bus名稱 
                // this.$bus.$emit('message:push','加入至購物車','success')
                $('#cardModal').modal('hide'); 
                vm.status.isloading = false;
                }
                vm.getaddcart();
             })
        },
        getaddcart(){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
            const vm = this
            this.$http.get(api).then((response) => {
                console.log(response.data)
                vm.cart = response.data.data
            })
           },
        },
    computed:{
        // 分類物件
    filterproducts(){
            let items = [];
            if(this.search !==  '全部')
            {
                items = this.products.filter(item => item.category == this.search)
                return items
            }else{
                items = this.products
                return items
            }
        }
    },
    created(){
        this.getproducts()
        this.getaddcart()
        const vm = this
        vm.$bus.$on("refreshCart", () => {
        vm.getaddcart();
    });
    },
}
</script>


<style scoped>
*{
    /* border: 1px solid red; */
            /* font-size: 1rem; */
}

/* .cardImg{
    transform:scale(0.9);transition: all 1s ease-out;
}
.cardImg:hover{
    transform:scale(1.0,1.0);
} */
.nav-bar{
        /* background-color: white; */
      /* background: linear-gradient(50deg,#,#ffe7e0); */
      /* opacity: 0.8; */
      /* background-color: rgb(255, 255, 255); */
      /* border-top: 2px solid darkgray; */
      padding: 2px;
       border-bottom: 4px solid darkgray;
      border-radius: 12px;
}
.cardborder{
    transform:scale(0.9);
    transition: all 0.6s ease-out;
    height:450px; 
    border:1px solid  #d3d4d8;
    box-shadow: 10px 5px 15px darkgray;
    
}
.cardborder:hover{
    font-size: 1.2rem;
    font-weight: 600;
    transform:scale(0.95);
    color: #364f6b;
    box-shadow: 2px 2px 8px #364f6b;
}

.news{
    background-color: red;
}

.navtitle{
    /* display: inline-block; */
    /* border-bottom: 5px solid #d45079; */
    font-weight: 900;
    /* padding: 10px; */
    /* background-color: #d45079; */
    /* color: azure; */
}
.navtitle > h2{
    color: brown;
    font-weight: 900;
    font-family: 'Fredoka One', cursive;
}
.headlines-item{
    display: inline-block;
    max-width: 75%;
    border-bottom: 2px dotted gray;
}
li{
    list-style: none;
    padding:5px;
}
span {
    line-height: 1.3;
    letter-spacing: 5px;
    font-weight: 600;
    font-size: 14px;
    /* margin: 7px; */
}
span:hover {
    color: #d45079;
}
.searchbt{
  /* background-color: #002b53; */
    color: #ff6f3c !important;
    border-bottom: 5px solid #f95959;
}
a.search{
    color: #8d6262;
    font-size: 2rem;
    font-weight: 900;
}

a.search:hover{
    background-color: #f95959;
    color:  #f6f6f6;
    width: 15%;
    text-align: center;
    transition: ease-in-out;
    transition-duration: 0.8s;
    border-radius: 20px;
}

.modal-content{
      background-color: #f7f6e7;
}
.blockquote {
  background-color: #e7e6e1;
    /* font-weight: 300; */
    font-family:"Microsoft Yahei";
    padding: 32px;
    line-height: 1.5em;
    text-align:center;
}

</style>
