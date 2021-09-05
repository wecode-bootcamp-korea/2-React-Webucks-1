import React from 'react';
import './Login.scss';

class ActiveButn extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      butnVaild: 'defaultButton',
    };
  }

  handleIdInput = event => {
    if (event.target.type === 'text') {
      this.setState({
        id: event.target.value,
      });
    } else if (event.target.type === 'password') {
      this.setState({
        pw: event.target.value,
      });
    }
  };

  butnActive = () => {
    return this.state.id.includes('@') && this.state.pw.length >= 5
      ? this.setState({ butnVaild: 'activeButton' })
      : this.setState({ butnVaild: 'defaultButton' });
  };

  toList = () => {
    if (this.state.butnVaild === 'activeButton')
      this.props.history.push('/list-jinsung');
  };

  render() {
    return (
      <div class="innerBox">
        <input
          onChange={this.handleIdInput}
          onKeyUp={this.ButnActive}
          class="inputBox"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={this.handleIdInput}
          onKeyUp={this.ButnActive}
          class="inputBox"
          type="password"
          placeholder="비밀번호"
        />
        <button class={this.state.butnVaild} onClick={this.toList}>
          로그인
        </button>
      </div>
    );
  }
}

export default ActiveButn;
