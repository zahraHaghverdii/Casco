// "use client";

// import { useFetchUserStore } from "@/zustand/store";

// export default function MassageLogin() {
//   const { massgeLogin, fn_ch_massgeLogin } = useFetchUserStore();

//   return (
//     <>
//       {massgeLogin !== "0" && (
//         <div
//           className={`w-[200px] h-[40px] rounded-[5px]  flex justify-center items-center text-[white] font-[700] ${
//             massgeLogin === "1" ? "bg-[#006936] " : "bg-[#a91f1f]"
//           }`}
//         >
//           {massgeLogin === "1" ? (
//             <div>
//               <span>ورود موفقیت آمیز بود</span>
//             </div>
//           ) : (
//             massgeLogin === "2" && <div>ورود موفقیت آمیز نبود</div>
//           )}
//         </div>
//       )}
//     </>
//   );
// }

import React from "react";

export default function massageLogin() {
  return <div>massageLogin</div>;
}
