import { useState } from "react";
import { useRouter } from "next/router"
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"

import { deletePost } from "@/services/postsApi";
import ErrorBanner from "./ErrorBanner";

function DeleteModal({ openModal, handleCloseModal, postId }) {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleDeletePost = async () => {
    try {
      await deletePost(postId);
      router.push("/");
    } catch (err) {
      setError(`Error occured while deleting post: ${err.message}`);
    }
  };

  return (
    <Dialog
      open={openModal}
      onClose={handleCloseModal}
    >
      <DialogTitle>Confirm Delete</DialogTitle>
  
      <DialogContent>
        <DialogContentText>
          Are you sure that you want to delete this post? This action is irreversible.
        </DialogContentText>

        {error && <ErrorBanner message={error} />}
      </DialogContent>

      <DialogActions>
        <Button 
          onClick={handleCloseModal}
          sx={{
            backgroundColor: "var(--primary)",
            color: "var(--text-primary)",
            textTransform: "none"
          }}
        >Cancel</Button>
        <Button 
          onClick={handleDeletePost}
          sx={{
            backgroundColor: "var(--error)",
            color: "var(--text-primary)",
            textTransform: "none"
          }}
        >Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteModal