"use client";
import { useInputsDataStore } from "@/zustand/store";
import InputsLogin from "./inputs_login";
import MassageLogin from "./massageLogin";

export default function Login() {
  const { fn_ch_signIn_Up, sign_in_up, fn_reset } = useInputsDataStore();
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex lg:flex-row flex-col justify-between ">
        <div className="absolute top-1 right-1">
          <MassageLogin />
        </div>
        {/* ----------------------------------------------image login */}
        <div className="w-[100%] lg:h-[100%] h-[330px] bg-[#e1e1e1]">
          {/* <img src="" alt="" /> */}
        </div>
        {/*-------------------------------------------------- inputs */}
        <div className="w-[100%] h-[100%] flex flex-col justify-start lg:justify-center items-center gap-[10px] ">
          <div className="mt-[10px]">
            <span>code vision</span>
          </div>
          {sign_in_up === "In" ? (
            <div
              className="cursor-pointer w-[270px] "
              onClick={() => {
                fn_ch_signIn_Up("Up");
                fn_reset();
                console.log(sign_in_up);
              }}
            >
              <p className="text-[#000000dc]">
                هنوز عضو نشدی؟
                <span className="text-[#000066b0] font-[700]   ">
                  ایجاد حساب کاربری
                </span>
              </p>
            </div>
          ) : (
            <div
              className="cursor-pointer w-[270px] text-right  "
              onClick={() => {
                fn_reset();
                fn_ch_signIn_Up("In");
                console.log(sign_in_up);
              }}
            >
              <p className="text-[#000000dc] ">
                اگه حساب کاربری داری{" "}
                <span className="text-[#000066b0] font-[700] ">
                  همین حال وارد شو
                </span>
              </p>
            </div>
          )}
          <InputsLogin />
        </div>
      </div>
    </>
  );
}
