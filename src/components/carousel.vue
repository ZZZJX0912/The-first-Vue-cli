<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in itemList" :key="item.url">
        <img :src="item.url" class="carousel-img-item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    name:"MyCarousel", 
    data () {
        return {
            itemList: [
                {
                    url: require("../img/xyt (1).jpg")
                },
                {
                    url: require("../img/xyt (2).jpg")
                },
                                {
                    url: require("../img/xyt (3).jpg")
                },
                {
                    url: require("../img/xyt (4).jpg")
                },
                                {
                    url: require("../img/xyt (5).jpg")
                },
                {
                    url: require("../img/xyt (6).jpg")
                }
            ]
        }
    }
}
</script>

<style scoped>
    .block{
        margin: 20px auto ;
        width: 1100px;
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__container>button{
      width: 50px;
      height: 50px;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .carousel-img-item {
      width: 100%;
      height: 100%;
  }
</style>