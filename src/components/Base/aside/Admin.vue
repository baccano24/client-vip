<template>
    <div class="admin">
        <img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562055322105&di=dcff08a1c96c08e23f67fe065088bcce&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa12f24e688c1cda3ff4cc453f3486a88adaf08cc2cdb-tQvJqX_fw658" width="50p" height="50" />
        <span>秦先生</span>
        <span>您好，欢迎登陆！</span>
    
    
    </div>
</template>

<script>
export default {
    name:'Admin',
    computed:{
        user(){
            return this.$store,getters.user;
            
        }
    }
}
</script>


<style scoped>
.admin{
    background: #ff0;
    line-height:70px;
    box-sizing: border-box;
}
.admin img{
    margin-right: 20px;
}
</style>
