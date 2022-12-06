import BigButton from '../../BigButton';
import Title from '../../Footer/Title';
import Layout from '../../Layout';
import Star from '../../Star';

export default function ContactsFooter() {
  return (
    <Layout className="pt-[120px]">
      <div className="font-glow text-[40px] font-medium leading-10">
        We can discuss <br /> your project <br /> quickly
      </div>
      <div className="relative text-lg italic leading-6">
        <div>
          <Star />
        </div>
        For every Glow Team project, you will be coupled with our dedicated
        in-house team.
      </div>
      <div>
        <BigButton>Discovery Call</BigButton>
        <BigButton>Fill out the form</BigButton>
      </div>
    </Layout>
  );
}
