<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="footer-left">
        <div class="logo-item">
          <div class="logo">
            <img src="../img/footer-xbimg.png" alt />
          </div>
          <div class="foot-title">
            <span>艾利斯顿皇家商学院</span>
          </div>
        </div>
        <div class="footer-add">
          <ul>
            <li v-for="footinfo in footinfolists" :key="footinfo.id">
              <i :class="footinfo.icon"></i>
              {{footinfo.infotitle}}:{{footinfo.info}}
            </li>
          </ul>
        </div>
      </div>


      <ul class="footer-icons">
        <li v-for="icon in iconslist" :key="icon.id">
          <img :src="icon.iconadd" :alt="icon.iconalt" />
        </li>
      </ul>

    </div>

    <div class="copyright"><span>ZhongJX©版权所有</span></div>
  </div>
</template>

<style scoped>
.copyright{
  opacity: 0.4;
  border-top: 1px solid #ffffff;
  padding-top: 10px;
}
.copyright span{
  margin-left: 30px;
  color: #ffffff;
  width: 100%;
}
.footer-icons{
  flex-basis: 300px;
}
.footer-icons {
  display: flex;  
  align-items: center;
  padding: 0;
  justify-content: space-between;
}
.footer-icons li {
  list-style: none;
}
.footer-add {
    margin-left: 50px;
}
.footer-add ul {
  padding: 0;
}
.footer-add li {
  color: #ffffff;
  padding: 15px;
  list-style: none;
}
.footer-left{
  display: flex;
  align-items: center;
  opacity: 0.9;
}
.footer {
  padding: 20px 0;
  width: 100%;
  background: url(../img/footer-bg.jpg) no-repeat;
  background-size: 100%;
}
.footer-inner {
    display: flex;
    justify-content: space-between;
    margin-right: 200px;
    margin-top: 50px;
}
.foot-title {
  float: left;
  padding-top: 30px;
  padding-left: 10px;
}
.foot-title span {
  color: #ffffff;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 4px;
}
.logo{
  float: left;
  margin-left: 20px;
}
.logo img {
  height: 100px;
  width: 100px;
}
</style>

<script>
export default {
  data() {
    return {
      footinfolists: [
        {
          id: 1,
          icon: "el-icon-postcard",
          infotitle: "邮编",
          info: "518033",
        },
        {
          id: 2,
          icon: "el-icon-position",
          infotitle: "地址",
          info: "艾利斯顿市贵族大学城皇家路1号",
        },
        {
          id: 3,
          icon: "el-icon-message",
          infotitle: "邮箱",
          info: "13662206756@163.com",
        },
      ],
      iconslist: [
        {
          id: "1",
          iconalt: "WeChat",
          iconadd: require("@/img/Wechat.png"),
        },
        {
          id: "2",
          iconalt: "Sina",
          iconadd: require("@/img/sina.png"),
        },
        {
          id: "3",
          iconalt: "blue",
          iconadd: require("@/img/blue.png"),
        },
      ],
    };
  },
};
</script>