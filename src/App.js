import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import EditProfile from "./components/Profile/EditProfile";
import Settings from "./components/Profile/Settings";
import Account from "./components/Profile/Account";
import AccountInfo from "./components/Profile/AccountInfo";
import PasswordVerification from "./components/Profile/PasswordVerification";
import EditEmail from "./components/Profile/EditEmail";
import ChangePassword from "./components/Profile/ChangePassword";
import PasswordVerification2 from "./components/Profile/PasswordVerification2";
import VerifyDeactivate from "./components/Profile/VerifyDeactivate";
import Deactivate from "./components/Profile/Deactivate";
import FinalDeactivation from "./components/Profile/FinalDeactivation";
import Privacy from "./components/Profile/Privacy";
import PrivacyPolicy from "./components/Profile/PrivacyPolicy";
import ContactUs from "./components/Profile/ContactUs";
import Forgot from "./components/Auth/Forgot";
import Reset from "./components/Auth/Reset";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import NotFound from "./components/Auth/NotFound";
import Botbar from "./components/botbar/Botbar";
import News from "./components/news/News";
import Messages from "./components/messages/Messages";
import { Notifications } from "@material-ui/icons";
import AddPost from "./components/addNews/AddPost";
import Profile from "./components/Profile/actualProfile/Profile";
import Article from "./components/news/Article";
import ArticlePreview from "./components/news/ArticlePreview";
// import store from "./store";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Signup} />
          <Route path="/Login" component={Login} />
          <ProtectedRoute path="/edit-profile" component={EditProfile} />
          <ProtectedRoute path="/settings" component={Settings} />
          <ProtectedRoute path="/account" component={Account} />
          <ProtectedRoute path="/account-info" component={AccountInfo} />
          <ProtectedRoute
            path="/verify-password"
            component={PasswordVerification}
          />
          <ProtectedRoute path="/change-email" component={EditEmail} />
          <ProtectedRoute path="/change-password" component={ChangePassword} />
          <ProtectedRoute
            path="/verify-password2"
            component={PasswordVerification2}
          />
          <ProtectedRoute
            path="/verify-deactivate"
            component={VerifyDeactivate}
          />
          <ProtectedRoute path="/deactivate" component={Deactivate} />
          <ProtectedRoute
            path="/fully-deactivate"
            component={FinalDeactivation}
          />
          <ProtectedRoute path="/privacy" component={Privacy} />
          <ProtectedRoute path="/article" component={Article} />
          <ProtectedRoute path="/article-preview" component={ArticlePreview} />
          <ProtectedRoute path="/news" component={News} />
          <ProtectedRoute path="/messages" component={Messages} />
          <ProtectedRoute path="/notifications" component={Notifications} />
          <ProtectedRoute path="/add-post" component={AddPost} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/forgot-password" component={Forgot} />
          <Route path="/reset-password" component={Reset} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Botbar />
      </Router>
    </div>
  );
}

export default App;
