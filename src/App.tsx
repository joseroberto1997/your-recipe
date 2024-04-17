import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SideBarMenu } from "./components/SidebarMenu";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <div className="container">
      <SideBarMenu />
      <main>
        <Routes>
          <Route path="/:categoryId" element={<MainContent />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
