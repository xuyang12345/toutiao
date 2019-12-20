<template>
    <el-container>
    <el-aside style="background-color:#353b4e;height:100vh;width:230px">
      <!-- 放置左侧组件 -->
      <layout-aside></layout-aside>
    </el-aside>
       <el-container>
            <el-header>
              <layout-header></layout-header>
            </el-header>
            <el-main>
              主要区域
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
