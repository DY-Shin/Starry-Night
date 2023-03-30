import React from 'react';
import * as LoginStyle from './Login_Style';

type Test = {
  test: () => void;
};

function Login({ test }: Test) {
  return <LoginStyle.LoginImg onClick={test} src="assets/ko/kakao_login_large_narrow.png" alt="" />;
}

export default Login;
