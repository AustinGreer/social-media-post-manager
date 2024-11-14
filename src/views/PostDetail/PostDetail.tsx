import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

import { getPostById } from '@/services/postsApi';
import useControlModal from '@/hooks/useControlModal';
import usePostForm from '@/hooks/usePostForm';
import Container from '@/components/Container';
import DeleteModal from '@/components/DeleteModal';
import PostForm from '@/components/PostForm';
import ErrorBanner from '@/components/ErrorBanner';
import PostDetailCard from '@/components/PostDetailCard';

function PostDetail() {
  const [postDetails, setPostDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { open, handleOpen, handleClose } = useControlModal();

  const {
    formValues,
    formErrors,
    handleChange,
    handlePostTypeChange,
    handleSubmit,
  } = usePostForm(postDetails, fetchPostById);

  const toggleEditMode = () => setIsEditing((prev) => !prev);

  const submitPost = async (e) => {
    try {
      const successfulSubmission = await handleSubmit(e, true);

      if (successfulSubmission) {
        toggleEditMode();
      }
    } catch (error) {
      setErrorMessage(`Error occurred while updating the post: ${error}`);
    }
  }

  async function fetchPostById(postId) {
    try {
      const result = await getPostById(postId)
      setPostDetails(result);
    } catch (error) {
      setErrorMessage(`error occurred while fetching post: ${error}`);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPostById(id);
    }
  }, [id])

  return (
    <Container>
      {errorMessage && <ErrorBanner message={errorMessage} />}

      {isEditing && postDetails ?

        <PostForm
          post={formValues}
          errors={formErrors}
          handleChange={handleChange}
          handlePostTypeChange={handlePostTypeChange}
          action={"Update Post"}
          handleSubmit={submitPost}
        >
          <Button variant="outlined" sx={{ marginRight: 3, textTransform: "none" }} onClick={toggleEditMode}>Cancel</Button>
        </PostForm>
        :
        <PostDetailCard
          postDetails={postDetails}
          toggleEditMode={toggleEditMode}
          handleOpen={handleOpen}
        />
      }

      {open ?
        <DeleteModal
          openModal={open}
          handleCloseModal={handleClose}
          postId={postDetails?.id}
        />
        : null}
    </Container>
  )
}

export default PostDetail