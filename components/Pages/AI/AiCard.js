import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AiCard() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const centralCircleRef = useRef(null);
  const leftSvgRef = useRef(null);
  const rightSvgRef = useRef(null);
  const animationFrameRef = useRef(null);
  const circlesRef = useRef([]);
  const animationsStartedRef = useRef(false);

  const drawCircles = useMemo(() => (ctx, width, height, circles) => {
    ctx.clearRect(0, 0, width, height);
    circles.forEach(circle => {
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 75, 73, ${circle.opacity})`;
      ctx.fill();
    });
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || !centralCircleRef.current || !leftSvgRef.current || !rightSvgRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const normalRandom = () => Math.sqrt(-2.0 * Math.log(Math.random())) * Math.cos(2.0 * Math.PI * Math.random());
    const randomPosition = (center, variance) => center + normalRandom() * variance;

    const createCircles = () => Array.from({ length: 1300 }, () => ({
      x: randomPosition(canvas.width / 2, canvas.width / 6),
      y: randomPosition(canvas.height / 2, canvas.height / 6),
      radius: Math.random(),
      opacity: Math.random(),
      direction: Math.random() < 0.5 ? -1 : 1,
    }));

    const animateCircles = () => {
      circlesRef.current.forEach(circle => {
        circle.opacity += circle.direction * 0.02;
        if (circle.opacity <= 0 || circle.opacity >= 1) circle.direction *= -1;
      });
      drawCircles(ctx, canvas.width, canvas.height, circlesRef.current);
      animationFrameRef.current = requestAnimationFrame(animateCircles);
    };

    const startAnimations = () => {
      if (animationsStartedRef.current) return;

      animationsStartedRef.current = true;

      container.querySelectorAll('.wave').forEach(element => element.remove());
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

      createWave(1.9, 0.5, 0.3);
      setTimeout(() => createWave(1.6, 1, 0.4), 100);
      setTimeout(() => createWave(1.3, 1, 0.5), 200);

      gsap.to(canvas, { opacity: 1, duration: 0.5, ease: 'power1.inOut' });
      animateCircles();
    };

    const reverseAnimations = () => {
			animationsStartedRef.current = false;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };

    circlesRef.current = createCircles();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 60%",
        end: "bottom 45%",
        toggleActions: "play reverse play reverse",
        onEnter: startAnimations,
        onLeave: reverseAnimations,
        onEnterBack: startAnimations,
        onLeaveBack: reverseAnimations,
        refreshPriority: 1,
        skipTouchEvents: true,
      }
    });

    tl.to(leftSvgRef.current, { xPercent: -55, duration: 1.5, ease: 'power2.inOut' }, 0)
      .to(rightSvgRef.current, { xPercent: 55, duration: 1.5, ease: 'power2.inOut' }, 0)
      .to('.ai-icon', { 
        backgroundImage: 'linear-gradient(130deg, rgba(24, 24, 30, 0.9) 25%, rgba(227,50,48,0.2) 50%, rgba(24, 24, 30, 0.9) 75%)',
        color: '#E33230', 
        duration: 1, 
        ease: 'power1.out' 
      }, 0)
      .to(centralCircleRef.current, { 
        borderColor: '#e3323080', 
        backgroundColor: '#0c0c0eb3', 
        boxShadow: '0px 0px 83px 50px rgba(227,50,48,0.25)', 
        duration: 0.5, 
        ease: 'power1.out' 
      }, 0);

    return () => {
      container.querySelectorAll('.wave').forEach(element => element.remove());
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [drawCircles]);

  const createWave = (size, borderWidth, opacity) => {
    const wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.cssText = `
      width: ${centralCircleRef.current.offsetWidth}px;
      height: ${centralCircleRef.current.offsetWidth}px;
      border-width: ${borderWidth}px;
      opacity: ${opacity};
    `;
    containerRef.current.appendChild(wave);

    gsap.fromTo(wave, { scale: 0 }, {
      scale: size,
      opacity: opacity,
      duration: 2,
      ease: 'power1.inOut',
      onComplete: () => wave.classList.add('persistent'),
    });
  };

  return (
    <div ref={containerRef} className="flex justify-center items-center relative overflow-hidden h-full w-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>

      <svg ref={leftSvgRef} className="z-[8] absolute -left-[3px] top-0 h-full w-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321 474" fill="none" preserveAspectRatio="none">
        <path d="M0 16C0 7.16346 7.16344 0 16 0H317C319.209 0 321 1.79086 321 4V118.5C321 135.487 315.187 151.962 304.527 165.187L301 169.563C288.058 185.619 281 205.621 281 226.244V247.756C281 268.379 288.058 288.381 301 304.438L304.527 308.813C315.187 322.038 321 338.513 321 355.5V470C321 472.209 319.209 474 317 474H16C7.16345 474 0 466.837 0 458V16Z" fill="url(#paint0_linear_1_4343)"/>
        <path d="M0.5 16C0.5 7.4396 7.43959 0.5 16 0.5H317C318.933 0.5 320.5 2.067 320.5 4V118.5C320.5 135.373 314.726 151.737 304.137 164.874L300.611 169.249C287.597 185.394 280.5 205.507 280.5 226.244V247.756C280.5 268.493 287.597 288.606 300.611 304.751L304.137 309.126C314.726 322.263 320.5 338.627 320.5 355.5V470C320.5 471.933 318.933 473.5 317 473.5H16C7.4396 473.5 0.5 466.56 0.5 458V16Z" stroke="url(#paint1_linear_1_4343)" strokeOpacity="0.4"/>
        <defs>
          <linearGradient id="paint0_linear_1_4343" x1="39.1435" y1="1.31762e-07" x2="46.7547" y2="582.901" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B1A21"/>
            <stop offset="1" stopColor="#121215" stopOpacity="0.9"/>
          </linearGradient>
          <linearGradient id="paint1_linear_1_4343" x1="-70" y1="-2.87986e-05" x2="205.987" y2="45.7476" gradientUnits="userSpaceOnUse">
            <stop stopColor="#403E51" stopOpacity="0"/>
            <stop offset="1" stopColor="#403E51" stopOpacity="1"/>
          </linearGradient>
        </defs>
      </svg>

      <div ref={centralCircleRef} className="z-[9] relative flex items-center justify-center rounded-full overflow-hidden ai-icon-circle border-[#0E0D10] border-2 bg-[#0C0C0E] xl:w-[184px] xl:h-[184px] md:w-[133px] md:h-[133px] w-[96px] h-[96px] m-5">
        <div className="xl:w-[158px] xl:h-[158px] md:w-[114px] md:h-[114px] w-[82px] h-[82px] rounded-full ai-icon flex items-center justify-center text-[#0E0D10] bg-[#18181ecc]">
          <svg className='w-2/5 h-auto' viewBox="0 0 62 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M0 53.6379H8.59045L13.5029 39.4427H34.4602L39.3642 53.6379H47.9546L28.6523 0H19.3023L0 53.6379ZM32.1078 32.6332L24.1999 9.74283H23.7809L15.8594 32.6332H32.1078ZM61.1632 53.6379V0H53.0703V53.6379H61.1632Z" fill="url(#paint0_linear_11557_8532)" />
            <defs>
              <linearGradient id="paint0_linear_11557_8532" x1="3" y1="-18.5" x2="76.5" y2="70" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.1" />
                <stop offset="0.5" stopColor="currentColor" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <svg ref={rightSvgRef} className="z-[8] absolute -right-[3px] top-0 h-full w-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321 474" fill="none" preserveAspectRatio="none">
        <path d="M321 16C321 7.16346 313.837 0 305 0H4C1.79086 0 0 1.79086 0 4V118.5C0 135.487 5.81323 151.962 16.4735 165.187L20 169.563C32.9423 185.619 40 205.621 40 226.244V237V247.756C40 268.379 32.9423 288.381 20 304.438L16.4734 308.813C5.8132 322.038 0 338.513 0 355.5V470C0 472.209 1.79086 474 4 474H305C313.837 474 321 466.837 321 458V16Z" fill="url(#paint0_linear_1_4344)"/>
        <path d="M320.5 16C320.5 7.4396 313.56 0.5 305 0.5H4C2.06702 0.5 0.5 2.067 0.5 4V118.5C0.5 135.373 6.27417 151.737 16.8628 164.874L20.3893 169.249C33.4033 185.394 40.5 205.507 40.5 226.244V237V247.756C40.5 268.493 33.4033 288.606 20.3893 304.751L16.8627 309.126C6.27414 322.263 0.5 338.627 0.5 355.5V470C0.5 471.933 2.06702 473.5 4 473.5H305C313.56 473.5 320.5 466.56 320.5 458V16Z" stroke="url(#paint1_linear_1_4344)" strokeOpacity="0.4"/>
        <defs>
          <linearGradient id="paint0_linear_1_4344" x1="281.856" y1="1.31762e-07" x2="274.245" y2="582.901" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B1A21"/>
            <stop offset="1" stopColor="#121215" stopOpacity="0.9"/>
          </linearGradient>
          <linearGradient id="paint1_linear_1_4344" x1="391" y1="-2.87986e-05" x2="115.013" y2="45.7476" gradientUnits="userSpaceOnUse">
            <stop stopColor="#403E51" stopOpacity="0"/>
            <stop offset="1" stopColor="#403E51" stopOpacity="1"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
