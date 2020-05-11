<template>
        <div class="modal-body">
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
                        <td> ${{item.total|currency}}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                            <tr>
                                <td colspan="3" class="text-right">
                                    <p class="font-weight-bolder">Total</p>
                                    
                                </td>
                            <td class="text-left">
                                <p class="text-danger font-weight-bold" style="text-decoration:underline;">{{cart.final_total|currency}}</p>
                                </td>
                            </tr>
                    </tfoot> 
                </table>
            </div>
        </div>
</template>


<script>
export default {
    name:"ordercart",
    props:["cartdata"],
    data(){
        return{
            cart:{},
        }
    }, 
    methods: {
    getaddcart(){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
            const vm = this
            this.$http.get(api).then((response) => {
                console.log(response.data)
                vm.cart = response.data.data
            })
        },
    removecart(id){
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
        const vm = this
        this.$http.delete(api).then((response)=>{
            console.log(response.data)
            vm.cart = response.data
            this.getaddcart()
        })
    }  
    },
    created(){
        this.getaddcart()
    }
}
</script>