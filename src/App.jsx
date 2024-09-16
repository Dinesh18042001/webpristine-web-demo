import { useState } from "react";
import { Header } from "./Header/Header";
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import "./App.css";
import { BannerHome } from "./Banner/BannerHome";
import { Companies } from "./Company-logo/Companies";
import { Idea } from "./idea/Idea";
import { News } from "./News/News";
import { Services } from "./Services/Services";
import { Certifications } from "./Certifications/Certifications";
import { Case } from "./Case/Case";
import VisionIndustries from "./VisionIndustries/VisionIndustries";
import Clients from "./Clients/Clients";
import Blogs from "./Blogs/Blogs";
import ContactForm from "./ContactForm/ContactForm";
import { Footer } from "./Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <BannerHome />
      <Companies />
      <Idea />
      <News />
      <Services />
      <Certifications />
      <Case />
      <VisionIndustries />
      <Clients/>
      <Blogs/>
      {/* <ContactForm/> */}
      <Footer/>
    </>
  );
}

export default App;






// import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
// import "./App.css";
// import { Header } from "./Header/Header";
// import { BannerHome } from "./Banner/BannerHome";
// import { Companies } from "./Company-logo/Companies";
// import { Idea } from "./idea/Idea";
// import { News } from "./News/News";
// import { Services } from "./Services/Services";
// import { Certifications } from "./Certifications/Certifications";
// import { Case } from "./Case/Case";
// import VisionIndustries from "./VisionIndustries/VisionIndustries";
// import Clients from "./Clients/Clients";
// import Blogs from "./Blogs/Blogs";
// import ContactForm from "./ContactForm/ContactForm";
// import { Footer } from "./Footer/Footer";
// import {About} from "./About/About"

// const Layout = () => {
//   return (
//     <>
//       <Header />
//       <Outlet /> 
//       <Footer />
//     </>
//   );
// };

// function App() {
//   const router = createBrowserRouter([
//     {
//       element: <Layout />, 
//       children: [
//         { path: "/", element: <BannerHome /> },
//         { path: "/companies", element: <Companies /> },
//         { path: "/idea", element: <Idea /> },
//         { path: "/news", element: <News /> },
//         { path: "/services", element: <Services /> },
//         { path: "/certifications", element: <Certifications /> },
//         { path: "/case", element: <Case /> },
//         { path: "/vision-industries", element: <VisionIndustries /> },
//         { path: "/clients", element: <Clients /> },
//         { path: "/blogs", element: <Blogs /> },
//         { path: "/contact", element: <ContactForm /> },
//         { path: "/about", element: <About/> }
//       ]
//     }
//   ]);

//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;
