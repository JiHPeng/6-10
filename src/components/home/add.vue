<template>
  <div class="add-box">
    <div class="edit">
    </div>
    <div class="inner">
      <div class="type">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型
        <select>
          <option value="">--请选择--</option>
        </select>
        <select>
          <option value="">--请选择--</option>
        </select>
      </div>
      <div class="title">
        标题名称
        <input type="text">
      </div>
      <div class="url">
        跳转链接
        <input type="text">
      </div>
      <div class="explain">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明&nbsp;</span>
        <!-- 加载编辑器的容器 -->
        <textarea id="ueditor" name="ueditor"></textarea>
      </div>
      <div class="img-upload">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;配图
        <label for="img-upload" class="btn btn-primary">选择文件</label>
        <input id="img-upload" type="file" accept="image/*">
      </div>
      <div class="preview">
        <img>
      </div>
      <table>
        <tr>
          <th>图片名</th>
          <th>文件大小</th>
          <th>进度</th>
          <th>操作</th>
          <th>操作</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <div class="range-value"></div>
            <input class="range" id="range" type="range" min="0" max="100" step="1" disabled>
          </td>
          <td></td>
          <td>
            <button>上传</button>
            <button>删除</button>
          </td>
        </tr>
      </table>
      <button>立即上线</button>
      <button>存为草稿</button>
      <button>取消</button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'add'
  }
</script>

<style>

  .add-box > .edit {
    background-color: #fbfbfb;
    border: 1px solid #cccccc; }
  .add-box > .inner {
    padding: 50px;
    border: 1px solid #cccccc;
    border-top: none; }
  .add-box > .inner > .title > input, .add-box > .inner .url > input {
    width: 60%; }
  .add-box > .inner > .img-upload > input {
    display: none; }
  .add-box > .inner > .preview > img {
    max-width: 200px; }
  .add-box > .inner > .explain {
    display: flex; }
  .add-box > .inner > .explain > span {
    word-break: keep-all; }
  .add-box > .inner > .explain > #ueditor {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1; }
  .add-box > .inner > div {
    padding-bottom: 20px; }
  .add-box > .inner > table {
    margin-bottom: 20px; }
  .add-box > .inner > table th, .add-box > .inner > table td {
    padding: 10px 20px;
    text-align: center; }
  .add-box > .inner > table td {
    position: relative;
    vertical-align: middle; }
  .add-box > .inner > table td > .range {
    padding: 0;
    outline: none;
    -webkit-appearance: none;
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 10px;
    background: -webkit-linear-gradient(#0930a6, #0e4aff, #07298c) no-repeat, #c9c9c9;
    background-size: 0 100%;
    height: 23px;
    transition: all linear 0.5s; }
  .add-box > .inner > table td > .range::-webkit-slider-thumb {
    display: none; }
  .add-box > .inner > table td > .range-value {
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 12px);
    width: 40px;
    height: 22px;
    line-height: 22px;
    color: white; }
  .add-box > .inner table, .add-box > .inner th, .add-box > .inner td {
    border-collapse: collapse;
    border: 1px solid #cccccc; }
</style>
