<template>
  <div class="box">
    <div class="formbox1">
      <div class="title">
        <span class="titicon"></span>
        <span class="tittxt">车辆信息</span>
      </div>
      <van-form class="form">
        <van-field
          v-model="carno"
          type="carno"
          name="车牌号码"
          label="车牌号码"
          class="cphm"
        >
          <template #input>
            <div class="jszhm">闽A</div>
            <van-field
              v-model="address"
              type="address"
              name="详细地址"
              placeholder="请输入车牌号码"
            >
            </van-field>
          </template>
        </van-field>
        <van-field
          v-model="dano"
          type="dano"
          name="档案编号"
          label="档案编号"
          placeholder="请输入12位驾驶人的档案编号"
        />
        <van-field
          readonly
          clickable
          name="picker"
          :value="value1"
          label="号牌种类"
          placeholder="请选择业务类型"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm1"
            @cancel="showPicker = false"
          />
        </van-popup>
       <van-field
          v-model="drivenum"
          name="drivenum"
          label="驾驶证号码"
          placeholder="请输入驾驶证号码"
        />
        <div style="margin: 16px">
          <van-button block type="info" native-type="submit">查询</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        carno:'',
      address: "",
      dano: "",
      drivenum:'',
      //   单个选择器
      value1: "",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false,
      //地区选择器
      value2: "",
      showArea: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
          // ....
        },
      },
    };
  },
  methods: {
    onConfirm1(value) {
      this.value1 = value;
      this.showPicker = false;
    },

    onConfirm2(values) {
      this.value2 = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.formbox1 {
  //   padding-top: 60px;
  .title {
    height: 82px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    .titicon {
      width: 10px;
      height: 28px;
      background: linear-gradient(0deg, #0c62cd, #6aa8f5);
      border-radius: 4px;
      margin-right: 20px;
    }
    .tittxt {
      font-size: 30px;
      color: #1e7df3;
    }
  }
  .form {
    .van-field__label {
      margin-right: 0;
      color: #666;
    }
    .van-field__control::placeholder {
      color: #333;
    }
    .richinput {
      .van-cell {
        height: 100px !important;
        padding-left: 0;
        padding-top: 0;
      }
      .remind {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 20px;
        color: #aaa;
      }
      .van-cell::after {
        border: 0 !important;
      }
    }
    .cphm {
      .van-cell {
        padding: 0;
      }
      .jszhm {
        width: 76px;
        height: 44px;
        background: #2682fd;
        border: 1px solid #ffffff;
        color: #fff;
        font-size: 24px;
        font-family: Microsoft YaHei;
        text-align: center;
        line-height: 44px;
      }
    }
  }
}
</style>