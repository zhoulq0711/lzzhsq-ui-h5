<template>
  <div>
    <div class="indexbox">
      <div class="indextop">天创前端规范-H5</div>
 

      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="从业人员DEMO" name="11">
          <van-cell>
            <router-link to="/h5/xlyw/t_sqjw_xlgjxx_h5list" class="router">
              从业人员DEMO示例kkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            </router-link>
          </van-cell>

        </van-collapse-item>
      </van-collapse>
      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="首页展示" name="1">
          <van-cell>
            <router-link to="/business" class="router"> 首页风格1 </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/home1" class="router"> 首页风格2 </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/home2" class="router"> 首页风格3 </router-link>
          </van-cell>
        </van-collapse-item>
      </van-collapse>
      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="底部Tab展示" name="2">
          <van-cell>
            <router-link to="/my" class="router"> 我的设置页 </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/index" class="router"> 带Tab首页 </router-link>
          </van-cell>
        </van-collapse-item>
      </van-collapse>
      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="提交提示" name="3">
          <van-cell>
            <router-link to="/retsuccess" class="router">
              成功提示
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/retrunpage" class="router">
              失败提示
            </router-link>
          </van-cell>
        </van-collapse-item>
      </van-collapse>
      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="条件查询" name="4">
          <van-cell>
            <router-link to="/paylist" class="router"> 搜索查询1 </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/search" class="router"> 搜索查询2 </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/idquery" class="router"> 输入查询 </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/express_list?show=3" class="router">
              主从表分组展示
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/express_list_nav" class="router">
              主从表多页签展示
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/express_list?show=2" class="router">
              从表编辑
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/express_list?show=1" class="router">
              主表编辑
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/express_list" class="router">
              主从表查询
            </router-link>
          </van-cell>
        </van-collapse-item>
      </van-collapse>
      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="表单输入" name="5">
          <van-cell>
            <router-link to="/form" class="router"> 简易表单 </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/carquery" class="router"> 复杂表单 </router-link>
          </van-cell>
        </van-collapse-item>
      </van-collapse>

      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="表单信息展示" name="6">
          <van-cell>
            <router-link to="/express_haspic" class="router">
              含照片
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/express1" class="router"> 含富文本 </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/express" class="router">
              单表数据详细
            </router-link>
          </van-cell>
        </van-collapse-item>
      </van-collapse>

      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="列表信息展示" name="7">
          <van-cell>
            <router-link to="/listinfo" class="router">
              可折叠列表
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/carDriver" class="router">
              普通列表展示
            </router-link>
          </van-cell>
        </van-collapse-item>
      </van-collapse>

      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="文件上传" name="8">
          <van-cell>
            <router-link to="/addAddress" class="router">
              照片上传示例
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/addlive" class="router"> 含步骤条 </router-link>
          </van-cell>
        </van-collapse-item>
      </van-collapse>
      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="名片列表" name="9">
          <van-cell>
            <router-link to="/seachlist" class="router">
              名片列表1
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/seachlist1" class="router">
              名片列表带条件
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/seachlist?show=1" class="router">
              名片列表带操作按钮
            </router-link>
          </van-cell>
        </van-collapse-item>
      </van-collapse>
      <van-collapse v-model="activeNames" class="dropMenu">
        <van-collapse-item title="图文详情" name="10">
          <van-cell>
            <router-link to="/cont" class="router"> 图文详情1 </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/cont1" class="router"> 图文详情2 </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/cont1?show=1" class="router">
              图文详情3
            </router-link>
          </van-cell>
          <van-cell>
            <router-link to="/editmenu" class="router"> 编辑详情 </router-link>
          </van-cell>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeNames: []
    };
  }

};
</script>
<style lang="scss" scoped>
.indexbox {
  padding: 50px 15px;
  .indextop {
    height: 140px;
    line-height: 120px;
    font-size: 50px;
    font-weight: 600;
    color: #333;
  }
  .van-collapse-item__content {
    padding: 0 !important;
  }
  .dropMenu {
    margin-bottom: 15px;
    .router {
      display: block;
      width: 100%;
    }
  }
}
</style>
