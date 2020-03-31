
<template>
     <div class="pay" v-html = "payGateWay">{{payGateWay}}</div>
</template>

<script>
 export default {
    name: 'payGateWay',
    data(){
        return {
            payGateWay:''
        }
    } ,
    mounted () {
        let form = this.$route.query.htmlData
        this.payGateWay = form
        console.log(this.payGateWay,555)
        this.$nextTick(()=> {
            // document.getElementById('paymentSubmit').submit()
            document.forms[0].submit();
            // this.$router.push({
            //     name:"/index"
            // })
        })
    }
}
</script>
<style scoped>
    .pay{
        width: 500px;
        height: 600px;
    }
</style>
