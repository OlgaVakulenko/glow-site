import Section from '../../Section';
import SectionLink from '../../SectionLink';
import PostSlider from './PostSlider';

import debounce from 'lodash.debounce';
import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../../Layout';

// const posts = [
//   {
//     title:
//       'Why perform a UI/UX audit: benefits and techniques for a good start.',
//     authorAvatar: BlogAvatar1,
//     authorName: 'Stas Kovalsky',
//     authorPosition: 'Co-Founder & Designer',
//     image: BlogImage3,
//     isFeatured: true,
//   },
//   {
//     title: 'A product design agency is too costly for me',
//     authorAvatar: BlogAvatar1,
//     authorName: 'Stas Kovalsky',
//     authorPosition: 'Co-Founder & Designer',
//     image: BlogImage1,
//   },
//   {
//     title: 'UI/UX Case Study: Automation of Parking Lots at Airports',
//     authorAvatar: BlogAvatar1,
//     authorName: 'Stas Kovalsky',
//     authorPosition: 'Co-Founder & Designer',
//     image: BlogImage2,
//   },
//   {
//     title: 'A product design agency is too costly for me',
//     authorAvatar: BlogAvatar1,
//     authorName: 'Stas Kovalsky',
//     authorPosition: 'Co-Founder & Designer',
//     image: BlogImage1,
//   },
//   {
//     title: 'UI/UX Case Study: Automation of Parking Lots at Airports',
//     authorAvatar: BlogAvatar1,
//     authorName: 'Stas Kovalsky',
//     authorPosition: 'Co-Founder & Designer',
//     image: BlogImage2,
//   },
// ];

export default function BlogPosts({ posts }) {
  const [withLayout, setWithLayout] = useState(false);
  useEffect(() => {
    const onResize = debounce(() => {
      setWithLayout(window.innerWidth >= 1920);
    }, 500);

    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Layout className="mb-14 md:mb-16 md:grid md:grid-cols-8 md:gap-8 xl:mb-20 xl:grid-cols-12">
        <div className="mb-6 font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] md:col-span-4 md:text-[48px] md:leading-[56px] xl:col-span-7 xl:text-[56px] xl:leading-[64px]">
          Insights
        </div>
        <div className="text-[18px] leading-[160%] md:col-span-4 xl:col-span-5">
          We share our knowledge not only with other designers but also with
          businesses. Our processes can help you optimize your work.
        </div>
      </Layout>
      <div className="pb-[46px]">
        <PostSlider posts={posts} />
      </div>
    </div>
  );
}
