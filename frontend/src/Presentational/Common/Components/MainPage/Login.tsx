import React from 'react';
import * as LoginStyle from './Login_Style';

type GetToken = {
  getkakaoToken: () => void;
  getgoogleToken: () => void;
};

function Login({ getkakaoToken, getgoogleToken }: GetToken) {
  return (
    <LoginStyle.WrapLogin>
      <LoginStyle.LoginImg onClick={getkakaoToken} src="assets/ko/kakao.png" alt="" />
      <LoginStyle.LoginImg onClick={getgoogleToken} src="assets/ko/google.png" alt="" />
    </LoginStyle.WrapLogin>
  );
}

export default Login;
