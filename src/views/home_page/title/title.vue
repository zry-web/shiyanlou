<template>
  <div class="description_title_div">
    <div>
      <span class="title_span">
        {{
        title
        }}
      </span>
      <span class="description_span">
        {{
        description
        }}
      </span>
    </div>
    <router-link :to="{ name: router_name_dict[title] }" class="more_course_button">更多></router-link>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: false
    }
  },
  data: function() {
    // 更多的router name跳转对应。
    return {
      router_name_dict: {
        "精选项目课 | ": "course",
        "近期好课 | ": "course",
        "基本功 | ": "course",
        后端开发: "course",
        云计算与大数据: "course",
        "训练营强化 | ": "Bootcamp",
        "学习路径 | ": "Paths"
      }
    };
  }
};
</script>

<style type="text/css" scoped>
.description_title_div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.title_span {
  color: #565656;
  font-size: 24px;
}

.description_span {
  color: #666;
  font-size: 14px;
  vertical-align: 2px;
}

.more_course_button {
  color: #666;
  font-size: 14px;
  padding-top: 8px;
}
</style>
