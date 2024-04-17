import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SideBarMenu } from "./components/SidebarMenu";
import { Recipes } from "./components/Recipes";

function App() {
  return (
    <div className="container">
      <SideBarMenu />
      <main>
        <Routes>
          <Route path="/:categoryId" element={<Recipes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
