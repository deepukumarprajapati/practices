import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Header from "./component/Header";
import LeftSidebar from "./component/LeftSidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/react/Main";
import History from "./pages/react/History";
import KeyFeatures from "./pages/react/KeyFeatures";
import ReactJs from "./pages/react/ReactJs";
import HookMain from "./pages/hooks/HookMain";
import HooksTheory from "./pages/hooks/HooksTheory";
import HookUseState from "./pages/hooks/HookUseState";
import HookUseEffect from "./pages/hooks/HookUseEffect";
import HookUseReducer from "./pages/hooks/useRudcuer/HookUseReducer";
import HookUseReducerWithForm from "./pages/hooks/useRudcuer/useReducerWIthForm";
import HookUseReducerWithTodo from "./pages/hooks/useRudcuer/useReducerWIthTodo";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header></Header>
      <LeftSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/react" element={<Main />}>
            <Route index element={<ReactJs />} />
            <Route path="history" element={<History />} />
            <Route path="keyfeatures" element={<KeyFeatures />} />
          </Route>
          <Route path="/hooks" element={<HookMain />}>
            <Route index element={<HooksTheory />} />
            <Route path="usestatehook" element={<HookUseState />} />
            <Route path="useeffecthook" element={<HookUseEffect />} />
            <Route path="usereducerhook" element={<HookUseReducer />}>
              <Route index element={<HookUseReducerWithForm />} />
              <Route
                path="usereducerwithtodo"
                element={<HookUseReducerWithTodo />}
              />
            </Route>
          </Route>
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
