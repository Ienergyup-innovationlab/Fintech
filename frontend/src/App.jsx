import Login from "./components/LoginPage/login";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Boarding from "./components/OnBoardPages/Boarding";
import SignUp from "./components/SignupPage/signUp";
import InvestPref from "./components/InvestorPref/InvestmentPreference";
import InvestorReg from "./components/InvestorReg/InvestorRegistration";
import BusinessInvestorForm from "./components/BusinessAccount/BusinessInvestorForm";
import VerificationDoc from "./components/VerificationDoc/verificationDocPage";
import FinancialDoc from "./components/FinanceDoc/financialDocInvestor";
import AuthenticationPage from "./components/AuthenticationPage/Authenticate";
import AuthenticateVerify from "./components/AuthenticationPage/AuthenticationVerified";
import Dashboard from "./components/DashboardPage/dashboardPage";
import SendmoneyPage from "./components/SendMoney/SendMoneyPage";
import SendDetailsPage from "./components/SendDetails/SendDetailsPage";
import SuccessPage from "./components/Successful/successPage";
import AddmoneyPage from "./components/AddMoney/AddMoneyPage";
import WithdrawmoneyPage from "./components/WithdrawMoney/WithdrawMoneyPage";
import WithdrawSuccessful from "./components/WithdrawMoney/WithdrawSuccessfulPage";
import BillPaymentPage from "./components/BillPayment/billPaymentPage";
import addMoneyP from "./components/AddMoney/AddMoneyP";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/onBoard" element={<Boarding />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/InvestmentPreference" element={<InvestPref />} />
        <Route path="/InvestorRegistration" element={<InvestorReg />} />
        <Route path="/VerificationDocPage" element={<VerificationDoc />} />
        <Route path="/FinancialDocInvestor" element={<FinancialDoc />} />
        <Route path="/Authenticate" element={<AuthenticationPage />} />
        <Route path="/VerifiedPage" element={<AuthenticateVerify />} />
        <Route path="/DashboardPage" element={<Dashboard />} />
        <Route path="/SendMoneyPage" element={<SendmoneyPage />} />
        <Route path="/SendDetailsPage" element={<SendDetailsPage />} />
        <Route path="/SuccessPage" element={<SuccessPage />} />
        <Route path="/AddMoneyPage" element={<AddmoneyPage />} />
        <Route path="/WithdrawMoneyPage" element={<WithdrawmoneyPage />} />
        <Route path="/WithdrawSuccessfulPage" element={<WithdrawSuccessful />} />
        <Route path="/billPaymentPage" element={<BillPaymentPage />} />
        <Route path="/AddMoneyP" element={<addMoneyP />} />
        
        <Route
          path="/BusinessRegistration"
          element={<BusinessInvestorForm />}
        />
      </Routes>
    </>
  );
}

export default App;
