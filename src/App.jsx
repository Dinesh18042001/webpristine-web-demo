import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';  
import "./App.css";
import NavTwo from './NavTwo/NavTwo';  
import { Footer } from "./Footer/Footer";
import { BannerHome } from "./Banner/BannerHome";
import { Companies } from "./Company-logo/Companies";
import { Idea } from "./idea/Idea";
import { News } from "./News/News";
import { Services } from "./Services/Services";
import { Certifications } from "./Certifications/Certifications";
import { Case } from "./Case/Case";
import VisionIndustries from "./VisionIndustries/VisionIndustries";
import Clients from "./Clients/Clients";
import Blogs from './Blogs/Blogs.jsx';
import ContactForm from './ContactForm/ContactForm';
import { About } from './About/About';
import Assistant from './Assistant/Assistant';
import BlogPage from './BlogPage/BlogPage.jsx';
import Careers from './Careers/Careers.jsx';
import { ContactPage } from './ContactPage/ContactPage.jsx';
import WebDevelopment from './ServicesPage/WebDevelopment/WebDevelopment.jsx';
import VirtualAssistant from './ServicesPage/VirtualAssistant/VirtualAssistant.jsx';
import AppDevelopment from './ServicesPage/AppDevelopment/AppDevelopment.jsx';
import DigitalMarketing from './ServicesPage/DigitalMarketing/DigitalMarketing.jsx';
import CloudServices from './ServicesPage/CloudServices/CloudServices.jsx';
import MobileApp from './BlogDetails/MobileApp.jsx';
import Digital from './BlogDetails/Digital.jsx';
import WebDev from './BlogDetails/WebDev.jsx';
import VirtualAss from './BlogDetails/VirtualAss.jsx';

const Layout = () => {
  return (
    <>
      
      <NavTwo />
    
      <ScrollToTop />
    
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
        { path: "/bannerhome", element: <BannerHome /> },
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
        { path: "/about", element: <About /> },
        { path: "/assistant", element: <Assistant /> },
        { path: "/blogspage", element: <BlogPage /> },
        { path: "/careers", element: <Careers /> },
        { path: "/contactpage", element: <ContactPage /> },
        { path: "/webdevelopment", element: <WebDevelopment /> },
        { path: "/virtualassistant", element: <VirtualAssistant /> },
        { path: "/appdevelopment", element: <AppDevelopment /> },
        { path: "/digitalmarketing", element: <DigitalMarketing /> },
        { path: "/cloudservices", element: <CloudServices /> },
        { path: "/mobileappblog", element: <MobileApp /> },
        { path: "/digitalblog", element: <Digital /> },
        { path: "/webdevblog", element: <WebDev /> },
        { path: "/virtualassblog", element: <VirtualAss /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;