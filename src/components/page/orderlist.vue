<template>
    <div>
      <loading :active.sync="isLoading"></loading> 
        <div class="m-3 d-flex justify-content-center">
          <div class="m-3">
              <h2 >
                確認結帳頁面
              </h2> 
          </div>
      </div>

      <!-- 進度條 -->
      <div class="container">
          <ul class="row step">
            <li class="col-3 text-center" :class="{'active': step === 1}">購物車明細</li>
            <li class="col-3 text-center" :class="{'active': step === 2}">購物人資訊</li>
            <li class="col-3 text-center" :class="{'active': step === 3}">付款/完成訂單</li>
          </ul>
          

          <!-- stp1 購物車list  -->
        <div class="m-5 rowd-flex justify-content-center"  v-if="step === 1">
          <ordercart></ordercart>
          <div class="mb-3-step-btn">
            <router-link to="/main/cardorder" class="btn btn-secondary float-left">
                <i class="fas fa-arrow-left">
                          繼續購買
                </i>
            </router-link>
              <a href="#" class="btn btn-danger float-right" @click.prevent="step = 2">
                    <i class="fas fa-arrow-right">
                            下一步填寫資料
                    </i>
                  </a>
          </div>
        </div>


          <!-- stp2 基本資料  -->
          <div class="my-2 row d-flex justify-content-center" v-if="step === 2" >
                <form class="col-5" @submit.prevent="creatorder">
                    <div class="form-group">
                      <label for="useremail">電子郵件<span style="color:red">*</span></label>
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        v-model="form.user.email"
                        placeholder="輸入姓名"
                        v-validate="'required|email'"
                        :class="{'is-invalid': errors.has('email')}"/>
                      <span class="text-danger" v-if="errors.has('email')">郵件格式錯誤</span>
               </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">姓名 <span style="color:red">*</span></label>
                      <input class="form-control" 
                              type="name" 
                              name="name" 
                              placeholder="請輸入姓名"  
                              id="exampleInputPassword1"
                              v-validate="'required|min:2|alpha'"
                              v-model="form.user.name"
                              :class="{'is-invalid': errors.has('name')}"
                              >
                      <span class="text-danger" v-if="errors.has('name')">請輸入名字</span>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">電話 <span style="color:red">*</span></label>
                        <input class="form-control" 
                              type="tel" 
                              name="tel" 
                              placeholder="請輸入姓名"  
                              id="exampleInputPassword1"
                              v-validate="'required|min:10|numeric'"
                              v-model="form.user.tel"
                              :class="{'is-invalid': errors.has('tel')}"
                              >
                      <span class="text-danger" v-if="errors.has('tel')">請輸入電話</span>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">地址<span style="color:red">*</span></label>
                          <input class="form-control" 
                              type="text" 
                              name="adress" 
                              placeholder="請輸入姓名"  
                              id="exampleInputPassword1"
                              v-validate="'required|alpha_num'"
                              v-model="form.user.address"
                              :class="{'is-invalid': errors.first('adress')}"
                              >
                      <span class="text-danger" v-if="errors.has('adress')">請輸入地址</span>
                    </div>
                    <div class="p-2">
                        <a href="#" class="btn btn-secondary float-left" @click.prevent="step =1">
                          <i class="fas fa-arrow-left"></i>
                          返回
                        </a>
                        <a href="" class=" float-right">
                    <button class="btn btn-danger">
                            確認結帳
                        </button>
                        </a>
    
                    </div>
                  </form>
              </div>
       </div>
    </div>
</template>


<script>
// import $ from 'jquery'
import ordercart from '../page/ordercart'

export default {
  components: {
    ordercart,
  },
  data(){
    return{
      step :1,
      cart:{},
      form:{
            user:{
                name: '',
                email: '',
                tel: '',
                address: '',
                },
                message: '',
      },
			order: {
				user: {},
      },
      isLoading:false,
      status:{
        isLoading: false,
      },
      orderId:'',
    }
  },
  methods:{
        getproducts(){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`
            const vm = this
            vm.isLoading = true  // 還沒抓到API 先轉圈圈(讀取)
            this.$http.get(api).then((response) => {
                console.log('products',response.data)
                vm.products = response.data.products  
                 vm.isLoading = false 
            })
        },
        getaddcart(){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
            const vm = this
            this.$http.get(api).then((response) => {
                console.log('Cart',response.data)
                vm.cart = response.data.data
                vm.isLoading = false 
            })
        },
        creatorder(){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
            const vm = this 
            const order = vm.form
            // vm.isLoading = true
            // validator這個方法去驗證
            this.$validator.validate().then((result)=>{
                if(result){
                // 如結果符合input required 的標準時就可post資料出去
                this.$http.post(api, {data:order}).then((response)=>{
                console.log('訂單成立',response)
                // this.$bus.$emit("message:push", "訂單已建立", "success");  
                if(response.data.success){
                    vm.orderId = response.data.orderId 
                    console.log('orderId',this.orderId)
                    vm.$router.push(`/checkout/${response.data.orderId}`)
                    // vm.step = 3
                    // vm.isLoading = false
                }
              })
                }else{
                    // 未符合(尚未填寫好) 會直接跳錯
                    console.log('Fail')
                    alert('表單尚未完成')
                    vm.isLoading = false
                }
            })
        },
  },
  created(){
    this.getproducts()
    this.getaddcart()
  }
}
</script>


<style lang="scss">
*{
  // border: 1px solid red;
  
}
.step{
  margin: 3px;
  overflow: hidden;
  display: flex;
  justify-content: center;

 li {		
		color: #364f6b;
    font-weight: 700;
		text-transform: uppercase;
		font-size: 1.2rem;	
		position: relative;		
    list-style-type:none;
    // 123 文字序
		@for $i from 1 through 3 {			
			&:nth-child(#{$i}) {
        // 框框內容
				&:before {
					content: "#{$i}";
					counter-increment: step;
					width: 90px;
					line-height: 40px;
					display: block;
					font-size: 18px;
					border: 3px solid #086972;
					color: #333;
					border-radius: 50px;
					margin: 0 auto 5px auto;
				}
			}
		}	
	}
  // 直線
  li + li {
    &:after{
      content:'';
      width: 65%;
      height: 5px;
      background-color: #086972;
			position: absolute;
			left: -35%;
			top: 20px;
			z-index: 1;
    }
  //觸發後變更顏色

  }
    li.active::before{
		background-color: #086972;
		color: white;
    }
}


</style>