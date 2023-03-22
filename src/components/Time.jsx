import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

import Box from "@mui/material/Box";

const Time = () => {
  return (
    <Box >

        <LocalizationProvider dateAdapter={AdapterDayjs}  >
          <DemoContainer components={["MobileTimePicker",'DesktopTimePicker',]}>
            <DemoItem >
              <MobileTimePicker label="Time Picker" defaultValue={dayjs()}  />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      
    </Box>
  );
};

export default Time;
