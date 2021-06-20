<template>
  <div>
    <van-field
      v-model="name"
      name="name"
      autosize
      rows="1"
      type="textarea"
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
      <div class="title">地址选择</div>

      <!-- <van-search v-model="value" show-action placeholder="请输入搜索关键词">
        <template #action>
          <div @click="onLoad">搜索</div>
        </template>
      </van-search> -->

      <van-tabs v-model="active">
        <van-tab title="模糊搜索">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
          >
            <template #action>
              <div @click="onLoad">搜索</div>
            </template>
          </van-search>
          <van-cell-group>
            <div class="listbox">
              <div class="zwsj" v-show="isData">暂无数据</div>

              <van-card
                v-for="item in list"
                :key="item.SeatId"
                :desc="item.addr"
                centered
                @click="clickRow(item)"
              >
                <!-- <van-card
                v-for="item in list"
                :key="item.SeatId"
                :desc="item.addr"
                :title="item.SeatId"
                centered
              > -->
                <!-- <template #footer>
                  <van-button size="small" type="info" @click="clickRow(item)"
                    >选择</van-button
                  >
                </template> -->
              </van-card>
            </div>
          </van-cell-group>
        </van-tab>
        <van-tab title="手动输入">
          <van-form ref="addform">
            <van-field
              readonly
              clickable
              required
              name="area"
              :value="addForm.address1"
              label="行政区划"
              placeholder="点击选择省市区"
              @click="showArea = true"
              :rules="[{ required: true, message: '行政区划不能为空' }]"
            />
            <van-popup v-model="showArea" position="bottom">
              <van-area
                :area-list="areaList"
                @confirm="getAddress"
                @cancel="showArea = false"
              />
            </van-popup>

            <van-field
              v-model="addForm.addname"
              required
              name="addname"
              label="地名"
              placeholder="请输入地名"
              :rules="[{ required: true, message: '地名不能为空' }]"
            />
            <van-field
              v-model="addForm.housenum"
              name="housenum"
              label="门牌号"
              placeholder="请输入门牌号"
            />
            <van-field
              v-model="addForm.housing"
              name="housing"
              label="小区"
              placeholder="请输入小区"
            />
            <van-field
              v-model="addForm.floor"
              name="floor"
              label="楼座"
              placeholder="请输入楼座"
            />
            <van-field
              v-model="addForm.cell"
              name="cell"
              label="单元"
              placeholder="请输入单元"
            />

            <van-field
              v-model="addForm.room"
              name="room"
              label="户室"
              placeholder="请输入户室"
            />

            <!-- <van-field
              v-model="addForm.xxdz"
              name="xxdz"
              label="详细地址"
              placeholder="请输入详细地址"
            /> -->
            <div style="margin: 16px">
              <van-button round block type="info" @click.stop="onSubmit"
                >提交</van-button
              >
            </div>
          </van-form>
        </van-tab>
      </van-tabs>
    </van-popup>
  </div>
</template>
<script>
import { addrSearch } from "@/api/cyry";
import { areaList } from "@vant/area-data";

export default {
  props: ["label", "placeholder", "modleName", "cnname"],
  data() {
    return {
      active: 2,

      areaList,
      addForm: {
        address1: "", //手动选择的地址省市区
        xxdz: "", //手动输入的详细地址
        addname: "", //手动输入的地名
        housing: "",
        floor: "",
        cell: "",
        housenum: "",
        room: "",
      },

      showArea: false, //是否显示省市区弹窗

      name: "", //文本框显示的名称
      code: "",
      show: false,
      value: "",
      current: 1,
      tableData: [],
      prev: false, //上一页
      next: false, //下一页
      searchCount: false,
      list: [],
      loading: false,
      isData: true,

      showAddress: false,
      fieldValue: "",
      cascaderValue: "",
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [],
        },
      ],
    };
  },
  watch: {
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
    this.isData = true;
  },
  methods: {
    // 提交手动输入地址的表单
    onSubmit() {
      // if (this.addForm.address1.length != 0 && this.addForm.xxdz.length != 0) {
      this.$refs.addform
        .validate()
        .then(() => {
          this.name =
            this.addForm.address1.replace(/\//g, "") +
            this.addForm.addname +
            this.addForm.housing +
            this.addForm.floor +
            this.addForm.cell +
            this.addForm.housenum +
            this.addForm.room;
          this.code = "";
          let row = {
            SeatId: this.code,
            addr: this.name,
          };
          this.$emit("zdretrun", row, this.modleName);
          this.show = false;
        })
        .catch((err) => {});

      // } else {
      //   this.$toast.fail("请完整填写地址");
      // }

      // console.log(this.name);
    },
    getAddress(values) {
      this.addForm.address1 = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      // console.log(this.addForm.address1);
      this.showArea = false;
    },
    clickRow(row) {
      this.name = row.addr;
      this.code = row.SeatId;

      this.$emit("zdretrun", row, this.modleName);

      this.value = "";
      // this.list=[]
      this.show = false;
      // this.isData=true
    },
    onChange({ value }) {
      if (value === this.options[0].value) {
        setTimeout(() => {
          this.options[0].children = [
            { text: "杭州市", value: "330100" },
            { text: "宁波市", value: "330200" },
          ];
        }, 500);
      }
    },

    onLoad() {
      this.list = [];
      this.finished = false;
      addrSearch(this.value).then((res) => {
        this.isData = false;
        this.list = JSON.parse(res.data.data);
        console.log(this.list);

        // 没数据
        if (this.list.length <= 0) {
          this.isData = true;
        }
      });
    },

    showPopup() {
      document.activeElement.blur();
      this.show = true;
    },

    onFinish({ selectedOptions }) {
      this.showAddress = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
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
  height: 770px;
  padding-bottom: 40px;
  overflow-y: auto;
  .zwsj {
    text-align: center;
    height: 140px;
    line-height: 150px;
    font-size: 30px;
  }
  .van-card__desc {
    font-size: 35px;
  }
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