import Layout from '../../Layout';

const items = [
  {
    title: 'Areas',
    categories: ['Product design', 'Web app', 'Mobile app', 'SAAS'],
  },
  {
    title: 'User Experience ',
    categories: ['UX Audit', 'Research', 'Wireframe', 'Prototype'],
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
    <Layout>
      <div>
        <div>Our Experience</div>
        <div>We balance business objectives with customer needs</div>
      </div>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <div>{item.title}</div>
            <div>
              {item.categories.map((category, index) => (
                <div key={index}>{category}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
