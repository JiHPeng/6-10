<template>
  <div class="manage" id="articleList">
    <div class="manage-title">
      <p>Article管理</p>
      <div>
        <button>保存排序</button>
        <button>新增</button>
      </div>
    </div>
    <table class="manage-content">
      <thead class="manage-content-title">
      <tr>
        <th>序号</th>
        <th>图片</th>
        <th>标题</th>
        <th>类型</th>
        <th>创建者</th>
        <th>创建时间</th>
        <th>修改时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td></td>
        <td><img></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <div></div>
          <div></div>
        </td>
        <td>
          <div></div>
          <div></div>
        </td>
        <td></td>
        <td>
          <button></button>
          <button>编辑</button>
          <button>删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  export default {
    name: 'ArticleList'
  }
</script>

<style scoped>

  .list-box .manage {
    margin-top: 10px;
    border: 1px solid #cccccc; }
  .list-box .manage .manage-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid #cccccc; }
  .list-box .manage > .manage-content {
    margin: 10px 10px;
    width: calc(100% - 20px); }
  .list-box .manage > .manage-content > thead {
    background-color: #f2f2f2; }
  .list-box .manage > .manage-content > thead > tr {
    border-collapse: collapse;
    border: 1px solid #cccccc; }
  .list-box .manage > .manage-content > thead > tr > th {
    padding: 8px 0;
    text-align: center;
    font-weight: bold; }
  .list-box .manage > .manage-content > tbody > tr {
    border: 1px solid #cccccc;
    border-collapse: collapse; }
  .list-box .manage > .manage-content > tbody > tr > td {
    padding: 10px 0;
    text-align: center;
    vertical-align: middle; }
  .list-box .manage > .manage-content > tbody > tr > td > img {
    height: 80px;
    width: 120px; }
</style>
