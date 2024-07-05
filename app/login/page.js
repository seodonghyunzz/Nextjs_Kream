'use client'

import { useForm } from "react-hook-form";


export default function Login() {


  // 이메일, 패스워드 정규식
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,16}$/

  const {register, formState:{errors}} = useForm({mode:'onChange'});
  
    return (
      <>
        <div className="loginSection">       
          <div className="loginWrapper">
            <div className="loginLogo">
                <span>KREAM</span>
                <span>KICKS RULE EVERYTHING AROUND ME</span>
            </div>
            <div className="loginInput">
                <label htmlFor="email">이메일 주소</label>
                <input id="email" type="email" placeholder="예) kream@kream.co.kr" className="loginEmail"
                {...register("email",{
                  required: true,
                  pattern:{
                    value: emailRegEx,  
                  }
                })}></input>

                <div className="loginErrorMsgBox">
                {errors?.email?.type === 'pattern' && (
                  <span classname="loginErrorMsg">이메일 주소를 정확히 입력해주세요.</span>
                )}</div>

                <label htmlFor="pw">비밀번호</label>
                <input id="pw" type="password" className="loginEmail" {...register("pw",{
                  required:"비밀번호는 필수 입력값입니다.",
                  pattern:{
                    value: passwordRegEx,
                  }
                })}
                ></input>

                <div className="loginErrorMsgBox">
                {errors?.pw?.type === 'pattern' && (
                  <span classname="loginErrorMsg">영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)</span>
                )}
                </div>

                {(errors.email || errors.pw) ?
                  <button type="submit" className="loginBtn_Off">로그인</button>
                 :
                  <button type="submit" className="loginBtn_On">로그인</button>
                }
                
            </div>
            <div className="loginHelp">
              <a href="#" className="loginHelpContents">이메일 가입</a>
              <a href="#" className="loginHelpContents">이메일 찾기</a>
              <a href="#">비밀번호 찾기</a>
            </div>
            <div className="loginOther"></div>
          </div>
        </div>
      </>
    );
  }