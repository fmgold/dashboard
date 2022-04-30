import Home from "./pages/home/home";
import Login from "./pages/login/login";
import List from "./pages/list/list";
import Single from "./pages/single/Single";
import New from "./pages/new/new";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={Home} />
            <Route path="login" element={Login} />
            <Route path="users">
              <Route index element={List} />
              <Route path=":userid" element={Single} />
              <Route path="new" element={New} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
