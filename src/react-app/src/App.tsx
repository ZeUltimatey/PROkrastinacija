import { Homepage } from "./components/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { ProductView } from "./components/product/ProductView";
import { Catalog } from "./components/catalog/Catalog";
import { GeneralLayout } from "./components/layouts/GeneralLayout";
import { AuthLayout } from "./components/layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneralLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/productview" element={<ProductView />} />
          <Route path="/catalog" element={<Catalog />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/catalog/cats" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
