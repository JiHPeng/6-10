<template>
  <div class="list-box">
    <search-bar></search-bar>
    <article-list></article-list>
    <!-- 上下线 -->
    <div class="modal fade" id="statusModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="statusModalLabel">
              是否进行更改
            </h4>
          </div>
          <!--<div class="modal-body">-->
          <!--在这里添加一些文本-->
          <!--</div>-->
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭
            </button>
            <button ng-click="changeConfirm()" type="button" class="btn btn-primary"
                    data-dismiss="modal">
              提交更改
            </button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div><!-- 上下线 -->
    <!-- 编辑 -->
    <div class="modal fade" id="editModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="editModalLabel">
              模态框（Modal）标题
            </h4>
          </div>
          <div class="modal-body">
            在这里添加一些文本
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭
            </button>
            <button type="button" class="btn btn-primary">
              提交更改
            </button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <!-- 删除 -->
    <div class="modal fade" id="deleteModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title">
              是否确认删除
            </h4>
          </div>
          <!--<div class="modal-body">-->

          <!--</div>-->
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              关闭
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              删除
            </button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div><!-- 删除 -->

    <div class="bottom">
      <div class="quantity col-3">
        每页显示
        <input type="number">
        条
      </div>
      <div class="col-5">
        <page-change></page-change>
      </div>
      <div class="jump col-3">
        跳转至
        <input type="number">
        页
      </div>
      <button class="col-1">确认</button>
    </div>
  </div>


</template>

<script>
  import SearchBar from './Article/SearchBar'
  import ArticleList from './Article/ArticleList'
  import PageChange from './Article/PageChange'
  export default {
    name: 'Article',
    components: { PageChange, ArticleList, SearchBar }
  }
</script>

<style>
  .list-box .bottom {
    display: flex;
    align-items: center;
    padding: 10px; }
  .list-box .bottom .quantity, .list-box .bottom .jump {
    display: flex;
    align-items: center;
    word-break: keep-all; }
  .list-box .bottom .quantity > input, .list-box .bottom .jump > input {
    width: 0;
    flex-grow: 1; }
  .list-box .bottom .quantity > input::-webkit-outer-spin-button, .list-box .bottom .quantity > input::-webkit-inner-spin-button, .list-box .bottom .jump > input::-webkit-outer-spin-button, .list-box .bottom .jump > input::-webkit-inner-spin-button {
    display: none; }
  .list-box .bottom .page ul {
    display: flex;
    justify-content: center; }
  .list-box .bottom .page ul li {
    padding: 5px; }
  .list-box .bottom > button {
    padding: 5px; }

</style>
