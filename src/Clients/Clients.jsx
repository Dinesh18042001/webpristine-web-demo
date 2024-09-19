// import React from "react";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from "react-owl-carousel";
// import "./clients.css";

// export default function Clients() {
//   const options = {
//     center: true,
//     loop: true,
//     margin: 0,
//     nav: false,
//     dots: true,
//     // autoplay: true,
//     // autoplayTimeout: 3000,

//     responsive: {
//       0: {
//         items: 1,
//       },
//       992: {
//         items: 1,
//       },
//       1200: {
//         items: 2,
//       },
//     },
//   };

//   return (
//     <div className="clients-section">
//       <div className="clients-tittle">
//         <h1 className="text-center mb-5">What our clients say about us</h1>
//       </div>
//       <div className="container-fluid p-0">
//         <div className="clients-vedeos">
//           <OwlCarousel
//             className="clients-vedeos-carouel owl-theme"
//             {...options}
//           >
//             <div className="item d-flex flex-column justify-content-center align-items-center">
//               <div className="clients-vedio position-relative">
//                 <video width="700" height="394" controls>
//                   <source src="./assets/clients/vedio1.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>

//                 <div className="client-name">
//                   <h5 className="text-center">Justin Ly</h5>
//                   <p className="text-center">
//                     A.T. Gradient Consulting Construction, Canada
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="item d-flex flex-column justify-content-center align-items-center">
//               <div className="clients-vedio position-relative">
//                 <video width="700" height="394" controls>
//                   <source src="./assets/clients/vedio1.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>

//                 <div className="client-name">
//                   <h5 className="text-center">Justin Ly</h5>
//                   <p className="text-center">
//                     A.T. Gradient Consulting Construction, Canada
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="item d-flex flex-column justify-content-center align-items-center">
//               <div className="clients-vedio position-relative">
//                 <video width="700" height="394" controls>
//                   <source src="./assets/clients/vedio1.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>

//                 <div className="client-name">
//                   <h5 className="text-center">Justin Ly</h5>
//                   <p className="text-center">
//                     A.T. Gradient Consulting Construction, Canada
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="item d-flex flex-column justify-content-center align-items-center">
//               <div className="clients-vedio position-relative">
//                 <video width="700" height="394" controls>
//                   <source src="./assets/clients/vedio1.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>

//                 <div className="client-name">
//                   <h5 className="text-center">Justin Ly</h5>
//                   <p className="text-center">
//                     A.T. Gradient Consulting Construction, Canada
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </OwlCarousel>
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useRef } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "./clients.css";

export default function Clients() {
  const options = {
    center: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };

  // Function to toggle play/pause
  const handlePlayPause = (videoRef, iconRef) => {
    const video = videoRef.current;
    const icon = iconRef.current;

    if (video.paused) {
      video.play();
      icon.classList.replace("fa-play", "fa-pause");
    } else {
      video.pause();
      icon.classList.replace("fa-pause", "fa-play");
    }
  };

  const renderClientVideo = (src, clientName, clientDetails) => {
    // Refs for video and icon
    const videoRef = useRef(null);
    const iconRef = useRef(null);

    return (
      <div className="item d-flex flex-column justify-content-center align-items-center">
        <div className="clients-vedio position-relative">
          {/* Video tag */}
          {/* poster="./assets/clients/poster.png" */}
          <video  ref={videoRef} width="700" height="394" controls={false}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play button */}
          <div
            className="play-button"
            onClick={() => handlePlayPause(videoRef, iconRef)}
          >
            <i ref={iconRef} className="fas fa-play"></i>
          </div>

          {/* Client name and details */}
          <div className="client-name">
            <h5 className="text-center">{clientName}</h5>
            <p className="text-center">{clientDetails}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="clients-section">
      <div className="clients-tittle">
        <h1 className="text-center mb-5">What our clients say about us</h1>
      </div>
      <div className="container-fluid p-0">
        <div className="clients-vedeos">
          <OwlCarousel
            className="clients-vedeos-carouel owl-theme"
            {...options}
          >
            {renderClientVideo(
              "./assets/clients/vedio1.mp4",
              "Justin Ly",
              "A.T. Gradient Consulting Construction, Canada"
            )}
            {renderClientVideo(
              "./assets/clients/vedio1.mp4",
              "Client Name 2",
              "Client 2 Details"
            )}
            {renderClientVideo(
              "./assets/clients/vedio1.mp4",
              "Client Name 3",
              "Client 3 Details"
            )}
            {renderClientVideo(
              "./assets/clients/vedio1.mp4",
              "Client Name 4",
              "Client 4 Details"
            )}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
