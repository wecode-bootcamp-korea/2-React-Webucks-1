import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <section>
        <div className="logInBox">
          <p className="logInlogo">WeBucks</p>
          <form className="form" action="./list.html">
            <div>
              <input
                className="text"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div>
              <input
                className="password"
                type="password"
                placeholder="비밀번호"
              />
            </div>
            <div>
              <Link>
                <button className="button" disabled="disabled">
                  로그인
                </button>
              </Link>
            </div>
          </form>
          <a className="link" href="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </section>
    );
  }
}
export default Login;
