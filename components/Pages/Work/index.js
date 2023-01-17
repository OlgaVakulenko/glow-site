import { useAtom } from 'jotai';
import { atom, useSetAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import Layout from '../../Layout';
import PageHeading from '../../PageHeading';
import PageSubheading from '../../PageSubheading';
import cases from '../Cases/data';
import cx from 'clsx';
import { CaseItem, CasesRow } from '../Home/CasesSlider';
import { useMediaAtom } from '../../../lib/agent';
import { Separator } from '../About';
import Animated from '../../Animated';

const filterAtom = atom({
  category: 'all',
  type: 'all',
});

export default function Work() {
  return (
    <div>
      <Layout className="pt-[186px] md:pt-[241px] xl:pt-[215px]">
        <PageSubheading>These guys are shining with us</PageSubheading>
        <PageHeading className="mt-[106px] md:mt-[125px] xl:mt-[132px]">
          Explore our <br /> project
        </PageHeading>
        <Cases />
      </Layout>
    </div>
  );
}

function FilterBtn({ name, value, children }) {
  const [filter, setFilter] = useAtom(filterAtom);
  const isActive = filter[name] === value;

  return (
    <button
      className={cx(
        '-ml-4 mb-1 rounded-full p-4 text-sm font-medium uppercase leading-[19px] tracking-[0.03em] transition-transform duration-300 xl:ml-0',
        {
          'glow-border-black translate-x-4 xl:translate-x-0': isActive,
        }
      )}
      onClick={() => {
        setFilter((filter) => ({
          ...filter,
          [name]: value,
        }));
      }}
    >
      {children}
    </button>
  );
}

function Filters({ className }) {
  return (
    <Animated className={cx('flex', className)} delay={150}>
      <div className="mr-[43px] flex flex-col items-start md:mr-[107px] xl:mr-[9vw] xl:flex-row">
        <FilterBtn name="category" value="all">
          All Niche
        </FilterBtn>
        <FilterBtn name="category" value="transportation">
          Transportation
        </FilterBtn>
        <FilterBtn name="category" value="finance">
          Finance
        </FilterBtn>
        <FilterBtn name="category" value="healthcare">
          Healthcare
        </FilterBtn>
        <FilterBtn name="category" value="other">
          Other
        </FilterBtn>
      </div>
      <div className="hidden xl:mr-[6.1vw] xl:block">
        <Separator size={56} />
      </div>
      <div className="flex flex-col items-start xl:flex-row">
        <FilterBtn name="type" value="all">
          All Projects
        </FilterBtn>
        <FilterBtn name="type" value="desktop">
          Desktop
        </FilterBtn>
        <FilterBtn name="type" value="mobile">
          Mobile
        </FilterBtn>
      </div>
    </Animated>
  );
}

function Cases() {
  const media = useMediaAtom();
  const [filter] = useAtom(filterAtom);
  const category = filter.category || 'all';
  const type = filter.type || 'all';

  const _cases = useMemo(() => {
    return cases
      .filter((item) => {
        if (!category || category === 'all') return true;
        if (!item.category) {
          return true;
        }
        if (item.category?.includes(category)) {
          return true;
        }
        return false;
      })
      .filter((item) => {
        if (!type || type === 'all') return true;

        if (!item.type) {
          return true;
        }

        return item.type?.includes(type);
      });
  }, [category, type]);

  return (
    <div className="pt-12 pb-9 md:pt-20 md:pb-20">
      <Filters className="mb-[70px] md:mb-24" />
      {media === 'mobile' ? (
        _cases.map((item, i) => (
          <CaseItem
            key={i}
            className="mb-4"
            {...item}
            columns={[
              {
                title: 'industry',
                items: item.industry,
              },
              {
                title: 'service',
                items: item.service,
              },
              {
                title: 'company',
                items: item.company,
              },
            ]}
          />
        ))
      ) : (
        <CasesLayout cases={_cases} />
      )}
    </div>
  );
}

function CasesLayout({ cases }) {
  const c1 = cases.filter((_, i) => i % 2 === 0);
  const c2 = cases.filter((_, i) => i % 2 !== 0);

  return (
    <div className="-mx-8 flex pb-[64px] xl:-mx-[56px]">
      <CasesRow cases={c1} />
      <CasesRow cases={c2} className="pt-[113px]" />
    </div>
  );
}
