import { useState } from 'react';
import Button from '../../Button';
import Layout from '../../Layout';
import FormSection from './FormSection';
import FormStep from './FormStep';
import cx from 'clsx';
import { useHeaderTheme } from '../../Header';
import { useAtom } from 'jotai';
import { useMediaAtom } from '../../../lib/agent';

export default function Form({ onSubmit }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const media = useMediaAtom();
  const maxIndex = 5;
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({});
  useHeaderTheme({ theme: 'white' });

  const onChange = (e, index) => {
    setForm((form) => ({
      ...form,
      [index]: {
        name: e.target.name,
        value: e.target.value,
      },
    }));
  };

  const moveIndex = () => {
    const value = form[index]?.value || '';
    if (index < maxIndex && value.trim()) {
      setIndex((i) => i + 1);
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const moved = moveIndex();
    if (!moved && index === 5) {
      setIndex((i) => i + 1);
    }

    if (!moved && index > 5 && isChecked) {
      if (isFetching) return;

      setTimeout(() => {
        onSubmit?.();
      }, 500);

      // return;

      const data = new FormData();
      Object.values(form).forEach((entry) => {
        data.append(entry.name, entry.value);
      });

      fetch('http://localhost:8000/contact.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {});
      // setTimeout(() => {
      //   if (onSubmit) {
      //     onSubmit();
      //   }
      // }, 1000);
    }
  };

  const handleBlur = (e, i) => {
    const value = e.target.value || '';
    if (i === index && value.trim()) {
      moveIndex();
    }
  };

  return (
    <Layout className="">
      <div className="pb-[153px]">
        <form onSubmit={handleSubmit} action="#" method="POST">
          <FormSection>
            <FormStep
              value={form[0]?.value || ''}
              onChange={onChange}
              index={0}
              currentIndex={index}
              text={'Hello! I am'}
              name={'name'}
              onBlur={handleBlur}
              placeholder="I’m Stas, what’s your name?*"
              errorText="Please enter your name"
            />
            <FormStep
              name="company_name"
              value={form[1]?.value || ''}
              onChange={onChange}
              index={1}
              currentIndex={index}
              text={'I’m doing my part at'}
              onBlur={handleBlur}
              placeholder="Uber, Stripe, Pfizer etc.*"
              errorText="Please enter your company name"
            />
          </FormSection>
          <FormSection>
            <FormStep
              flavor="right"
              value={form[2]?.value || ''}
              onChange={onChange}
              name="project"
              index={2}
              currentIndex={index}
              inputSentenceIndex={media !== 'mobile' ? 1 : 0}
              text={
                media !== 'mobile'
                  ? ['I’m looking for a partner', 'to collaborate on']
                  : 'I’m looking for a partner to collaborate on'
              }
              onBlur={handleBlur}
              placeholder="Design? Branding? MVP? We are happy to help.*"
              errorText="What kind of project are you working on?"
            />
          </FormSection>
          <FormSection>
            <FormStep
              value={form[3]?.value || ''}
              onChange={onChange}
              name="project_about"
              index={3}
              currentIndex={index}
              inputSentenceIndex={0}
              text={['The project is about']}
              onBlur={handleBlur}
              placeholder="App for aero taxi? Financial literacy service? We are eager to know.*"
              errorText="What can we do for you?"
            />
          </FormSection>
          <FormSection>
            <FormStep
              flavor="right"
              value={form[4]?.value || ''}
              onChange={onChange}
              name="budget"
              index={4}
              currentIndex={index}
              inputSentenceIndex={media !== 'mobile' ? 1 : 0}
              text={
                media !== 'mobile'
                  ? ['The budget I’m willing', 'to spend is about']
                  : 'The budget I’m willing to spend is about'
              }
              onBlur={handleBlur}
              placeholder="a tough one but we just need an approximate for start*"
              errorText="What is your budget?"
            />
          </FormSection>
          <FormSection>
            <FormStep
              value={form[5]?.value || ''}
              onChange={onChange}
              name="email"
              index={5}
              currentIndex={index}
              text={['Contact me back at', 'for further discussions.']}
              onBlur={handleBlur}
              placeholder="YourEmail@mail.com*"
              errorText="Please enter your email address"
            />
          </FormSection>
          <div
            className={cx(
              'mt-8 flex flex-col items-start transition-opacity duration-500 md:mt-0 md:flex-row md:items-center md:justify-end',
              {
                'opacity-0': index < 6,
              }
            )}
          >
            <div className="mb-4 text-base font-medium leading-[19px] tracking-[0.03em] md:mb-0 md:mr-[168px]">
              <label className="flex items-center">
                <input
                  value={isChecked}
                  onChange={() => {
                    setIsChecked((c) => !c);
                  }}
                  type="checkbox"
                  className="mr-2"
                />
                I agree with the Privacy Policy
              </label>
            </div>
            <Button
              className="!px-[54px] !py-[14px]"
              theme={'white'}
              type="submit"
            >
              Make me glow
            </Button>
          </div>

          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </Layout>
  );
}
