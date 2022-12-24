import { useState } from 'react';
import Button from '../../Button';
import Layout from '../../Layout';
import FormSection from './FormSection';
import FormStep from './FormStep';
import cx from 'clsx';
import { useHeaderTheme } from '../../Header';

export default function Form() {
  const maxIndex = 5;
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({});
  useHeaderTheme({ theme: 'white' });

  const onChange = (e, index) => {
    setForm((form) => ({
      ...form,
      [index]: e.target.value,
    }));
  };

  const moveIndex = () => {
    const value = form[index] || '';
    console.log(!!value.trim());
    if (index < maxIndex && value.trim()) {
      setIndex((i) => i + 1);
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    const moved = moveIndex();
    if (!moved && index === 5) {
      setIndex((i) => i + 1);
    }
  };

  const handleBlur = (e, i) => {
    const value = e.target.value || '';
    if (i === index && value.trim()) {
      moveIndex();
    }
    // console.log('blur', index);
    // if (e.target.value.trim()) {
    //   moveIndex();
    // }
  };

  return (
    <Layout className="">
      <div className="border-b border-black pb-[153px]">
        <form onSubmit={handleSubmit} action="#" method="POST">
          <FormSection>
            <FormStep
              value={form[0] || ''}
              onChange={onChange}
              index={0}
              currentIndex={index}
              text={'Hello! I am'}
              name={'name'}
              onBlur={handleBlur}
              placeholder="I’m Stas, what’s your name?"
            />
            <FormStep
              value={form[1] || ''}
              onChange={onChange}
              index={1}
              currentIndex={index}
              text={'I’m doing my part at'}
              onBlur={handleBlur}
              placeholder="Uber, Stripe, Pfizer etc."
            />
          </FormSection>
          <FormSection>
            <FormStep
              flavor="right"
              value={form[2] || ''}
              onChange={onChange}
              name="help"
              index={2}
              currentIndex={index}
              inputSentenceIndex={1}
              text={['I’m looking for a partner', 'to collaborate on']}
              onBlur={handleBlur}
              placeholder="Design? Branding? MVP? We are happy to help."
            />
          </FormSection>
          <FormSection>
            <FormStep
              value={form[3] || ''}
              onChange={onChange}
              name="idea"
              index={3}
              currentIndex={index}
              inputSentenceIndex={0}
              text={['The project is about']}
              onBlur={handleBlur}
              placeholder="App for aero taxi? Financial literacy service? We are eager to know."
            />
          </FormSection>
          <FormSection>
            <FormStep
              flavor="right"
              value={form[4] || ''}
              onChange={onChange}
              name="budget"
              index={4}
              currentIndex={index}
              inputSentenceIndex={1}
              text={['The budget I’m willing', 'to spend is about']}
              onBlur={handleBlur}
              placeholder="a tough one but we just need an approximate for start"
            />
          </FormSection>
          <FormSection>
            <FormStep
              value={form[5] || ''}
              onChange={onChange}
              name="converstation"
              index={5}
              currentIndex={index}
              text={['Contact me back at', 'for further discussions.']}
              onBlur={handleBlur}
              placeholder="YourEmail@mail.com"
            />
          </FormSection>
          <div
            className={cx('flex items-center justify-end', {
              'opacity-0': index < 6,
            })}
          >
            <div className="mr-[168px] text-base font-medium leading-[19px] tracking-[0.03em]">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />I agree with the
                Privacy Policy
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
