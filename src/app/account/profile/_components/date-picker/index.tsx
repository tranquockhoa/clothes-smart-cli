import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface BasicDatePickerProps {
  value?: any;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: any) => void;
}

export default function BasicDatePicker({
  value,
  onChange,
}: BasicDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Ngày tháng năm sinh"
          value={value ? dayjs(value) : null} // 👈 nhận giá trị từ RHF
          onChange={(newValue) => {
            onChange?.(newValue); // 👈 gọi lại để RHF cập nhật
          }}
          slotProps={{
            textField: {
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "9999px",
                },
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
