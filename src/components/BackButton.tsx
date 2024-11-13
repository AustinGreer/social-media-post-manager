import { Button } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

function BackButton() {
  const router = useRouter();
  
  return (
    <Button
      startIcon={<ArrowBack />}
      sx={{
        marginBottom: "2rem",
        backgroundColor: "var(--background)",
        color: "var(--text-primary)"
      }}
      onClick={() => router.back()}
    >Back</Button>
  )
}

export default BackButton;