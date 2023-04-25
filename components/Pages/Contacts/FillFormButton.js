import BigButton from '../../BigButton';

export default function FillFormButton({ variant = 'footer', className = '' }) {
  return (
    <BigButton href="/form" className={className} variant={variant}>
      Fill out the brief
    </BigButton>
  );
}
