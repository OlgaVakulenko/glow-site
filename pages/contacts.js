import { useAtom } from 'jotai';
import { BurgerIcon } from '../components/Header';
import Contacts from '../components/Pages/Contacts';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';
import { routerHistory } from './_app';

export default Contacts;

Contacts.getLayout = function getLayout(page) {
  return (
    <DefaultLayout page={'clients'} footer={false}>
      {page}
    </DefaultLayout>
  );
};
