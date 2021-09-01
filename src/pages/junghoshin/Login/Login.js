import React, { Component } from 'react';
import './Login.scss';


class Login extends Component {
  render(){
    return (
        <div>
            <section class="WeBucks">
                <div class='header'>    
                    <h1>WeBucks</h1>
                </div>
                <div class='login-container'>
                    <form class='loginBox' name="login-box" action="#">

                        <input type="text" id="id" placeholder="전화번호, 사용자 이름 또는 이메일"/>

                        <input type="password" id="password" placeholder="비밀번호"/>   

                        <button class="login-btn">로그인</button>
                    </form>
                </div>    
                <div class='footer'>
                    <p>비밀번호를 잊으셨나요?</p>
                </div>   
            </section>  
        </div>
    )
  }
}
    
export default Login;





/*const userId = document.getElementById('id'); //id input
const userPw = document.getElementById('password'); //pw input
const logbtn = document.getElementsByClassName('login-btn')[0]; //login btn

console.log(userId);

userId.addEventListener('keyup', function () {
    const inputId = document.getElementById('id').value;
    const inputPw = document.getElementById('password').value;

    if (inputPw.includes('@') && inputPw.length >= 8) {
        console.log(123);

        logbtn.style.opacity = 10;
    }
    logbtn.addEventListener("click","list.html")

});*/




/*
userId.addEventListener('keyup',loginButtonColor)
// console.log(loginButtonColor)
userPw.addEventListener('keyup',loginButtonColor)
logbtn.addEventListener('keyup',loginButtonColor)
*/

