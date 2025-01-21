import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form, Nav, ViewInfo } from "./components";

function App() {


  return (
    <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/data" element={<ViewInfo />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App; 
