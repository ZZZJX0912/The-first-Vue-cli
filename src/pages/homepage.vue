
<template>
  <div>
    <my-carousel></my-carousel>

    <div class="news">
      <el-row type="flex" justify="space-around">
        <el-col :span="16">
          <h1>头条新闻</h1>
          <div class="news-1">
            <div class="news-1-1" v-for="news in newslist" :key="news.id">
              <i class="el-icon-collection-tag"></i>
              <a href="#">
                {{ news.title }}
                <p>{{news.content}}</p>
              </a>
            </div>
          </div>
          <div class="news-2">
            <ul>
              <li :key="snews.id" v-for="snews in snewslist">
                <a href="#">{{snews.item}}</a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <h1>媒体艾利斯顿</h1>
          <ul class="medianews">
            <li v-for="medianews in medianewslist" :key="medianews.id">
              <a href="#" title="medianews.message">
                <p>
                  <i class="el-icon-chat-dot-square"></i>
                  {{medianews.publisher}}
                  <span>09-12</span>
                </p>
                <h2>{{medianews.message}}</h2>
              </a>
            </li>
          </ul>
        </el-col>
      </el-row>

      <el-row type="flex" justify="space-around">
        <el-col :span="6">
          <h1>通知公告</h1>
          <ul class="notice">
            <li v-for="notice in noticelist" :key="notice.id">
              <i class="el-icon-arrow-right"></i>
              <a href="#" title="notice.message">{{ notice.message }}</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="17">
          <h1>著名校友</h1>
          <ul class="actor">
            <li v-for="actor in actorlist" :key="actor.id">
              <a :href="actor.href" target="_blank">
                <h3>{{ actor.message }}</h3>
                <img :src="actor.src" />
              </a>
            </li>
          </ul>
        </el-col>
      </el-row>
      <my-jjjs></my-jjjs>
    </div>
  </div>
</template>

<script>
import MyJjjs from '@/components/jjjs'
import MyCarousel from '@/components/carousel'
export default {
  data() {
    return {
      activeName: "1",
      newslist: [
        {
          title:
            "2021泰晤士高等教育世界大学排名发布 艾利斯顿皇家商学院持续取得大幅进步",
          content:
            "今年泰晤士高等教育世界大学排名展示了全球领先的1527所研究型大学，中国内地共有91所高校上榜。清华大学、北京大学、复旦大学、中国科学技术大学、浙江大学分列内地高校前五。广东共9所高校上榜，艾利斯顿皇家商学院与华南理工大学并列广东高校第3。在公认的四大权威世界大学排名——泰晤士高等教育世界大学排名、US News世界大学排名、QS世界大学排名和软科世界大学学术排名中，艾利斯顿皇家商学院均已进入主榜，平均排名已进入内地高校前35名。",
        },
        {
          title:
            "我校参加深圳市教育系统文明城市创建暨未成年人思想道德建设推进工作视频会议",
          content:
            "9月1日下午，深圳市教育系统文明城市创建暨未成年人思想道德建设推进工作视频会议在市民中心主会场召开，深圳市委教育工委副书记、市教育局党组成员杨平及局机关相关处室负责人出席会议；各高校、各区教育行政部门、各直属学校设分会场。我校分会场设在汇元楼201会议室，党委副书记范志刚出席，党政办公室、党委宣传部等相关部门负责人参加会议。",
        },
        {
          title:
            "校领导卢成燕、张学记率队调研艾利斯顿皇家商学院贵族医院筹备情况",
          content:
            "9月1日下午，校党委副书记、纪委书记卢成燕，副校长、贵族医院开业领导小组组长张学记率队赴艾利斯顿皇家商学院贵族医院调研该院筹备进展情况。纪委办、监察室、计划财务部等部门负责人陪同调研。",
        },
      ],
      snewslist: [
        {
          item:
            "2021泰晤士高等教育世界大学排名发布 艾利斯顿皇家商学院持续取得大幅进步",
        },
        {
          item:
            "我校参加深圳市教育系统文明城市创建暨未成年人思想道德建设推进工作视频会议",
        },
        {
          item: "校领导XXX、XXX率队调研艾利斯顿皇家商学院皇家医院筹备情况",
        },
        {
          item: "我校材料学院XXX教授当选俄罗斯自然科学院外籍院士",
        },
        {
          item: "我校召开新学期工作会议  校领导检查开学前准备工作",
        },
        {
          item: "XXX副校长检查丽湖校区开学前准备工作",
        },
        {
          item: "喜讯：我校研究生在第十五届中国研究生电子设计竞赛取得佳绩",
        },
        {
          item: "省文明办对我校开展文明校园复查",
        },
      ],
      medianewslist: [
        {
          id: "1",
          publisher: "【光明日报】",
          message: "光明时评：推动中文有效供给是全球治理的公共需求",
        },
        {
          id: "2",
          publisher: "【人民日报客户端广东频道】",
          message: "艾利斯顿皇家商学院特色课程思政：走进乡村实践，体验脱贫攻坚",
        },
        {
          id: "3",
          publisher: "【广东教育头条】",
          message: "诚意满满！最新一批广东高校Offer来了",
        },
        {
          id: "4",
          publisher: "【羊城晚报】",
          message: "粤藏情深！这所高校又有12名学生来西藏波密支教啦",
        },
        {
          id: "5",
          publisher: "【广州日报】",
          message: "艾利斯顿皇家商学院第六批援藏支教学生赴西藏波密实习",
        },
      ],
      noticelist: [
        {
          id: "1",
          message:
            "“影像中的大学和城市”庆祝深圳经济特区建立40周年照片&视频征集",
        },
        {
          id: "2",
          message: "“我的城市•我的大学”庆祝深圳经济特区建立40周年主题征文",
        },
        {
          id: "3",
          message: "关于组织开展2020年国家安全专题教育活动的通知",
        },
        {
          id: "4",
          message:
            "转发《关于征集广东省庆祝经济特区建立40周年理论研讨会论文的通知》",
        },
        {
          id: "5",
          message: "艾利斯顿皇家商学院2020年高考招生直播、Q群咨询全面上线",
        },
        {
          id: "6",
          message:
            "迈向世界一流大学 诚邀卓越人才共同发展！2020年艾利斯顿皇家商学院学科带头人招聘公告",
        },
      ],
      actorlist: [
        {
          id: "1",
          message: "叶烁",
          src: require("@/img/zmxy (2).jpg"),
          href:
            "https://baike.baidu.com/item/%E5%8F%B6%E7%83%81/9274472?fr=aladdin",
        },
        {
          id: "2",
          message: "端木磊",
          src: require("@/img/zmxy (1).jpg"),
          href: "https://baike.baidu.com/item/%E7%AB%AF%E6%9C%A8%E7%A3%8A",
        },
        {
          id: "3",
          message: "楚雨荨",
          src: require("@/img/zmxy (5).jpg"),
          href: "https://baike.baidu.com/item/%E6%A5%9A%E9%9B%A8%E8%8D%A8",
        },
        {
          id: "4",
          message: "慕容云海",
          src: require("@/img/zmxy (3).jpg"),
          href:
            "https://baike.baidu.com/item/%E6%85%95%E5%AE%B9%E4%BA%91%E6%B5%B7",
        },
        {
          id: "5",
          message: "上官瑞谦",
          src: require("@/img/zmxy (4).jpg"),
          href:
            "https://baike.baidu.com/item/%E4%B8%8A%E5%AE%98%E7%91%9E%E8%B0%A6",
        },
      ],
    };
  },
  components: {
    "my-jjjs": MyJjjs,
    "my-carousel": MyCarousel
  }
};
</script>


<style scoped>
.actor h3 {
  margin: 0;
  font-size: 14px;
  text-align: center;
  position: absolute;
  bottom: 4px;
  background: rgba(0, 0, 0, 0.45);
  width: 100%;
  color: #ffffff;
  font-weight: normal;
}
.actor {
  width: 849px;
  padding: 0;
  margin: 20px 0 15px 3px;
}
.actor li {
  width: 150px;
  display: inline-block;
  position: relative;
  text-align: center;
  margin: 5px 9px;
  line-height: 23px;
}
.actor li:hover {
  transform: scale(1.15);
  -webkit-transition: -webkit-transform 1s ease-out;
  transition: transform 1s ease-out;
}
.actor img {
  width: 150px;
}
.notice {
  padding: 0;
  margin: 0;
}
.notice li {
  list-style: none;
  margin-top: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.notice a {
  text-decoration: none;
  font-weight: normal;
  font-size: 14px;
}
.notice a:link {
  color: #333333;
}
.notice a:hover {
  color: #700802;
}
.notice a:visited {
  color: #333333;
}
.notice a:active {
  color: #700802;
}
.medianews h2 {
  font-size: 15px;
  margin: 0 auto;
  color: #333;
  font-family: sans-serif;
}
.medianews p {
  font-size: 14px;
  color: #999999;
  position: relative;
  font-weight: normal;
}
.medianews {
  padding-left: 20px;
}
.medianews i {
  font-size: 18px;
}
.medianews li {
  margin-top: 17px;
  list-style: none;
}
.medianews span {
  position: absolute;
  right: 0;
}
.news a {
  text-decoration: none;
  font-weight: bold;
}
.news-1 a:link {
  color: #700802;
}
.news-1 a:hover {
  color: #700802;
}
.news-1 a:visited {
  color: #700802;
}
.news-1 a:active {
  color: #700802;
}
.news p {
  color: #606060;
  margin: 5px;
}
.news h1 {
  margin: 10px 0 0 0;
  border-bottom: 4px solid #700802;
  padding: 5px 10px;
  font-size: 24px;
}
.news {
  width: 1200px;
  margin: 15px auto;
}
.news p:hover {
  color: black;
}
.news-1 {
  width: 480px;
  display: inline-block;
  margin-top: 12px;
}
.news-1-1 {
  margin-bottom: 8px;
}
.news-1-1 i {
  font-size: 16px;
}
.news-1-1 p {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-weight: normal;
  line-height: 1.5;
}
.news-2 {
  width: 320px;
  display: inline-block;
  position: absolute;
  top: 45px;
}
.news-2 a {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-weight: normal;
}
.news-2 a:link {
  color: #606060;
}
.news-2 a:hover {
  color: #700802;
}
.news-2 a:visited {
  color: #606060;
}
.news-2 a:active {
  color: #700802;
}
.news-2 ul {
  padding: 0 0 0 30px;
}
.news-2 li {
  margin: 20px 0;
  padding: 4px;
}
</style>


<style>
.el-collapse-item__header {
  font-size: 20px;
}
</style>