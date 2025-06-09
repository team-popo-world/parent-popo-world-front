import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./page/home/home";
import { ProductManagementPage } from "./page/store/product-management";
import { PurchaseManagementPage } from "./page/store/purchase-management";
import { PurchaseRequestPage } from "./page/store/purchase-request";
import { StoreLayout } from "./page/store/layout";
import { MobileView } from "./components/layout/mobile-view";
import { InvestLayout } from "./page/invest/layout";
import { InvestAnalyzePage } from "./page/invest/invest-analyze";
import { InvestChatBotPage } from "./page/invest/chat-bot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MobileView />}>
          <Route index element={<HomePage />} />
          <Route path="/store" element={<StoreLayout />}>
            <Route path="product-management" element={<ProductManagementPage />} />
            <Route path="purchase-management" element={<PurchaseManagementPage />} />
            <Route path="purchase-request" element={<PurchaseRequestPage />} />
          </Route>
          <Route path="/invest" element={<InvestLayout />}>
            <Route path="analyze" element={<InvestAnalyzePage />} />
            <Route path="chat-bot" element={<InvestChatBotPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
