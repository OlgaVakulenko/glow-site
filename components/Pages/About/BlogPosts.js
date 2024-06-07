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
      <Layout className="mb-10 md:mb-14 md:flex md:justify-between xl:mb-20 xl:flex xl:items-end">
        <h2 className="mb-6 font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] md:mb-0 md:text-[48px] md:leading-[56px] xl:col-span-7 xl:text-next-heading-2">
          Insights
        </h2>
        <div className="text-[18px] leading-[29px] md:max-w-[480px] xl:col-span-5 xl:w-full xl:max-w-[558px] xl:text-next-body-m">
          We share our knowledge not only with other designers but also with
          businesses. Our processes can help you optimize your work.
        </div>
      </Layout>
      <div className="pb-[104px] md:pb-[144px] xl:pb-[176px]">
        <PostSlider posts={posts} />
      </div>
    </div>
  );
}
