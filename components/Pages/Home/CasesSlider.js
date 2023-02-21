import dynamic from 'next/dynamic';

// import CasesSlider from './_CasesSlider';
const CasesSlider = dynamic(() => import('./_CasesSlider'));

export default CasesSlider;
