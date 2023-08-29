import React from "react";
import {
  Flex,
  Grid,
  Box,
  Text,
  useCheckbox,
  useCheckboxGroup,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../store";
const Checked = () => {
  return (
    <Flex alignItems="center" mr={2}>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="16"
          height="16"
          transform="translate(0 0.499998)"
          fill="#00AD20"
        />
        <path
          d="M8 16.5C6.41775 16.5 4.87104 16.0308 3.55544 15.1518C2.23985 14.2727 1.21447 13.0233 0.608967 11.5615C0.00346629 10.0997 -0.15496 8.49113 0.153721 6.93928C0.462403 5.38743 1.22433 3.96197 2.34315 2.84315C3.46197 1.72433 4.88743 0.962401 6.43928 0.653719C7.99113 0.345038 9.59966 0.503464 11.0615 1.10897C12.5233 1.71447 13.7727 2.73985 14.6518 4.05544C15.5308 5.37103 16 6.91775 16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5ZM8 1.83334C6.68146 1.83334 5.39253 2.22433 4.2962 2.95687C3.19987 3.68941 2.34539 4.7306 1.84081 5.94878C1.33622 7.16695 1.2042 8.5074 1.46144 9.8006C1.71867 11.0938 2.35361 12.2817 3.28596 13.214C4.21831 14.1464 5.4062 14.7813 6.6994 15.0386C7.99261 15.2958 9.33305 15.1638 10.5512 14.6592C11.7694 14.1546 12.8106 13.3001 13.5431 12.2038C14.2757 11.1075 14.6667 9.81854 14.6667 8.5C14.6667 7.62452 14.4942 6.75762 14.1592 5.94878C13.8242 5.13994 13.3331 4.40501 12.714 3.78596C12.095 3.1669 11.3601 2.67584 10.5512 2.3408C9.74239 2.00577 8.87548 1.83334 8 1.83334Z"
          fill="#00AD20"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 6.54705L6.51004 12.5L3.5 9.50855L4.55356 8.4615L6.51004 10.4059L11.4464 5.5L12.5 6.54705Z"
          fill="white"
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
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="1"
          width="15"
          height="15"
          fill="white"
          stroke="#C2C3CB"
        />
        <circle cx="8" cy="8.5" r="7" fill="white" />
      </svg>
    </Flex>
  );
};

const CheckboxButtonGroup = ({
  options,
  groupName,
  groupSX,
  itemSX,
  labelH,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleChange = (value) => {
    dispatch(update({ property: groupName, value: value }));
  };
  const { value, getCheckboxProps } = useCheckboxGroup({
    name: groupName,
    defaultValue: user[groupName] !== [] ? user[groupName] : null,
    onChange: handleChange,
  });

  return (
    <Grid sx={{ ...groupSX }}>
      {options.map((value) => {
        const checkbox = getCheckboxProps({ value });
        return (
          <RadioButton
            itemSX={itemSX}
            labelH={labelH}
            key={value}
            {...checkbox}
          >
            {value}
          </RadioButton>
        );
      })}
    </Grid>
  );
};

function RadioButton(props) {
  const { getInputProps, getCheckboxProps } = useCheckbox(props);

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
        px={"16px"}
        alignItems="center"
        maxW={["388px", "", "551px"]}
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
        // h={props.labelH ? props.labelH : "52px"}
      >
        {input.checked ? <Checked /> : <UnChecked />}
        <Text textStyle="radioButton" className="hero-text">{props.children}</Text>
      </Flex>
    </Box>
  );
}

export default CheckboxButtonGroup;
