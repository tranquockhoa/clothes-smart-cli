import "./search.scss";
import { InputAdornment } from "@mui/material";
import MyTextField from "@/app/components/ui/text-field";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput() {
  return (
    <MyTextField
      className="search-content"
      placeholder="Tìm kiếm sản phẩm..."
      slotProps={{
        input: {
          className: "custom-input",
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        },
        htmlInput: { className: "custom-html-input" },
      }}
    />
  );
}

export default SearchInput;
