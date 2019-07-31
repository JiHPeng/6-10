<template>
  <div id="login">
    <div class="login-box">
      <div class="box">
        <img src="../assets/login/logo.png">
        <form name = loginForm novalidate class="login-form">
          <label for="user">
            <input v-model="id" type="text" name="uid" id="user" placeholder="用户名" required>
            <!--<svg class="user-icon">-->
              <!--<use xlink:href="#icon-user"></use>-->
            <!--</svg>-->
          </label>
          <label for="pword">
            <input v-model="pword" type="password" name="pwd" id="pword" placeholder="密码" required>
            <!--<svg class="password-icon">-->
              <!--<use xlink:href="#icon-lock"></use>-->
            <!--</svg>-->
          </label>
          <!--<p ng-show="loginForm.uid.$error.required && loginForm.pwd.$dirty">请填写用户名</p>-->
          <!--<p ng-show="loginForm.pwd.$error.required && loginForm.uid.$dirty">请填写密码</p>-->
          <p>请填写用户名和密码</p>
          <input type="submit" id="signin" value="登录">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        id: '111',
        pword: ''
      }
    }
  }

</script>

<style>
  .login-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url("../assets/login/bg.jpg") no-repeat;
    background-position: center;
    background-size: cover; }
  .login-box .box {
    position: relative;
    padding: 50px 0;
    width: 320px;
    border-radius: 5px;
    background-color: #fff; }
  .login-box .box img {
    position: absolute;
    top: -35px;
    left: calc(50% - 35px);
    border-radius: 35px;
    box-shadow: 0 0 5px -3px; }
  .login-box .box form {
    display: flex;
    flex-direction: column;
    padding: 15px; }
  .login-box .box form label {
    position: relative; }
  .login-box .box form label img {
    -webkit-filter: drop-shadow(40px 0 #F88E1D);
    transform: translateX(-100%); }
  .login-box .box form input {
    margin: 10px 0;
    padding: 10px 0;
    width: 100%;
    height: 44px;
    line-height: 24px;
    border-radius: 5px;
    outline: none; }
  .login-box .box form #user, .login-box .box form #pword {
    padding-left: 50px;
    border: 1px solid #cccccc; }
  .login-box .box form #user:focus, .login-box .box form #pword:focus {
    border: 1px solid orange; }
  .login-box .box form #user:focus + svg, .login-box .box form #pword:focus + svg {
    color: orange; }
  .login-box .box form p {
    position: absolute;
    top: 190px;
    color: red;
    font-size: 12px;
    height: 12px; }
  .login-box .box form #signin {
    margin-top: 20px;
    text-align: center;
    color: #fff;
    background-color: #eea92b;
    border: none; }

  .user-icon {
    position: absolute;
    top: 18px;
    left: 10px;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
    color: #cccccc; }

  .password-icon {
    position: absolute;
    top: 18px;
    left: 10px;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
    color: #cccccc; }

  /*# sourceMappingURL=index.css.map */

</style>
