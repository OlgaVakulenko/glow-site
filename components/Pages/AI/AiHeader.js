import Layout from '../../Layout';
import Animated from '../../Animated';

export default function AiHeader() {

  return (
    <section className='ai-background pt-[88px] pb-[56px] md:py-[72px] xl:mt-[88px] xl:pb-[88px]'>
      <Layout>
        <div className="xl:w-3/4 md:w-3/4 mx-auto xl:mt-[70px] xl:mb-[135px] md:mt-[135px] md:mb-[135px] mt-[52px] mb-0 flex flex-col items-center z-[6]">
          <Animated delay={100}>
            <div className='bg-dark-tag dark-tag gradient-red-border rounded-full px-6 py-3 font-inter text-next-body-xs w-max'>
              Transforming AI visions into success
            </div>
          </Animated>
          <Animated
            as="h1"
            className='xl:pb-1 ai-header-text-white xl:mt-10 md:mt-11 mt-10 text-next-heading-4 md:text-next-heading-2 xl:text-next-heading-0 w-full text-center'
          >
            Design services for<br/>
            <span className='ai-text-header'>{' '}
              AI products<br className='block md:hidden'/>
            </span>
            {' '}that change<br/> the world
          </Animated>
        </div>
      </Layout>
			<div className='ai-background-overlay'>
				<div className='relative w-full h-full sync-lines'>
				<div className='sync-line'></div>
				<div className='animated-line'></div>
					<div className='animated-line'></div>
				</div>
			</div>
    </section>
  );
}
