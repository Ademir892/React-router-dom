import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./routes/Expenses/index.tsx";
import Invoices from "./routes/Expenses/Invoices/index.tsx";
import NotFound from "./routes/NotFound/index.tsx";
import Invoice from "./routes/Expenses/Invoices/Invoice/index.tsx";
import InvoicesIndex from "./routes/Expenses/Invoices/InvoicesIndex/index.tsx";
import Welcome from "./routes/Welcome/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Welcome />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />}>
        <Route index element={<InvoicesIndex />} />
        <Route path=":invoiceId" element={<Invoice />} />
      </Route>  
      </Route>
      <Route path="*" element={<NotFound />}
      />
  </Routes>
</BrowserRouter>
)
