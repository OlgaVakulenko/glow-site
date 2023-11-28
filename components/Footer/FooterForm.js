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
import { useReferrer, useRem } from '../../lib/utils';
import RusImage from '../Pages/About/assets/rus-2.png';
import StasImage from '../Pages/About/assets/stas-k.png';
import Image from '../Image';
import TextareaAutosize from 'react-textarea-autosize';

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

function Input({
  as = 'input',
  theme = 'footer',
  className,
  name,
  value,
  onChange,
  ...rest
}) {
  const [focused, setFocused] = useState(false);

  const Element = useMemo(() => {
    if (as === 'textarea') {
      return TextareaAutosize;
    }

    return as;
  }, [as]);

  return (
    <div className={cx('flex', className)}>
      <Element
        className={cx(
          'w-full border-b  bg-transparent pb-[17px] text-xl font-medium leading-6 transition-colors duration-200 placeholder:text-current placeholder:transition-opacity focus:outline-none focus:placeholder:opacity-60',
          {
            '!border-current': focused,
            'border-checkbox-dark': theme === 'footer',
            'border-checkbox-light': theme === 'default',
            'focus:ring-0 focus:ring-offset-0': as === 'textarea',
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

export default function FooterForm({
  isSubmitted,
  setIsSubmitted,
  hideToggles = false,
  theme = 'footer',
  disablePadding = false,
  useGrid = true,
  btnClassName = '',
  gapSize = '8',
  footerStyle,
}) {
  const media = useMediaAtom();
  const [size, setSize] = useState(0);
  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(504);
  const [referrerRef, queryRef] = useReferrer();

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

  console.log('isSubmitted', isSubmitted);

  return (
    <div className="relative h-full">
      <Image
        className="hidden h-16 w-16 rounded-[20px] object-cover"
        src={StasImage}
        alt=""
      />
      {isSubmitted ? (
        <div className="flex h-full flex-grow flex-col items-end justify-end text-right text-xl xl:text-4xl">
          <div className="mb-6 flex space-x-2 md:mb-9">
            <Image
              className="h-[64px] w-[64px] rounded-[20px] object-cover md:h-[72px] md:w-[72px]"
              src={RusImage}
              alt=""
            />
            <Image
              className="h-[64px] w-[64px] rounded-[20px] object-cover md:h-[72px] md:w-[72px]"
              src={StasImage}
              alt=""
            />
          </div>
          <div>
            <h3 className="font-glow text-heading-h3 md:mb-2 md:text-heading-h3">
              Thank you!
            </h3>
            <div className="text-subtitle-m italic opacity-50">
              We will contact you ASAP!
            </div>
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

            data.append('referrer', referrerRef.current || '');
            data.append('query', queryRef.current || '');

            Promise.race([
              fetch('/contact2.php', {
                method: 'POST',
                body: data,
              }),
              new Promise((res) => {
                setTimeout(res, 300);
              }),
            ]).then(() => {
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
          {!hideToggles && (
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
          )}

          <div
            className={cx('grid pb-6 md:pb-0', {
              'text-lblue': theme === 'footer',
              'md:grid-flow-row md:grid-cols-8': useGrid,
              'pt-12': !disablePadding,
              'gap-8': gapSize === '8',
              'gap-10': gapSize === '10',
            })}
          >
            <Input
              name="name"
              placeholder="Your Name"
              className={cx({
                'md:col-span-4': useGrid,
                'md:col-span-8': !useGrid,
              })}
              theme={theme}
            />
            <Input
              name="email"
              placeholder="Email"
              className={cx({
                'md:col-span-4': useGrid,
                'md:col-span-8': !useGrid,
              })}
              type="email"
              required
              theme={theme}
            />
            <Input
              as="textarea"
              className="md:col-span-8"
              name="project-about"
              placeholder="Project details (optional)"
              theme={theme}
            />
          </div>
          <div className="md:mt-8 md:flex md:items-start md:justify-between md:space-x-4">
            <div className="text-body-xs md:max-w-[385px] xl:max-w-[315px]">
              Note that by sending this form you confirm reading and accepting
              the{' '}
              <Link href="/privacy-policy" className="text-brand">
                Privacy Policy
              </Link>
            </div>
            <button
              type="submit"
              className={cx(
                'rolling-text-group mt-8 w-full shrink-0 rounded-full border py-3 text-center text-sm font-medium uppercase leading-6 transition-colors duration-200 md:mt-0 md:w-fit md:px-9 md:text-xs md:leading-4 xl:py-[15px] 4xl:text-sm 4xl:leading-6',
                {
                  'border-lblue hover:bg-lblue hover:text-black':
                    theme === 'footer',
                  'border-black hover:border-brand hover:bg-brand':
                    theme === 'default',
                  'min-w-[200px] ': footerStyle === 'trial',
                  'border-brand bg-brand':
                    footerStyle === 'trial' && theme === 'default',
                },
                btnClassName
              )}
            >
              <RollingText
                text={
                  footerStyle === 'trial' ? 'Start free trial' : 'Make me glow'
                }
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
