
"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import React, { useRef } from "react";

export const Plant = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M247.63,47.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,159c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,176,54.58,54.58,0,0,0,87,170.33l25,25V224a8,8,0,0,0,16,0V194.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,141.21,250.67,99.65,247.63,47.89ZM47.81,155.6C32.47,146.31,23.79,124.32,24,96c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,122.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,161.24,55.82,160.45,47.81,155.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,136c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,98.34,220.14,131.44,197.12,145.38Z" />
  </svg>
);

export const HandHeart = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path>
  </svg>
);

export const ChefHat = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M240,112a56.06,56.06,0,0,0-56-56c-1.77,0-3.54.1-5.29.26a56,56,0,0,0-101.42,0C75.54,56.1,73.77,56,72,56A56,56,0,0,0,48,162.59V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V162.59A56.09,56.09,0,0,0,240,112Zm-48,96H64V167.42a55.49,55.49,0,0,0,8,.58H184a55.49,55.49,0,0,0,8-.58Zm-8-56H170.25l5.51-22.06a8,8,0,0,0-15.52-3.88L153.75,152H136V128a8,8,0,0,0-16,0v24H102.25l-6.49-25.94a8,8,0,1,0-15.52,3.88L85.75,152H72a40,40,0,0,1,0-80l.58,0A55.21,55.21,0,0,0,72,80a8,8,0,0,0,16,0,40,40,0,0,1,80,0,8,8,0,0,0,16,0,55.21,55.21,0,0,0-.58-8l.58,0a40,40,0,0,1,0,80Z"></path>
  </svg>
);

export const ArtisanHeart = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21c-4-3.5-7-6.5-7-9.5 0-2.5 2-4.5 4.5-4.5 1.5 0 2.5 1 3 2.5.5-1.5 1.5-2.5 3-2.5 2.5 0 4.5 2 4.5 4.5 0 3-3 6-8 9.5z" />
    <path d="M8.5 9c.8-.5 1.8-.5 2.5 0" strokeWidth="1" />
  </svg>
);

export const ArtisanLeaf = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21c-4-3-6-6-6-9 0-4 3-7 6-9 3 2 6 5 6 9 0 3-2 6-6 9z" />
    <path d="M12 21V4" strokeWidth="1.2" />
    <path d="M12 8c-1.5-.5-3 0-4 1" strokeWidth="1" />
    <path d="M12 12c-1.5-.5-3 0-4 1" strokeWidth="1" />
    <path d="M12 16c-1.5-.5-3 0-4 1" strokeWidth="1" />
    <path d="M12 8c1.5-.5 3 0 4 1" strokeWidth="1" />
    <path d="M12 12c1.5-.5 3 0 4 1" strokeWidth="1" />
    <path d="M12 16c1.5-.5 3 0 4 1" strokeWidth="1" />
  </svg>
);

interface BurgerSketchProps {
  className?: string;
}

export const BurgerSketch = React.forwardRef<SVGSVGElement, BurgerSketchProps>(
  ({ className = "w-full h-auto" }, ref) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <motion.svg
        ref={ref}
        viewBox="0 0 520 580"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial="initial"
        whileHover="hover"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Bottom Bun */}
        <g>
          <path d="M 140 380 L 145 420 Q 260 465 375 420 L 380 380" />
          <path d="M 155 380 Q 260 415 365 380" opacity="0.5" strokeWidth="1.5" />
        </g>

        {/* Patty */}
        <g>
          <path d="M 125 330 L 395 330 L 388 380 L 132 380 Z" />
          <line x1="135" y1="345" x2="385" y2="345" opacity="0.4" strokeWidth="1.5" />
        </g>

        {/* Cheese */}
        <g>
          <path d="M 130 320 L 390 320 L 385 335 L 350 335 L 340 355 L 320 335 L 260 335 L 240 360 L 220 335 L 160 335 L 150 350 L 135 335 L 125 335 Z" />
        </g>

        {/* Lettuce */}
        <motion.g
          animate={hovered ? { y: -20 } : { y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >

          <path d="M 100 300 L 120 325 L 145 310 L 175 335 L 205 315 L 235 340 L 260 320 L 290 345 L 320 320 L 350 340 L 380 315 L 405 330 L 420 305 L 400 285 L 370 300 L 340 280 L 310 295 L 280 275 L 250 290 L 220 270 L 190 290 L 160 275 L 130 295 L 105 280 Z" />
        </motion.g>

        {/* Top Bun — lifts on hover, lands on leave */}
        <motion.g
          variants={{
            initial: { y: 0 },
            hover: {
              y: -68,
              x: 10,
              rotateZ: 10
            }
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <path d="M 110 300 Q 110 110 260 110 Q 410 110 410 300 L 390 320 L 130 320 Z" />
          <path d="M 140 280 Q 260 305 380 280" opacity="0.5" strokeWidth="1.5" />
          <g fill="currentColor" stroke="none">
            <ellipse cx="180" cy="170" rx="4" ry="6" transform="rotate(-15 180 170)" />
            <ellipse cx="230" cy="145" rx="4" ry="6" transform="rotate(10 230 145)" />
            <ellipse cx="290" cy="160" rx="4" ry="6" transform="rotate(-8 290 160)" />
            <ellipse cx="330" cy="200" rx="3" ry="5" transform="rotate(20 330 200)" />
            <ellipse cx="260" cy="190" rx="3" ry="5" transform="rotate(-5 260 190)" />
            <ellipse cx="210" cy="210" rx="3" ry="5" transform="rotate(12 210 210)" />
            <ellipse cx="150" cy="220" rx="3" ry="4" transform="rotate(-20 150 220)" />
            <ellipse cx="360" cy="240" rx="3" ry="4" transform="rotate(5 360 240)" />
          </g>
        </motion.g>
      </motion.svg>
    );
  }
);
BurgerSketch.displayName = "BurgerSketch";


interface DrinkSketchProps {
  className?: string;
  strokeColor?: string;
}

export const DrinkSketch = React.forwardRef<SVGSVGElement, DrinkSketchProps>(
  ({ className = "w-full h-auto", strokeColor = "currentColor" }, ref) => {
    const [hovered, setHovered] = React.useState(false);

    const icePaths = [
      "M 185 240 L 205 260 L 195 285 L 175 265 Z",
      "M 240 250 L 265 270 L 255 300 L 230 280 Z",
      "M 300 245 L 320 265 L 310 290 L 290 270 Z",
      "M 200 310 L 220 330 L 210 355 L 190 335 Z",
      "M 270 320 L 295 340 L 285 370 L 260 350 Z",
    ];

    const iceAnimations = [
      {
        x: [0, 10, 18, 6, -8, -2, 0],
        y: [0, -8, 4, 14, 10, -4, 0],
        rotate: [0, 6, -4, 8, -3, 2, 0],
        duration: 3.2,
      },
      {
        x: [0, -12, -6, 8, 16, 4, 0],
        y: [0, 6, -10, -4, 12, 8, 0],
        rotate: [0, -7, 5, -6, 4, -2, 0],
        duration: 3.8,
      },
      {
        x: [0, 6, 14, -4, -10, 8, 0],
        y: [0, 12, -6, -12, 6, 14, 0],
        rotate: [0, 5, 9, -4, -7, 3, 0],
        duration: 3.5,
      },
      {
        x: [0, -8, -16, -2, 10, 14, 0],
        y: [0, -6, 8, 16, 4, -10, 0],
        rotate: [0, -5, -8, 3, 7, -2, 0],
        duration: 4.1,
      },
      {
        x: [0, 14, 4, -12, -6, 10, 0],
        y: [0, -4, -14, 6, 14, -2, 0],
        rotate: [0, 8, 3, -7, -4, 6, 0],
        duration: 3.6,
      },
    ];

    const iceDurations = [1.8, 2.4, 2.1, 1.9, 2.6];

    return (
      <motion.svg
        ref={ref}
        viewBox="0 0 520 520"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Cup Body */}
        <g data-part="cup-body">
          <path d="M 155 200 L 175 440 Q 260 465 345 440 L 365 200" />
          <line x1="162" y1="260" x2="358" y2="260" opacity="0.5" strokeWidth="1.5" />
          <line x1="168" y1="320" x2="352" y2="320" opacity="0.5" strokeWidth="1.5" />
          <line x1="172" y1="380" x2="348" y2="380" opacity="0.5" strokeWidth="1.5" />
          <line x1="210" y1="200" x2="225" y2="445" opacity="0.2" strokeWidth="1" />
          <line x1="260" y1="200" x2="260" y2="455" opacity="0.2" strokeWidth="1" />
          <line x1="310" y1="200" x2="295" y2="445" opacity="0.2" strokeWidth="1" />
        </g>

        {/* Ice — floats randomly when hovered */}
        <g data-part="ice">
          {icePaths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              opacity="0.35"
              strokeWidth="1.5"
              animate={
                hovered
                  ? {
                    x: iceAnimations[i].x,
                    y: iceAnimations[i].y,
                    rotate: iceAnimations[i].rotate,
                  }
                  : { x: 0, y: 0, rotate: 0 }
              }
              transition={{
                duration: iceDurations[i],
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}
        </g>

        {/* Lid */}
        <g data-part="lid">
          <path d="M 145 200 L 375 200" />
          <path d="M 145 200 Q 260 150 375 200" />
          <path d="M 155 190 Q 260 155 365 190" opacity="0.5" strokeWidth="1.5" />
          <path d="M 140 200 L 380 200 L 375 210 L 145 210 Z" />
        </g>

        {/* Straw — gently sways and bobs as if nudged by floating ice */}
        <motion.g
          data-part="straw"
          animate={
            hovered
              ? {
                rotate: [0, 1.2, -0.8, 1.5, -0.3, 0],
                y: [0, -1.5, 0.5, -2, 1, 0],
                x: [0, 0.5, -0.3, 0.8, -0.2, 0],
              }
              : { rotate: 0, y: 0, x: 0 }
          }
          transition={{
            duration: 3.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{ originX: "345px", originY: "195px" }}
        >
          <path d="M 285 195 L 310 80 L 395 45 L 405 55 L 325 88 L 305 195 Z" />
          <line x1="295" y1="195" x2="317" y2="85" opacity="0.5" strokeWidth="1" />
          <line x1="315" y1="195" x2="335" y2="90" opacity="0.5" strokeWidth="1" />
          <path d="M 310 80 Q 350 65 395 45" opacity="0.4" strokeWidth="1" />
        </motion.g>

        {/* Lid tab */}
        <g data-part="lid-tab" opacity="0.6">
          <path d="M 320 175 L 340 155 L 360 165 L 345 185 Z" />
          <line x1="340" y1="155" x2="340" y2="170" opacity="0.5" strokeWidth="1" />
        </g>

        {/* Side shading */}
        <g opacity="0.15" strokeWidth="1">
          <path d="M 170 220 Q 165 330 180 430" />
          <path d="M 350 220 Q 355 330 340 430" />
        </g>
      </motion.svg>
    );
  }
);
DrinkSketch.displayName = "DrinkSketch";



interface HeroImageProps {
  className?: string;
}

const steamPath1 = "M552.5,381.1c1.3,2.1,2.5,3.4,3.8,5.7c0,0,0,0.1,0.1,0.1c2,2.8,4.2,5.6,6.5,8.1c0.4,0.5,3.8,5,2.4,1.4 c0.2,0.6-1.2-1.9-1.2-1.9c-1.7-2.2-4.4-6.4-6.3-8.2c0,0-0.1-0.1-0.1-0.2c-1.5-1.9-2.4-3.6-3.8-5.5c0,0-0.1-0.1-0.1-0.1 c-26-47-17.5-98,1.2-145.7c9.8-25,20.3-48.6,22.1-75.8c2.6-40.9-15.1-70.8-41.2-100.3l-0.5,1.2c44.2,60.9,31,100.6,5.5,164.6 C521.4,273.3,520.8,336.7,552.5,381.1z";

const steamPath2 = "M703.5,630.5c-1,1.2-6.5,8.5-5.5,9.9c0.7-0.2,5.1-7.4,5.9-8.6c0-0.1,0.1-0.1,0.1-0.2c6.3-7.9,17.8-15.2,26.4-20.3 c35.8-21.2,79-37.8,96.6-78.7c5.3-12.2,6.8-26.5,1.5-39.1c-3.7-9-10.9-16-20-19.6c-34.2-13.1-63.8,22-69.3,51.9 c-2.1,11.3-5,25.7-9,36.3c-0.1,0.2-0.2,0.4-0.4,0.6c-2.2,2.2-7.1,5.5-7.3,7.4c0.3,0.5,0.1,0.3,0.6,0.5c2.2-1,6.4-4.9,7.4-7.4 l0.7-0.8c20.6-24.5,15.8-74.4,57.5-80.1c15.7-2.1,31.8,11.2,33,26.8c1.2,15.4-7.3,29.8-16.9,41.1 C778.1,582.6,729.5,599.5,703.5,630.5z";

const steamPath3 = "M501.7,380.6c1.4,2.2,7.7,11,10.4,11.7l0,0c0.2-1.5-8.3-11.7-9.6-13.1c0-0.1-0.1-0.1-0.1-0.2c-1.2-1.7-1.9-3.1-3-4.8 c0-0.1-0.1-0.1-0.1-0.2c-20.7-43.2-12.5-77.8,5.7-120.2c6.1-14.2,13.5-32.4,15.3-47.6c3.9-31.6-6-52.9-24.8-77l-0.3,1.5 c-0.1,0.4,0,0.8,0.2,1.1c12.9,19.4,17.7,43.2,13.3,66.1c-3.5,17.5-10.2,30-16.5,46.4c-18.3,48.1-21.1,84.6,5,129.8 c0,0,0,0.1,0.1,0.1C498.8,376.4,500.2,378.5,501.7,380.6z";

const steamPath4 = "M599.5,372.8c0,0,0,0.1,0.1,0.1c1,1.3,7.7,10.5,8.8,10c0.3-1.5-6.4-9.5-7.6-10.9c0-0.1-0.1-0.1-0.1-0.2 c-1.1-1.6-1.8-3-2.9-4.5c-0.1-0.1-0.1-0.2-0.2-0.2c-18.6-38-12.8-73.6,4.4-110.7c19.5-42,24.1-78.3-8.7-115.9l-0.6,1.2 c27.3,39.7,13,70.6-3.5,109.8c-16.2,38.4-14.5,79.9,7.4,116.2C597.3,369.4,598.4,371.1,599.5,372.8z";

export const HeroImage = ({ className }: HeroImageProps) => {
  const containerRef = useRef<SVGSVGElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const cupY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -40]), springConfig);
  const steamY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), springConfig);
  const steamOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.3]);

  return (
    <motion.svg
      ref={containerRef}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 994 994"
      xmlSpace="preserve"
      className={className}
      fill="none"
      stroke="currentColor"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <defs>
        <style>{`
          .st0 { stroke-width: 3; }
          .st1 { stroke-width: 2.2; opacity: 0.7; }
          .st2 { stroke-width: 1.6; opacity: 0.4; }
          .st3 { stroke-width: 1; opacity: 0.25; }
        `}</style>
      </defs>

      {/* === SAUCER & CUP BASE (deepest layer, slowest parallax) === */}
      <motion.g style={{ y: cupY }}>
        {/* Saucer rim */}
        <motion.path
          className="st0"
          d="M840.5,440.3c-15.5-9.1-34.1-11.7-51.5-7.2c-19,5-33.3,18.7-43.9,34.7c-0.9,1.4-3.1,0.5-2.7-1.2 c3.4-15.3,7.4-30.5,9.7-46.1c1.6-11,1.2-21.8-6.2-30.7c-17.8-21.4-62.1-32.7-89-35.9c-0.1,0-0.1,0-0.2,0c-2.9-0.8-6.2-1.2-9.3-1.9 c-1.5-0.3-16.5-2.3-17-2.1c1,1,16.2,3.6,19.2,4.3c0.1,0,0.1,0,0.2,0c1.8,0.1,3.9,0.5,5.7,0.8c0,0,0.1,0,0.1,0 c23.1,6.4,87.8,22.7,84.5,58.4c-0.8,8.5-16.2,19.5-23.4,23.1c-91.3,40.6-208.5,38.4-303.7,13.6c-19.3-5-52-18.3-62.4-36.4 c-8.7-15.1,2.2-31.1,15.3-39.7c1.6-1.1,2.9-1.9,4.6-2.9c0.1,0,0.1-0.1,0.2-0.1c1.4-0.6,7.5-3.5,8.3-4c3.2-2.1,21.1-6.1,22.5-7.5 l0-0.1l-0.1,0.1c-3.7-1.1-27,7.4-31.1,10.3c0,0-0.1,0-0.1,0.1c-1.4,0.7-2.8,1.5-4.2,2.3c0,0-0.1,0-0.1,0.1 c-27.5,17.5-26.4,34.4-26,64.4c1.1,76,34.8,145.8,74.5,209c22.3,35.3,56.9,68.6,97.8,80.3c1,0.3,1.4,1.4,0.9,2.2l0,0 c-0.3,0.5-0.8,0.7-1.4,0.7c-17.7-0.8-35.1-2.8-52.7-5.1c-13.7-1.8-68.5-12.9-43.1-35.2c0,0,0.1-0.1,0.1-0.1 c2.3-1.6,3.9-2.9,6.4-4.2c3.2-2.1,6.3-2.8,8.7-4.2l0.2-0.8l0.2,0c-1.1-1.5-7,1.8-8.4,2.8c-0.1,0.1-0.1,0.1-0.2,0.1 c-2.3,1.2-6.1,3.4-8,4.9c-5.9,3.7-8.2,6.1-10.7,12.4c-0.1,0.3-0.2,0.7,0,1.1c18.9,55.7,240.4,58.3,277.1,6.4 c5-7.1-1.4-15.2-7.2-19.9c-4-3.4-8.7-5.6-13.3-8l-0.7,0.3v-0.5c-0.6-0.1-0.3-0.1-0.8,0c-0.1,0.1-0.1,0.2-0.2,0.3 c0,0,13.2,8.9,15.2,10.2c0.1,0.1,0.2,0.1,0.3,0.2c6,6.1,6.8,12.8-0.4,18.1c-22.2,16.4-68.1,22.8-95.2,22.5 c-1.2-0.1-2.4-0.1-3.5-0.1c-1.7,0-2.1-2.5-0.4-3c29.7-8.7,42.8-19.6,64.9-43.1c47.4-50.3,67.3-107,84.5-172.3 c1.7-6.8,2.3-10,4.7-16.9c-0.4-0.1-0.4-0.2-0.8-0.1c-1.4,1.3-4.2,10.8-4.5,12.7c-20.8,84.2-97.8,224.8-203.9,197.6 c-51.1-13.1-89.5-58-115-102c-24.8-41.7-55.6-116.3-54.9-166.1c0-1.2,1.5-1.9,2.4-1.1c63.8,49.3,167.5,49.4,244,42.8 c39.3-3.4,114.3-21.2,139.6-52.8c0.1-0.2,0.3-0.3,0.4-0.5c1-1.2,2.9-0.4,2.7,1.1c-2.4,18.6-8.3,67.2-7.1,68.8 c0.8,1,1.5,1.4,2.5,1.9c0.4,0.2,1,0.2,1.4,0c4.2-2.4,12.3-14.9,14.8-18.4c19.5-26.6,45.9-41.8,77.7-24.4 c29.6,15.8,31.8,51.5,15.7,78.2c-16.3,27-40.8,46.3-66.7,63.5c-29,19.2-81.3,34.1-93.8,69c-0.1,0.2-0.1,0.3-0.1,0.5 c-0.2,5-0.1,4.8,0.6,9.8c0,0.1,0,0.1,0,0.2c0.2,0.8,0.7,2.9,1.2,3.4c0.9-0.9,0.1-5.3-0.1-6.4c-0.2-1.3-0.2-1.3-0.2-2.6 c5.7-27.4,47.3-41.7,69.7-53.2c12.8-6.5,26.3-12.7,38.7-20.2c26-15.9,49.2-35.2,65.3-61.4C879.4,502,876.3,461.6,840.5,440.3z"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1 }
          }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Cup handle */}
        <motion.path
          className="st1"
          d="M492.4,892.4c-24.7-11.7-48.2-21-72.9-30.7l-106.7-41.8c-16-6.3-35.3-12.8-49.7-21.5c-0.3-0.2-0.5-0.4-0.6-0.7 c-2.1-4.7-3.9-9.3-5.7-14.2c-14.2-39.9-67.1-71.2-108.5-68.5c-0.1,0-0.1,0-0.2,0c-23.9,4.3-28.6,21.1-24.3,42.6 c4.1,20.1,18,37.1,34.8,48.2c29,18.6,45.9,16.1,77.8,8.7c5.9-1.4,15-2.9,20.8-0.9c16.6,5.9,35.4,17.9,50.7,26.7l103.1,58.5 c21,11.8,48.6,30.2,70.9,35.8c0.1,0,0.1,0,0.2,0c7,0.9,17.8,1.6,22.8-3.7C520.7,914,507.8,899.7,492.4,892.4z M497.4,919.3 c-4.2,3.2-11.8,2.5-17,1.4c-0.1,0-0.1,0-0.2,0c-14-4.6-50.5-24.6-63.7-31.6l-79.2-41.9c-20.4-11-56.4-30.9-78.1-39.4 c-19.7-7.8-49.9,15.3-84.1-3.6c-20.1-9.6-36.5-27.7-43.9-48.9c-5.8-16.7-2.2-28,14.9-33.6c0.1,0,0.3-0.1,0.4-0.1 c13.4-0.9,22.4,0.4,35.4,4.8c26.4,9.1,52.3,27,65.6,52c4.1,7.8,5.8,16.7,9.7,24.6c0.1,0.2,0.3,0.4,0.5,0.6 c8.7,5.9,43.7,18.8,54.7,23c39.1,14.8,78,30,116.9,45.5c19.7,7.9,39.2,15.5,58.7,24.7C495.7,900.2,510,909.5,497.4,919.3z"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 0.7 }
          }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Base shadow */}
        <motion.path
          className="st2"
          d="M231,798.4c-38.8,4.8-78.9-17.2-95.3-52.8c0-0.1,0-0.1-0.1-0.2l-1-3c0-0.1,0-0.1-0.1-0.2c-0.3-1.4-0.5-6.2-1.5-6.4 c-0.3,0.3-0.5,1.2-0.5,1.6c-0.2,2.3-0.1,4.5,0.3,6.7l0.3,2c0,0,0,0.1,0,0.1c0.7,11,7.6,23.6,14.2,32.2c13.9,18.2,38.1,28.9,60.9,28 c8.4-0.4,17.2-3.4,24.8-6.5c0.5-0.2,3.6-1.5,3.6-2.3c-0.6-0.6-4.4,0.5-5.6,0.8C231.1,798.4,231,798.4,231,798.4z"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 0.4 }
          }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.g>

      {/* === CUP BODY (mid layer) === */}
      <motion.g
        style={{ y: useSpring(useTransform(scrollYProgress, [0, 1], [0, -20]), springConfig) }}
      >
        <motion.path
          className="st0"
          d="M816.2,657.8c-2.9-2.5-7.3-4.5-10.6-6.8c-0.1,0-0.1-0.1-0.2-0.1L774.5,637c-1.1-0.5-4.2-2-5.3-1.3 c-0.2-0.7,32.6,15.5,35.7,16.8c0.1,0,0.1,0,0.1,0.1c3,1.7,8,5.2,10.5,6.5c0.1,0,0.2,0.1,0.2,0.1c12.9,9.8,24.2,24.8,13.9,40.7 c-17.1,26.6-60.9,40.2-89.8,48.5c-45.2,13-92,17.2-138.6,19.9c-83.5,5.8-169.1,2.5-249.8-21.2c-20.4-6.1-40.7-13.4-59.3-23.7 c-16.4-9.1-40.4-27.2-26.4-48.4c22-33.2,72.6-47.7,109.3-57.1c0,0,0.1,0,0.1,0c4.5-0.7,9.6-2.1,14.2-3.2l0,0 c0.7-0.2,0.5-0.1,0.7-0.3c0-0.1,0-0.2,0-0.3l-0.6,0.1l0.1-0.1c-1.2-0.4-11.7,1.6-13.8,2l-0.7,0.2c-10.2,2.8-20.4,4-31.3,6.7 c-33.8,8.4-102.4,29.4-92.4,75.5c3.6,16.7,30.9,32.9,44.6,39.8c86,43.5,189.4,55.4,284.8,50.2c54.4-2.4,109.4-10.1,161.5-26.9 c31.4-10.2,74.3-28.5,91.6-58C844.1,686,831,667.8,816.2,657.8z"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1 }
          }}
          transition={{ duration: 2.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.g>

      {/* === RIM & DETAIL (front layer, subtle float) === */}
      <motion.g
        style={{ y: useSpring(useTransform(scrollYProgress, [0, 1], [0, -10]), springConfig) }}
      >
        <motion.path
          className="st1"
          d="M698.1,782.2c-62.1,15.7-140.9,23.1-204.7,17.4c-20.9-2.1-41.7-5.4-62.2-10c-20-4.3-38.6-9.7-58.2-15.6 c-8.1-2.4-17.4-5.5-26-7.8c-1.6-0.4-2.7,1.7-1.3,2.7c6.2,4.3,13.8,8.7,19.6,11.8c118.1,61.9,266,51.1,380.1-12.6 c3.4-2,5.6-3.1,8.3-6.1c-2.6,1.5-7.3,3.9-9.5,5.5c-0.1,0.1-0.3,0.2-0.4,0.2C729.3,772.5,712.8,778.5,698.1,782.2z"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 0.7 }
          }}
          transition={{ duration: 1.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.g>

      {/* === STEAM (ethereal, fastest parallax, continuous drift) === */}
      <motion.g style={{ y: steamY, opacity: steamOpacity }}>
        {/* Steam wisp 1 - primary, thick */}
        <motion.path
          className="st0"
          d={steamPath1}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 0.8 }
          }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Steam wisp 2 - secondary */}
        <motion.path
          className="st1"
          d={steamPath2}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 0.5 }
          }}
          transition={{ duration: 2.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Steam wisp 3 - delicate */}
        <motion.path
          className="st2"
          d={steamPath3}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 0.4 }
          }}
          transition={{ duration: 1.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Steam wisp 4 - faint, atmospheric */}
        <motion.path
          className="st3"
          d={steamPath4}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 0.3 }
          }}
          transition={{ duration: 2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.g>

      {/* === HOVER STATE (subtle breathing when cursor is near) === */}
      <motion.g
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Gentle pulse ring on hover */}
        <motion.circle
          cx="497"
          cy="497"
          r="200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.1"
          animate={{ r: [200, 220, 200] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>
    </motion.svg>
  );
};

export const LogoImge = ({ className, width = 1024, height = 1024 }: { className?: string; width?: number; height?: number }) => {
  return (
    <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height} 
    viewBox="0 0 1024 1024"
    className={className}
    >
    <path fill="currentColor" 
    d="M540.7 322.767c13.786-.835 32.797-.353 47.015-.357l84.176.106c.021 15.707.956 147.161-.509 151.193-3.291 3.432-7.626.11-8.102-3.342-8.628-62.598-45.255-134.992-116.587-138.701-29.11-1.157-53.348 8.133-74.584 27.811-38.418 35.598-48.767 87.434-51.778 137.384-4.846 80.391 30.129 186.675 125.794 190.061a150.77 150.77 0 0 0 95.136-32.64c7.525-5.962 21.593-24.257 31.119-22.762 3.671 2.845-4.228 12.533-6.504 15.075-66.942 73.764-188.822 70.789-261.398 6.981-77.557-68.187-82.238-194-14.294-270.441 41.94-47.187 90.073-56.955 150.516-60.368" 
    />
    <motion.path
  initial={{
    y: -40,
    x: 40,
    rotate: 20,
    opacity: 0,
  }}
  animate={{
    y: 0,
    x: 0,
    rotate: [20, -15, 8, -4, 0],
    opacity: 1,
  }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}

    fill="currentColor" 
    d="M445.771 474.673c11.714 9.322 20.506 16.707 33.412 24.994 33.164 21.298 72.275 41.369 89.054 79.322 12.403 28.053 11.793 55.363 1.101 83.855-17.472-43.672-45.62-72.06-81.091-101.909-1.388-1.203-6.288-5.607-7.557-6.261 1.964 3.138 4.747 6.371 7.115 9.278 24.453 28.066 55.758 69.628 68.04 105.099-57.11-2.024-95.467-42.964-108.48-96.233-8.173-33.452-8.059-64.355-1.594-98.145" 
    />  
    <path fill="currentColor" 
    fillOpacity=".02" 
    d="M487.805 563.952c-2.368-2.907-5.151-6.14-7.115-9.278 1.269.654 6.169 5.058 7.557 6.261z" 
    />
    </motion.svg>
  )
};
