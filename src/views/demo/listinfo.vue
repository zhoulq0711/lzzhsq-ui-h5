<template>
  <div class="box">
    <div class="cardbox">
      <van-collapse v-model="activeNames1" class="bbb" @change="getState">
        <van-collapse-item name="0">
          <template #title>
            <van-divider
              :style="{
                color: '#333',
                borderColor: '#CCC',
                width: '170px',
                margin: '0 auto',
                fontWeight: '500',
              }"
            >
              芙蓉区
            </van-divider>
          </template>
          <template #right-icon>
            <img
              src="../../assets/images/top.png"
              v-bind:class="['top1', activeNames1.indexOf('0') != -1 ? 'top2' : '']"
            />
          </template>

          <div class="card_body">
            <div class="table">
              <div class="tb_header">
                <div class="hdtxt" style="width: 10%">序号</div>
                <div class="hdtxt" style="width: 35%">备案医院</div>
                <div class="hdtxt" style="width: 38%">地址</div>
                <div class="hdtxt" style="width: 14%">情况</div>
              </div>
              <div class="tb_body">
                <div class="bodyitem">
                  <div class="bodytxt tc1" style="width: 8%">1</div>
                  <div class="bodytxt" style="width: 33%; margin-right: 3%">
                    湖南省军区医院(只对军人开放)
                  </div>
                  <div class="bodytxt" style="width: 38%">
                    长沙市芙蓉区八一路472号 八一路472号
                  </div>
                  <div class="bodytxt" style="width: 14%">正常</div>
                </div>
                <div class="bodyitem">
                  <div class="bodytxt tc1" style="width: 8%">2</div>
                  <div class="bodytxt" style="width: 33%; margin-right: 3%">
                    湖南省军区医院(只对军人开放)
                  </div>
                  <div class="bodytxt" style="width: 38%">
                    长沙市芙蓉区八一路472号 八一路472号
                  </div>
                  <div class="bodytxt" style="width: 14%">正常</div>
                </div>
                <div class="bodyitem">
                  <div class="bodytxt tc1" style="width: 8%">3</div>
                  <div class="bodytxt" style="width: 33%; margin-right: 3%">
                    湖南省军区医院(只对军人开放)
                  </div>
                  <div class="bodytxt" style="width: 38%">
                    长沙市芙蓉区八一路472号 八一路472号
                  </div>
                  <div class="bodytxt" style="width: 14%">正常</div>
                </div>
                <div class="bodyitem">
                  <div class="bodytxt tc1" style="width: 8%">4</div>
                  <div class="bodytxt" style="width: 33%; margin-right: 3%">
                    湖南省军区医院(只对军人开放)
                  </div>
                  <div class="bodytxt" style="width: 38%">
                    长沙市芙蓉区八一路472号 八一路472号
                  </div>
                  <div class="bodytxt" style="width: 14%">正常</div>
                </div>
              </div>
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="cardbox">
      <van-collapse v-model="activeNames1" class="bbb" @change="getState">
        <van-collapse-item name="1">
          <template #title>
            <!-- <div>标题1 <van-icon name="question-o" /></div> -->
            <van-divider
              :style="{
                color: '#333',
                borderColor: '#CCC',
                width: '170px',
                margin: '0 auto',
                fontWeight: '500',
              }"
            >
              天心区
            </van-divider>
          </template>
          <template #right-icon>
            <img
              src="../../assets/images/top.png"
              v-bind:class="['top1', activeNames1.indexOf('1') != '-1' ? 'top2' : 'n1']"
            />
          </template>

          <div class="card_body">
            <div class="table">
              <div class="tb_header">
                <div class="hdtxt" style="width: 10%">序号</div>
                <div class="hdtxt" style="width: 35%">备案医院</div>
                <div class="hdtxt" style="width: 38%">地址</div>
                <div class="hdtxt" style="width: 14%">情况</div>
              </div>
              <div class="tb_body">
                <div class="bodyitem">
                  <div class="bodytxt tc1" style="width: 8%">1</div>
                  <div class="bodytxt" style="width: 33%; margin-right: 3%">
                    湖南省军区医院(只对军人开放)
                  </div>
                  <div class="bodytxt" style="width: 38%">
                    长沙市芙蓉区八一路472号 八一路472号
                  </div>
                  <div class="bodytxt" style="width: 14%">正常</div>
                </div>
                <div class="bodyitem">
                  <div class="bodytxt tc1" style="width: 8%">2</div>
                  <div class="bodytxt" style="width: 33%; margin-right: 3%">
                    湖南省军区医院(只对军人开放)
                  </div>
                  <div class="bodytxt" style="width: 38%">
                    长沙市芙蓉区八一路472号 八一路472号
                  </div>
                  <div class="bodytxt" style="width: 14%">正常</div>
                </div>
                <div class="bodyitem">
                  <div class="bodytxt tc1" style="width: 8%">3</div>
                  <div class="bodytxt" style="width: 33%; margin-right: 3%">
                    湖南省军区医院(只对军人开放)
                  </div>
                  <div class="bodytxt" style="width: 38%">
                    长沙市芙蓉区八一路472号 八一路472号
                  </div>
                  <div class="bodytxt" style="width: 14%">正常</div>
                </div>
                <div class="bodyitem">
                  <div class="bodytxt tc1" style="width: 8%">4</div>
                  <div class="bodytxt" style="width: 33%; margin-right: 3%">
                    湖南省军区医院(只对军人开放)
                  </div>
                  <div class="bodytxt" style="width: 38%">
                    长沙市芙蓉区八一路472号 八一路472号
                  </div>
                  <div class="bodytxt" style="width: 14%">正常</div>
                </div>
              </div>
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames1: ["0","1"],
      // activeNames2: ["1"],
      isActive: true,
    };
  },
  methods: {

  getState(val) {
      if (val.length == 0) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.cardbox {
  background-color: #fff;
  margin-top: 20px;
  .card_body {
    // padding: 24px 20px;
    .table {
      width: 100%;
      // max-height: 323px;
      border: 1px solid #e5e5e5;
      border-bottom: none;
      overflow: hidden;
      .tb_header {
        width: 100%;
        background-color: #f8f8f8;
        height: 65px;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;

        .hdtxt {
          font-size: 23px;
          font-family: Microsoft YaHei;
          color: #333333;
          &.hdtxt:last-child {
            text-align: center;
          }
        }
      }
      .tb_body {
        .bodyitem {
          width: 100%;
          height: 85px;
          border-bottom: 1px solid #e5e5e5;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 20px;

          .bodytxt {
            font-size: 22px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #888888;
            line-height: 24px;
            &.tc1 {
              padding-left: 15px;
            }
            &.bodytxt:last-child {
              text-align: center;
            }
          }
        }
      }
    }
  }
  .top1 {
    width: 32px !important;
    height: 32px !important;
    transform: rotate(0deg);
    transition: transform 0.1s;
    margin-top: 8px;
  }
  .top2 {
    transform: rotate(180deg);
  }
}
</style>