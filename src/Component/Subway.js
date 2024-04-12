import { useRecoilValue } from "recoil" //recoil 상태 바꾸기
import { isLogin } from "./StAtom";
import Login from "./Login";

export default function Subway() {
    const isLoginCheck = useRecoilValue(isLogin);
  return (
    <div>
      {isLoginCheck ? "Subway" : <Login />}
    </div>
  )
}
