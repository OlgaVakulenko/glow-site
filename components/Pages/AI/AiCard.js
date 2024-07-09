import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';

export default function AiCard() {
	const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const centralCircleRef = useRef(null);
  const animationFrameRef = useRef(null);

  const drawCircles = useMemo(() => {
    return (ctx, width, height, circles) => {
      ctx.clearRect(0, 0, width, height);
      circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 75, 73, ${circle.opacity})`;
        ctx.fill();
      });
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || !centralCircleRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const centralCircle = centralCircleRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    const centralCircleSize = centralCircle ? centralCircle.offsetWidth : 100;

    function normalRandom() {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    }

    function randomPosition(center, variance) {
      return center + normalRandom() * variance;
    }

    function createCircles() {
      return Array.from({ length: 900 }, () => ({
        x: randomPosition(width / 2, width / 6),
        y: randomPosition(height / 2, height / 6),
        radius: Math.random() * 1 + 0.5,
        opacity: Math.random(),
        duration: Math.random() * 2 + 1,
        direction: Math.random() < 0.5 ? -1 : 1,
      }));
    }

    let circles = createCircles();

    function drawCircles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.sort((a, b) => a.radius - b.radius);
      circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(255, 75, 73, ${circle.opacity})`;
        ctx.fill();
      });
    }

    function animateCircles() {
      circles.forEach(circle => {
        circle.opacity += circle.direction * 0.02;
        if (circle.opacity <= 0 || circle.opacity >= 1) {
          circle.direction *= -1;
        }
      });
      drawCircles();
      animationFrameRef.current = requestAnimationFrame(animateCircles);
    }

    function createWave(size, borderWidth, opacity) {
      const wave = document.createElement('div');
      wave.classList.add('wave');
      wave.style.width = `${centralCircleSize}px`;
      wave.style.height = `${centralCircleSize}px`;
      wave.style.borderWidth = `${borderWidth}px`;
      wave.style.opacity = opacity;
      container.appendChild(wave);

      gsap.fromTo(wave,
        { scale: 0 },
        {
          scale: size,
          opacity: opacity,
          duration: 2,
          ease: 'power1.inOut',
          onComplete: () => wave.classList.add('persistent')
        }
      );
    }

    function startAnimations() {
      // Clean up existing elements
      const elements = container.querySelectorAll('.wave');
      elements.forEach(element => element.remove());

      // Cancel any ongoing animations
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Create new circles and start the animation
      circles = createCircles();
      animateCircles();

      // Create new waves
      createWave(1.9, 0.5, 0.3);
      setTimeout(() => createWave(1.6, 1, 0.4), 100);
      setTimeout(() => createWave(1.3, 1, 0.5), 200);

      const aiIconAnimation = gsap.to('.ai-icon', {
        backgroundImage: 'linear-gradient(130deg, rgba(24, 24, 30, 0.9) 25%, rgba(227,50,48,0.2) 50%, rgba(24, 24, 30, 0.9) 75%)',
        opacity: 1,
        duration: 3,
        ease: 'power1.out',
        repeat: 0,
        yoyo: true
      });

      aiIconAnimation.invalidate().restart(); // Restart the animation
    }

    // Intersection Observer to trigger animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimations();
        }
      });
    });

    observer.observe(centralCircle);

    return () => {
      const elements = container.querySelectorAll('.wave');
      elements.forEach(element => element.remove());
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observer.disconnect(); // Clean up the observer
    };
  }, [drawCircles]);

  return (
    <div ref={containerRef} className="flex justify-between items-center relative overflow-hidden h-auto w-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
			<svg
        className="z-[8] w-1/4 h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox='0 0 159 474'
        fill="none"
      >
        <g filter="url(#filter0_d_11557_8533)">
          <path
            d="M0 16C0 7.16346 7.16344 0 16 0H131C133.209 0 135 1.79086 135 4V118.5V135.004C135 141.311 132.842 147.428 128.884 152.338L121.75 161.189C104.44 182.664 95 209.417 95 237C95 264.583 104.44 291.336 121.75 312.811L128.884 321.662C132.842 326.572 135 332.689 135 338.996V355.5V470C135 472.209 133.209 474 131 474H16C7.16345 474 0 466.837 0 458V16Z"
            fill="url(#paint0_linear_11557_8533)"
          />
          <path
            d="M0.5 16C0.5 7.4396 7.43959 0.5 16 0.5H131C132.933 0.5 134.5 2.067 134.5 4V118.5V135.004C134.5 141.197 132.381 147.203 128.495 152.024L121.36 160.875C103.979 182.439 94.5 209.303 94.5 237C94.5 264.697 103.979 291.561 121.36 313.125L128.495 321.976C132.381 326.797 134.5 332.803 134.5 338.996V355.5V470C134.5 471.933 132.933 473.5 131 473.5H16C7.43959 473.5 0.5 466.56 0.5 458V16Z"
            stroke="url(#paint1_linear_11557_8533)"
            strokeOpacity="0.4"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_11557_8533"
            x="-16"
            y="-16"
            width="175"
            height="514"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_11557_8533"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_11557_8533"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_11557_8533"
            x1="39.1435"
            y1="2.18714e-07"
            x2="46.7547"
            y2="582.901"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1B1A21" />
            <stop offset="1" stopColor="#0F0F12" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_11557_8533"
            x1="-70"
            y1="1.1732e-05"
            x2="205.987"
            y2="45.7476"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#403E51" stopOpacity="0" />
            <stop offset="1" stopColor="#403E51" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      <div ref={centralCircleRef} className="relative flex items-center justify-center rounded-full overflow-hidden ai-icon-circle border-[#e3323080] border-2 bg-[rgba(24,24,30,0.8)] z-[8] xl:w-[184px] xl:h-[184px] md:w-[114px] md:h-[114px] w-[82px] h-[82px] m-5">
				<div className="w-[90%] h-[90%] rounded-full ai-icon flex items-center justify-center">
          <svg
						className='w-2/5 h-auto'
            viewBox="0 0 62 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 53.6379H8.59045L13.5029 39.4427H34.4602L39.3642 53.6379H47.9546L28.6523 0H19.3023L0 53.6379ZM32.1078 32.6332L24.1999 9.74283H23.7809L15.8594 32.6332H32.1078ZM61.1632 53.6379V0H53.0703V53.6379H61.1632Z"
              fill="url(#paint0_linear_11557_8532)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11557_8532"
                x1="3"
                y1="-18.5"
                x2="76.5"
                y2="70"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E33230" stopOpacity="0.1" />
                <stop offset="0.5" stopColor="#E33230" />
                <stop offset="1" stopColor="#E33230" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <svg
        className="z-[8] w-1/4 h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 159 474"
        fill="none"
      >
        <g filter="url(#filter0_d_11557_8534)">
          <path
            d="M159 16C159 7.16346 151.837 0 143 0H28C25.7909 0 24 1.79086 24 4V118.5C24 135.487 29.8132 151.962 40.4735 165.187L44 169.563C56.9423 185.619 64 205.621 64 226.244V237V247.756C64 268.379 56.9423 288.381 44 304.438L40.4735 308.813C29.8132 322.038 24 338.513 24 355.5V470C24 472.209 25.7909 474 28 474H143C151.837 474 159 466.837 159 458V16Z"
            fill="url(#paint0_linear_11557_8534)"
          />
          <path
            d="M158.5 16C158.5 7.4396 151.56 0.5 143 0.5H28C26.067 0.5 24.5 2.067 24.5 4V118.5C24.5 135.373 30.2742 151.737 40.8628 164.874L44.3893 169.249C57.4033 185.394 64.5 205.507 64.5 226.244V237V247.756C64.5 268.493 57.4032 288.606 44.3893 304.751L40.8627 309.126C30.2742 322.263 24.5 338.627 24.5 355.5V470C24.5 471.933 26.067 473.5 28 473.5H143C151.56 473.5 158.5 466.56 158.5 458V16Z"
            stroke="url(#paint1_linear_11557_8534)"
            strokeOpacity="0.4"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_11557_8534"
            x="0"
            y="-16"
            width="175"
            height="514"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-4" dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_11557_8534"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_11557_8534"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_11557_8534"
            x1="119.856"
            y1="2.18714e-07"
            x2="112.245"
            y2="582.901"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1B1A21" />
            <stop offset="1" stopColor="#0F0F12" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_11557_8534"
            x1="229"
            y1="1.1732e-05"
            x2="-46.9871"
            y2="45.7476"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#403E51" stopOpacity="0" />
            <stop offset="1" stopColor="#403E51" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}