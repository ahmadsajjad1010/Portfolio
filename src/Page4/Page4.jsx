import React, { useRef, useEffect } from "react";

function BubbleEffect() {
  const containerRef = useRef(null);
  const ballsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Initialize balls with positions and velocities
    ballsRef.current = Array.from(container.querySelectorAll(".ball")).map(
      (ball) => {
        const ballDiameter = ball.offsetWidth;

        return {
          element: ball,
          x: Math.random() * (containerWidth - ballDiameter),
          y: Math.random() * (containerHeight - ballDiameter),
          dx: 0,
          dy: 0,
          diameter: ballDiameter,
        };
      }
    );

    const animate = () => {
      ballsRef.current.forEach((ball, index) => {
        // Update ball position
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Wall repulsion
        if (ball.x <= 0 || ball.x + ball.diameter >= containerWidth) {
          ball.dx *= -1;
          ball.x = Math.max(
            0,
            Math.min(ball.x, containerWidth - ball.diameter)
          );
        }
        if (ball.y <= 0 || ball.y + ball.diameter >= containerHeight) {
          ball.dy *= -1;
          ball.y = Math.max(
            0,
            Math.min(ball.y, containerHeight - ball.diameter)
          );
        }

        // Collision detection with other balls
        ballsRef.current.forEach((otherBall, otherIndex) => {
          if (index !== otherIndex) {
            const distX = otherBall.x - ball.x;
            const distY = otherBall.y - ball.y;
            const distance = Math.sqrt(distX ** 2 + distY ** 2);

            if (distance < ball.diameter) {
              // Collision response: Simple velocity exchange
              const angle = Math.atan2(distY, distX);
              const overlap = ball.diameter - distance;

              // Push balls apart to prevent overlap
              ball.x -= (Math.cos(angle) * overlap) / 2;
              ball.y -= (Math.sin(angle) * overlap) / 2;
              otherBall.x += (Math.cos(angle) * overlap) / 2;
              otherBall.y += (Math.sin(angle) * overlap) / 2;

              // Swap velocities
              const tempDx = ball.dx;
              const tempDy = ball.dy;
              ball.dx = otherBall.dx;
              ball.dy = otherBall.dy;
              otherBall.dx = tempDx;
              otherBall.dy = tempDy;
            }
          }
        });

        // Apply friction for smooth slowing
        ball.dx *= 0.98;
        ball.dy *= 0.98;

        // Update ball position in DOM
        ball.element.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const handleMouseMove = (e) => {
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    ballsRef.current.forEach((ball) => {
      const ballCenterX = ball.x + ball.diameter / 2;
      const ballCenterY = ball.y + ball.diameter / 2;

      const distX = ballCenterX - cursorX;
      const distY = ballCenterY - cursorY;
      const distance = Math.sqrt(distX ** 2 + distY ** 2);

      if (distance < 100) {
        // Repulsion from the cursor
        const angle = Math.atan2(distY, distX);
        const force = (150 - distance) / 150; // Stronger force the closer the cursor
        ball.dx += Math.cos(angle) * force * 10;
        ball.dy += Math.sin(angle) * force * 10;
      }
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="ballgame relative w-full h-[90vh] border-y-[1px] mb-8 border-gray-50  bg-[#0D0D0D] overflow-hidden"
    >
      <div className="relative z-10 w-full h-full">
        {Array.from({ length: 44 }).map((_, index) => (
          <div
            key={index}
            className="ball w-[100px] h-[100px] rounded-full absolute"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.8) 30%, rgba(173, 216, 230, 0.1) 80%)",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              border: "2px solid rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(4px)",
              opacity: "0.9",
            }}
          ></div>
        ))}

        <div className="myText absolute w-full h-full flex items-center justify-center">
          <p className="text-white text-[35vw] font-[font3]   opacity-[0.2] mix-blend-color-dodge ">
            AHMAD
          </p>
        </div>
      </div>
    </div>
  );
}

export default BubbleEffect;
