import { Box, Divider, Typography } from "@mui/material";

const HooksTheory = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        React Hooks
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        React Hooks are special functions that allow functional components to
        use React features such as state, side effects, context, refs, and more
        without using class components.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Common React Hooks
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Typography variant="h6">1. useState</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Used to create and manage state in a functional component.
      </Typography>

      <Typography variant="h6">2. useEffect</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Used to perform side effects such as API calls, timers, subscriptions,
        and DOM-related operations.
      </Typography>

      <Typography variant="h6">3. useContext</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Used to access data from React Context without passing props through
        multiple components.
      </Typography>

      <Typography variant="h6">4. useRef</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Used to reference DOM elements or store mutable values without causing a
        component to re-render.
      </Typography>

      <Typography variant="h6">5. useReducer</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Used to manage complex state logic using a reducer function and actions.
      </Typography>

      <Typography variant="h6">6. useMemo</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Used to memoize a calculated value and avoid unnecessary expensive
        calculations.
      </Typography>

      <Typography variant="h6">7. useCallback</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Used to memoize a function so that its reference does not change
        unnecessarily between renders.
      </Typography>

      <Typography variant="h6">8. useLayoutEffect</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Similar to useEffect, but it runs synchronously after DOM changes and
        before the browser paints the screen.
      </Typography>

      <Typography variant="h6">9. useId</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Used to generate unique IDs, especially useful for accessibility and
        connecting labels with form controls.
      </Typography>

      <Typography variant="h5" sx={{ mt: 3 }} gutterBottom>
        Interview Definition
      </Typography>

      <Typography
        variant="body1"
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: "action.hover",
        }}
      >
        React Hooks are built-in functions that allow functional components to
        use React features such as state, side effects, context, refs, and
        lifecycle-related functionality without using class components.
      </Typography>
    </Box>
  );
};

export default HooksTheory;
