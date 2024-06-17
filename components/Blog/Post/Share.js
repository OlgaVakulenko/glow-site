import { useIsClient } from '../../../lib/utils';
import CopyLink from './Share/CopyLink';
import Facebook from './Share/Facebook';
import LinkedIn from './Share/LinkedIn';
import Twitter from './Share/Twitter';

export default function Share() {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <div className="mb-5 text-button-s uppercase text-black">Share</div>
      <div className="inline-grid grid-cols-4 gap-4 opacity-50">
        <Facebook />
        <LinkedIn />
        <Twitter />
        <CopyLink />
      </div>
    </div>
  );
}
