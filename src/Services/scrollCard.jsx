import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scrollCard.css";

export default function ScrollCard() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const panels = gsap.utils.toArray(".panel");
    
    panels.forEach((panel, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          pin: true,
          scrub: true,
          pinSpacing: false,
          onRefresh: () => gsap.set(panel, {
            transformOrigin: "center " + (panel.offsetHeight - window.innerHeight / 2) + "px"
          })
        }
      });

      tl.fromTo(panel, { scale: 1, opacity: 1 }, { scale: 0.5, opacity: 0.5, duration: 1 })
        .to(panel, { opacity: 0, duration: 0.1 });
    });
  }, []);

  return (
    <>
      <div className="slides-wrapper">
        <section className="panel">
          <div className="panel-content">
            <h1>Section 1</h1>
            <img className="image" src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d" alt="Unsplash" />
          </div>
        </section>
        <section className="panel">
          <div className="panel-content height">
            <div className="dd">
              <h1>Section 2</h1>
              {/* Repeat the content to simulate scrolling */}
              {[...Array(20)].map((_, i) => (
                <p key={i}>This section is long and scrollable within before the next slide comes in.</p>
              ))}
            </div>
          </div>
        </section>
        <section className="panel">
          <div className="panel-content">
            <h1>Section 3</h1>
          </div>
        </section>
        <section className="panel">
          <div className="panel-content">
            <h1>Section 4</h1>
          </div>
        </section>
      </div>
      <div className="nav">
        <div className="logo">Nav</div>
        <div className="nav-links">
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
        </div>
      </div>
    </>
  );
}
