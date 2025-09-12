"use client";
import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  FormGroup,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import "./sidebar.scss";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const colors = [
  { name: "Đen", color: "#000" },
  { name: "Xám", color: "#888" },
  { name: "Be", color: "#f5f5dc" },
  { name: "Xanh lam", color: "#1e40af" },
  { name: "Xanh lá", color: "#15803d" },
  { name: "Cam", color: "#f97316" },
];

const materials = ["Cotton", "Nylon", "Polyester", "Recycle"];

export default function Sidebar() {
  const [size, setSize] = useState<string | null>(null);

  return (
    <div className="collection-sidebar">
      <div className="collection-sidebar__title collection-sidebar--color">
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 1, textAlign: "start", fontSize: 16 }}
        >
          Bộ lọc
        </Typography>
        <Typography
          variant="h6"
          sx={{ textAlign: "end", mb: 1, fontSize: 16 }}
          className="collection-sidebar__title--result"
        >
          2 kết quả
        </Typography>
      </div>

      <Accordion>
        <AccordionSummary
          className="collection-sidebar--name"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            className="collection-sidebar--color"
            sx={{ fontSize: 12, fontWeight: 600 }}
          >
            Loại sản phẩm
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup>
            <FormControlLabel
              value="jogger"
              control={<Radio />}
              label="Quần Jogger"
              className="collection-sidebar__radio--color"
            />
            <FormControlLabel
              value="jeans"
              control={<Radio />}
              label="Quần Jeans"
              className="collection-sidebar__radio--color"
            />
            <FormControlLabel
              value="kaki"
              control={<Radio />}
              label="Quần Kaki"
              className="collection-sidebar__radio--color"
            />
            <FormControlLabel
              value="pants"
              control={<Radio />}
              label="Quần Pants"
              className="collection-sidebar__radio--color"
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion className="collection-sidebar__filter-size">
        <AccordionSummary
          className="collection-sidebar--name"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            className="collection-sidebar--color"
            sx={{ fontSize: 12, fontWeight: 600 }}
          >
            Kích cỡ
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ToggleButtonGroup
            sx={{
              "& .MuiToggleButton-root.Mui-selected": {
                backgroundColor: "#273bce",
                color: "#fff",
              },
              "& .MuiToggleButton-root": {
                borderRadius: "8px",
                textTransform: "none",
              },
              flexWrap: "wrap",
              gap: 1,
            }}
            value={size}
            onChange={(e, newSize) => setSize(newSize)}
            aria-label="sizes"
          >
            {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
              <ToggleButton
                sx={{
                  width: 56,
                  height: 36,
                  "&:hover": {
                    backgroundColor: "#273bce",
                    color: "#ffffff",
                  },
                }}
                key={size}
                value={size}
                className="collection-sidebar__filter-size--btn"
              >
                {size}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="collection-sidebar--name"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            className="collection-sidebar--color"
            sx={{ fontSize: 12, fontWeight: 600 }}
          >
            Màu sắc
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            alignItems: "stretch",
          }}
        >
          {colors.map((color) => (
            <div key={color.name} className="collection-sidebar__color">
              <Box
                title={color.name}
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: 50,
                  bgcolor: color.color,
                  border: "1px solid #ddd",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              />
              <p className="collection-sidebar__color--name">{color.name}</p>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="collection-sidebar--name"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            className="collection-sidebar--color"
            sx={{ fontSize: 12, fontWeight: 600 }}
          >
            Chất liệu
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {materials.map((m) => (
              <FormControlLabel
                key={m}
                control={
                  <Checkbox
                    {...label}
                    size="small"
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                  />
                }
                label={m}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "14px",
                    color: "#737373",
                  },
                }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
