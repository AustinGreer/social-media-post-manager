import { useState, useCallback } from "react";
import api from "../services/api";

export default function useFetchPosts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await api.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  const filterPosts = async (searchTerm = "") => {
    try {
      const params = searchTerm ? { title: searchTerm } : {};
      const response = await api.get("/posts", {params});
      setPosts(response.data);
    } catch (error) {
      // adding this to treat "Not Found" errors as empty objects
      if (error.response?.status === 404) {
        setPosts([]);
      } else {
        console.error("error occurred while filtering posts:", error)
      }
    }
  }

  return { posts, fetchPosts, filterPosts }
}