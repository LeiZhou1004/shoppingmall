<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <scroll class="content" 
              ref="scroll" 
              :probe-type="3" 
              @scroll="contentScroll"
              :pull-up-load="true"
              @pullingUp='loadMore'>
         <home-swiper :banners="banners"/>
         <recommend-view :recommends="recommends"/>
         <feature-view/>
         <tab-control class="tab-control" :titles="['流行','新款','精选']"
                        @tabclick="tabclick"/> 
         <goods-list :goods="showGoods"/>
      </scroll>
      <!-- 组件是不能直接监听点击的要想监听点击只有加.native -->
     <back-top @click.native="backClick" v-show="isshowBackTop"></back-top>

       <ul>
      <li>序号：1</li>
      <li>序号：2</li>
      <li>序号：3</li>
      <li>序号：4</li>
      <li>序号：5</li>
      <li>序号：6</li>
      <li>序号：7</li>
      <li>序号：8</li>
      <li>序号：9</li>
      <li>序号：10</li>
      <li>序号：11</li>
      <li>序号：12</li>
      <li>序号：13</li>
      <li>序号：14</li>
      <li>序号：15</li>
      <li>序号：16</li>
      <li>序号：17</li>
      <li>序号：18</li>
      <li>序号：19</li>
      <li>序号：20</li>
      <li>序号：21</li>
      <li>序号：22</li>
      <li>序号：23</li>
      <li>序号：24</li>
      <li>序号：25</li>
      <li>序号：26</li>
      <li>序号：27</li>
      <li>序号：28</li>
      <li>序号：29</li>
      <li>序号：30</li>
      <li>序号：31</li>
      <li>序号：32</li>
      <li>序号：33</li>
      <li>序号：34</li>
      <li>序号：35</li>
      <li>序号：36</li>
      <li>序号：37</li>
      <li>序号：38</li>
      <li>序号：39</li>
      <li>序号：40</li>
      <li>序号：41</li>
      <li>序号：42</li>
      <li>序号：43</li>
      <li>序号：44</li>
      <li>序号：45</li>
      <li>序号：46</li>
      <li>序号：47</li>
      <li>序号：48</li>
      <li>序号：49</li>
      <li>序号：50</li>
      <li>序号：51</li>
      <li>序号：52</li>
      <li>序号：53</li>
      <li>序号：54</li>
      <li>序号：55</li>
      <li>序号：56</li>
      <li>序号：57</li>
      <li>序号：58</li>
      <li>序号：59</li>
      <li>序号：60</li>
      <li>序号：61</li>
      <li>序号：62</li>
      <li>序号：63</li>
      <li>序号：64</li>
      <li>序号：65</li>
      <li>序号：66</li>
      <li>序号：67</li>
      <li>序号：68</li>
      <li>序号：69</li>
      <li>序号：70</li>
      <li>序号：71</li>
      <li>序号：72</li>
      <li>序号：73</li>
      <li>序号：74</li>
      <li>序号：75</li>
      <li>序号：76</li>
      <li>序号：77</li>
      <li>序号：78</li>
      <li>序号：79</li>
      <li>序号：80</li>
      <li>序号：81</li>
      <li>序号：82</li>
      <li>序号：83</li>
      <li>序号：84</li>
      <li>序号：85</li>
      <li>序号：86</li>
      <li>序号：87</li>
      <li>序号：88</li>
      <li>序号：89</li>
      <li>序号：90</li>
      <li>序号：91</li>
      <li>序号：92</li>
      <li>序号：93</li>
      <li>序号：94</li>
      <li>序号：95</li>
      <li>序号：96</li>
      <li>序号：97</li>
      <li>序号：98</li>
      <li>序号：99</li>
      <li>序号：100</li>
      </ul>
    </div>
  
</template>
<script>  
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {
  getHomeMultidata,
  getHomeGoods
  } from 'network/home'
// import Swiper from 'components/common/swiper/Swiper'
// import Swiper from 'components/common/swiper/SwiperItem'



export default {
  name:"Home",
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView ,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return{
      // result:null
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isshowBackTop:false
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  // 当组件创建完毕就发生网络请求
    created(){
    // create里只写主要逻辑
    // 1.请求多个数据
    this.getHomeMultidata()
    // 2.请求商品数据
    getHomeGoods('pop',1)
    getHomeGoods('new',1)
    getHomeGoods('sell',1)
    
  },
  methods:{
    /* 
    事件监听相关的方法
    */
   tabclick(index){
     switch(index){
       case 0:
         this.currentType='pop'
         break
       case 1:
         this.currentType='new'
         break
       case 2:
         this.currentType='sell'
         break
     }
   },
   backClick(){
     this.$refs.scroll.scrollTo(0,0)
   },
   contenScroll(position){
    this.isshowBackTop= (-position.y)>100
   },
   loadMore(){
     this.getHomeGoods(this.currentType)

    //需要调用refresh方法来解决bug,要在图片加载完之后调用
    this.$refs.scroll.scroll.refresh()
   },
    /* 
    网络请求相关的方法
    */
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      console.log(res);
      // 垃圾回收机制 res对象被变量保存
      // this.result=res;
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        // 数组的解构
        this.goods[type].list.push(res.data.list)
        this.goods[type].page+=1

        // 必须调用finish方法才能进行下一次的下拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}  
</script>


<style scoped>
  #home{
    padding-top: 44px;
    /* vh:viewport height 100vh:百分之百视口 */
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 10;
  }
  .content{
    /* height: 300px; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }
  /* .content{
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>
