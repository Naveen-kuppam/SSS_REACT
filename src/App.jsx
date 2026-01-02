import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collections from "./pages/Collections";
import WatchDetails from "./pages/WatchDetails";
import AuthForm from "./AuthForm";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route path="/" element={<AuthForm />} />

        {/* AFTER LOGIN */}
        <Route path="/home" element={<Home />} />

        {/* SHOP */}
        <Route path="/shop" element={<Collections />} />
        <Route path="/watch/:id" element={<WatchDetails />} />


        {/* FALLBACK */}
        <Route path="*" element={<AuthForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
