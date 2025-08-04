"use client";
import { useProductIdComments } from "@/hooks/useProductComments";
import JalaliDate from "@/utils/JalaliDate";
import StarRating from "@/utils/StarRating ";
import { useState } from "react";

export default function FeedbackPage({ productId }: { productId: string }) {
  const comment = useProductIdComments(productId);

  const items = [
    { title: "نظرات کاربران", value: "comments" },
    { title: "ثبت دیدگاه شما", value: "add_comments" },
  ];
  const stars = [...Array(5)].map((_, index) => (index === 5 ? "★" : "☆"));

  const [view, setView] = useState("comments");

  return (
    <div className="rtl p-4 ">
      {/* Navigation */}
      <div className="flex gap-8 border-b border-gray-300 mb-6">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setView(item.value)}
            className={`pb-3 text-lg font-medium transition-all duration-200 ease-in-out ${
              view === item.value
                ? "text-(--color--Blue-700) border-b-2 border-(--color--Blue-700)"
                : "text-(--color-Gray) hover:text-(--color--Blue-700)"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* comments */}
      {view === "comments" && (
        <div className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {comment.length > 0 ? (
            comment.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-5 flex flex-col gap-y-4 last:border-none"
              >
                <div className="flex justify-between text-xl text-gray-500">
                  <span>{item.userName}</span>
                  <span>
                    <JalaliDate gregorianDate={item.createdAt} />
                  </span>
                </div>
                <div className="flex justify-items-start items-center gap-3">
                  <StarRating rating={item.rating} />
                  <span className="text-xl text-(--color-Gray)">
                    ({item.rating} امتیاز)
                  </span>
                </div>
                <p className="text-gray-700">{item.comment}</p>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center gap-4">
              <span className="text-blue-300 text-2xl">کامنتی وجود ندارد!</span>
              <button
                onClick={() => setView("add_comments")}
                className="text-blue-500 underline hover:text-blue-700 transition"
              >
                اولین نظر را ثبت کن!
              </button>
            </div>
          )}
        </div>
      )}

      {/* add_comments */}
      {view === "add_comments" && (
        <div className=" shadow-md flex flex-col gap-4 p-8 rounded-3xl border border-(--color-Gray-0) mt-20">
          <h2 className="text-xl font-medium text-gray-700">
            {" "}
            زهرا عزیز نظر خود را راجب این محصول ثبت کن :)
          </h2>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="دیدگاه خود را وارد کنید..."
            rows={4}
          ></textarea>
          <div className="flex justify-start items-center gap-4">
            {stars.map((star, index) => (
              <span
                key={index}
                className={`${
                  star === "★" ? "text-yellow-400" : "text-gray-400"
                } text-3xl cursor-pointer`}
              >
                {star}
              </span>
            ))}
          </div>
          <span className="w-full  py-5 flex justify-center items-center text-(--color-White) text-2xl border border-(--color--Blue-300) bg-(--color--Blue-300) hover:bg-(--color--Blue-600) cursor-pointer rounded-xl transition-all duration-200 ease-in-out">
            ارسال نظر
          </span>
        </div>
      )}
    </div>
  );
}
