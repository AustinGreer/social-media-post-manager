import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, Box, CardMedia, Typography, Button } from '@mui/material';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

import api from '@/services/api';
import useControlModal from '@/hooks/useControlModal';
import Container from '@/components/Container';
import BackButton from '@/components/BackButton';
import DeleteModal from '@/components/DeleteModal';

function PostDetail() {
  const [postDetails, setPostDetails] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const { open, handleOpen, handleClose } = useControlModal();

  useEffect(() => {
    if (id) {
      const fetchPostById = async (postId) => {
        try {
          const response = await api.get(`/posts/${postId}`);
          setPostDetails(response.data);
        } catch (error) {
          console.error("error occurred while fetching post", error);
        }
      };
  
      fetchPostById(id);
    }
  }, [id])

  return (
    <Container>
      <BackButton />
      <Card
        sx={{
          backgroundColor: 'var(--surface)',
          color: 'var(--text-primary)',
          paddingX: 3
        }}
      >
        <Typography variant="h4" sx={{marginBottom: 2, marginTop: 2}}>{postDetails?.title}</Typography>
        { postDetails?.type !== "Text" ?
        
        <CardMedia
          component={postDetails?.type === "Image" ? "img" : "video"}
          src={postDetails?.type === "Image" ? postDetails?.imageUrl : postDetails?.videoUrl}
          alt={postDetails?.title}
          controls={postDetails?.type === "Video"}
          sx={{ height: 200, marginBottom: "2rem" }}
        />
        : null }

        <Box sx={{marginBottom: 4}}>
          <Typography variant="h5" sx={{marginBottom: 1}}>Description</Typography>
          <Typography variant="body1" sx={{width: "50%"}}>{postDetails?.body}</Typography>
        </Box>

        <Box sx={{ display: 'flex', marginBottom: 4 }}>
          <Button
            variant="contained"
            startIcon={<Edit />}
            sx={{
              bgcolor: 'var(--primary)',
              marginRight: 2,
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'var(--primary-hover)'
              }
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            startIcon={<Delete />}
            color="error"
            sx={{ textTransform: 'none' }}
            onClick={handleOpen}
          >
            Delete
          </Button>
        </Box>
      </Card>

      { open ?
        <DeleteModal
          openModal={open}
          handleCloseModal={handleClose}
          postId={postDetails?.id}
        />
      : null }
    </Container>
  )
}

export default PostDetail