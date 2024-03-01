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
import Profilenotupdated from "./components/ProfileUpdate/Profilenotupdated";
import FarmTech from "./components/FarmTech/FarmTech";
import EditPage from "./components/FarmTech/EditPage";
import Chatpage from "./components/Messenger/Chatpage";
import Ratings from "./components/Ratings/CustomerSupport/Ratings";
import SendReport from "./components/Ratings/CustomerSupport/sendReport";
import ChatSupport from "./components/Ratings/CustomerSupport/chatSupport";
import BillPaymentPage from "./components/BillPayment/billPaymentPage";
import PaymentMethod from "./components/PaymentMethod/PaymentMethodPage";


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

        <Route
          path="/WithdrawSuccessfulPage"
          element={<WithdrawSuccessful />}
        />

        <Route path="/WithdrawSuccessfulPage" element={<WithdrawSuccessful />} />
        <Route path="/billPaymentPage" element={<BillPaymentPage />} />
        <Route path="/PaymentMethodPage" element={<PaymentMethod />} />
        

        <Route
          path="/BusinessRegistration"
          element={<BusinessInvestorForm />}
        />
        <Route path="/ProfileUpdate" element={<Profilenotupdated />} />
        <Route path="/FarmTech" element={<FarmTech />} />
        <Route path="/EditPage" element={<EditPage />} />
        <Route path="/Chatpage" element={<Chatpage />} />
        <Route path="/Ratings" element={<Ratings />} />
        <Route path="/sendReport" element={<SendReport />} />
        <Route path="/chatSupport" element={<ChatSupport />} />
      </Routes>
    </>
  );
}

export default App;
