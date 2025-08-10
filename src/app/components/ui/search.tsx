import { InputAdornment } from "@mui/material";
import Input from "./input";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput() {
  return (
    <Input
      id="search-input"
      label="Tìm kiếm sản phẩm..."
      slotProps={{
        input: {
          sx: {
            height: 48,
            borderRadius: 50,
          },
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

export default SearchInput;
