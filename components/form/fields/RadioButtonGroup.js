import {
  Flex,
  Grid,
  Box,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../store";
const Checked = () => {
  return (
    <Flex alignItems="center" mr={2}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="7" fill="white" />
        <circle cx="8" cy="8" r="5" fill="#00AD20" />
        <path
          d="M8 16C6.41775 16 4.87103 15.5308 3.55544 14.6518C2.23985 13.7727 1.21447 12.5233 0.608967 11.0615C0.00346629 9.59966 -0.15496 7.99113 0.153721 6.43928C0.462403 4.88743 1.22433 3.46197 2.34315 2.34315C3.46197 1.22433 4.88743 0.462403 6.43928 0.153721C7.99113 -0.15496 9.59966 0.00346629 11.0615 0.608967C12.5233 1.21447 13.7727 2.23985 14.6518 3.55544C15.5308 4.87103 16 6.41775 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM8 1.33334C6.68146 1.33334 5.39253 1.72433 4.2962 2.45687C3.19987 3.18942 2.34539 4.23061 1.84081 5.44878C1.33622 6.66695 1.2042 8.0074 1.46144 9.30061C1.71867 10.5938 2.35361 11.7817 3.28596 12.714C4.21831 13.6464 5.4062 14.2813 6.6994 14.5386C7.99261 14.7958 9.33305 14.6638 10.5512 14.1592C11.7694 13.6546 12.8106 12.8001 13.5431 11.7038C14.2757 10.6075 14.6667 9.31855 14.6667 8C14.6667 7.12452 14.4942 6.25762 14.1592 5.44878C13.8242 4.63994 13.3331 3.90502 12.714 3.28596C12.095 2.6669 11.3601 2.17584 10.5512 1.84081C9.74239 1.50578 8.87548 1.33334 8 1.33334V1.33334Z"
          fill="#C2C3CB"
        />
      </svg>
    </Flex>
  );
};
const UnChecked = () => {
  return (
    <Flex alignItems="center" mr={2}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="7" fill="white" />
        <path
          d="M8 16C6.41775 16 4.87103 15.5308 3.55544 14.6518C2.23985 13.7727 1.21447 12.5233 0.608967 11.0615C0.00346631 9.59966 -0.15496 7.99113 0.153721 6.43928C0.462403 4.88743 1.22433 3.46197 2.34315 2.34315C3.46197 1.22433 4.88743 0.462403 6.43928 0.153721C7.99113 -0.15496 9.59966 0.00346631 11.0615 0.608967C12.5233 1.21447 13.7727 2.23985 14.6518 3.55544C15.5308 4.87103 16 6.41775 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM8 1.33334C6.68146 1.33334 5.39253 1.72433 4.2962 2.45687C3.19987 3.18942 2.34539 4.23061 1.84081 5.44878C1.33622 6.66695 1.2042 8.0074 1.46144 9.30061C1.71867 10.5938 2.35361 11.7817 3.28596 12.714C4.21831 13.6464 5.4062 14.2813 6.6994 14.5386C7.99261 14.7958 9.33305 14.6638 10.5512 14.1592C11.7694 13.6546 12.8106 12.8001 13.5431 11.7038C14.2757 10.6075 14.6667 9.31855 14.6667 8C14.6667 7.12452 14.4942 6.25762 14.1592 5.44878C13.8242 4.63994 13.3331 3.90502 12.714 3.28596C12.095 2.6669 11.3601 2.17584 10.5512 1.84081C9.74239 1.50578 8.87548 1.33334 8 1.33334Z"
          fill="#C2C3CB"
        />
      </svg>
    </Flex>
  );
};

const RadioButtonGroup = ({
  options,
  groupName,
  groupSX,
  itemSX,
  radioTrigger = null,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleChange = (value) => {
    dispatch(update({ property: groupName, value: value }));
    radioTrigger && radioTrigger.callBack(radioTrigger.option === value);
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: groupName,
    defaultValue: user[groupName] !== "" ? user[groupName] : null,
    onChange: handleChange,
  });
  const group = getRootProps();

  return (
    <Grid sx={{ ...groupSX }} {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioButton itemSX={itemSX} key={value} {...radio}>
            {value}
          </RadioButton>
        );
      })}
    </Grid>
  );
};

function RadioButton(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label" sx={{ ...props.itemSX }}>
      <input {...input} aria-label={props.value} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="0"
        borderColor={"grey.100"}
        maxW="488px"
        px={"16px"}
        alignItems="center"
        _checked={{
          borderWidth: "2px",
          bg: "grey.50",
          borderColor: "grey.200",
          px: "15px",
        }}
        _focus={{
          borderWidth: "2px",
          bg: "grey.50",
          borderColor: "grey.200",
          px: "15px",
        }}
        _hover={{
          borderWidth: "2px",
          bg: "grey.50",
          borderColor: "grey.200",
          px: "15px",
        }}
        style={{ padding: "1vw" }}
        className="hero-input"
      >
        {input.checked ? <Checked /> : <UnChecked />}
        <Text textStyle="radioButton" className="hero-text">{props.children}</Text>
      </Flex>
    </Box>
  );
}

export default RadioButtonGroup;
