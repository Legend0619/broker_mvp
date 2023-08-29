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
import { Warning, Tick, Cross, Asterix } from "./InputFloating";

export const InputPostcode = ({
  id,
  required,
  onPostcodeChange,
  errors,
  sx,
}) => {
  // Redux hooks for dispatching actions and accessing the user and postcodes data
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { data: ausPostcodes } = useSelector((state) => state.postcodes);
  // Regex pattern for Australian postcodes
  const regex = /^[0-9]{4}$/;
  const checkIsAusPostcode = useCallback(
    (val) => {
      // Get the list of valid postcodes from the Redux store
      return (
        ausPostcodes.filter((postcode) => postcode.postcode === val).length > 0
      );
    },
    [ausPostcodes]
  );

  const checkIsValid = useCallback(
    (val) => {
      const regex = /^[0-9]{4}$/;
      return val !== "" && regex.test(val) && checkIsAusPostcode(val);
    },
    [checkIsAusPostcode]
  );

  // State hooks for the input value and validation status
  const [input, setInput] = useState(user.postcode !== "" ? user.postcode : "");
  const [initialState, setInitialState] = useState(true);
  const [isExistingPostcode, setExistingPostcode] = useState(
    checkIsAusPostcode(input)
  );
  const [isValid, setIsValid] = useState(
    input !== "" && regex.test(input) && isExistingPostcode
  );
  const [requiredHasValue, setRequiredHasValue] = useState(
    required && isValid ? false : true
  );

  const handleInputChange = (e) => {
    setInitialState(false);
    setInput(e.target.value);
    setExistingPostcode(checkIsAusPostcode(e.target.value));
    setIsValid(checkIsValid(e.target.value));
    onPostcodeChange({
      value: e.target.value,
      isValid: checkIsValid(e.target.value),
    });
    setRequiredHasValue(required && isValid ? false : true);
  };

  // Update the user data in the Redux store when the validation status changes
  useEffect(() => {
    onPostcodeChange({ value: input, isValid: checkIsValid(input) });
    isValid && requiredHasValue
      ? dispatch(update({ property: id, value: input }))
      : dispatch(update({ property: id, value: "" }));
  }, [
    isValid,
    requiredHasValue,
    dispatch,
    input,
    id,
    onPostcodeChange,
    checkIsValid,
  ]);

  return (
    <Box sx={{ ...sx }}>
      <FormControl
        variant="postcode"
        id={id}
        isInvalid={!isValid && !initialState}
      >
        {" "}
        <FormLabel htmlFor={id}>
          Which area you would like to find a broker in?
        </FormLabel>
        <FormHelperText
          fontSize={["14px", "", "16px"]}
          lineHeight="1.4em"
          mt={{ base: 4, md: 8 }}
          maxW="400px"
        >
          Enter the postcode of the area you would like to search for current
          participating local brokers.
        </FormHelperText>
        <Box position="relative">
          <Input
            placeholder="Postcode"
            aria-required="true"
            value={input}
            onChange={handleInputChange}
          />
          <Text
            as="span"
            className="required-asterix"
            sx={{
              display: "inline-block",
              right: "20px",
              bottom: "22px",
              position: "absolute",
              color: isValid ? "primary.500" : "red.500",
            }}
          >
            {initialState ? <></> : isValid ? <Tick /> : <Cross />}
          </Text>
        </Box>
        {!initialState && (
          <>
            {!requiredHasValue ? (
              <FormErrorMessage>
                <Warning />
                <Text sx={{ ml: 1 }}> {errors.missing}</Text>
              </FormErrorMessage>
            ) : (
              !isValid && (
                <>
                  <FormErrorMessage>
                    <Warning />
                    <Text sx={{ ml: 1 }}>
                      {input.length === 4 && !isExistingPostcode
                        ? "This is not a valid Australian postcode"
                        : errors.invalid}
                    </Text>
                  </FormErrorMessage>{" "}
                </>
              )
            )}
          </>
        )}
      </FormControl>
    </Box>
  );
};

export default InputPostcode;
