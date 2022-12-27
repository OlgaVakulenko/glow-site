import FormPage from '../components/Pages/Form';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';

export default FormPage;

FormPage.getLayout = function getLayout(page) {
  return (
    <DefaultLayout page="form" showFormButton={false}>
      {page}
    </DefaultLayout>
  );
};
