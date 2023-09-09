"use client";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  const callback = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        console.log(entry.target.id);
      }
    });
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (one.current && two.current && three.current) {
      observer.observe(one.current);
      observer.observe(two.current);
      observer.observe(three.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [one, two, three]);

  return (
    <>
      <div id="1" ref={one} style={{ height: "100vh", backgroundColor: "red" }}>
        1
      </div>
      <div
        id="2"
        ref={two}
        style={{ height: "100vh", backgroundColor: "yellow" }}
      >
        2
      </div>
      <div
        id="3"
        ref={three}
        style={{ height: "100vh", backgroundColor: "green" }}
      >
        3
      </div>
    </>
  );
}
