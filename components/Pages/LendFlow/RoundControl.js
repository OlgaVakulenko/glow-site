import cx from 'clsx';

export default function RoundControl({
                                         className,
                                         text,
                                         compact="true",
                                         ...props
                                     }) {
    const Component = "button";

    return (
        <Component
            className={cx(
                'inline-block  py-3 justify-center md:py-4 rounded-full pointer-events-none border-[1px] border-[#575757] bg-opacity-70 font-inter xl:text-[20px] xl:leading-[24.2px] md:text-[14px] md:leading-[16.94px] tracking-[-0.01em] ',
                className
            )}
            {...props}
        >
            {text}

        </Component>
    );
}