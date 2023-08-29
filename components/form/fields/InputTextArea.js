import { Textarea } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../store";
export const InputTextArea = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [input, setInput] = useState(user.message !== " " ? user.message : " ");
  const [initialState, setInitialState] = useState(true);
  const handleInputChange = (e) => {
    setInitialState(false);
    setInput(e.target.value);
  };

  useEffect(() => {
    dispatch(update({ property: "message", value: input }));
  }, [dispatch, input]);
  return (
    <Textarea
      aria-labelledby={props.labelid}
      sx={{
        borderRadius: "0px",
        border: "1px solid",
        borderColor: "grey.100",
        pt: "16px",
        width: "100%",
        height: "120px",
        ...props.sx,
      }}
      onChange={handleInputChange}
      {...props}
    />
  );
};
