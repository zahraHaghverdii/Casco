"use client";

import {
  fetchCommentIdProduct,
  fetchCommentsAllProduct,
} from "@/api/fetch_comment";
import {
  useCommentsIdStore,
  useCommentsAllStore,
} from "@/zustand/useCommentsStore";
import { useEffect } from "react";

// ------------------------------------- fetchCommentsProduct -------------------------------------
const useProductAllComments = () => {
  const setComments = useCommentsAllStore((state) => state.setComments); // گرفتن متد به‌روزرسانی کامنت‌ها
  const comments = useCommentsAllStore((state) => state.comments); // گرفتن کامنت‌ها از Zustand

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedComments = await fetchCommentsAllProduct(); // دریافت کامنت‌ها از API
        setComments(fetchedComments); // ذخیره کامنت‌ها در Zustand
      } catch (error) {
        console.error("Error fetching all comments:", error);
      }
    };

    fetchData();
  }, [setComments]);

  return comments;
};

// ------------------------------------- useProductIdComments -------------------------------------
const useProductIdComments = (productId: string) => {
  const setCommentsId = useCommentsIdStore((state) => state.setCommentsId); // گرفتن متد به‌روزرسانی کامنت‌های محصول
  const commentsId = useCommentsIdStore((state) => state.commentsId); // گرفتن کامنت‌های محصول از Zustand

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedComments = await fetchCommentIdProduct({ productId }); // دریافت کامنت‌ها بر اساس محصول
        setCommentsId(fetchedComments); // ذخیره کامنت‌های محصول در Zustand
      } catch (error) {
        console.error(
          `Error fetching comments for product ${productId}:`,
          error
        );
      }
    };

    fetchData();
  }, [productId, setCommentsId]);

  return commentsId;
};

export { useProductAllComments, useProductIdComments };
