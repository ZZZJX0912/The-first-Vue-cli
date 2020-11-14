<template>
  <div class="data">
    <div class="slogan">
      <img src="../img/slogan.png" alt />
    </div>
    <div class="contain">
      <i class="el-icon-video-play" @click="playVideo"></i>
      <div class="data-con">
        <div class="data-con-info" v-for="data in datalists" :key="data.id">
          <div class="data-icon">
            <i class="stat-icon" :class="data.icon"></i>
          </div>
          <div class="data-info">
            <p class="info-num">{{data.infonum}}</p>
            <p class="info">{{data.info}}</p>
          </div>
        </div>
      </div>
      <div class="videoplay" :class="isShow ? '' : 'hidden'" ref="videoPlayContainer">
        <span id="close" class="close el-icon-close" @click="exitFull"></span>
        <videoPlayer
          src="../img/myvideo.mp4"
          ref="videoPlayer"
          :options="playerOptions"
          :playsinline="true"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
          @ended="onPlayerEnded($event)"
        ></videoPlayer>
      </div>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
let src = require("@/img/myvideo.mp4");
export default {
  components: {
    videoPlayer,
  },
  data() {
    return {
      isShow: false,
      playerOptions: {
        autoplay: false,
        muted: false,
        language: "zh-CN",
        aspectRatio: "16:9",
        fluid: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: src,
          },
        ],
        poster: require("@/img/jjjs-bg.jpg"),
      },
      datalists: [
        {
          id: "1",
          icon: "el-icon-school",
          infonum: "20000",
          info: "学校占地20000多亩",
        },
        {
          id: "2",
          icon: "el-icon-reading",
          infonum: "1260万",
          info: "学校拥有纸质图书馆藏400万册、电子图书860万册",
        },
        {
          id: "3",
          icon: "el-icon-s-custom",
          infonum: "3225",
          info: "专任教师3225人，其中，教授、副教授1918人，两院院士...",
        },
        {
          id: "4",
          icon: "el-icon-user",
          infonum: "5000",
          info: "在校学生5000余人（含外国学历留学生2200人）",
        },
        {
          id: "5",
          icon: "el-icon-odometer",
          infonum: "250",
          info: "250多个研究机构",
        },
        {
          id: "6",
          icon: "el-icon-medal",
          infonum: "20",
          info: "20个学科进入ESI全球前1%",
        },
        {
          id: "7",
          icon: "el-icon-location",
          infonum: "15",
          info: "5个一级学科国家重点学科、8个二级学科国家重点学科、3个...",
        },
        {
          id: "8",
          icon: "el-icon-collection",
          infonum: "30",
          info: "30个一级学科深圳市特色重点学科",
        },
      ],
    };
  },
  methods: {
    exitFull() {
      this.isShow = false;
      this.$refs.videoPlayer.player.pause(); // 暂停
      this.$refs.videoPlayer.player.src(src); // 重置进度条
    },
    playVideo() {
      this.isShow = true;
      this.$refs.videoPlayer.player.play(); // 播放
    },
    onPlayerPlay() {
      //console.log("play")
    },
    onPlayerPause() {
      // alert("pause");
    },
  },
};
</script>

<style>
.info-num {
  font-size: 24px;
  color: #fac521;
  margin: 0;
}
.info {
  margin: 0;
  margin-top: 0.3em;
  font-size: 14px;
}
.data-info {
  color: #ffffff;
  margin-left: 25px;
}
.data-con {
  margin-top: 60px;
}
.data-con-info {
  float: left;
  width: calc(25% - 40px);
  opacity: 0.9;
  display: flex;
  align-items: center;

  margin: 0 20px;
  height: 120px;
}
.data-icon {
  box-sizing: border-box;
  display: inline-block;
  border: 2px solid #ffffff;
  border-radius: 50%;
}
.stat-icon {
  font-size: 48px;
  color: #ffffff;
  padding: 12px;
}
.data-icon:hover {
  transition: background-color, opacity 0.4s ease-out;
  opacity: 0.9;
  background: #ffffff;
}
.data-icon:hover i {
  color: #700802;

  transition: color 0.4s ease-out;
}
.contain {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-icon-video-play {
  font-size: 60px;
  cursor: pointer;
  color: #ffffff;
  opacity: 0.9;
}
.slogan {
  text-align: center;
  margin: 3em;
  opacity: 0.9;
}
.slogan img {
  max-height: 46px;
}
.close.el-icon-close {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  z-index: 3;
  cursor: pointer;
  display: inline-block;
}
.data {
  overflow: hidden;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  background: url(../img/jjjs-bg.jpg) no-repeat top center;
  background-size: 100%;
  padding-bottom: 40px;
}
.hidden {
  display: none;
}
</style>

<style >
.videoplay {
  /* display: none; */
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9;
  left: 0;
  top: 0;
}
.videoplay span {
  color: #ffffff;
  width: 56px;
  height: 56px;
  line-height: 23px;
}
.video-player {
  height: 100%;
}
.video-player > .video-js.vjs-fluid {
  padding-top: 0 !important;
  height: 100%;
}
</style>