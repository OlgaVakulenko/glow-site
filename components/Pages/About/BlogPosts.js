import Section from '../../Section';
import SectionLink from '../../SectionLink';
import PostSlider from './PostSlider';

import BlogImage1 from './assets/blogpost-demo-1.png';
import BlogImage2 from './assets/blogpost-demo-2.png';
import BlogImage3 from './assets/blogpost-demo-3.png';
import BlogAvatar1 from './assets/blogpost-avatar-1.png';
import { useMedia } from '../../../lib/agent';
import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
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

  const Wrapper = useMemo(() => {
    return withLayout ? Layout : React.Fragment;
  }, [withLayout]);

  return (
    <Section withLayout={false}>
      <SectionLink
        title="Insights"
        buttonLabel="Read Blog"
        href="/blog"
        description="We share our knowledge. Not only with other designers, but also with businesses. Our processes help optimize your work. "
        showButtonOnMobile={true}
      />
      <div className="pb-[46px] pt-[76px]">
        <Wrapper>
          <PostSlider withLayout={withLayout} posts={posts} />
        </Wrapper>
      </div>
    </Section>
  );
}
