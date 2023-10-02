import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import cx from 'clsx';
import Link from 'next/link';
import RollingText from '../RollingText';
import { useMediaAtom } from '../../lib/agent';
import debounce from 'lodash.debounce';

const CheckboxCtx = createContext(null);

function CheckboxGroup({ selected, onChange, children, ...props }) {
  return (
    <CheckboxCtx.Provider
      value={{
        selected,
        onChange,
      }}
    >
      <div {...props}>{children}</div>
    </CheckboxCtx.Provider>
  );
}

function CheckboxOption({ value, children, ...props }) {
  const { selected, onChange } = useContext(CheckboxCtx);
  const checked = useMemo(() => {
    return selected.includes(value);
  }, [selected, value]);

  return (
    <button
      {...props}
      role="checkbox"
      type="button"
      tabIndex={0}
      aria-checked={checked}
      onClick={() => {
        if (selected.includes(value)) {
          onChange(selected.filter((v) => v !== value));
        } else {
          onChange([...selected, value]);
        }
        // console.log('needle.selected', selected);
        // console.log('needle.onChange', onChange);
        // onChange(select)
      }}
    >
      {children({ checked })}
    </button>
  );
}

function Switches({
  className,
  name,
  title,
  selected,
  onChange,
  multiple = false,
  options = [],
}) {
  const RGroup = useMemo(() => {
    if (!multiple) {
      return RadioGroup;
    }

    return CheckboxGroup;
  }, [multiple]);

  const RGroupLabel = useMemo(() => {
    if (!multiple) {
      return RadioGroup.Label;
    }

    return 'label';
  }, [multiple]);

  const RGroupOption = useMemo(() => {
    if (!multiple) {
      return RadioGroup.Option;
    }

    return CheckboxOption;
  }, [multiple]);

  return (
    <RGroup
      name={name}
      className={className}
      selected={selected}
      onChange={onChange}
    >
      <RGroupLabel className="text-body-heading-m leading-6 ">
        {title}
      </RGroupLabel>
      <div className="mt-5 flex flex-wrap gap-2 md:mt-[29px]">
        {options.map((option) => (
          <RGroupOption
            className="cursor-pointer text-body-heading-s font-medium uppercase"
            key={option}
            value={option}
          >
            {({ checked }) => (
              <div
                className={cx(
                  'rounded-full bg-checkbox-dark px-4 py-[11px] transition-colors duration-200',
                  {
                    '!bg-lblue text-black': checked,
                  }
                )}
              >
                {option}
              </div>
            )}
          </RGroupOption>
        ))}
      </div>
    </RGroup>
  );
}

function Input({ className, name, value, onChange, ...rest }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={cx('flex', className)}>
      <input
        className={cx(
          'w-full border-b border-checkbox-dark bg-transparent pb-[17px] text-xl font-medium leading-6 text-lblue transition-colors duration-200 placeholder:text-lblue focus:outline-none',
          {
            '!border-lblue': focused,
          }
        )}
        type="text"
        value={value}
        name={name}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        {...rest}
      />
    </div>
  );
}

export default function FooterForm() {
  const media = useMediaAtom();
  const [size, setSize] = useState(0);

  useEffect(() => {
    const onResize = debounce(() => {
      setSize(window.innerWidth);
    }, 250);

    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const [selectedServices, setSelectedServices] = useState([]);
  const [services, setServices] = useState(() => [
    'Interface Design',
    'UX Design',
    'Audit',
    'Identity',
    'Product Design',
  ]);

  const [selectedBudget, setSelectedBudget] = useState(null);
  const [budgets, setBudgets] = useState(() => [
    'Less than 10k',
    '10k - 50k',
    'More than 50k',
  ]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          fetch('http://localhost:8000/contact2.php', {
            method: 'POST',
            body: data,
          })
            .then((response) => response.json())
            .then((res) => {
              console.log(res);
            });
        }}
      >
        <div className="md:grid md:grid-flow-col md:grid-cols-8 md:gap-8 xl:mb-10 xl:flex xl:flex-col xl:gap-0">
          <Switches
            className="-mr-1 mb-12 md:col-span-4 md:mr-0 md:pr-6 xl:mb-10"
            title="Service"
            name="service"
            selected={selectedServices}
            onChange={setSelectedServices}
            options={services}
            multiple={true}
          />
          <Switches
            className="-mr-1 md:col-span-4 md:mr-0"
            title="Budget"
            name="budget"
            selected={selectedBudget}
            onChange={setSelectedBudget}
            options={budgets}
          />
        </div>

        <div className="grid gap-8 pb-6 pt-12 md:grid-flow-row md:grid-cols-8">
          <Input
            name="name"
            placeholder="Your Name"
            className="md:col-span-4"
          />
          <Input name="email" placeholder="Email" className="md:col-span-4" />
          <Input
            className="md:col-span-8"
            name="project-about"
            placeholder="Project details (optional)"
          />
        </div>
        <div className="md:mt-8 md:flex md:justify-between">
          <div className="md:max-w-[385px] xl:max-w-[315px]">
            By sending this form I confirm that I have read and accept the{' '}
            <Link href="/privacy-policy" className="text-brand">
              Privacy Policy
            </Link>
          </div>
          <button
            type="submit"
            className="rolling-text-group mt-8 w-full rounded-full border border-lblue py-3 text-center text-sm font-medium uppercase leading-6 transition-colors duration-200 hover:bg-lblue hover:text-black md:mt-0 md:w-fit md:px-9 md:text-xs md:leading-4 4xl:py-4 4xl:text-sm 4xl:leading-6"
          >
            <RollingText
              text="Make me glow"
              height={
                size >= 1800
                  ? 24
                  : media === 'mobile'
                  ? 24
                  : media === 'tablet' || media === 'desktop'
                  ? 16
                  : 24
              }
            />
          </button>
        </div>
      </form>
    </div>
  );
}
