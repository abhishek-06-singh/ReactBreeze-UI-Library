import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import Navbar from "./subcomponent/Navbar/navbar";
import Home from "./subContainer/Home/home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Heros from "./subContainer/heros/Heros";
import Signups from "./subContainer/signup/Signups";
import Signins from "./subContainer/signin/Signin";
import Comments from "./subContainer/comment/Comments";
import Post from "./subContainer/post/Post";
import Gallery from "./subContainer/image-Gallery/Gallery";
import UserIndicator from "./subContainer/user/UserIndicator";
import Forms from "./subContainer/forms/Forms";
import Toasts from "./subContainer/toasts/Toasts";
import FlyBtns from "./subContainer/fly-buttons/Flybtns";
import Questions from "./subContainer/questions/Questions";
import Card from "./subContainer/card/Card";
import Address from "./subContainer/address/Address";
import Carts from "./subContainer/carts/Carts";
import Userprofiles from "./subContainer/userprofiles/Userprofiles";
import AboutMe from "./subContainer/Home/AboutMe";
import Calender from "./subContainer/calender/Calender";
import Feeds from "./subContainer/feeds/Feeds";
import Notification from "./subContainer/notification/Notification";
import Footer from "./subContainer/Home/Footer";
import Footers from "./subContainer/footers/Footers";
import PageNotFound from "./components/notfound/PageNotFound";

// import { XMarkIcon } from '@heroicons/react/outline'
// import { ChevronDownIcon, PlusIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aboutAbhishek" element={<AboutMe />} />
        <Route path="/" element={<Home />} />

        <Route
          path="/components/social/sections/signin"
          element={<Signins />}
        />
        <Route
          path="/components/social/sections/signup"
          element={<Signups />}
        />
        <Route
          path="/components/social/sections/comment"
          element={<Comments />}
        />
        <Route path="/components/social/sections/posts" element={<Post />} />
        <Route
          path="/components/social/sections/image-Gallery"
          element={<Gallery />}
        />
        <Route
          path="/components/social/sections/users"
          element={<UserIndicator />}
        />
        <Route path="/components/social/sections/forms" element={<Forms />} />
        <Route path="/components/social/sections/toast" element={<Toasts />} />
        <Route
          path="/components/social/sections/fly-button"
          element={<FlyBtns />}
        />
        <Route
          path="/components/social/sections/Questionaire"
          element={<Questions />}
        />

        <Route path="/components/social/sections/cards" element={<Card />} />
        <Route
          path="/components/home-services/add-address"
          element={<Address />}
        />
        <Route path="/components/home-services/carts" element={<Carts />} />
        <Route
          path="/components/social/sections/userProfile"
          element={<Userprofiles />}
        />
        <Route
          path="/components/home-services/application"
          element={<Calender />}
        />
        <Route path="/components/social/sections/feed" element={<Feeds />} />
        <Route
          path="/components/application-ui/overlays/notifications"
          element={<Notification />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
