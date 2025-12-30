import { useEffect, useRef, useState } from "react";

import "./Assignment_7.css";

export default function Assignment_7() {
  const [jumping, setJumping] = useState(false);
  const [trees, setTrees] = useState([
    { id: 1, x: 600 },
    { id: 2, x: 1000 },
    { id: 3, x: 1400 },
  ]);

  const containerRef = useRef(null);
  const groundRef = useRef(null);
  const bgX = useRef(0);
  const groundX = useRef(0);

  const jump = () => {
    if (jumping) return;
    setJumping(true);
    setTimeout(() => setJumping(false), 700);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jumping]);

  useEffect(() => {
    const loop = () => {
      
      bgX.current -= 0.3;
      containerRef.current.style.backgroundPositionX = `${bgX.current}px`;

      groundX.current -= 2;
      groundRef.current.style.backgroundPositionX = `${groundX.current}px`;

      setTrees((prev) =>
        prev.map((tree) => ({
          ...tree,
          x: tree.x < -100 ? 1600 : tree.x - 2.5,
        }))
      );
      requestAnimationFrame(loop);
    };
    loop();
  }, []);

  return (
    <div className="container7" ref={containerRef} onClick={jump}>
      {trees.map((tree) => (
        <div className="tree" key={tree.id} style={{ left: `${tree.x}px` }} />
      ))}

      <div className={`dino ${jumping ? "jump" : ""}`} />

      <div className="ground" ref={groundRef} />
    </div>
  );
}
