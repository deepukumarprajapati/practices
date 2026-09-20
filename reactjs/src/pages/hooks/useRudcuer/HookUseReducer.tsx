import { Stack, Button, Divider } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const HookUseReducer = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button component={Link} to="">
          With form
        </Button>

        <Button component={Link} to="usereducerwithtodo">
          With Todo
        </Button>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Outlet />
    </>
  );
};

export default HookUseReducer;
