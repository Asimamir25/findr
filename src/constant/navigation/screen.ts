import ForgotPassword from "../../screen/auth/forgotPassword/Forgotpasspword";
import SignIn from "../../screen/auth/signIn/SignIn";
import SignUp from "../../screen/auth/signUp/Signup";
import Home from "../../screen/home/Home";
import Profile from "../../screen/profile/Profile";
import Report from "../../screen/report/Report";
import News from "../../screen/news/News";
import { SVG } from "../imagePath";
import Upload from "../../screen/createMissingPerson/CreateMissingPerson";

export const AUTH_STACK_NAVIGATION_SCREENS = {
  signIn: "signIn",
  signUp: "sign",
  forgotPassword: "forgotPassword",
};
export const BOTTOM_STACK_NAVIGATION_SCREENS = {
  home: "home",
  report: "report",
  Profile: "profile",
  upload: "upload",
  news: "news",
};
export const AUTH_STACK = [
  {
    screen: AUTH_STACK_NAVIGATION_SCREENS.signUp,
    component: SignUp,
  },
  {
    screen: AUTH_STACK_NAVIGATION_SCREENS.signIn,
    component: SignIn,
  },
  {
    screen: AUTH_STACK_NAVIGATION_SCREENS.forgotPassword,
    component: ForgotPassword,
  },
];

export const BOTTOM_STACK = [
  {
    screen: BOTTOM_STACK_NAVIGATION_SCREENS.home,
    name: "Home",
    component: Home,
    icon: SVG.homeIcon,
  },
  {
    screen: BOTTOM_STACK_NAVIGATION_SCREENS.report,
    name: "Report",
    component: Report,
    icon: SVG.handsHelpingIcon,
  },
  {
    screen: BOTTOM_STACK_NAVIGATION_SCREENS.upload,
    name: "Upload",
    component: Upload,
    icon: SVG.uploadIcon,
  },
  {
    screen: BOTTOM_STACK_NAVIGATION_SCREENS.news,
    name: "News",
    component: News,
    icon: SVG.profileIcon,
  },
  {
    screen: BOTTOM_STACK_NAVIGATION_SCREENS.Profile,
    name: "Profile",
    component: Profile,
    icon: SVG.profileIcon,
  },
];
