import { init } from '@amplitude/analytics-browser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Amplitude() {
  useEffect(() => {
    console.log('init amplitude');
    init('c6007e78bafa68a94bbe14b311963574', 'user@amplitude.com', {
      trackHistoryChanges: 'pathOnly',
    });
  }, []);

  console.log('init123');

  return null;
}
