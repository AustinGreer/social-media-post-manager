import { useEffect } from "react";
import PostList from "@/components/PostList";
import Container from "@/components/Container";
import SearchFilter from "@/components/SearchFilter";
import useFetchPosts from "@/hooks/useFetchPosts";

export default function Home() {
  const { posts, fetchAllPosts, filterPostsBySearch, filterPostsByType } = useFetchPosts();

  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts])

  return (
    <Container>
      <SearchFilter filterPostsBySearch={filterPostsBySearch} filterPostsByType={filterPostsByType} />
      <PostList posts={posts} />
    </Container>
  );
}