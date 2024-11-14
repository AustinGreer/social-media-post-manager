import { useState, useCallback } from "react";
import { getPosts, searchPosts, fetchPostsByType } from "@/services/postsApi";

export default function useFetchPosts() {
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = useCallback(async () => {
    try {
      const response = await getPosts();
      setPosts(response);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  const filterPostsBySearch = async (searchTerm = "") => {
    try {
      const result = await searchPosts(searchTerm);
      setPosts(result);
    } catch (error) {
      throw error;
    }
  }

  const filterPostsByType = async (type = "all") => {
    try {
      const result = await fetchPostsByType(type);
      setPosts(result);
    } catch (error) {
      console.error("Error fetching posts by type:", error);
    }
  };

  return { posts, fetchAllPosts, filterPostsBySearch, filterPostsByType }
}