import Layout from '../../Layout';

const items = [
  {
    title: 'Areas',
    categories: ['Product design', 'Web app', 'Mobile app', 'SAAS'],
  },
  {
    title: 'User Experience ',
    categories: ['UX Audit', 'Research', 'Wireframe', 'Prototype', 'Research'],
  },
  {
    title: 'Visual Identity',
    categories: [
      'Product visual identity',
      'Design system',
      'Branding',
      'Illustration',
    ],
  },
];

export default function OurExperience() {
  return (
    <Layout className="pb-16 md:flex md:pb-20 md:pt-[71px] xl:grid xl:grid-flow-col xl:grid-cols-8 xl:gap-8 xl:pt-14">
      <div className="mb-[53px] pt-16 md:min-w-[38%] md:pt-0 xl:col-span-3">
        <div className="mb-[27px] text-body-heading-s uppercase opacity-50">
          Our Experience
        </div>
        <div className="text-xl italic leading-[27px] md:max-w-[248px] xl:max-w-[288px] xl:text-subtitle-l">
          We balance business objectives with customer needs
        </div>
      </div>
      <div className="grid w-full grid-cols-description-list gap-x-6 gap-y-8 md:flex md:justify-between xl:col-span-5 xl:flex xl:justify-start xl:space-x-[112px]">
        {items.map((item, index) => (
          <div key={index}>
            <div className="mb-[27px] text-body-heading-s uppercase opacity-50 md:mb-[31px]">
              {item.title}
            </div>
            <div className="grid gap-2">
              {item.categories.map((category, index) => (
                <div key={index} className="text-body-m2">
                  {category}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
