import { Box, Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// Child component
const ChildComponent = () => {
  return (
    <>
      <Typography>I am child component</Typography>
    </>
  );
};

const HookUseEffect = () => {
  const [toggle, setToggle] = useState(false);

  // =========================================================
  // 1. WITHOUT DEPENDENCY ARRAY
  // =========================================================
  // Runs after EVERY render of the component.
  useEffect(() => {
    console.log("🔄 Effect 1 | NO dependency array → runs after EVERY render");
  });

  // =========================================================
  // 2. WITH EMPTY DEPENDENCY ARRAY []
  // =========================================================
  // Runs after the component's initial render.
  // It does NOT depend on toggle.
  useEffect(() => {
    console.log(
      "🟢 Effect 2 | EMPTY dependency [] → runs after initial render",
    );
  }, []);

  // =========================================================
  // 3. WITH DEPENDENCY [toggle]
  // =========================================================
  // Runs after the initial render AND whenever toggle changes.
  useEffect(() => {
    console.log(
      "🎯 Effect 3 | [toggle] → runs because toggle changed to:",
      toggle,
    );
    return () => {
      console.log("Unmounted");
    };
  }, [toggle]);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;

    setToggle(newValue);
  };

  return (
    <Box>
      <Typography>Parent component</Typography>
      <p>
        useEffect is a React Hook that lets you perform side effects in a
        functional component after React renders the component.
      </p>

      <Checkbox checked={toggle} onChange={handleToggle} />

      {toggle && <ChildComponent />}
    </Box>
  );
};

export default HookUseEffect;
