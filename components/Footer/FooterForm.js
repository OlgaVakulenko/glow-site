import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { RadioGroup } from '@headlessui/react';
import cx from 'clsx';
import Link from 'next/link';
import RollingText from '../RollingText';
import { useMedia, useMediaAtom } from '../../lib/agent';
import debounce from 'lodash.debounce';
import { event } from '../Analytics/MixPanel';
import PageHeading from '../PageHeading';
import { useRem } from '../../lib/utils';
import RusImage from '../Pages/About/assets/rus-2.png';
import StasImage from '../Pages/About/assets/stas-k.png';
import Image from '../Image';

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
      name={multiple ? name + '[]' : name}
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(504);

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

  const rem = useRem();

  return (
    <div className="relative h-full">
      <Image
        className="hidden h-16 w-16 rounded-[20px] object-cover"
        src={StasImage}
        alt=""
      />
      {isSubmitted ? (
        <div
          style={{
            height: rem(formHeight),
          }}
          className="flex h-full flex-grow flex-col items-end justify-end text-right text-xl text-lblue xl:text-4xl"
        >
          <div className="mb-6 flex space-x-2">
            <Image
              className="h-16 w-16 rounded-[20px] object-cover"
              src={RusImage}
              alt=""
            />
            <Image
              className="h-16 w-16 rounded-[20px] object-cover"
              src={StasImage}
              alt=""
            />
          </div>
          <div className="mb-1 text-heading-h3">Thank you!</div>
          <div className="text-subtitle-m italic opacity-50">
            We will contact you ASAP!
          </div>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();

            try {
              let h = formRef.current?.offsetHeight || 500;
              if (media === 'mobile') {
                h = 380;
              }

              setFormHeight(h);
            } catch (e) {
              //
            }

            const data = new FormData(e.target);
            selectedServices.forEach((service) => {
              data.append('services[]', service);
            });
            const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
            sleep(300)
              // fetch('/contact2.php', {
              //   method: 'POST',
              //   body: data,
              // })
              .then(() => {
                setIsSubmitted(true);
                event('form_submit');
                try {
                  window?.lintrk('track', { conversion_id: 11283746 });
                } catch (e) {
                  console.error(e);
                }
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
            <Input
              name="email"
              placeholder="Email"
              className="md:col-span-4"
              type="email"
              required
            />
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
      )}
    </div>
  );
}
