import { useRouter } from "next/router";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import PlayCircleFilledRounded from "@mui/icons-material/PlayCircleFilledRounded";
import ArticleRounded from "@mui/icons-material/ArticleRounded";

function Post({ post }) {
  const router = useRouter();
  
  return (
    <Card
      sx={{
        display: 'flex',
        cursor: 'pointer',
        mb: 2,
        p: 2,
        bgcolor: 'var(--surface)',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)'
        }
      }}
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      {/* Thumbnail */}
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          overflow: 'hidden',
          flexShrink: 0,
          mr: 2
        }}
      >
        <div className="thumbnail-placeholder">
          { post.type === "Image" && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="thumbnail-image"
            />
          )}

          {post.type === "Video" && (
            <div className="thumbnail-placeholder video-thumbnail">
              <PlayCircleFilledRounded />
            </div>
          )}

          {post.type === "Text" && (
            <div className="thumbnail-placeholder text-thumbnail">
              <ArticleRounded />
            </div>
          )}
        </div>
      </Box>

      {/* Content */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
      }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ color: 'var(--text-primary)', mb: 1 }}
          >
            {post.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              display: 'inline-block',
              bgcolor: 'var(--primary)',
              color: 'var(--text-primary)',
              px: 1,
              py: 0.5,
              borderRadius: 1
            }}
          >
            {post.type}
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default Post