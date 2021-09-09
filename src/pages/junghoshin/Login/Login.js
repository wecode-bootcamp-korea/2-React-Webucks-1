// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './Login.scss';

// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Id: '',
//       Pw: '',
//       IdComfirm: false,
//       PwComfirm: false,
//     };
//   }

//   // id check

//   handleIdInput = event => {
//     this.setstate({
//       Id: event.target.value,
//     });
//     if (event.target.value.includes('@')) {
//       this.setstate({ IdComfirm: true });
//     }
//   };

//   // pw check

//   handlePwInput = event => {
//     this.setstate({ Pw: event.target.value });
//     if (event.target.value.length >= 5) {
//       this.setstate({ PwComfirm: true }, () => this.BtnColorChange());
//     }
//   };
//   // loginbtn change
//   BtnColorChange = () => {
//     if (this.state.IdComfirm && this.state.PwComfirm) {
//       this.setstate({ btnColor: '#307dc0' });
//     }
//   };

//   render() {
//     return (
//       <div className="loginBox">
//         <span className="logo">WeBucks</span>

//         <input
//           id="id"
//           type="text"
//           placeholder="전화번호, 사용자 이름 또는 이메일"
//           value={this.inputId}
//           name="inputId"
//           onChange={this.handleIdInput}
//         />

//         <input
//           id="pw"
//           type="password"
//           placeholder="비밀번호"
//           value={this.inputPw}
//           name="inputPw"
//           onChange={this.handlePwInput}
//         />

//         <Link to="/list-jungho">
//           <button
//             type="button"
//             id="loginBtn"
//             style={{ backgroundColor: this.state.btnColor }}
//             onClick={this.goToList}
//           >
//             로그인
//           </button>
//         </Link>

//         {/* <button
//           type="button"
//           id="loginBtn"
//           style={{ opacity: this.state.opacity }}
//           onClick={this.goToList}
//         >
//           로그인
//         </button> */}

//         <span id="forgotPw">비밀번호를 잊으셨나요?</span>
//       </div>
//     );
//   }
// }

// export default Login;
