import { defaultPostValues } from "@/utils/defaultPostFormValues";
import usePostForm from "@/hooks/usePostForm";
import PostForm from "@/components/PostForm";
import Container from "@/components/Container";
import BackButton from "@/components/BackButton";

function CreatePost() {
  const {
    formValues,
    formErrors,
    handleChange,
    handlePostTypeChange,
    handleSubmit,
  } = usePostForm(defaultPostValues);
  
  return (
    <Container>
      <BackButton />
      <PostForm 
        post={formValues}
        errors={formErrors}
        handleChange={handleChange}
        handlePostTypeChange={handlePostTypeChange}
        action={"Create Post"}
        handleSubmit={(e) => handleSubmit(e, false)}
      />
    </Container>
  )
}

export default CreatePost