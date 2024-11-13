import { useState } from "react";
import api from "@/services/api";

function useModifyPost() {
  const deletePost = async (postId) => {
    try {
      await api.delete(`/posts/${postId}`);
    } catch (error) {
      throw error;
    }
  }

  return { deletePost }
}

export default useModifyPost;