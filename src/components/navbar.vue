    <template>
        <div>
        <header class="blog-header py-1">
                <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 text-center">
                    <router-link  class="routerLink" :to="{ name:'home'}">
                    <h2 class="blog-header-logo main m-3"> CTicket
                        <i class="fas fa-ticket-alt"></i>
                    </h2>
                    </router-link>
                </div>
                <div class="col-4 d-flex justify-content-center align-items-center leftlogo">
                    <button class="btn  btn-outline-light m-3" @click.prevent="singout()"> 
                        <i class="fas fa-user" >
                    </i>
                    </button>
                    <!-- v-if="cart.carts" 判斷是 -->
                    
                    <button class="btn btn-cart btn-outline-light" type="button" @click="showCart" >
                        <i class="fas fa-shopping-cart fa-1x mt-1"></i>
                           <!-- cart.length 會將推emit  長度length -->
                        <span class="badge badge-pill badge-danger">{{cart.carts.length}}</span>
                    </button>
                </div>
                </div>

    </header>
<!-- dropdown -->

    <div class="dropdown">
        <div class="dropdown-menu" id="cart">
            <div class="p-4">
            <h3 class="text-center">
                    <span v-if="cart.final_total!=0">已選擇商品</span>
                    <span v-else>目前尚未購買</span>
            </h3>
            <table class="table table-sm">
                <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                    <td class="align-middle text-center">
                    <button class="btn btn-outline-danger" @click="removecart(item.id)">
                        <i class="far fa-trash-alt"></i>
                    </button>
                    </td>
                    <td class="align-middle">{{item.product.title }}</td>
                    <td class="align-middle">{{item.qty}}/張</td>
                    <td class="align-middle text-right">{{ item.total|currency}}元</td>
                </tr>
                <tr class="text-right">
                    <td colspan="4" v-if="cart.final_total!=0">總共: {{cart.final_total|currency}} 元</td>
                </tr>
                </tbody>
            </table>
            <button
                class="btn btn-block btn-primary btn-sm text-white"
                v-if="cart.final_total!=0"
                @click.prevent="gocheck"
            >確認結帳</button>
            </div>
        </div>
        </div>


            <!-- Modal -->
        <!-- <div class="modal fade bd-example-modal-xl" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">我的購物車</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body ">
                    <div class="mt-5 row justify-content-center table table-striped">
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
                                    <button type="button" class="btn btn-outline-danger btn-sm" @click.prevent="removecart(item.id)">
                                        <i class="far fa-trash-alt"></i>
                                    </button>
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
                    </div>
            </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <router-link :to="{ name:'checkout'}">
                        text
                    </router-link>
                    </div>
                     <button type="button" class="btn btn-danger" @click.prevent="gocheck()">結帳去</button>
                </div>
              </div>
        </div> -->
        <!-- <orderlist v-on:refreshCart="addcart()"></orderlist> -->
        <router-view name="orderlist"></router-view>
        <router-view name="checkout"></router-view>
    </div>
</template>



<script>
import $ from 'jquery'
import orderlist from './page/orderlist'
export default {
    components:{
        orderlist
    },
    data(){
        return {
            status:{
                    loading: '',
                },
                cart:{},
            }
        },

    methods:{
        addcart(id,qty=1){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
            const vm = this;
            vm.status.loading = id;
            const cart = {
                product_id:id,
                qty,
            }
            this.$http.post(api,{data:cart}).then((response)=>{
                // console.log(response.data);
                vm.status.loading = ''; 
                vm.getaddcart();
                $('#orderModal').modal('show')
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
        removecart(id){
            const api =`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
            const vm = this
            this.$http.delete(api).then((response) => {
                this.$bus.$emit("refreshCart"); // emit 方式navbar將商品加入購物車中
                console.log(response.data)
                vm.getaddcart();
            })
        },
        singout(){
            const api = `${process.env.VUE_APP_APIPATH}/logout`
            const vm = this
            this.$http.post(api).then((response)=>{
                console.log(response.data)
                if(response.data.success){
                    vm.$router.push('/signin')
                }
            })
        },
        showCart() {
            $("#cart").toggleClass("show");
        },
        gocheck(){
             this.$router.push({name: 'orderlist'})
        },
    },
    created(){
        this.getaddcart()
        const vm = this
        vm.$bus.$on("refreshCart", () => {
            // console.log('refreshCart')
            vm.getaddcart(); 
    });
    }
}
</script>

<style scoped>
    header{
        background: linear-gradient(100deg,#f57b51,#cd8d7b);
    }
  .routerLink:hover{
      text-decoration: none;
  }
    .main{
        color: azure;
        border-bottom: none;
    }
    .main:hover{
        cursor: pointer;
        transform: rotateX(20deg);
        transition-duration: 1.9s;
        /* border-bottom: none; */
         /* border-style: dashed; */
    }
    .dropdown-menu {
  width: 350px;
}
    .dropdown {
      position: absolute;
      width: 300px;
      top: 95px;
      right: 180px;
        }

</style>
