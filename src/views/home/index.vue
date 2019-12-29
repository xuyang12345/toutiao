<template>
    <el-container>
    <el-aside :style="{width:collaspse?'60px' :'230px'}" style="transition:all 0.3s;  background-color:#353b4e;min-height:100vh;width:232px">
      <!-- 放置左侧组件 -->
      <!-- 父传子 父组件里用:值  子组件用props:值接收 -->
      <layout-aside :collaspse="collaspse"></layout-aside>
    </el-aside>
       <el-container>
            <el-header>
              <layout-header></layout-header>
            </el-header>
            <el-main style="padding:0">

              <router-view></router-view>
            </el-main>
       </el-container>
    </el-container>
</template>

<script>
// 引入公共实例
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collaspse: false// 是否折叠
    }
  },
  components: {

  },
  created () {
    // 接受事件用$on
    eventBus.$on('changeCollapse', () => {
      // 本来折叠关闭 取反后打开折叠
      this.collaspse = !this.collaspse
    })
  }
}
</script>

<style>

</style>
