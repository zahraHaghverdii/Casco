import { Comment } from "@/types/products";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// ------------------------------ CommentsState Interface ------------------------------
interface CommentsState {
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
}

// ------------------------------ CommentsIdState Interface ------------------------------
interface CommentsIdState {
  commentsId: Comment[];
  setCommentsId: (comments: Comment[]) => void;
}

// ------------------------------ useCommentsAllStore ------------------------------
const useCommentsAllStore = create<CommentsState>()(
  persist(
    (set) => ({
      comments: [], // مقدار اولیه
      setComments: (comments) => set({ comments }), // متد برای تغییر کامنت‌ها
    }),
    {
      name: "comments-store", // کلید برای ذخیره‌سازی در storage
      storage: createJSONStorage(() => sessionStorage), // استفاده از sessionStorage برای ذخیره‌سازی
    }
  )
);

// ------------------------------- useCommentsIdStore ------------------------------
const useCommentsIdStore = create<CommentsIdState>()(
  persist(
    (set) => ({
      commentsId: [], // مقدار اولیه
      setCommentsId: (commentsId) => set({ commentsId }), // متد برای تغییر کامنت‌ها
    }),
    {
      name: "comments-store-id", // کلید برای ذخیره‌سازی در storage
      storage: createJSONStorage(() => sessionStorage), // استفاده از sessionStorage برای ذخیره‌سازی
    }
  )
);

export { useCommentsAllStore, useCommentsIdStore };
