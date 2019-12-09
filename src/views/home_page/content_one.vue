<template>
  <div id="lou_plus_div">
    <Title class="lou_plus_course_title" :title="'楼+ 实战课程 |'" :description="'定期开班，导师助教全程辅导，最快最优成长'"></Title>
      <div class="item_card">
        <Contents
          class="lou_plus_card"
          v-for="(data, index) in content"
          :key="index"
          :data="data"
        ></contents>
      </div>
   
  </div>
</template>

<script type="text/javascript">
import  Contents from './cards/contents.vue';
import Title from './title/title.vue';
// import { get_content } from "../../api/home/home_header";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({ 
             content : state=>state.home.content.course1.slice(0,4)      
    })
  },
  // methods:{
  //      ...mapActions("home",["getdata"]),


  // },
  // created(){
  //     get_content().then((res)=>{
  //       this.getdata(res)
  //     })
  // },
  components:{
    Contents,
    Title
  }, 

 
};
</script>

<style type="text/css" scoped>
#lou_plus_div {
  display: flex;
  flex-direction: column;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  background: #f7f7f7;
  margin-bottom: 30px;
}

.lou_plus_course_title {
  margin-bottom: 30px;
}

.item_card {
  display: flex;
  justify-content: space-around;
  padding: 0 15px;
}

.lou_plus_card {
  width: 25%;
  box-sizing: border-box;
  padding-right: 19px;
}
</style>
