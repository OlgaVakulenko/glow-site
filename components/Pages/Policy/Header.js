import IntroSection from '../../IntroSection2';
import Layout from '../../Layout';

export default function Header({ title }) {
  return (
    <div className="pb-8 xl:pb-[100px]">
      <IntroSection
        title={title}
        subtitle={
          <>
            These guys are
            <br /> shining with us
          </>
        }
      />
    </div>
  );
}
