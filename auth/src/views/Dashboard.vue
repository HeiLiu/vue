<template>
    <div>
        <h1>Dashboard</h1>
    </div>
</template>

<script>
export default {
    mounted (){
        setTimeout(()=>{
            this.$router.replace('/')
        },500)
        console.log(this.$router)
    }
}
</script>

<style>

</style>
