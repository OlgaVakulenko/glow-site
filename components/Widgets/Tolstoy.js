import Script from 'next/script';
import { useEffect } from 'react';

export default function Tolstoy() {
  useEffect(() => {
    window.tolstoyAppKey = '0634e847-3af8-4889-b83a-68c5c24e0e37';
  }, []);

  return <Script src="https://widget.gotolstoy.com/widget/widget.js" />;
}
