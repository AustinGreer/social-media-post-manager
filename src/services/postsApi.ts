import api from "@/services/api";

export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getPostById = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const searchPosts = async (searchTerm = "") => {
  try {
    const params = searchTerm ? { title: searchTerm } : {};
    const response = await api.get("/posts", {params});
    return response.data;
  } catch (error) {
    // adding this to treat "Not Found" errors as empty lists
    if (error.response?.status === 404) {
      return [];
    } else {
      throw error;
    }
  }
}

export const fetchPostsByType = async (type = "all") => {
  try {
    const params = type !== "all" ? { type } : {};
    const response = await api.get("/posts", { params });
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return [];
    } else {
      throw error;
    }
  }
};

export const addPost = async (newPost) => {
  try {
    const response = await api.post("/posts", newPost);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const updatePost = async (updatedPost) => {
  try {
    const response = await api.put(`/posts/${updatedPost.id}`, updatedPost);
    
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const deletePost = async (postId) => {
  try {
    await api.delete(`/posts/${postId}`);
  } catch (error) {
    throw error;
  }
}