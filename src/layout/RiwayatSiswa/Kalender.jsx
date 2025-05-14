import React, { useContext } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, DatePicker } from "@mui/x-date-pickers";
import { TanggalContext } from "./TanggalPIlih";
import dayjs from "dayjs"; // Import dayjs to work with dates

export default function KotakTiga() {
  const { selectedDate, setSelectedDate } = useContext(TanggalContext);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Helper to check if the selected date is within the desired month
  const handleDateChange = (date) => {
    if (date) {
      const selectedMonth = dayjs(date).month(); // Get the month (0-11) of selected date
      const currentMonth = dayjs().month(); // Get the current month (0-11)

      if (selectedMonth === currentMonth) {
        setSelectedDate(date); // Only update if the selected date is in the current month
      } else {
        alert("Please select a date within the current month.");
      }
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ 
        height: {md:"40%", sm:"40%", xs:"20%"},
        marginLeft: {md:0, sm:0, xs:2}
      }}
    >
      <Grid item>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {isMobile ? (
            <DatePicker
              label="Pilih tanggal"
              value={selectedDate || null}
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
              onChange={handleDateChange}
            />
          ) : (
            <DateCalendar
              value={selectedDate || null}
              sx={{
                transform: "scale(1.3)",
                bgcolor: "white",
                mt: 10,
                borderRadius: "6px",
              }}
              onChange={handleDateChange}
            />
          )}
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}
