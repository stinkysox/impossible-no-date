import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [position, setPosition] = useState({ top: "0px", left: "0px" });

  const handleMouseMove = (e) => {
    const button = e.target.getBoundingClientRect();
    const distance = Math.hypot(button.x - e.clientX, button.y - e.clientY);

    if (distance < 100) {
      const maxHeight = Math.min(window.innerHeight - button.height, 200);
      const maxWidth = Math.min(window.innerWidth - button.width, 180);
      const newTop = Math.random() * maxHeight + "px";
      const newLeft = Math.random() * maxWidth + "px";
      setPosition({ top: newTop, left: newLeft });
    }
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const button = e.target.getBoundingClientRect();
    const distance = Math.hypot(
      button.x - touch.clientX,
      button.y - touch.clientY
    );

    if (distance < 100) {
      const maxHeight = Math.min(window.innerHeight - button.height, 200); // Ensure within screen height
      const maxWidth = Math.min(window.innerWidth - button.width, 180); // Ensure within screen width
      const newTop = Math.random() * maxHeight + "px";
      const newLeft = Math.random() * maxWidth + "px";
      setPosition({ top: newTop, left: newLeft });
    }
  };

  return (
    <div className="home-container">
      <div className="contents-container">
        {isYesClicked ? (
          <>
            <div className="yes-container">
              <p>I knew you'd say yes! hehe</p>
              <p>call me and we can decide on a place!</p>
              <img
                src="https://i.pinimg.com/564x/07/95/b2/0795b2f3c6b57e0c9bc18375ac073523.jpg"
                alt=""
                className="kitty-image"
              />
            </div>
          </>
        ) : (
          <>
            <div className="kitty-container">
              <img
                src="https://i.pinimg.com/564x/52/e5/ef/52e5ef7da741d22b60e10d3759371578.jpg"
                alt=""
                className="kitty-image"
              />
            </div>
            <p className="main-para">Would you go out for coffee with me?</p>
            <div className="buttons-container">
              <button onClick={() => setIsYesClicked(true)}>Yes</button>
              <button
                className="no-button"
                style={{
                  position: "relative",
                  top: position.top,
                  left: position.left,
                }}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                No
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
