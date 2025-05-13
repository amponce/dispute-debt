// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IntroPage from "./pages/intro";
import ContactInfo from "./pages/contactInfo";
import VeteranInfo from "./pages/veteranInfo";
import DebtSelection from "./pages/debts";
import HousingDispute from "./pages/housing";
import HousingReason from "./pages/housingReason";
import CompensationDispute from "./pages/compensation";
import CompensationReason from "./pages/compensationReason";
import Review from "./pages/review";
import Confirmation from "./pages/confirmation";
import ManageVaDebt from "./pages/manageVaDebt";
import RequestHelp from "./pages/requestHelp";
import HelpOptions from "./pages/helpOptions";
import "./styles.css";
import { ErrorProvider } from "./components/ErrorProvider";

function App() {
  return (
    <BrowserRouter>
      <ErrorProvider>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/personal-information" element={<VeteranInfo />} />
          <Route path="/contact-information" element={<ContactInfo />} />
          <Route path="/select-debt" element={<DebtSelection />} />
          <Route
            path="/existence-or-amount-housing"
            element={<HousingDispute />}
          />
          <Route path="/dispute-reason-housing" element={<HousingReason />} />
          <Route
            path="/existence-or-amount-compensation"
            element={<CompensationDispute />}
          />
          <Route
            path="/dispute-reason-compensation"
            element={<CompensationReason />}
          />
          <Route path="/review-and-submit" element={<Review />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/manage-va-debt" element={<ManageVaDebt />} />
          <Route path="/request-help" element={<RequestHelp />} />
          <Route path="/help-options" element={<HelpOptions />} />
        </Routes>
      </ErrorProvider>
    </BrowserRouter>
  );
}

export default App;
