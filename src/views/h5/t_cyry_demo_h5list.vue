<template>
  <div class="box cyrybox">
    <!-- <div class="searchbox">
      <van-search
        v-model="ryname"
        show-action
        shape="round"
        background="#F8F8F8"
        placeholder="请输入姓名搜索"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div> -->

    <div class="searchbox">
      <van-search
        v-model="ryname"
        shape="round"
        background="#F8F8F8"
        placeholder="请输入姓名"
        class="search"
      />
      <van-button round class="searchbtn" @click="onSearch">搜索</van-button>
    </div>

    <div class="list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="listbox" v-for="(item, index) in list.records" :key="index">
          <div class="listbox_t" @click="open(item.rybh)">
            <div class="listbox_t_l">
              <!-- <img :src="item.cyryImage[0].url" /> -->
              <img :src="item.cyryXp" />
            </div>
            <div class="listbox_t_r">
              <p class="f28">
                姓名：<em>{{ item.cyryXm }}</em>
              </p>
              <p class="f24">
                身份证号码：<em>{{ item.cyrySfhm }}</em>
              </p>
            </div>
            <div class="listbox_t_type">
              <div class="btns" v-if="type == 1 || type == 3">编辑修改</div>
              <van-icon
                :name="
                  showCard.indexOf(item.rybh) == -1 ? 'arrow-up' : 'arrow-down'
                "
              />
            </div>
          </div>
          <!-- <div class="listbox_b" v-if="show"> -->
          <div class="listbox_b" v-show="showCard.indexOf(item.rybh) != -1">
            <div class="cellbox">
              <div class="cell">
                <div class="cell_l">民族</div>
                <div class="cell_r">{{ item.cyryMzbmCn }}</div>
              </div>
              <div class="cell">
                <div class="cell_l">性别</div>
                <div class="cell_r">{{ item.cyryXbbmCn }}</div>
              </div>
              <div class="cell">
                <div class="cell_l">背景审查</div>
                <div class="cell_r">{{ item.bjscZtCn }}</div>
              </div>
              <div class="cell">
                <div class="cell_l">人员居住地</div>
                <div class="cell_r blue">{{ item.cyryRyjzd }}</div>
              </div>
            </div>
            <div class="editbox" v-if="type == 2 || type == 3">
              <van-icon name="eye-o" @click="openView(item)" />
              <van-icon name="edit" @click="openEdit(item)" />
              <van-icon name="delete-o" @click="delData(item.rybh)" />
            </div>
          </div>
        </div>
      </van-list>
    </div>
    <van-button
      icon="plus"
      type="info"
      block
      round
      class="addBtn"
      @click="openAdd"
      >新增</van-button
    >
  </div>
</template>

<script>
import { list, cancel } from "@/api/cyry";

export default {
  data() {
    return {
      // show: true,
      showCard: [],
      ryname: "",
      cyrySfhm: "",
      type: "",
      list: [],
      query: {},
      loading: false,
      finished: false,
      current: 1,
      searchType: "",
      from: "",
    };
  },
  // watch: {
  //   $route: {
  //     handler: function () {
  //       // this.$router.go(0);
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  mounted() {
    this.type = 2;
    if (JSON.parse(sessionStorage.getItem("query")).list) {
      this.list = JSON.parse(sessionStorage.getItem("query")).list;
    }
    if (JSON.parse(sessionStorage.getItem("query")).query) {
      this.query = JSON.parse(sessionStorage.getItem("query")).query;
    }

    this.from = JSON.parse(sessionStorage.getItem("query")).from;
    this.ryname = this.query.cyryXm;
    this.cyrySfhm = this.query.cyrySfhm;
    this.islike = this.query.isLike;

    // if (this.from == "search") {
    //   console.log(1111111);
    //   this.searchType = "";
    //   this.onLoad();
    // } else {

    //   // this.searchType = "nameS";
    //   //   console.log(2222222);

    //   // this.onLoad();
    //   this.onSearch()
    // }
    this.onSearch();
  },
  methods: {
    onSearch() {
      // console.log(11111);
      // this.searchType = "nameS";
       this.current = 1;
      this.list.records = []
      this.finished = false;
      let json1 = {
        size: 10,
        current: 1,
        cyrySfhm: this.cyrySfhm,
        cyryXm: this.ryname,
        islike: this.islike,
      };
      let query1 = {
        list: this.list,
        query: json1,
        from: "search",
      };
      sessionStorage.setItem("query", JSON.stringify(query1));

      this.onLoad();
    },
    getdata() {},
    delData(id) {
      this.$dialog
        .confirm({
          title: "是否删除",
          message: "确认要删除该条记录吗",
        })
        .then(() => {
          cancel(id).then((res) => {
            if (res.status == 200) {
              // console.log(res);
              this.$toast.success({
                duration: 500,
                message: "删除成功",
                onClose: () => {
                  this.onSearch();
                },
              });
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    onLoad() {
      // this.current = 1;

      // this.list.records = [];
      this.finished = false;
      this.loading = true;
        var json1 = {
          size: this.query.size,
          current: this.current++,
          cyrySfhm: this.cyrySfhm,
          cyryXm: this.ryname,
          searchCount: false,
          islike: this.islike,
        };

      list(json1).then((res) => {
        let data = res.data.data.records;

        let exampleUrl = window.location.protocol + "//" + window.location.host;

        data.forEach((ele) => {
          if (ele.cyryXp) {
            ele.cyryXp = exampleUrl + ele.cyryXp;
          }          
          this.list.records.push(ele);
        });
        // console.log(this.list.records);
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.records.length >= this.list.total || data.length <= 0) {
          this.finished = true;
        }
      });
    },
    openView(item) {
      this.$router.push({
        path: "/cyryform",
        // query: { formType: "view"},
        query: { formType: "view", rybh: item.rybh },
      });
    },
    openAdd() {
      this.$router.push({ path: "/cyryform", query: { formType: "add" } });
    },

    openEdit(item) {
      // console.log(item);
      this.$router.push({
        path: "/cyryform",
        // query: { formType: "edit", editForm: JSON.stringify(item) },
        query: { formType: "edit", rybh: item.rybh },
      });
    },

    open(val) {
      // console.log( this.showCard);
      let bool = this.showCard.some((ele) => {
        return ele == val;
      });
      // console.log(bool)
      if (!bool) {
        this.showCard.push(val);
      } else {
        let index = this.showCard.indexOf(val);
        // console.log(index)
        this.showCard.splice(index, 1);
      }

      // this.show = this.showCard.indexOf(val) != -1 ? false : true;
    },
  },
};
</script>
<style lang="scss" scoped>
.cyrybox {
  // padding-top: 196px;
}
.addBtn {
  position: fixed;
  bottom: 20px;
  width: 720px;
  left: 15px;

  .van-icon-plus::before {
    font-size: 35px;
    font-weight: 700;
  }
}
// .searchbox {
//   position: fixed;
//   width: 100%;
//   left: 0;
//   top: 90px;
//   z-index: 300;
//   .van-search__content {
//     background-color: #fff;
//     .van-field__control::placeholder {
//       color: #bbb;
//     }
//     .van-icon-search::before {
//       color: #bbb;
//     }
//   }
// }
.searchbox {
  position: relative;
  .van-search__content {
    background-color: #fff;
    .van-field__control::placeholder {
      color: #bbb !important;
    }
  }
  .searchbtn {
    position: absolute;
    right: 23px;
    top: 20px;
    width: 140px;
    height: 70px;
    border-radius: 0 33px 33px 0;
    font-size: 24px;
    padding: 0;
    color: #fff;
    background-color: #2682fd;
    letter-spacing: 12px;
    padding-left: 10px;
  }
}
.list {
  padding-bottom: 100px;
  .listbox {
    border-top: solid 1px #e8e8e8;
    border-bottom: solid 1px #e8e8e8;
    background: #fff;
    margin-bottom: 20px;
    .listbox_t {
      padding: 30px 20px;
      display: flex;
      align-items: center;
      .listbox_t_l,
      .listbox_t_l img {
        width: 76px;
        height: 76px;
      }
      .listbox_t_r {
        margin-left: 20px;
        .f28 {
          font-size: 32px;
          margin-bottom: 25px;
          em {
            font-style: normal;
            color: #1e7df3;
          }
        }
        .f24 {
          font-size: 30px;
          em {
            font-style: normal;
            color: #999;
          }
        }
      }
      .listbox_t_type {
        font-size: 22px;
        color: #1e7df3;
        margin-left: auto;
        text-align: center;
      }
    }
    .listbox_b {
      border-top: solid 1px #e8e8e8;
      .cellbox {
        padding: 30px;
      }
      .cell {
        display: flex;
        font-size: 26px;
        margin-bottom: 30px;
      }
      .cell:last-child {
        margin: 0;
      }
      .cell_l {
        width: 180px;
        color: #666666;
      }
      .blue {
        color: #1e7df3;
      }
    }
  }
}
.editbox {
  border-top: solid 1px #e8e8e8;
  margin-top: 20px;
  padding: 20px;
  text-align: right;
  .van-icon {
    font-size: 41px;
  }
}
.editbox i {
  margin: 0 10px;
}
.grey .listbox_t_type,
.grey em,
.grey {
  color: #999 !important;
}
.btns {
  width: 121px;
  height: 47px;
  text-align: center;
  line-height: 47px;
  color: #fff;
  background: #ff9900;
  border-radius: 20px;
  margin-bottom: 20px;
}

.van-icon-arrow-down::before,
.van-icon-arrow-up::before {
  font-size: 42px !important;
}
</style>
