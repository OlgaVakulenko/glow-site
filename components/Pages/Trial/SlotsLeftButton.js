import AnimatedButton from '../../AnimatedButton';
import cx from 'clsx';

export default function SlotsLeftButton({ className }) {
  return (
    <AnimatedButton
      as="div"
      className={cx(className, 'inline-flex font-sans uppercase')}
    >
      2 slots available in October
    </AnimatedButton>
  );
}
