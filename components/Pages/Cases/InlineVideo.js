export default function InlineVideo({ autoplay = true, ...rest }) {
  const autoplayProps = autoplay
    ? { autoPlay: true, loop: true, muted: true, playsInline: true }
    : {};

  return <video {...autoplayProps} {...rest} />;
}
