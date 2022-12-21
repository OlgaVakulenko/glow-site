import Animated from './Animated';

export default function PageHeading({ children }) {
  return (
    <div className="font-glow text-[40px] font-medium leading-10 md:text-[80px] md:leading-[81px] xl:text-[100px] xl:leading-[90px]">
      <Animated as="h1">{children}</Animated>
    </div>
  );
}
