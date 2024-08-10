import cx from 'clsx';
import { useAtom } from 'jotai';
import { themeAtom } from '../../lib/theme';
import { mediaAtom } from '../../lib/agent';
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqItem({ question, answer, setOpenState, isOpen, className }) {
  const [theme] = useAtom(themeAtom);
	const [media] = useAtom(mediaAtom);
  const dark = theme === 'dark';
	const [summaryHeight, setSummaryHeight] = useState(0);
  const [fullHeight, setFullHeight] = useState(0);
	const mobileContentRef = useRef(null);
	const summaryRef = useRef(null);
  const fullTextRef = useRef(null);

	useEffect(() => {
		if (summaryRef.current && fullTextRef.current || mobileContentRef.current && media === 'mobile') {
			setSummaryHeight(summaryRef.current.scrollHeight);
			setFullHeight(fullTextRef.current.scrollHeight);
			if (isOpen) {
				if (media === 'mobile') setFullHeight(mobileContentRef.current.scrollHeight);
				else if (media !== 'mobile') setFullHeight(fullTextRef.current.scrollHeight);
			}
		}
	}, [answer, isOpen, media]);

  return (
    <div className={cx("faq-adhoc w-full pb-[31px] pt-[32px]", className, { 
			'faq-dark': dark,
			'open': isOpen, 
			})}
		>
      <div onClick={setOpenState} className="flex w-full justify-between text-left md:flex md:gap-6 xl:flex cursor-pointer">
        <h3 className="text-next-heading-7 md:w-full md:min-w-[426px] md:max-w-[426px] xl:col-span-5 xl:pr-8">
          {question}
        </h3>
        <div className="flex shrink-0 items-center justify-between overflow-hidden text-next-body-s md:col-span-5 md:shrink md:items-start md:text-next-body-s xl:col-span-7 xl:text-next-body-m">
            <AnimatePresence initial={false}>
						<motion.div
              key="faq-content"
              initial={{ maxHeight: summaryHeight }}
              animate={{ maxHeight: isOpen ? fullHeight : summaryHeight }}
              exit={{ maxHeight: summaryHeight }}
              transition={{ duration: 0.3 }}
              className="hidden md:block xl:w-full xl:max-w-[650px] md:max-w-[260px] md-safe:max-w-[466px]"
            >
              <div
                ref={summaryRef}
								className={cx('truncate', {
									'invisible leading-[0]': isOpen,
									'visible leading-[inherit]': !isOpen
								})}
              >
                {answer}
              </div>
              <div
                ref={fullTextRef}
								className={cx('whitespace-pre-line', {
									'visible': isOpen,
									'invisible': !isOpen
								})}
              >
                {answer}
              </div>
            </motion.div>
            </AnimatePresence>
          <div className={cx("ml-6 mt-[2px] h-5 w-5 shrink-0 opacity-50 md:mr-0 xl:mr-0 faq-icon", {'open': isOpen})}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_7301_28184)">
                <path
                  d="M24 12L4.95391e-07 12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 24L12 4.95391e-07"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={cx(
                    isOpen && 'opacity-0',
                    'transition-opacity duration-100'
                  )}
                  />
                </g>
              <defs>
              <clipPath id="clip0_7301_28184">
                <rect width="24" height="24" fill="white" />
              </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <AnimatePresence initial={false}>
          <motion.div
            ref={mobileContentRef}
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: isOpen ? fullHeight : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? '1.5rem' : 0 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ height: { duration: 0.3 }, opacity: { duration: 0 } }}
            className="overflow-hidden whitespace-pre-line text-next-body-s"
          >
            {answer}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}