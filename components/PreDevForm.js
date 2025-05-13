import { useEffect } from 'react';
import { getReferrer } from '../lib/utils';

export default function PreDevForm() {
  useEffect(() => {
    const handleMessage = (e) => {
      if (!['https://pre.dev'].includes(e.origin)) {
        return;
      }

      const { type, data } = e.data || {};
      if (type === 'new_lead') {
        const [referrer, query] = getReferrer();
        const fd = new FormData();
        fd.append('source', referrer || 'Direct');
        fd.append('query', query || '');
        fd.append('name', data.name);
        fd.append('project-about', data.businessURL);
        fd.append('email', data.email);
        fd.append('budget', data.budget);

        fetch('/contact2.php', {
          method: 'POST',
          body: fd,
        }).then(() => {
          window?.lintrk('track', { conversion_id: 11283746 });
        });
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="flex justify-center xl:justify-end">
      <iframe
        className="w-full max-w-[420px] overflow-hidden rounded-lg"
        height="590px"
        src="https://pre.dev/iframe/enterprise/chat/7af5286f-a622-4eae-a9b4-39c1009c9f16"
      />
    </div>
  );
}
