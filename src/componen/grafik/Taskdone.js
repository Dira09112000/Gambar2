import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";

const Taskdone = () => {
  return (
    <>
      <CircularProgress
        value={85}
        size="50px"
        color="purple"
      ></CircularProgress>
    </>
  );
};
export default Taskdone;
