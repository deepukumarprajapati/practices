import { Box, Typography } from "@mui/material";
import { useState } from "react";

const HookUseState = () => {
  const [nums, setNums] = useState(0);
  const increaseNum = () => {
    setNums(nums + 1);
  };

  return (
    <>
      <Box>
        <Typography>Clicke count is {nums}</Typography>
        <button onClick={() => setNums(nums + 1)}>Click</button>
        <button onClick={increaseNum}>Click</button>
      </Box>
    </>
  );
};

export default HookUseState;
