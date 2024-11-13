import { Alert } from "@mui/material";

function ErrorBanner({ message }) {
  return (
    <Alert severity="error">
      {message || "An unexpected error has occurred."}
    </Alert>
  )
}

export default ErrorBanner;