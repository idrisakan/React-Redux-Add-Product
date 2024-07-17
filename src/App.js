import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./componets/Header";
import Test from "./pages/Test";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
