import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Toaster/>
      <BrowserRouter>
        <Routes>
          {/* Route cho trang chủ */}
          <Route path="/" element={<HomePage />} />

          {/* Route fallback cho các đường dẫn không tồn tại */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
