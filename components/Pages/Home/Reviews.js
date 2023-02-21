import dynamic from 'next/dynamic';

// import Reviews from './_Reviews';

// export default Reviews;
const Reviews = dynamic(() => import('./_Reviews', {}));

export default Reviews;
// export default () => dynamic('./_Reviews');
