<template>
  <div class="header">
    <div class="icon-title">
      <div class="icon">
        <img src="../img/xbimg.png" alt />
      </div>
      <div class="title">
        <span>艾利斯顿皇家商学院</span>
      </div>
    </div>

    <div class="motto">
      <img src="../img/Background.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style scoped>
.motto{
    margin-top: 70px;
    margin-right: 100px;
    z-index: 3;
    opacity: 0.8;
}
.motto > img {
  width: 220px;
  height: 80px;
  
}
.icon > img {
  height: 150px;
  width: 150px;
}
.icon {
  position: absolute;
  text-align: left;
  margin: 0 5px 0 15px;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 150px;
  margin: 10px 30px 10px 30px;
  background-color: #ffffff;
  line-height: 150px;
}
.title > span {
  font-family: 微软雅黑;
  font-weight: bold;
  color: black;
  font-size: 35px;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;
  padding: 10px 20px;
  box-sizing: border-box;
}
.title {
  text-align: left;
  margin-left: 150px;
  clear: both;
}
.wrap {
  width: 1400px;
  margin: 0 auto;
  position: relative;
}
.header {
  position: relative;
}
.header::before,
.header::after {
  display: block;
  box-sizing: border-box;
  position: absolute;
  content: "";
  border: 3px solid transparent;
  width: 0;
  height: 0;
}

.header::after {
  border-bottom-color: #700802;
  border-left-color: #700802;
  bottom: 0;
  right: 0;
  transition: width 0.3s ease-out 0.3s, height 0.3s ease-out;
}

.header::before {
  border-top-color: #700802;
  border-right-color: #700802;
  top: 0;
  left: 0;
  transition: border-color 1s ease-out 0s, width 0.3s ease-out 1s,
    height 0.3s ease-out 0.6s;
}

.header:hover::before,
.header:hover::after {
  width: 100%;
  height: 100%;
}

.header:hover::before {
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

.header:hover::after {
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,
    height 0.3s ease-out 1s;
}
</style>

