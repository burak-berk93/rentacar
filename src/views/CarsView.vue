<template>
    <div class="cardContainer">
        {{ userData }}
        <CarCards :item="item" class="carCardClass" v-for="i in 12" :key="i"/>
    </div>
  
</template>

<script>
import CarCards from '../components/CarCards.vue';
    export default{
    components:{
        CarCards
    },
    props:{
        userData:Array
    },
    data() {
        return {
            item:['Renoult Clio 1.2', 'About Car ...', 130]
        };
    },
    
}
</script>

<style>
    .cardContainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .carCardClass{
        margin: 10px;
    }
</style>