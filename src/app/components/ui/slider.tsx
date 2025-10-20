import { SliderProps } from "@mui/material";
import Slider from "@mui/material/Slider";
import { FC } from "react";

interface BaseSliderProps extends SliderProps {}

const BaseSlider: FC<BaseSliderProps> = (props) => {
  return <Slider {...props} />;
};

const MySlider = Object.assign(Slider, BaseSlider);

export default MySlider;
