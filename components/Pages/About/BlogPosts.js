import Section from '../../Section';
import SectionLink from '../../SectionLink';
import PostSlider from './PostSlider';

import BlogImage1 from './assets/blogpost-demo-1.png';
import BlogImage2 from './assets/blogpost-demo-2.png';
import BlogImage3 from './assets/blogpost-demo-3.png';
import BlogAvatar1 from './assets/blogpost-avatar-1.png';

const posts = [
  {
    title:
      'Why perform a UI/UX audit: benefits and techniques for a good start.',
    authorAvatar: BlogAvatar1,
    authorName: 'Stas Kovalsky',
    authorPosition: 'Co-Founder & Designer',
    image: BlogImage3,
    isFeatured: true,
  },
  {
    title: 'A product design agency is too costly for me',
    authorAvatar: BlogAvatar1,
    authorName: 'Stas Kovalsky',
    authorPosition: 'Co-Founder & Designer',
    image: BlogImage1,
  },
  {
    title: 'UI/UX Case Study: Automation of Parking Lots at Airports',
    authorAvatar: BlogAvatar1,
    authorName: 'Stas Kovalsky',
    authorPosition: 'Co-Founder & Designer',
    image: BlogImage2,
  },
  {
    title: 'A product design agency is too costly for me',
    authorAvatar: BlogAvatar1,
    authorName: 'Stas Kovalsky',
    authorPosition: 'Co-Founder & Designer',
    image: BlogImage1,
  },
  {
    title: 'UI/UX Case Study: Automation of Parking Lots at Airports',
    authorAvatar: BlogAvatar1,
    authorName: 'Stas Kovalsky',
    authorPosition: 'Co-Founder & Designer',
    image: BlogImage2,
  },
];

export default function BlogPosts() {
  return (
    <Section withLayout={false}>
      <SectionLink
        title="Insights"
        buttonLabel="Read Blog"
        href="#"
        description="We share our knowledge. Not only with other designers, but also with businesses. Our processes help optimize your work. "
        showButtonOnMobile={true}
      />
      <div className="pt-[76px] pb-[76px]">
        <PostSlider posts={posts} />
      </div>
    </Section>
  );
}
