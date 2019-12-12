<template>
  <div class="full-page">
    <Banner></Banner>
    <Content></Content>
  </div>
</template>
<script>
import Banner from "../views/pathdetail/Banner";
import Content from "../views/pathdetail/Content";

export default {
  name: "Pathdetail",
  //   data() {
  //     return {
  //       list: []
  //     };
  //   },
  components: {
    Banner,
    Content
  }

  //   async created() {
  //     // this.$route可以获取当前的路由实例
  //     //  此对象上包含有路由的信息
  //     //    路径、地址、参数、名字
  //     // console.log(this.$route);
  //     // this.$route.query 可以获取url中传递的参数
  //     //this.$router.push({
  //     //     name:'',
  //     //     query:{}
  //     // }),获取
  //     const res = await pathDetail(this.$route.query.pathCourseTit);
  //     console.log(this.$route.query.pathCourseTit);
  //     this.list = res.data.data;
  //     console.log(res.data.data);
  //   }
};
</script>

<style scoped>
.full-page {
  width: 100%;
  margin-top: 20px;
  background: #eee;
}
</style>