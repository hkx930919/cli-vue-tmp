<template>
  <div class="container">
    模板文件
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped lang="less">
.container {
  font-size: 20px;
  text-align: center;
  padding: 20px;
  > a {
    display: block;
    color: #0080ff;
    text-decoration: underline;
  }
  > img {
    margin-top: 15px;
  }
}
</style>
