import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export default function BeforeAfter({ before, after }) {
  return (
    <ReactBeforeSliderComponent
      className="glow-before-after"
      firstImage={{ imageUrl: before }}
      secondImage={{ imageUrl: after }}
    />
  );
}
