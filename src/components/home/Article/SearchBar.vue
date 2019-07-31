<template>
  <div class="searchBar" id="searchBar">
    <div class="title col-4">
      <div>
        <span>标&nbsp;&nbsp;&nbsp;&nbsp;题</span>
        <input type="text">
      </div>
    </div>
    <div class="creater col-3">
      <div>
        <span>创建者</span>
        <input type="text">
      </div>
    </div>
    <div class="time col-5">
      <div>
        <span>创建时间</span>
        <input>-<input>
      </div>
    </div>
    <div class="state col-4">
      <div>
        <span>状&nbsp;&nbsp;&nbsp;&nbsp;态</span>
        <select>
          <option value="">--请选择--</option>
        </select>
      </div>
    </div>
    <div class="type col-3">
      <div>
        <span>类&emsp;型</span>
        <select>
          <option value="">--请选择--</option>
        </select>
      </div>
    </div>
    <div class="function col-5">
      <div>
        <button>清空</button>
        <button>搜索</button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'SearchBar'
  }
</script>

<style>
  .searchBar {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    height: 109px;
    background-color: #fbfbfb;
    border: 1px solid #cccccc; }
  .searchBar select {
    height: 25px;}
  .searchBar > .function > div {
    justify-content: flex-end; }
  .searchBar > .function > div > button {
    flex: 0;
    flex-basis: 20%;
    margin: 0 5px; }
  .searchBar > .state > div > input {
    flex: 0;
    width: 300px; }
  .searchBar > .type > div > select {
    width: 0;
    flex-grow: 1;
    flex-shrink: 1; }
  .searchBar > div > div {
    display: flex;
    align-items: center;
    width: 100%; }
  .searchBar > div > div > span {
    padding-right: 16px;
    word-break: keep-all; }
  .searchBar > div > div > input {
    width: 0;
    flex-grow: 1;
    flex-shrink: 1; }
  .searchBar > div > div > select {
    width: 50%;
    text-align-last: center; }
</style>
