import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MainLayout from "./components/layout/MainLayout";


function Router() {
  return (
    <Routes>
       <Route path="/" element={<MainLayout />}>
    
      <Route index element={<Home />} />

      
      <Route
        path="/movies"
        element={<Movies />}
      />

</Route>

    </Routes>
  );
}

export default Router;