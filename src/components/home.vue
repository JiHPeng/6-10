<template>
    <div class="main-box">
      <header class="container-fluid">
        <div class="row justify-content-between align-items-center">
          <img src="../assets/logo.png">
          <div class="row align-items-center">
            <button>管理员</button>
            <img src="../assets/header-icon.png">
            <button>刘德华</button>
            <button>退出</button>
          </div>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <div>
              <img id="home" src="../assets/home.png">
              <router-link to="/home/welcome">欢迎页</router-link>
            </div>
          </li>
          <li>
            <div>
              <img src="../assets/tools.png">
              <p>信息管理</p>
              <img src="../assets/arrow.png">
            </div>
            <ul>
              <li>公司信息</li>
              <li>职位信息</li>
            </ul>
          </li>
          <li>
            <div>
              <img src="../assets/tools.png">
              <p>内容管理</p>
              <img src="../assets/arrow.png">
            </div>
            <ul>
              <li><router-link to="/home/Article">Article管理</router-link></li>
            </ul>
          </li>
          <li>
            <div>
              <img src="../assets/tools.png">
              <p>后台管理</p>
              <img src="../assets/arrow.png">
            </div>
            <ul>
              <li>账号管理</li>
              <li>角色管理</li>
              <li>修改密码</li>
              <li>模块管理</li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="router-box">
          <router-view></router-view>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>

  header {
    background-color: #f2f2f2;
    border-bottom: 1px solid #cccccc; }
  header > .row {
    height: 80px;
    padding: 5px 15px; }
  header > .row img {
    height: 60px; }
  header > .row > .row {
    padding-right: 20px; }
  header > .row > .row img {
    height: 24px; }
  header > .row > .row button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer; }
  header > .row > .row button:focus {
    outline: none; }
  header > .row > .row button:hover {
    color: red; }

  nav {
    position: absolute;
    left: 0;
    width: 200px;
    height: 600px;
    font-size: 16px;
    background-color: #f2f2f2;
    border: 1px solid #cccccc; }
  nav > ul {
    margin: -1px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-bottom: none; }
  nav > ul > li > div {
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #000000;
    font-weight: bold; }
  nav > ul > li > div > #home {
    height: 25px;
    padding: 0 7.5px; }
  nav > ul > li > div > img {
    padding: 0 10px;
    height: 20px; }
  nav > ul > li > div > img:last-child {
    height: 20px;
    transform: rotate(90deg); }
  nav > ul > li > div > p {
    flex: 1; }
  nav > ul > li > ul > li {
    margin: 0 20px;
    padding: 12px 0;
    border-bottom: 1px solid #cccccc;
    text-indent: 25px; }
  nav > ul > li > ul > li:last-child {
    margin: 0;
    border-bottom: 1px solid #000000;
    text-indent: 45px; }
  .router-box {
    position: absolute;
    top: 90px;
    right: 10px;
    left: 210px;
  }
  /*# sourceMappingURL=home.css.map */

</style>
