'use client';
import { RadioGroup } from '@headlessui/react';
import cx from 'clsx';
import debounce from 'lodash.debounce';
import Link from 'next/link';
import {
  createContext,
  useCallback,
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
import RusImage from '../Pages/About/assets/RusImage.png';
import StasImage from '../Pages/About/assets/StasImage.png';
import RollingText from '../RollingText';
import { Checkbox } from '../Checkbox';
import Button2 from '../Button';
import CalendlyEmbed from '../CalendlyEmbed';
import { PopupButton } from 'react-calendly';

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
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option) => (
          <RGroupOption
            className="cursor-pointer rounded-full text-xs font-medium uppercase leading-[20px] tracking-[0.02em] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-focus-ring xl:leading-[24px]"
            key={option}
            value={option}
          >
            {({ checked }) => (
              <div
                className={cx(
                  'glow-border-light2 rounded-full px-3 py-[7.5px] transition-colors duration-200 hover:bg-checkbox-dark-hover md:px-3 md:py-[7.5px] xl:px-4 xl:py-[6px]',
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

// function FileInput({
//   theme = 'footer',
//   className,
//   name,
//   value = '',
//   onChange,
//   placeholder = 'Attach file',
//   ...rest
// }) {
//   const [focused, setFocused] = useState(false);
//   const [fileName, setFileName] = useState(value);
//   const [isMobile, setIsMobile] = useState(false);
//
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 500);
//     };
//
//     window.addEventListener('resize', handleResize);
//     handleResize();
//
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//
//   const handleFileChange = (e) => {
//     const selectedFileName = e.target.files[0]?.name || '';
//     setFileName(selectedFileName);
//     setFocused(false);
//     onChange?.(selectedFileName);
//   };
//
//   const truncatedFileName =
//     isMobile && fileName.length > 20 ? `${fileName.slice(0, 20)}...` : fileName;
//
//   return (
//     <div className={cx('flex items-center', className)}>
//       <label
//         className={cx(
//           'relative w-full border-b bg-transparent pb-4 pt-[8px] text-[16px] leading-[26px] text-current transition-colors duration-200 placeholder:transition-opacity focus-within:outline-none focus-within:placeholder:opacity-60 md:text-[18px] xl:font-medium',
//           {
//             '!border-current': focused,
//             'border-checkbox-dark': theme === 'footer',
//             'border-checkbox-light': theme === 'default',
//           }
//         )}
//       >
//         <span
//           className={cx('pointer-events-none block w-full !truncate', {
//             'text-gray-500': !fileName && focused,
//           })}
//           title={fileName || placeholder}
//         >
//           {truncatedFileName || placeholder}
//         </span>
//         <input
//           type="file"
//           className="absolute inset-0 opacity-0"
//           name={name}
//           onChange={handleFileChange}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           {...rest}
//         />
//       </label>
//     </div>
//   );
// }

function FileInput({
  theme = 'footer',
  className,
  name,
  value = '',
  onChange,
  placeholder = 'Choose a file or drag and drop here',
  ...rest
}) {
  const [fileName, setFileName] = useState(value);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState('');

  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFileChange = useCallback(
    (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile && allowedTypes.includes(selectedFile.type)) {
        const selectedFileName = selectedFile.name;
        setFileName(selectedFileName);
        setError('');
        if (onChange) onChange(selectedFileName);
      } else {
        setFileName('');
        setError(
          'Invalid file type. Only DOC, PDF, JPEG, PNG and SVG are allowed.'
        );
      }
    },
    [onChange]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      const file = e.dataTransfer.files[0];
      if (file) {
        if (allowedTypes.includes(file.type)) {
          setFileName(file.name);
          setError('');
          if (onChange) onChange(file.name);
        } else {
          setFileName('');
          setError(
            'Invalid file type. Only DOC, PDF, JPEG, PNG and SVG are allowed.'
          );
        }
      }
    },
    [onChange]
  );

  const truncatedFileName =
    isMobile && fileName.length > 20 ? `${fileName.slice(0, 20)}...` : fileName;

  return (
    <div
      className={className}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label className="text-[16px] font-normal leading-[24px] md:text-[18px] md:leading-[28px]">
        Attach a file (optional)
      </label>

      <div className="md:borderDashed borderDashedMd mt-[16px] flex items-center py-[1px]">
        <label
          htmlFor="file-upload"
          className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-[24px] bg-gradient-to-r from-[#403E5112] to-[#403E5137] py-[31px] transition-all duration-300 hover:from-[#403E5124] hover:to-[#403E514A] ${
            isDragOver ? 'bg-[#403E514A]' : ''
          }`}
        >
          <span
            className="pointer-events-none block w-fit !truncate text-[14px] font-normal leading-[20px] md:text-[16px] md:leading-[24px]"
            title={fileName || placeholder}
          >
            {truncatedFileName || placeholder}
          </span>

          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept=".doc,.docx,.pdf,image/*"
            name={name}
            onChange={handleFileChange}
            {...rest}
          />
        </label>
      </div>
      {error && (
        <p className="text-[14px] text-red-500 md:text-[16px]">{error}</p>
      )}
    </div>
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
          'w-full border-b bg-transparent pb-4 pt-[7px] text-[16px] leading-[26px] transition-colors duration-200 placeholder:text-current placeholder:transition-opacity focus:outline-none focus:placeholder:opacity-60 md:text-[18px] xl:font-medium',
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

  const openCalModal = () => {};

  return (
    <div className="relative h-full">
      <Image
        className="hidden h-16 w-16 rounded-[20px] object-cover"
        src={StasImage}
        alt=""
      />
      {isSubmitted ? (
        <div className="relative flex h-full flex-grow flex-col items-end justify-end text-right text-xl max-xl:top-[-15px] max-sm:top-auto xl:text-4xl">
          <div className="mb-[31px] flex space-x-2 md:mb-[32px]">
            <Image
              className="h-[72px] w-[72px] rounded-[20px] object-cover"
              src={RusImage}
              alt=""
            />
            <Image
              className="h-[72px] w-[72px] rounded-[20px] object-cover"
              src={StasImage}
              alt=""
            />
          </div>
          <div>
            <h3 className="mb-2 font-glow text-heading-h3 leading-[40px] tracking-[-1px] md:text-heading-h3">
              Thank you!
            </h3>
            <div className="text-subtitle-m font-normal leading-[32px]">
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
                className="-mr-1 mb-8 md:col-span-4 md:mb-0 md:mr-0 md:pr-6 xl:mb-8 xl:pr-0"
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
              'pt-10 xl:pt-14': !disablePadding,
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
            <FileInput
              className="md:col-span-8"
              name="attachment"
              onChange={(fileName) => console.log('Selected file:', fileName)}
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
          <div className="gap-x-6 sm:flex sm:items-center sm:justify-between md:mt-10 md:space-x-4 x-920:gap-0 xl:mt-14">
            <div className="flex space-x-4 text-body-xs font-normal leading-5 md:leading-[24px] xl:max-w-[428px] xl:text-[16px]">
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
              flavor="primary"
              className="mt-10 w-full shrink-0 bg-white sm:mt-0 sm:w-[160px]"
              compact
            >
              Send message
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
