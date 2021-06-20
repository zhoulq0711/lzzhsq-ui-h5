<template>
  <div>
    <van-field
      v-model="name"
      name="name"
      :label="label"
      :placeholder="placeholder"
      @click="showPopup"
      class="dictbox"
    />

    <!-- 自定义图标 -->
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '80%', paddingTop: '10px', overflow: 'hidden' }"
    >
      <div class="title">字典类型：{{zdType}}</div>

      <van-search v-model="value" show-action placeholder="请输入搜索关键词">
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>

      <van-cell-group>
        <van-cell title="代码" value="名称" class="dttitle" />
        <div class="listbox">
          <van-cell
            v-for="item in tableData"
            :key="item.code"
            :title="item.code"
            :value="item.name"
            @click="clickRow(item)"
          />
        </div>
      </van-cell-group>

      <!-- <van-pagination
        v-model="current"
        :page-count="12"
        mode="simple"
        class="pagination"
      /> -->
      <div class="pagination">
        <van-button
          plain
          type="info"
          class="nextbtn"
          :disabled="prev"
          @click="prevPage"
          >上一页</van-button
        >
        <van-button
          plain
          type="info"
          class="nextbtn"
          :disabled="next"
          @click="nextPage"
          >下一页</van-button
        >
      </div>
    </van-popup>
  </div>
</template>
<script>
import { fetchDictList } from "@/api/dict";
export default {
  props: ["label","placeholder","zdType","modleName","cnname"],
  data() {
    return {
      name: "", //文本框显示的名称
      code: "",
      show: false,
      value: "",
      current: 1,
      tableData: [],
      prev: false, //上一页
      next: false, //下一页
      searchCount: false,
    };
  },
  watch: {
    value: function (newValue) {
      if (newValue.length == 0) {
        this.current = 1;
        this.getDictList();
      }
    },
    cnname: function (val, oldval) {
      if (val) {
        this.name = val;
      } else {
        this.name = "";
      }
    },
  },
  mounted() {
    if (this.cnname) {
      this.name = this.cnname;
    }
  },
  methods: {
    clickRow(row) {
      this.code = row.code;
      this.name = row.name;
      this.$emit('zdretrun',row,this.modleName);
      this.show = false;
    },
    showPopup() {
      this.createDict = true;
      document.activeElement.blur();
      this.current = 1;
      this.getDictList();
      this.show = true;
    },
    onSearch() {
      this.current = 1;
      this.getDictList();
      //   console.log(this.value);
    },
    // 请求接口数据
    getDictList() {
      let query = {
        current: this.current,
        size: 10,
        zdType: this.zdType,
        zdCode: this.value,
        zdWhere: "",
        searchCount: this.searchCount,
      };
      fetchDictList(query).then((res) => {
        let data = res.data.data;
        this.tableData = data.records;

        // 如果没有数据就禁用下一页按钮
        if (data.records.length == 0) {
          this.next = true;
        } else {
          this.next = false;
        }
        if (this.current == 1) {
          this.prev = true;
        }
        // 请求完成后一律把this.searchCount = false
        this.searchCount = false;
      });
    },
    // 点击上一页
    prevPage() {
      this.current--;
      console.log(this.current);
      this.getDictList();
      if (this.current <= 1) {
        this.prev = true;
      }
    },
    // 点击下一页
    nextPage() {
      this.current++;
      this.getDictList();
      if (this.current > 1) {
        this.prev = false;
      }
      // console.log(this.current)
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 35px;
  margin: 0 auto;
}
.listbox {
  height: 690px;
  overflow-y: auto;
}
.dttitle {
  .van-cell__value,
  .van-cell__title {
    color: #323233;
    padding: 0 70px;
  }
}
.pagination {
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-color: #fff;

  .nextbtn {
    width: 50%;
    height: 80px;
    border: 1px solid #ebedf0;
  }
}

.dictbox::before {
  position: absolute !important;
  box-sizing: border-box !important;
  content: " ";
  pointer-events: none;
  right: 0.42667rem;
  bottom: 0;
  left: 0.42667rem;
  border-bottom: 0.02667rem solid #ebedf0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
</style>