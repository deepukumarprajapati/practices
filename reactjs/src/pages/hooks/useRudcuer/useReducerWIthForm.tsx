import {
  Box,
  Button,
  TextField,
  MenuItem,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useReducer } from "react";

type UserEmptyData = {
  name: string;
  age: string;
  email: string;
  phone: string;
  gender: string;
};

const userObject: UserEmptyData = {
  name: "",
  age: "",
  email: "",
  phone: "",
  gender: "",
};

const userReducer = (userReducerData, action) => {
  return { ...userReducerData, [action.type]: action.value };
};

const HookUseReducerWithForm = () => {
  const [userData, dispatch] = useReducer(userReducer, userObject);

  console.log(userData);

  return (
    <Paper elevation={3} sx={{ display: "flex", p: 4 }}>
      <Box component="form" sx={{ maxWidth: "400px" }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          required
          onChange={(e) => dispatch({ type: "name", value: e.target.value })}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          margin="normal"
          required
          onChange={(e) => dispatch({ type: "email", value: e.target.value })}
        />

        <TextField
          fullWidth
          label="Age"
          name="age"
          type="number"
          margin="normal"
          onChange={(e) => dispatch({ type: "age", value: e.target.value })}
        />

        <TextField
          fullWidth
          label="Phone"
          name="phone"
          margin="normal"
          onChange={(e) => dispatch({ type: "phone", value: e.target.value })}
        />

        <TextField
          fullWidth
          select
          label="Gender"
          name="gender"
          margin="normal"
          onChange={(e) => dispatch({ type: "gender", value: e.target.value })}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Submit
        </Button>
      </Box>
      <List>
        <ListItem>
          <ListItemText primary="Name" secondary="Dk" />
        </ListItem>

        <ListItem>
          <ListItemText primary="email" secondary="Delhi" />
        </ListItem>

        <ListItem>
          <ListItemText primary="Age" secondary="34" />
        </ListItem>

        <ListItem>
          <ListItemText primary="Phone" secondary="dk@example.com" />
        </ListItem>

        <ListItem>
          <ListItemText primary="Gender" secondary="Male" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default HookUseReducerWithForm;
