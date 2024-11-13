import { TextField, InputAdornment, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { debounce } from "lodash";

import Search from "@mui/icons-material/Search";
import styles from './SearchFilter.module.css';

function SearchFilter({ filterPosts }) {
  const router = useRouter();

  const handleSearch = debounce((searchTerm) => {
    filterPosts(searchTerm)
  }, 400);
  
  return (
    <Box className={styles.searchWrapper}>
      <TextField
        placeholder="Search..."
        variant="outlined"
        size="small"
        className={styles.searchInput}
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
      <Button
        sx={{
          backgroundColor: 'var(--primary)',
          color: 'var(--text-primary)',
          '&:hover': {
            backgroundColor: 'var(--primary-hover)',
          },
          textTransform: 'none'
        }}
        onClick={() => router.push('/add')}
      >Add New Post</Button>
    </Box >
  )
}

export default SearchFilter;