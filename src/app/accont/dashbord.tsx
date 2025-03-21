"use client";

import { useFetchUserStore } from "@/zustand/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashbord_Accont() {
  const { user, fn_giveDataInputs, edit_user, find_user, users, fetch_user } =
    useFetchUserStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [password_icon, setPassword_icon] = useState(false);
  const inputs = [
    {
      type: "text",
      title: "lastname",
      placeholder: "نام خانوادگی",
      title_text: "نام خانوادگی",
    },
    { type: "text", title: "name", placeholder: "نام", title_text: "نام" },
    {
      type: "text",
      title: "username",
      placeholder: "حساب کاربری",
      title_text: "حساب کاربری",
    },
    {
      type: "password",
      title: "password",
      placeholder: "********",
      title_text: "رمز عبور",
    },
    {
      type: "text",
      title: "phone",
      placeholder: "0912345678",
      title_text: "شماره تلفن",
    },
    {
      type: "email",
      title: "email",
      placeholder: "email@gmail.com",
      title_text: "ایمیل",
    },
  ];

  const username = searchParams.get("username");
  const password = searchParams.get("password");

  useEffect(() => {
    fetch_user();
  }, []);

  useEffect(() => {
    const foundUser = users.find(
      (item) => item.username === username && item.password === password
    );
    if (foundUser) {
      find_user(foundUser);
    }
  }, [users, username, password]);

  async function updateData() {
    await edit_user(user);
    router.replace(
      `/accont?username=${user.username}&password=${user.password}`
    );
  }

  if (user.id === undefined) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div>
      <div className="w-[100%] lg:w-[600px] flex flex-col flex-wrap lg:flex-row  justify-center items-center gap-[20px]">
        {inputs.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-center gap-[2px] items-center h-[80px] text-[14px] relative"
          >
            <label className="w-[100%] text-right text-[#717171]">
              {item.title_text}
            </label>

            <input
              value={user[item.title] || ""}
              onChange={(e) => {
                fn_giveDataInputs({ [item.title]: e.target.value });
              }}
              type={
                item.title !== "password"
                  ? item.type
                  : password_icon
                  ? "text"
                  : "password"
              }
              className="h-[44px] w-[250px] text-right pr-[5px] outline-none focus:scale-[1.1] bg-[#F6F6F6] text-[16px] rounded-[5px] placeholder:text-[#717171]"
              placeholder={item.placeholder}
            />
            {item.title === "password" && (
              <div
                className="absolute left-[3px] bottom-[18px] w-[20px] h-[20px] bg-[red] cursor-pointer"
                onClick={() => {
                  setPassword_icon((prev) => !prev);
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="w-[100%] h-[50px] flex justify-center items-center mt-[20px]">
        <button
          className="w-[250px] h-[44px] rounded-[7px] text-white text-[18px] font-[700] bg-blue-700 cursor-pointer hover:bg-blue-400 transition-colors duration-200 delay-100"
          onClick={updateData}
        >
          ثبت شدن
        </button>
      </div>
    </div>
  );
}
