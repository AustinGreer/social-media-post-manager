import { Card, Box, CardMedia, Typography, Button } from '@mui/material';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

import BackButton from './BackButton';
function PostDetailCard({ postDetails, toggleEditMode, handleOpen}) {
  return (
    <>
          <BackButton />
          <Card
            sx={{
              backgroundColor: 'var(--surface)',
              color: 'var(--text-primary)',
              paddingLeft: 7
            }}
          >
            <Typography variant="h4" sx={{ marginBottom: 2, marginTop: 2 }}>{postDetails?.title}</Typography>

            {postDetails?.type !== "Text" ?
              <Box
                sx={{
                  width: 350,
                  height: 280,
                  flexShrink: 0,
                  mr: 2,
                  mb: 4
                }}
              >
                <CardMedia
                  component={postDetails?.type === "Image" ? "img" : "video"}
                  src={postDetails?.type === "Image" ? postDetails?.imageUrl : postDetails?.videoUrl}
                  alt={postDetails?.title}
                  controls={postDetails?.type === "Video"}
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 1,
                  }}
                />
              </Box>
              : null}

            <Box sx={{ marginBottom: 4 }}>
              <Typography variant="h5" sx={{ marginBottom: 1 }}>Description</Typography>
              <Typography variant="body1" sx={{ width: "50%" }}>{postDetails?.body}</Typography>
            </Box>

            <Box sx={{ display: 'flex', marginBottom: 4 }}>
              <Button
                variant="contained"
                startIcon={<Edit />}
                onClick={toggleEditMode}
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
        </>
  )
}

export default PostDetailCard