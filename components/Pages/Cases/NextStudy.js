import Link from 'next/link';

export default function NextStudy({ title, href }) {
  return (
    <section className="section next">
      <div className="container">
        <Link className="next__body" href={href}>
          <div className="next__left">
            <h2>Next Study</h2>
            <p>{title}</p>
          </div>
          <div className="next__right">
            <img src="/img/arrow-right-primary.svg" alt="" />
          </div>
        </Link>
      </div>
    </section>
  );
}
