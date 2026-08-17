import { Box, List, ListItem, Typography } from "@mui/material";

const KeyFeatures = () => {
  return (
    <>
      <Box sx={{ mt: 4 }}>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
          }}
        >
          Key Features of React.js
        </Typography>

        {/* Features List */}
        <List
          sx={{
            listStyleType: "disc",
            pl: 4,
          }}
        >
          <ListItem
            sx={{
              display: "list-item",
              py: 1,
            }}
          >
            <strong>Component-Based Architecture:</strong> Build applications
            using reusable components. Each component represents a small part of
            the user interface, making code easier to organize, reuse, and
            maintain.
          </ListItem>

          <ListItem
            sx={{
              display: "list-item",
              py: 1,
            }}
          >
            <strong>Virtual DOM:</strong> React creates a lightweight copy of
            the real DOM and updates only the elements that have changed,
            improving application performance and rendering speed.
          </ListItem>

          <ListItem
            sx={{
              display: "list-item",
              py: 1,
            }}
          >
            <strong>Declarative Syntax:</strong> Developers describe how the
            user interface should look based on the application state, and React
            automatically updates the UI, making code easier to read and
            maintain.
          </ListItem>

          <ListItem
            sx={{
              display: "list-item",
              py: 1,
            }}
          >
            <strong>One-Way Data Binding:</strong> Data flows in a single
            direction from parent components to child components, making
            applications more predictable and easier to debug.
          </ListItem>

          <ListItem
            sx={{
              display: "list-item",
              py: 1,
            }}
          >
            <strong>JSX (JavaScript XML):</strong> JSX allows developers to
            write HTML-like syntax inside JavaScript, making UI code more
            readable and easier to develop.
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default KeyFeatures;
