import React, { useEffect, useState, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../store";
import DatePicker from "react-datepicker";
import { Text, Box, Input, FormControl, FormLabel } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../../icons/Calendar";
import { Tick } from "./InputFloating";

const InputDatePicker = ({ id, label }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [startDateForDP, setStartDateForDP] = useState("");
  const [startDateForRedux, setStartDateForRedux] = useState(
    user.insurance_start_date !== "" ? user.insurance_start_date : ""
  );
  const [initialState, setInitialState] = useState(
    user.insurance_start_date === ""
  );
  const toDateString = (strDate) => {
    const dt = Date.parse(strDate);
    const date = new Date(strDate);

    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };

  const handleInputChange = (date) => {
    setInitialState(false);
    setStartDateForDP(date);
    setStartDateForRedux(toDateString(date));
  };
  useEffect(() => {
    dispatch(update({ property: id, value: startDateForRedux }));
  }, [dispatch, startDateForRedux, id]);

  const InputWithFloatingLabel = forwardRef(
    ({ value, onClick, onKeyDown }, ref) => (
      <>
        <Input
          defaultValue={value ? value : ""}
          placeholder=" "
          type="text"
          onClick={onClick}
          ref={ref}
          onKeyDown={onKeyDown}
        />
        <FormLabel>{label}</FormLabel>
      </>
    )
  );

  InputWithFloatingLabel.displayName = "InputWithFloatingLabel";

  return (
    <Box className="datepicker-wrapper" sx={{ position: "relative" }}>
      <FormControl id={id} variant="floating">
        <DatePicker
          selected={startDateForDP}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          onChange={(date) => handleInputChange(date)}
          customInput={<InputWithFloatingLabel />}
          formatWeekDay={(nameOfDay) => String(nameOfDay).substring(0, 1)}
        />

        <Text
          as="span"
          className="floating-icon"
          sx={{
            display: "inline-block",
            right: 4,
            top: 4,
            position: "absolute",
            zIndex: 10,
            color: "primary.500",
            pointerEvents: "none",
          }}
        >
          {initialState ? (
            <CalendarIcon />
          ) : (
            <Box py={2} px={1}>
              <Tick />
            </Box>
          )}
        </Text>
      </FormControl>
    </Box>
  );
};

export default InputDatePicker;
