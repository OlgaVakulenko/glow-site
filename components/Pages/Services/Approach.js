import Layout from '../../Layout';
import GraphicBlock from '../../GraphicBlock';
import { items } from '../../../data/approach-graphic-data';

export default function Approach() {
  return (
    <Layout>
      <h2 className="mb-10 text-next-heading-5 md:mb-14 md:text-next-heading-3 xl:mb-20 xl:text-next-heading-2">
        The Glowing approach
      </h2>
			<GraphicBlock 
				items={items} 
				className="md:gap-x-12"
				titleClassName="md:tracking-[0.02em]"
			/>
    </Layout>
  );
}
