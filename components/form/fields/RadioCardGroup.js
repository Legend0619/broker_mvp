import { Stack, Box, Text, useRadio, useRadioGroup } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { update, updateQuestionsByCoverType } from "../../../store";

const RadioCardGroup = ({ options, groupName, onChange }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChange = (value) => {
    dispatch(update({ property: groupName, value: value }));
    if (groupName == "cover_type") {
      console.log(value, 'checking');
      if (value == "Personal") {
        console.log('selectedpersonal');
        window.parent.postMessage('selectedpersonal',"*");
      } else {
        console.log('selectedbusiness');
        window.parent.postMessage('selectedbusiness',"*");
      }
      dispatch(updateQuestionsByCoverType(value));
      onChange();
    }
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: groupName,
    defaultValue: user[groupName] !== "" ? user[groupName] : null,
    onChange: handleChange,
  });
  const group = getRootProps();

  return (
    <Stack direction="row" {...group} mt={6} spacing={[4, 4, 6]}>
      {" "}
      {options.map((option) => {
        const radio = getRadioProps({ value: option.value });
        return (
          <RadioCard key={option.value} {...radio}>
            {option.iconComponent}
            <Text pt={4} textStyle="radioCard" className="hero-h3">
              {option.value}
            </Text>
          </RadioCard>
        );
      })}
    </Stack>
  );
};

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label" width={["100%", "auto"]} className="hero-kind">
      <input {...input} aria-label={props.value} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="2px"
        borderRadius="0"
        _checked={{
          bg: "grey.50",
          borderColor: "grey.200",
        }}
        _focus={{
          bg: "grey.50",
          borderColor: "grey.200",
          textDecoration: "underline",
        }}
        _hover={{
          bg: "grey.50",
          borderColor: "grey.200",
          textDecoration: "underline",
        }}
        px={[1, 2, 4]}
        py={[3, 3, 6]}
        // minW={["100%", "180px", "180px"]}
        as={Stack}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default RadioCardGroup;
