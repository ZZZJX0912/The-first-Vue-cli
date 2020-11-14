<template>
  <div class="tab-outer">
    <div class="tab-inner">
      <div class="control">
        <el-row>
          <el-button @click="open" icon="el-icon-search" circle></el-button>
          <el-button @click="dialogFormVisible = true" type="primary" icon="el-icon-edit" circle></el-button>
        </el-row>

        <el-dialog ref="addForm" title="新增书籍" :visible.sync="dialogFormVisible">
          <el-form :model="form" status-icon :rules="rules" ref="addForm">
            <el-form-item prop="name" label="书名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="author" label="作者" :label-width="formLabelWidth">
              <el-input v-model="form.author" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="publish" label="出版社" :label-width="formLabelWidth">
              <el-input v-model="form.publish" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="number" label="存货量" :label-width="formLabelWidth">
              <el-input v-model="form.number" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="resetForm">取 消</el-button>
            <el-button type="primary" @click="add('addForm')">确 定</el-button>
          </div>
        </el-dialog>
      </div>

      <div class="table">
        <el-table :data="currentTableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="书本ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="书名">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="书本作者">
                  <span>{{ props.row.author }}</span>
                </el-form-item>
                <el-form-item label="存货量">
                  <span>{{ props.row.number }}</span>
                </el-form-item>
                <el-form-item label="出版社">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="书本封面">
                  <img :src="props.row.cover" />
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="书本ID" prop="id"></el-table-column>
          <el-table-column label="书名" prop="name"></el-table-column>
          <el-table-column label="出版社" prop="address"></el-table-column>
          <el-table-column class="control-item" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="Delete(scope.row)">删除</el-button>
              <el-button size="mini" type="primary" @click="booking(scope.row)">订阅</el-button>
              <el-button size="mini" type="success" @click="safe(scope.row) ">存货</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="tableData.length"
          :page-size="pageSize"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>


<script>
const names = [
  "茶馆 想北平 猫城记-老舍经典作品集-签名印章典藏版",
  "月亮与六便士",
  "墨菲定律",
  "历史与我的瞬间",
  "小小陌生人",
  "小狗钱钱让孩子和家长共同成长的金融读物",
  "韩寒－他的国(最新修订版)",
  "唐诗一千首新编注释本",
  "罗马皇帝尼禄",
  "我的奇妙书店",
  "围炉夜话-全注全译",
  "巴山鬼话",
];
export default {
  data() {
    var checkname = (rule, value, callback) => {
      const e = /^[\u4e00-\u9fa5]+$/;
      // console.log(value)
      // console.log(!e.test(value))
      if (!value) {
        return callback(new Error("书名不能为空!"));
      } else if (!e.test(value)) {
        callback(new Error("书名只能为汉字，请重新输入！"));
      } else {
        callback();
      }
    };

    var checkauthor = (rule, value, callback) => {
      const e = /^[\u4e00-\u9fa5]+$/;
      if (!value) {
        return callback(new Error("作者不能为空!"));
      } else if (!e.test(value)) {
        callback(new Error("作者名称只能为中文！，请重新输入！"));
      } else {
        callback();
      }
    };
    var checkpublish = (rule, value, callback) => {
      const e = /^[\u4e00-\u9fa5]+$/;
      if (!value) {
        return callback(new Error("出版社不能为空!"));
      } else if (!e.test(value)) {
        callback(new Error("输入出版社有误，请重新输入！"));
      } else {
        callback();
      }
    };

    var checknum = (rule, value, callback) => {
      const e = /^\+?[1-9][0-9]*$/;
      if (!value) {
        return callback(new Error("存货量不能为空!"));
      } else if (!e.test(value)) {
        callback(new Error("存货量输入有误，请重新输入！"));
      } else {
        callback();
      }
    };

    return {
      dialogFormVisible: false,
      //新增书籍
      form: {
        name: "",
        author: "",
        publish: "",
        number: "",
      },
      //表单验证
      rules: {
        name: [{ validator: checkname, trigger: "blur" }],
        author: [{ validator: checkauthor, trigger: "blur" }],
        publish: [{ validator: checkpublish, trigger: "blur" }],
        number: [{ validator: checknum, trigger: "blur" }],
      },
      formLabelWidth: "120px",

      pageSize: 8, //一个分页能展示的元素个数
      tableData: [
        {
          id: 1,
          name: names[0],
          author: "老舍",
          number: 500,
          address: "巴蜀书社",
          cover: require("@/img/图片/" + names[0] + ".jpg"),
        },
        {
          id: 2,
          name: "月亮与六便士",
          author: "[英]毛姆 著,胡曦 译",
          number: 50,
          address: "哈尔滨出版社",
          cover: require("@/img/图片/" + names[1] + ".jpg"),
        },
        {
          id: 3,
          name: "墨菲定律",
          author: "满江树 编著",
          number: 500,
          address: "研究出版社",
          cover: require("@/img/图片/" + names[2] + ".jpg"),
        },
        {
          id: 4,
          name: "历史与我的瞬间",
          author: "梁鸿 著",
          number: 1200,
          address: "上海文艺出版社",
          cover: require("@/img/图片/" + names[3] + ".jpg"),
        },
        {
          id: 5,
          name: "小小陌生人",
          author: "[英]萨拉・沃特斯 著,孔新人 译",
          number: 800,
          address: "万卷出版公司",
          cover: require("@/img/图片/" + names[4] + ".jpg"),
        },
        {
          id: 6,
          name: "小狗钱钱:让孩子和家长共同成长的金融读物",
          author: "(德)博多・舍费尔著",
          number: 950,
          address: "四川少年儿童出版社",
          cover: require("@/img/图片/" + names[5] + ".jpg"),
        },
        {
          id: 7,
          name: "韩寒－他的国(最新修订版)",
          author: "韩寒 著",
          number: 100,
          address: "万卷出版公司",
          cover: require("@/img/图片/" + names[6] + ".jpg"),
        },
        {
          id: 8,
          name: "唐诗一千首:新编注释本",
          author: "吕树坤,徐潜 选注",
          number: 1500,
          address: "吉林文史出版社",
          cover: require("@/img/图片/" + names[7] + ".jpg"),
        },
        {
          id: 9,
          name: "罗马皇帝尼禄",
          author: "[美]阿瑟・韦戈尔 著,王以铸 译",
          number: 750,
          address: "辽宁教育出版社",
          cover: require("@/img/图片/" + names[8] + ".jpg"),
        },
        {
          id: 10,
          name: "我的奇妙书店",
          author: "佩特拉.哈特利布",
          number: 520,
          address: "中国友谊出版公司",
          cover: require("@/img/图片/" + names[9] + ".jpg"),
        },
        {
          id: 11,
          name: "围炉夜话-全注全译",
          author: "王永彬",
          number: 200,
          address: "中国友谊出版公司",
          cover: require("@/img/图片/" + names[10] + ".jpg"),
        },
        {
          id: 12,
          name: "巴山鬼话",
          author: "魏明伦 著",
          number: 900,
          address: "上海文艺出版社",
          cover: require("@/img/图片/" + names[11] + ".jpg"),
        },
      ],

      //新增书籍
      newbookitem: {
        id: "",
        name: "",
        author: "",
        number: "",
        address: "",
      },

      currentTableData: [],




      currentRow: {

      }
    };
  },
  computed: {},
  created() {
    this.handleCurrentChange(1);
  },
  methods: {
    booking(row) {
      

      this.$prompt("请输入订阅数量", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^\+?[1-9][0-9]*$/,
        inputErrorMessage: "输入格式不正确",
      })
        .then(({ value }) => {
          this.$message(
            {
              type: "success",
              message: "你要订阅的数量是: " + value,
            });
          row.number -= +value
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },


    safe( row ) {
      this.$prompt("请输入存货数量", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^\+?[1-9][0-9]*$/,
        inputErrorMessage: "输入格式不正确",
      })
        .then(({ value }) => {
          this.$message(
            {
              type: "success",
              message: "你要存货的数量是: " + value,
            },
            (this.tableData.number += value)
          );
          row.number += +value
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    open() {
      this.$prompt("请输入要查询的书名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[\u4e00-\u9fa5]+$/,
        inputErrorMessage: "书名格式不正确",
      })
        .then(({ value }) => {
          this.Search(value);
        })
        .catch((e) => {
          console.log(e);
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },

    handleCurrentChange(val) {
      const start = (val - 1) * this.pageSize;
      this.currentTableData = this.tableData.slice(
        start,
        start + this.pageSize
      );
    },

    //增
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.newbookitem.name = this.form.name;
          this.newbookitem.author = this.form.author;
          this.newbookitem.address = this.form.publish;
          this.newbookitem.number = this.form.number;
          if (this.newbookitem !== null) {
            this.newbookitem.id = this.tableData.length + 1;
            this.tableData.push(Object.assign({}, this.newbookitem));
          }
          this.dialogFormVisible = false;
          this.$refs[formName].resetFields();
          return true;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    //删
    Delete( row ) {
      let index;
      this.currentTableData = this.currentTableData.filter((v, _index) => {
        if (v.id !== row.id) {
          index = _index;
          return true;
        }
        return false;
      });
      this.tableData.splice(index, 1);
    },

    //查
    Search(input) {
      if (input === "") {
        return;
      }
      this.input = "";
      this.currentTableData = this.tableData.filter(
        (item) => item.name.indexOf(input) !== -1
      );
    },

    resetForm(formName) {
      this.dialogFormVisible = false;
      this.$refs[formName].resetFields();
    },
  },
};
</script>



<style>

.el-table_1_column_5.cell {
  padding-left: -10px;
}
.el-input {
  width: 80%;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.control {
  margin-left: -73%;
}
.control button {
  margin: 20px;
}
.table {
  width: 80%;
  margin-bottom: 50px;
  /* height: 500px;
  overflow: scroll; */
}
.tab-inner {
  width: 80%;
  border: 1px solid #dbdbdb;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tab-outer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
