<template>
  <div class="container">
    <a href="http://172.16.10.4:3018/WEB_GROUP/hlj-core/src/branch/master/README.md" target="_blank">
      {{ msg }}
    </a>
    <img src="//qnm.hunliji.com/o_1crog4tkt1pfs15bn3j51elh7839.png" alt="vue" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '开发前请仔细阅读婚礼纪前端脚手架使用说明'
    }
  }
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
