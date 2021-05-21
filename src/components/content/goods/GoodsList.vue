<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item" :goods-item="item"/>
    {{goods}}
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
  name:'GoodsList',
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
  .goods{
    display: flex;
    /* wrap:可根据宽度来决定让一行到底显示多少个 */
    flex-wrap: wrap;
    justify-content: space-around;
    /* justify-content: space-evenly; */
    padding: 2px;
  }
</style>