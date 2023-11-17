import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';

export default function FormSuccess() {
  return null;
}

FormSuccess.getLayout = function (page) {
  return <DefaultLayout footerSuccess={true}>{page}</DefaultLayout>;
};
