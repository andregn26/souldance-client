import Navbar from "@/scenes/navbar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <div className="App bg-gray-50">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
