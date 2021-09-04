import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      isActive: false,
    };
  }

  handleIdInput = e => {
    this.setState(
      {
        id: e.target.value,
      },
      () => this.handleBtn()
    );
  };

  handlePWInput = e => {
    this.setState(
      {
        password: e.target.value,
      },
      () => this.handleBtn()
    );
  };

  handleBtn = () => {
    this.state.id.includes('@') && this.state.password.length >= 5
      ? this.setState({ isActive: true, className: 'loginBtn active' })
      : this.setState({ isActive: false, className: 'loginBtn' });
  };

  goToList = () => {
    if (this.state.isActive) {
      this.props.history.push('./list-changhyun');
    }
  };

  render() {
    return (
      <section className="Login">
        <div className="logInBox">
          <p className="logInlogo">WeBucks</p>
          <form className="form" action="./list.html">
            <div>
              <input
                className="text"
                type="text"
                placeholder="아이디"
                value={this.state.id}
                onChange={this.handleIdInput}
                onKeyPress={this.handleBtn}
              />
            </div>
            <div>
              <input
                className="password"
                type="password"
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.handlePWInput}
                onKeyPress={this.handleBtn}
              />
            </div>
            <div>
              <button
                className={this.state.isActive ? 'loginBtn active' : 'loginBtn'}
                onClick={this.goToList}
              >
                로그인
              </button>
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
