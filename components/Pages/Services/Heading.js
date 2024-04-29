export default function Heading({ title, description }) {
  return (
    <div className="md:flex md:justify-between md:gap-8">
      <h3 className="mb-4 shrink-0 text-next-heading-5 md:mb-0 md:text-[56px] md:leading-[56px] md:tracking-[-2px] xl:text-next-heading-2">
        {title}
      </h3>
      <h4 className="text-next-body-l md:max-w-[528px] md:pt-2 md:text-[24px] md:leading-[32px] md:tracking-normal xl:pt-0 xl:text-next-body-xxl">
        {description}
      </h4>
    </div>
  );
}
