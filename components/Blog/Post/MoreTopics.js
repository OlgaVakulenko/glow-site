import { useMemo } from 'react';
import { useMediaAtom } from '../../../lib/agent';
import Card from '../Card';

export default function MoreTopics({ posts }) {
  const media = useMediaAtom();

  const _posts = useMemo(() => {
    if (media === 'mobile') {
      return posts.slice(0, 1);
    }

    if (media === 'tablet') {
      return posts.slice(0, 2);
    }

    return posts;
  }, [posts, media]);

  return (
    <div>
      <h4 className="mb-6 font-glow text-heading-h4">More Topics</h4>
      <div className="md:grid md:grid-cols-2 md:gap-7 xl:grid-cols-3">
        {_posts.map((post, i) => (
          <Card key={i} post={post} />
        ))}
      </div>
    </div>
  );
}
