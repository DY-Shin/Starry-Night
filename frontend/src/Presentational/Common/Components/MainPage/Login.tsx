import React from 'react';
import * as LoginStyle from './Login_Style';

type GetToken = {
  getToken: () => void;
};

function Login({ getToken }: GetToken) {
  return <LoginStyle.LoginImg onClick={getToken} src="assets/ko/kakao_login_large_narrow.png" alt="" />;
}

export default Login;
