<template>
    <div class="message-alert">
        <div class="alert alert-dismissible"
        :class="'alert-' + item.status"
        v-for="(item, i) in messages" :key="i">
        {{ item.message }}
        <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
    </div>
</template>



<script>
export default {
        name:'Navbar',
        data(){
            // 傳入物件
            return{
                messages:[
                //     {
                //     message:'aa',
                //     status:'danger',
                // }
                ],
            }
        },
        methods: {
            updateMessage(message,status){
                const timestamp =  Math.floor(new Date()/1000)
                this.messages.push({
                    message,
                    status,
                    timestamp,
                })
                this.removeMessageWithTimimg(timestamp)
            },
            removeMessage(num){
                this.messages.splice(num,1)
            },
            removeMessageWithTimimg(timestamp){
                const vm = this
                setTimeout(()=>{
                    vm.messages.forEach((item, i)=>{
                        if (item.timestamp === timestamp){
                            vm.messages.splice(i,1)
                        }
                    })
                }, 16000)
            }
        },

        created(){
            const vm =this
            // $on 事件中 'message:push' 名稱 傳入參數為message/ status class 狀態
            vm.$bus.$on('message:push',(message, status= 'warning')=>{
                vm.updateMessage(message,status)
            });
            // vm.$bus.$emit(名稱:'message:push')
        }

}
</script>

    <style scope>

    .message-alert {
    position: fixed;
    max-width: 80%;
    top: 36px;
    right: 15%;
    width: 220px;
    z-index: 2;
    }

    </style>