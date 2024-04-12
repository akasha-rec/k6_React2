import { useRecoilState } from "recoil" //recoil 상태 바꾸기
import { isLogin } from "./StAtom";
import { useState, useEffect } from "react";
import LogInHome from "./LogInHome";
import Logout from "./Logout";

export default function Login() {
    const [user, setUser] = useState();
    const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin);

    //localStorage에 저장 > 버튼
    const handleLogin = (info) => {
        localStorage.setItem('user', info); //setItem에 key를 인수로 줘야
        setUser(info);
        setIsLoginCheck(true);
    }
    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setIsLoginCheck(false);
    }

    //맨 처음 한 번 실행
    useEffect(()=>{
        const luser = localStorage.getItem('user')
        console.log(luser)
        if (luser) {
            setUser(luser);
            setIsLoginCheck(true);
         } else {
            setUser(null);
            setIsLoginCheck(false);
         } 
    },[])
    
  return (
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {isLoginCheck ? <Logout user={user} handleLogout = {handleLogout} />
                    : <LogInHome handleLogin = {handleLogin}/>}
  </div>
  )
}
