import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateNote from "./Pages/CreateNote";
import ViewNote from "./Pages/ViewNote";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<CreateNote />} />
      <Route path="/note/:randomUrl" element={<ViewNote />} />
    </Routes>
  </>
);

{
  /* <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/create">Create Note</Link>
      <br />
      <Link to="/note/:id">viewnote</Link>
    </nav> */
}
export default App;
