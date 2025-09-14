import { FC } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

interface SliderProps {
  name: string;
  unit: string;
  type: string;
}

export const SLIDER_TYPES = {
  WEIGHT: "WEIGHT",
  HEIGHT: "HEIGHT",
};

const TYPES = {
  [SLIDER_TYPES.HEIGHT]: {
    max: 190,
  },

  [SLIDER_TYPES.WEIGHT]: {
    max: 100,
  },
};

const MySlider: FC<SliderProps> = (props) => {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event: Event, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <p style={{ minWidth: 77 }}>{props.name}</p>
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Grid size="grow">
            <Slider
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              max={TYPES[props.type].max}
              sx={{
                padding: 0,
                "& .MuiSlider-thumb": {
                  width: 14,
                  height: 14,
                  padding: 1,
                  boxShadow: "0 0 0 2px white inset",
                  border: "1px solid blue",
                },
              }}
              size="small"
            />
          </Grid>
          <Grid>
            <Typography variant="body2">{value + props.unit}</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MySlider;
