        <!-- stp3 付款 -->
    <template>
            <div>
                <loading :active.sync="isLoading"></loading> 
            <div class="m-3 d-flex justify-content-center">
            <div class="m-3">
                <h2>
                    確認結帳頁面
                </h2> 
            </div>
        </div>
            <div class="container ">
                <ul class="row step">
                    <li class="col-3 text-center" :class="{'active': step === 1}">購物車明細</li>
                    <li class="col-3 text-center" :class="{'active': step === 2}">購物人資訊</li>
                    <li class="col-3 text-center" :class="{'active': step == 3}">付款/完成訂單</li>
                </ul>
            </div>
            <div class="container ">
                <div class="my-5 row justify-content-center" >
                    <div class="col-8 ">
                        <div class="border-bottom">
                            <h2 style="font-weight:bold;">購物車明細</h2>
                        </div>
                    <br>
                <table class="table">
                            <thead class="table-secondary">
                                <th >品名</th>
                                <th>數量</th>
                                <th>單價</th>
                            </thead>
                        <tbody>
                            <tr v-for="item in order.products" :key="item.id">
                                    <td class="align-middle">{{ item.product.title }}</td>
                                    <td class="align-middle">{{ item.qty }}/張</td>
                                    <td class="align-middle text-right"> ${{ item.final_total }}</td>
                            </tr>
                        </tbody>
                                <tfoot>
                                    <tr>
                                    <td colspan="2" class="text-right" style="font-weight:bold;"> 總計</td>
                                    <td class="text-right font-weight-bolder" >{{ order.total }}</td>
                                    </tr>
                                </tfoot>
                          </table>
                    </div>
                <div class="col-7">
                    <div class="border-bottom">
                          <h3 style="font-weight:bold;">匯款資訊</h3>
                    </div>
                    <br>
                      <table class="table text-center table-striped ">
                                <tbody>
                                    <tr >
                                        <th width="180">Email</th>
                                        <td>{{ order.user.email }}</td>
                                        </tr>
                                    <tr>
                                        <th>姓名</th>
                                        <td>{{ order.user.name }}</td>
                                    </tr>
                                    <tr>
                                        <th>收件人電話</th>
                                        <td>{{ order.user.tel }}</td>
                                    </tr>
                                    <tr>
                                        <th>收件人地址</th>
                                        <td>{{ order.user.address }}</td>
                                    </tr>
                                    <tr>
                                        <th>付款狀態</th>
                                    <td>
                                        <span v-if="!order.is_paid" class="text-danger font-weight-bolder ">尚未付款</span>
                                        <span v-else class="text-success font-weight-bolder">付款完成</span>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        <div class="text-right" v-if="order.is_paid === false" @click.prevent="payorder">
                             <button class="btn btn-lg btn-warning ">確認付款去</button>
                        </div>
                        <router-link :to="{name:'cardorder'}">
                            <div v-if="order.is_paid === true" class="m-3">
                             <button class="btn btn-block btn-outline-danger">回首頁</button>
                        </div>
                        </router-link>
              
                    </div>
                </div>
            </div>
        </div>
</template>



<script>
// import Loading from 'vue-loading-overlay';
export default {
    data(){
        return {
            isLoading: false,
            step: 3,
            orderId:'',
            order:{
              user:{},  
            },
        }
    },
    methods:{
      getorder(){
          const vm = this
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
        this.$http.get(api).then((response)=>{
            vm.step = 3
            console.log('orderdata', response.data)
            vm.order = response.data.order
        })
      },
      payorder(){
          const vm = this
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
            vm.isLoading = true
            this.$http.post(api).then((response)=>{
                this.getorder()
                alert('付款完成')
                vm.isLoading = false
            })
      }
      
    },
    created(){
        this.orderId = this.$route.params.orderId // 動態綁定orderid 
        this.getorder()
        console.log('orderid', this.orderId)
    }
}
</script>


