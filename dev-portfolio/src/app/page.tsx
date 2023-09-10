"use client";
import React, { useEffect, useRef, useContext, useCallback } from "react";
import { NavbarContext } from "./Navbar/NavbarProvider";

export default function Home() {
  const { selectedNavItem, onSelectNavItem } = useContext(NavbarContext);
  const hero = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);

  console.log({ selectedNavItem });

  const observerCallback = useCallback(
    (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          onSelectNavItem(entry.target.id);
        }
      });
    },
    [onSelectNavItem]
  );
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (hero.current && about.current && skills.current) {
      observer.observe(hero.current);
      observer.observe(about.current);
      observer.observe(skills.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hero, about, skills]);

  return (
    <>
      <div
        id="hero"
        ref={hero}
        style={{ height: "100vh", backgroundColor: "red" }}
      >
        1
      </div>
      <div
        id="about"
        ref={about}
        style={{ height: "100vh", backgroundColor: "yellow" }}
      >
        2
      </div>
      <div
        id="skills"
        ref={skills}
        style={{ height: "100vh", backgroundColor: "green" }}
      >
        3
      </div>
    </>
  );
}
