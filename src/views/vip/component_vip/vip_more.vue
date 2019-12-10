<template>
  <div class="row">
    <div class="text-center col">
      <a href="/questions/1440" target="_blank">
        <button type="button" class="btn btn-outline-primary">更多疑问，请查看这里</button>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col {
  flex-basis: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 100%;
}
.btn {
  cursor: pointer;
}
a {
  color: #08bf91;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  background: #08bf91;
}
.btn-outline-primary {
  color: #08bf91;
  border-color: #08bf91;
}
</style>