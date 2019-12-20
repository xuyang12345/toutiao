<template>
    <el-container>
    <el-aside style="background-color:#353b4e;min-height:100vh;width:232px">
      <!-- 放置左侧组件 -->
      <layout-aside></layout-aside>
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

export default {
  components: {

  }
}
</script>

<style>

</style>
