import { useEffect } from "react";
import PostList from "@/components/PostList";
import Container from "@/components/Container";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import useFetchPosts from "@/hooks/useFetchPosts";

export default function Home() {
  const { posts, fetchPosts, filterPosts } = useFetchPosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts])

  return (
    <Container>
      <SearchFilter filterPosts={filterPosts} />
      <PostList posts={posts} />
    </Container>
  );
}