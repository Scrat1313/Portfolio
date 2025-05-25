import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import { Home, AboutMe, Achievements, NotFound } from "./pages";
import { Layout } from "./components/layout";

function App() {
  return (
    <Routes>
      {/* Routes avec Layout */}
      <Route element={<Layout />}>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.aboutMe} element={<AboutMe />} />
        <Route path={routes.achievements} element={<Achievements />} />
      </Route>

      {/* Route sans Layout */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
