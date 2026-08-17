import { Button, Divider, Stack } from "@mui/material";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button component={Link} to="">
          Main
        </Button>

        <Button component={Link} to="history">
          History
        </Button>

        <Button component={Link} to="keyfeatures">
          Key Features
        </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Outlet />
    </>
  );
};

export default Main;
