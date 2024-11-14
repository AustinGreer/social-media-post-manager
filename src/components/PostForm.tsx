import { TextField, Select, MenuItem, Button, Box, Typography } from '@mui/material';

function PostForm({ post, errors, handleChange, handlePostTypeChange, action, handleSubmit, children = null }) {
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 600 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>{action}</Typography>
      <TextField
        placeholder="Title"
        name="title"
        fullWidth
        value={post.title}
        onChange={handleChange}
        error={Boolean(errors.title)}
        helperText={errors.title}
        sx={{ marginBottom: 2}}
      />

      <TextField
        placeholder="Body"
        name="body"
        fullWidth
        multiline
        rows={4}
        value={post.body}
        onChange={handleChange}
        error={Boolean(errors.body)}
        helperText={errors.body}
        sx={{ marginBottom: 2}}
      />

      <Select
        value={post.type}
        onChange={(e) => handlePostTypeChange(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2}}
        displayEmpty
      >
        <MenuItem value="Text">Text</MenuItem>
        <MenuItem value="Image">Image</MenuItem>
        <MenuItem value="Video">Video</MenuItem>
      </Select>

      {post.type === 'Image' && (
        <TextField
          placeholder="Image URL"
          name="imageUrl"
          fullWidth
          value={post.imageUrl}
          onChange={handleChange}
          error={Boolean(errors.imageUrl)}
          helperText={errors.imageUrl}
          sx={{ marginBottom: 2}}
        />
      )}

      {post.type === 'Video' && (
        <TextField
          placeholder="Video URL"
          name="videoUrl"
          fullWidth
          value={post.videoUrl}
          onChange={handleChange}
          error={Boolean(errors.videoUrl)}
          helperText={errors.videoUrl}
          sx={{ marginBottom: 2}}
        />
      )}

      <Box sx={{display: "flex"}}>
        {children}
        <Button type="submit" variant="contained" color="primary" sx={{textTransform: "none"}}>
          Submit
        </Button>
      </Box>


    </Box>
  );
}

export default PostForm;
