import Layout from '../../Layout';

const items = [
  {
    q: `What if I like the result but want to make some changes?`,
    a: `We always include time for edits in the trial period. However, if the trial is over, we will be glad to form a long-term partnership to work on any changes you need for your product.`,
  },
  {
    q: `Are different time zones a problem for communication?`,
    a: `Absolutely not, our project managers will set the most convenient time for productive communication.`,
  },
  {
    q: `I have a startup. Is it worth investing in design?`,
    a: `Yes, as an example,  We have partners who began as startups and are now Y-combinator stars with the help of well-tailored design solutions.`,
  },
  {
    q: `When do I pay?`,
    a: `You pay in advance. As a greeting bonus, the first 3 days are free of charge, so you will need to pay only for 7 out of 10 workdays.`,
  },
  {
    q: `What services can I get during the trial period?`,
    a: `There is no limit to the number of services as long as it’s reasonable ;) We can do anything design-related that can solve your business problems.`,
  },
  {
    q: `Who will work on my project?`,
    a: `The trial team always consists of a Project Manager, a Product Designer, and a Lead Designer.`,
  },
];

export default function Info() {
  return (
    <Layout className="pb-20 pt-10">
      <h2 className="mb-9 font-glow text-heading-h3 md:mb-16 md:text-heading-h2-2">
        Frequently asked questions
      </h2>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16 xl:grid-cols-3">
        {items.map((item) => (
          <div key={item.q}>
            <div className="mb-4 text-2xl font-medium tracking-[0.48px]">
              {item.q}
            </div>
            <div className="text-body-m2">{item.a}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
