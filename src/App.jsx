import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import "./App.css";
import { Header } from "./Header/Header";
import { BannerHome } from "./Banner/BannerHome";
import { Companies } from "./Company-logo/Companies";
import { Idea } from "./idea/Idea";
import { News } from "./News/News";
import { Services } from "./Services/Services";
import { Certifications } from "./Certifications/Certifications";
import  {Case}  from "./Case/Case";
import VisionIndustries from "./VisionIndustries/VisionIndustries";
import Clients from "./Clients/Clients";
import Blogs from "./Blogs/Blogs.jsx";
import ContactForm from "./ContactForm/ContactForm";
import { Footer } from "./Footer/Footer";
import {About} from "./About/About"
import Assistant from './Assistant/Assistant';
import BlogPage from './BlogPage/BlogPage.jsx';
import Careers from './Careers/Careers.jsx';
import NavTwo from './NavTwo/NavTwo.jsx';
import { ContactPage } from './ContactPage/ContactPage.jsx';
import WebDevelopment from './ServicesPage/WebDevelopment/WebDevelopment.jsx';
import VirtualAssistant from './ServicesPage/VirtualAssistant/VirtualAssistant.jsx';
import AppDevelopment from './ServicesPage/AppDevelopment/AppDevelopment.jsx';
import DigitalMarketing from './ServicesPage/DigitalMarketing/DigitalMarketing.jsx';

const Layout =() => {
  return (
    <>
      {/* <Header /> */}
      <NavTwo/>
      <Outlet /> 
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />, 
      children: [
        { path: "/", element: <BannerHome /> },
        { path: "/companies", element: <Companies /> },
        { path: "/idea", element: <Idea /> },
        { path: "/news", element: <News /> },
        { path: "/services", element: <Services /> },
        { path: "/certifications", element: <Certifications /> },
        { path: "/case", element: <Case /> },
        { path: "/vision-industries", element: <VisionIndustries /> },
        { path: "/clients", element: <Clients /> },
        { path: "/blogs", element: <Blogs /> },
        { path: "/contact", element: <ContactForm /> },
        { path: "/about", element: <About/> },
        { path: "/assistant", element: <Assistant/> },
        { path: "/blogs", element: <Blogs/> },
        { path: "/blogspage", element: <BlogPage/> },
        { path: "/careers", element: <Careers/> },
        { path: "/contactpage", element: <ContactPage/>},
        { path: "/webdevelopment", element: <WebDevelopment/>},
        { path: "/virtualassistant", element: <VirtualAssistant/>},
        { path: "/appdevelopment", element: <AppDevelopment/>},
        { path: "/digitalmarketing", element: <DigitalMarketing/>},

      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
