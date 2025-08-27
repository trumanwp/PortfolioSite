import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      {/* Toast notifications component, rendered globally */}
      <Toaster />

      {/* BrowserRouter enables routing in the app */}
      <BrowserRouter>
        <Routes>
          {/* Default route (homepage) */}
          <Route index element={<Home />} />

          {/* Catch-all route for undefined paths, renders NotFound page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
