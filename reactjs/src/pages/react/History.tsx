import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const History = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 3,
        }}
      >
        History of React.js
      </Typography>

      {/* Introduction */}
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          lineHeight: 1.8,
          textAlign: "justify",
        }}
      >
        Before React, most websites were built using traditional JavaScript
        libraries like <strong>jQuery</strong>. As web applications became
        larger and more interactive (such as social media feeds, chats, and
        dashboards), updating the user interface became difficult. Developers
        had to manually manipulate the DOM (Document Object Model), making
        applications harder to maintain, slower, and more prone to bugs.
      </Typography>

      {/* Why React */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mt: 4,
          mb: 2,
        }}
      >
        Why React Was Invented
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 2,
          lineHeight: 1.8,
          textAlign: "justify",
        }}
      >
        Around <strong>2011</strong>, engineers at
        <strong> Facebook </strong>
        faced performance and maintenance issues with the
        <strong> Facebook News Feed</strong>. Every user action—such as liking a
        post, commenting, or receiving notifications—required frequent updates
        to the page.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          mb: 1,
        }}
      >
        The main problems were:
      </Typography>

      <List
        sx={{
          listStyleType: "disc",
          pl: 4,
          mb: 2,
        }}
      >
        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          Manual DOM manipulation was slow and complex.
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          Large applications became difficult to maintain.
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          Reusing UI code was difficult.
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          Keeping the user interface synchronized with changing data was
          challenging.
        </ListItem>
      </List>

      <Typography
        variant="body1"
        sx={{
          mb: 2,
          lineHeight: 1.8,
          textAlign: "justify",
        }}
      >
        To solve these problems,
        <strong> Jordan Walke</strong>, a software engineer at Facebook,
        developed <strong>React</strong>.
      </Typography>

      {/* How React Solved */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mt: 4,
          mb: 2,
        }}
      >
        How React Solved These Problems
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 2,
          lineHeight: 1.8,
        }}
      >
        React introduced several revolutionary ideas:
      </Typography>

      <List
        sx={{
          listStyleType: "disc",
          pl: 4,
          mb: 2,
        }}
      >
        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          <strong>Component-Based Architecture:</strong> Developers build
          applications using small, reusable components such as buttons, forms,
          and menus.
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          <strong>Virtual DOM:</strong> React creates a lightweight copy of the
          real DOM, compares changes, and updates only the necessary parts,
          making applications faster.
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          <strong>Declarative Programming:</strong> Developers describe what the
          UI should look like, and React automatically updates the interface
          when data changes.
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          <strong>One-Way Data Flow:</strong> Data flows in a single direction,
          making applications easier to understand, debug, and maintain.
        </ListItem>
      </List>

      {/* Who Developed */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mt: 4,
          mb: 2,
        }}
      >
        Who Developed React?
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 2,
          lineHeight: 1.8,
          textAlign: "justify",
        }}
      >
        React was created by <strong>Jordan Walke</strong>, a software engineer
        at <strong>Facebook (now Meta)</strong>, in <strong>2011</strong>. It
        was first used internally in the Facebook News Feed. After its success,
        Facebook released React as an <strong>open-source</strong> project in
        <strong> 2013</strong> at the <strong>JSConf US</strong> conference,
        allowing developers worldwide to use and improve it.
      </Typography>

      {/* Popularity */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mt: 4,
          mb: 2,
        }}
      >
        How React Became Popular
      </Typography>

      <List
        sx={{
          listStyleType: "disc",
          pl: 4,
          mb: 2,
        }}
      >
        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          Many companies adopted React because it simplified UI development.
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          Developers appreciated its reusable components and high performance.
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          The React ecosystem expanded with tools like React Router, Redux, and
          React Native.
        </ListItem>

        <ListItem
          sx={{
            display: "list-item",
            py: 0.5,
          }}
        >
          Today, React is one of the most widely used frontend libraries in the
          world.
        </ListItem>
      </List>

      {/* Summary */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mt: 4,
          mb: 2,
        }}
      >
        Summary
      </Typography>

      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.8,
          textAlign: "justify",
        }}
      >
        React came into the picture because modern web applications had become
        too complex for traditional DOM manipulation techniques. Facebook needed
        a faster, more maintainable way to build highly interactive user
        interfaces. Jordan Walke solved this by creating React, which introduced
        reusable components, the Virtual DOM, and declarative programming. These
        innovations made UI development faster, simpler, and more efficient,
        making React one of the world's most popular frontend libraries.
      </Typography>
    </Box>
  );
};

export default History;
