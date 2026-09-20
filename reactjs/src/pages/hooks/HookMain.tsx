import { Button, Divider, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const HookMain = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button component={Link} to="">
          Definition
        </Button>

        <Button component={Link} to="usestatehook">
          useState Hook
        </Button>

        <Button component={Link} to="useeffecthook">
          useEffect Hook
        </Button>
        <Button component={Link} to="usereducerhook">
          useReducer Hook
        </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Outlet />
    </>
  );
};

export default HookMain;
