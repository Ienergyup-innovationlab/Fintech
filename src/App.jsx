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
import Profilenotupdated from "./components/ProfileUpdate/Profilenotupdated";
import FarmTech from "./components/FarmTech/FarmTech";
import EditPage from "./components/FarmTech/EditPage";
import Chatpage from "./components/Messenger/Chatpage";




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
        <Route path="/BusinessRegistration" element={<BusinessInvestorForm />} />
        <Route path="/ProfileUpdate" element={<Profilenotupdated />}  />
        <Route path="/FarmTech" element={<FarmTech />}  />
        <Route path="/EditPage" element={<EditPage />}  />
        <Route path="/Chatpage" element={<Chatpage />}  />
      </Routes>
    </>
  );
}

export default App;
