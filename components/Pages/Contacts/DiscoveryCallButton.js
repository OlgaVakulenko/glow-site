import BigButton from '../../BigButton';

export default function DiscoveryCallButton({
  variant = 'footer',
  className = 'mb-4 h-[132px] md:mr-[37px] md:h-auto min-[1020px]:ml-[63px] xl:ml-auto',
}) {
  return (
    <BigButton
      href="https://calendly.com/glow-design-agency/meet"
      target="_blank"
      variant={variant}
      className={className}
      textHeight={40}
      customHoverArrow={
        <div className="absolute top-[-20px] right-[-16px] flex w-[96px]">
          <img className="h-12 w-[81px]" src="/img/founders.png" alt="" />
        </div>
      }
    >
      {['Free call with our', 'founders']}
    </BigButton>
  );
}
