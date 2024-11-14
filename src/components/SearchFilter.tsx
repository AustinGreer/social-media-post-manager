import { useState } from "react";
import { TextField, InputAdornment, Box, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { debounce } from "lodash";

import Search from "@mui/icons-material/Search";
import ErrorBanner from "./ErrorBanner";

function SearchFilter({ filterPostsBySearch, filterPostsByType }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const handleSearch = debounce(async(searchTerm) => {
    try {
      filterPostsBySearch(searchTerm);

    } catch (error) {
      setErrorMessage(`Error ocurred: ${error}`);
    }
  }, 400);

  const handlePostTypeChange = async (e) => {
    const selectedType = e.target.value;
    await filterPostsByType(selectedType);
  }
  
  return (
    <Box className="searchWrapper">
      { errorMessage && <ErrorBanner message={errorMessage} />}
      <TextField
        placeholder="Search..."
        variant="outlined"
        size="small"
        className="searchInput"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }
        }}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <FormControl sx={{ minWidth: 120 }} size="small">
        <InputLabel sx={{color: "var(--text-primary)"}}>Type</InputLabel>
        <Select
          defaultValue="all"
          onChange={handlePostTypeChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="Text">Text</MenuItem>
          <MenuItem value="Image">Image</MenuItem>
          <MenuItem value="Video">Video</MenuItem>
        </Select>
      </FormControl>

      <Button
        sx={{
          backgroundColor: 'var(--primary)',
          color: 'var(--text-primary)',
          '&:hover': {
            backgroundColor: 'var(--primary-hover)',
          },
          textTransform: 'none'
        }}
        onClick={() => router.push('/addpost')}
      >Add New Post</Button>
    </Box >
  )
}

export default SearchFilter;