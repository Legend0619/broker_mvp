import { useState, useEffect, useCallback } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../store";

export const Warning = () => {
  return (
    <Box>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.66634 3.66602H7.33301V8.66602H8.66634V3.66602Z"
          fill="#E00B4B"
        />
        <path
          d="M7.99967 11.6673C8.36786 11.6673 8.66634 11.3688 8.66634 11.0007C8.66634 10.6325 8.36786 10.334 7.99967 10.334C7.63148 10.334 7.33301 10.6325 7.33301 11.0007C7.33301 11.3688 7.63148 11.6673 7.99967 11.6673Z"
          fill="#E00B4B"
        />
        <path
          d="M8 16C6.41775 16 4.87103 15.5308 3.55544 14.6518C2.23985 13.7727 1.21447 12.5233 0.608967 11.0615C0.00346629 9.59966 -0.15496 7.99113 0.153721 6.43928C0.462403 4.88743 1.22433 3.46197 2.34315 2.34315C3.46197 1.22433 4.88743 0.462403 6.43928 0.153721C7.99113 -0.15496 9.59966 0.00346629 11.0615 0.608967C12.5233 1.21447 13.7727 2.23985 14.6518 3.55544C15.5308 4.87103 16 6.41775 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM8 1.33334C6.68146 1.33334 5.39253 1.72433 4.2962 2.45687C3.19987 3.18942 2.34539 4.23061 1.84081 5.44878C1.33622 6.66695 1.2042 8.0074 1.46144 9.30061C1.71867 10.5938 2.35361 11.7817 3.28596 12.714C4.21831 13.6464 5.4062 14.2813 6.6994 14.5386C7.99261 14.7958 9.33305 14.6638 10.5512 14.1592C11.7694 13.6546 12.8106 12.8001 13.5431 11.7038C14.2757 10.6075 14.6667 9.31855 14.6667 8C14.6667 7.12452 14.4942 6.25762 14.1592 5.44878C13.8242 4.63994 13.3331 3.90502 12.714 3.28596C12.095 2.6669 11.3601 2.17584 10.5512 1.84081C9.74239 1.50578 8.87548 1.33334 8 1.33334V1.33334Z"
          fill="#E00B4B"
        />
      </svg>
    </Box>
  );
};
export const Asterix = () => {
  return (
    <Box>
      <svg
        width="7"
        height="8"
        viewBox="0 0 7 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.84343 7.5V5.30021L0.9375 6.4006L0.1875 5.10156L2.09359 4.00108L0.1875 2.9006L0.9375 1.60156L2.84343 2.70195V0.5H4.34343V2.70214L6.24968 1.60156L6.99968 2.9006L5.09359 4.00108L6.99968 5.10156L6.24968 6.4006L4.34343 5.30003V7.5H2.84343Z"
          fill="#00AD20"
        />
      </svg>
    </Box>
  );
};

export const Tick = () => {
  return (
    <Box>
      <svg
        width="9"
        height="8"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 1.54705L3.01004 7.5L0 4.50855L1.05356 3.4615L3.01004 5.4059L7.94644 0.5L9 1.54705Z"
          fill="#00AD20"
        />
      </svg>
    </Box>
  );
};

export const Cross = () => {
  return (
    <Box>
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.40809 3.99908L0.9375 6.46967L1.99816 7.53033L4.46875 5.05974L6.93934 7.53033L8 6.46967L5.52941 3.99908L7.99816 1.53033L6.9375 0.469666L4.46875 2.93842L2 0.469666L0.93934 1.53033L3.40809 3.99908Z"
          fill="#E00B4B"
        />
      </svg>
    </Box>
  );
};

const InputFloating = ({
  id,
  label,
  required,
  errors,
  validate,
  sx,
  ...props
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [initialState, setInitialState] = useState(true);
  const [isValid, setIsValid] = useState(input !== "" && validate(input));
  const [requiredHasValue, setRequiredHasValue] = useState(
    required && isValid ? false : true
  );
  const handleInputChange = (e) => {
    setInitialState(false);
    setInput(e.target.value);
    setRequiredHasValue(required && e.target.value !== "" ? true : false);
    setIsValid(e.target.value !== "" && validate(e.target.value));
  };

  useEffect(() => {
    isValid && requiredHasValue
      ? dispatch(update({ property: id, value: input }))
      : dispatch(update({ property: id, value: "" }));
  }, [isValid, requiredHasValue, dispatch, input, id]);

  return (
    <Box sx={{ ...sx }}>
      <FormControl
        variant="floating"
        id={id}
        isInvalid={!isValid && !initialState}
      >
        <Input
          placeholder=" "
          aria-required={required}
          value={input}
          onChange={handleInputChange}
          {...props}
        />
        <FormLabel>{label}</FormLabel>
        <Text
          as="span"
          className="floating-icon"
          sx={{
            display: "inline-block",
            right: "20px",
            top: "22px",
            position: "absolute",
            color: isValid ? "primary.500" : "red.500",
          }}
        >
          {initialState ? (
            required ? (
              <Asterix />
            ) : (
              <></>
            )
          ) : isValid ? (
            <Tick />
          ) : (
            <Cross />
          )}
        </Text>
        {!initialState && (
          <>
            {!requiredHasValue ? (
              <FormErrorMessage>{errors.missing}</FormErrorMessage>
            ) : (
              !isValid && <FormErrorMessage>{errors.invalid}</FormErrorMessage>
            )}
          </>
        )}
      </FormControl>
    </Box>
  );
};

export default InputFloating;
