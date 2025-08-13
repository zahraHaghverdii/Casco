// "use client";
// import { useFetchUserStore, useInputsDataStore } from "@/zustand/store";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function InputsLogin() {
//   const [password_icon, setPassword_icon] = useState(false);

//   const rout = useRouter();
//   const {
//     sign_in_up,
//     inputs = {},
//     fn_giveDataInputs,
//     fn_reset,
//   } = useInputsDataStore();

//   const { fetch_user, users, fn_ch_massgeLogin, find_user } =
//     useFetchUserStore();

//   useEffect(() => {
//     fetch_user();
//   }, []);

//   const inouts_signIn = [
//     { type: "text", title: "username", placeholder: "حساب کاربری" },
//     { type: "password", title: "password", placeholder: "رمز عبور" },
//   ];
//   const inouts_signUp = [
//     { type: "text", title: "username", placeholder: "حساب کاربری" },
//     { type: "password", title: "password", placeholder: "رمز عبور" },
//     { type: "text", title: "phone", placeholder: "شماره تلفن" },
//     { type: "email", title: "email", placeholder: "ایمیل" },
//   ];

//   function CkeckUser() {
//     switch (sign_in_up) {
//       //---------------------------------------------------sign in
//       case "In":
//         for (const item of users) {
//           if (
//             item.username === inputs.username &&
//             item.password === inputs.password
//           ) {
//             fn_ch_massgeLogin("1");
//             setTimeout(() => {
//               fn_reset();
//               rout.push(
//                 `/accont?username=${item.username}&password=${item.password}`
//               );
//               fn_ch_massgeLogin("0");
//             }, 700);
//             find_user(item);
//             return;
//           }
//         }
//         fn_ch_massgeLogin("2");
//         setTimeout(() => {
//           fn_ch_massgeLogin("0");
//         }, 700);
//         break;

//       //-------------------------------------------------sign up
//       case "Up":
//         rout.push("/accont");
//         break;
//     }
//   }

//   return (
//     <div className="flex flex-col gap-[10px]">
//       {(sign_in_up === "In" ? inouts_signIn : inouts_signUp).map(
//         (item, index) => (
//           <div className="flex flex-col text-right relative" key={index}>
//             <input
//               value={inputs[item.title] || ""}
//               onChange={(e) => {
//                 fn_giveDataInputs({ [item.title]: e.target.value });
//               }}
//               type={
//                 item.title !== "password"
//                   ? item.type
//                   : password_icon
//                   ? "text"
//                   : "password"
//               }
//               placeholder={item.placeholder}
//               className="w-[300px] sm:w-[500px] lg:w-[270px] h-[44px] text-[16px] text-[#000000b8] placeholder:text-[gray] outline-none focus:scale-[1.05] pr-[5px] text-right border-b-[1px] border-[#000000c4]"
//             />
//             {item.title === "password" && (
//               <div
//                 className="absolute left-[3px] bottom-[20px] w-[20px] h-[20px] bg-[red] cursor-pointer"
//                 onClick={() => {
//                   setPassword_icon((prev) => !prev);
//                 }}
//               ></div>
//             )}
//           </div>
//         )
//       )}
//       <button
//         className="w-[300px] sm:w-[500px]  lg:w-[270px] h-[40px] bg-[#1500ff] text-[white] mt-[20px] rounded-[7px] cursor-pointer font-[700] transition-color duration-200 delay-100 hover:bg-blue-500"
//         onClick={() => {
//           CkeckUser();
//         }}
//       >
//         {sign_in_up === "In" ? "وارد شدن" : "ثبت شدن"}
//       </button>
//     </div>
//   );
// }

import React from "react";

export default function inputs_login() {
  return <div>inputs_login</div>;
}
