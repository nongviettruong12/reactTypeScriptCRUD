import "./App.css";
import { Routes, Route } from 'react-router-dom'
import DashBoard from "./page/DashBoard";
import AddProduct from "./page/AddProduct";
import UpdateProduct from "./page/UpdateProduct";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={DashBoard}/>
        <Route path="/products/add" Component={AddProduct}/>
        <Route path="/products/update/:id" Component={UpdateProduct}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
      </Routes>

      {/* <h1>Chúc các bạn thi tốt!</h1> */}
    </>
  );
}

export default App;
