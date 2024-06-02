import { RadioGroup } from '@headlessui/react';
import cx from 'clsx';
import debounce from 'lodash.debounce';
import Link from 'next/link';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useMediaAtom } from '../../lib/agent';
import { getReferrer, useRem } from '../../lib/utils';
import Image from '../Image';
import RusImage from '../Pages/About/assets/rus-2.png';
import StasImage from '../Pages/About/assets/stas-k.png';
import RollingText from '../RollingText';
import { Checkbox } from '../Checkbox';
import Button2 from '../Button';

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
      <RGroupLabel className="text-next-body-s md:text-next-body-m">
        {title}
      </RGroupLabel>
      <div className="mt-4 flex flex-wrap gap-4">
        {options.map((option) => (
          <RGroupOption
            className="cursor-pointer rounded-full text-xs font-medium uppercase leading-[24px] tracking-[0.02em] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-focus-ring"
            key={option}
            value={option}
          >
            {({ checked }) => (
              <div
                className={cx(
                  'glow-border-light2 rounded-full px-4 py-2 transition-colors duration-200 hover:bg-checkbox-dark-hover xl:px-3 xl:py-[6px]',
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
          'w-full border-b bg-transparent pb-4 text-[16px] leading-[26px] transition-colors duration-200 placeholder:text-current placeholder:transition-opacity focus:outline-none focus:placeholder:opacity-60 md:text-[18px] xl:font-medium',
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
  const [referrer, query] = getReferrer();

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
    'Discovery',
    'UI Design',
    'UX Design',
    'Design Audit',
    'MVP',
  ]);

  const [selectedBudget, setSelectedBudget] = useState(null);
  const [budgets, setBudgets] = useState(() => [
    'Less than $10k',
    '$10k - $50k',
    'More than $50k',
  ]);

  const [checked, setChecked] = useState(false);

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
            <div className="text-subtitle-m opacity-50">
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

            data.append('source', referrer || 'Direct');
            data.append('query', query || '');

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
              // event('form_submit');
              try {
                window?.lintrk('track', { conversion_id: 11283746 });
              } catch (e) {
                console.error(e);
              }
            });
          }}
        >
          {!hideToggles && (
            <div className="md:grid md:grid-flow-col md:grid-cols-8 md:gap-8 xl:mb-0 xl:flex xl:flex-col xl:gap-0">
              <Switches
                className="-mr-1 mb-8 md:col-span-4 md:mb-0 md:mr-0 md:pr-6 xl:mb-8"
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
            className={cx('grid pb-10 md:pb-0', {
              'text-lblue': theme === 'footer',
              'md:grid-flow-row md:grid-cols-8': useGrid,
              'pt-12 xl:pt-14': !disablePadding,
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
          <div className="md:mt-10 md:flex md:items-center md:justify-between md:space-x-4 xl:mt-14">
            <div className="flex space-x-4 text-body-xs leading-[160%] xl:max-w-[428px] xl:text-[16px]">
              <div className="pt-[2px] md:pt-[3px]">
                <Checkbox
                  id="terms"
                  checked={checked}
                  onCheckedChange={setChecked}
                  required
                />
              </div>
              <label htmlFor="terms">
                I confirm that I have read and accept the{' '}
                <Link href="/privacy-policy" className="text-brand">
                  Privacy&nbsp;Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms-of-service" className="text-brand">
                  Terms&nbsp;Of&nbsp;Service
                </Link>
              </label>
            </div>
            <Button2
              type="submit"
              flavor="secondary"
              color="white"
              className="mt-8 w-full shrink-0 !bg-white !text-black md:mt-0 md:w-auto"
              compact
            >
              Book a free call
            </Button2>
            {/* <button
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
                text={`Book free call`}
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
            </button> */}
          </div>
        </form>
      )}
    </div>
  );
}
