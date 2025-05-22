import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TextInput from '../components/TextInput';
import Dropdown from '../components/Dropdown';
import { useState } from 'react';
import Header from '../components/Header';


const freixenet = {
  terms: [
    <>
      <div className="bt-freixenet-terms">
        <span className="typography-body-reduced">
          I accept the competition <Link href="/terms">terms & conditions</Link>
        </span>
        <span className="checkmark"></span>
      </div>
    </>,
  ],
  futureCommunications: [
    <>
      <div className="bt-freixenet-terms">
        <span className="typography-body-reduced">
          Stay up to date with offers and future competitions?
        </span>
        <span className="checkmark"></span>
      </div>
    </>,
  ],
  confirmButtonText: 'Confirm Details',
};

const sharedRugbyCopy = {
  terms: [
    <>
      <span className="checkmark"></span>
      <span className="typography-body-reduced">
        I agree to the <Link href="/terms" target="_blank">Terms & Conditions</Link> and{' '}
        <Link href="https://www.sazerac.ie/cookie-notice/" rel="noopener noreferrer" target="_blank">Privacy & Cookie Policy</Link>.
      </span>
    </>,
  ],
  futureCommunications: [
    <>
      <span className="checkmark"></span>
      <span className="typography-body-reduced">
        Tick to opt in to future communications from Buffalo Trace
      </span>
    </>,
  ],
  confirmButtonText: 'Confirm',
};

export default function EntryPage({ siteConfig }) {
  const { formVersion } = siteConfig;
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [generalError, setGeneralError] = useState('');

  const onSubmit = async (data) => {
    setGeneralError('');

    if (!siteConfig?.theme) {
      setGeneralError('Theme is missing. Please check site configuration.');
      return;
    }

    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      source: data.source || null,
      unique_code: data.uniqueCode || null,
      marketing_opt_in: data.optIn ? 'YES' : 'NO',
      version: siteConfig.formVersion,
      theme: siteConfig.theme,
      ...(siteConfig.formVersion === '4' && { phone: data.phone || null }),
    };

    try {
      const response = await fetch('/api/enter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        reset();
        router.push('/goodluck');
      } else {
        const msg = result.message?.toLowerCase() || '';

        if (msg.includes('first name')) {
          setError('firstName', { type: 'server', message: result.message });
        } else if (msg.includes('last name')) {
          setError('lastName', { type: 'server', message: result.message });
        } else if (msg.includes('email')) {
          setError('email', { type: 'server', message: result.message });
        } else if (msg.includes('unique code')) {
          setError('uniqueCode', { type: 'server', message: result.message });
        } else if (msg.includes('phone')) {
          setError('phone', { type: 'server', message: result.message });
        } else {
          setGeneralError(result.message || 'Something went wrong — please try again.');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setGeneralError('Network error — please try again.');
    }
  };

  const COPY_BY_THEME = {
    'bt-freixenet': freixenet,
    'bt-golf-tesco': sharedRugbyCopy,
    'bt-golf-supervalu-dunnes': sharedRugbyCopy,
    'bt-golf-on-trade': sharedRugbyCopy,
    'bt-rugby-off-trade': sharedRugbyCopy,
    'bt-rugby-on-trade': sharedRugbyCopy,
    'XXXX': {
        terms: [
          <>XXXX</>,
          <>XXXX</>,
        ],
        futureCommunications: [
          <>XXXX</>,
          <>XXXX</>,
        ],
      },
  };
  
  const theme = siteConfig.theme || '';
  const { terms, futureCommunications, confirmButtonText = "Confirm" } = COPY_BY_THEME[theme] || { terms: [], futureCommunications: [] };

  return (
    <main className="_main">
      <div className="_content">
        <Header theme={theme} />

        <h2 className="headline typography-headline-elevated typeface-secondary text-center uppercase">
          Enter your details below
        </h2>

        <video
          className="bt-freixenet-entry-video"
          src="/videos/freixenet/bg_animation.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/freixenet/age-background-confirm.png"
          style={{ width: '100%' }}
        />
        <form className="entry-form" onSubmit={handleSubmit(onSubmit)}>
          
          <TextInput
            label="First Name*"
            placeholder="First Name*"
            name="firstName"
            register={register}
            required
            error={errors.firstName}
          />

          <TextInput
            label="Last Name*"
            placeholder="Last Name*"
            name="lastName"
            register={register}
            required
            error={errors.lastName}
          />

          <TextInput
            label="Email Address*"
            placeholder="Email Address*"
            name="email"
            register={register}
            required
            validationRules={{
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            }}
            error={errors.email}
          />

          {formVersion === '2' && (
            <Dropdown
              options={['Supervalu', 'Dunnes']}
              placeholder="Where did you find us?*"
              name="source"
              register={register}
              required
              error={errors.source}
            />
          )}

          {formVersion === '3' && (
            <>
              <TextInput
                label="Unique Code*"
                placeholder="Unique Code*"
                name="uniqueCode"
                register={register}
                required
                error={errors.uniqueCode}
              />
              <Dropdown
                options={['Tesco', 'Sainsbury’s', 'Asda', 'Morrisons', 'Waitrose', 'Co-op', 'Other']}
                placeholder="Where did you purchase from?"
                name="source"
                register={register}
                required
                error={errors.source}
              />
            </>
          )}

          {formVersion === '4' && (
            <>
              <TextInput
                label="Phone Number*"
                placeholder="Phone Number*"
                name="phone"
                register={register}
                required
                validationRules={{
                  pattern: {
                    value: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
                    message: "Invalid phone number",
                  },
                }}
                error={errors.phone}
              />
              <TextInput
                label="Unique Code*"
                placeholder="Unique Code*"
                name="uniqueCode"
                register={register}
                required
                error={errors.uniqueCode}
              />
              <Dropdown
                options={['Tesco', 'Sainsbury’s', 'Asda', 'Morrisons', 'Waitrose', 'Co-op', 'Other']}
                placeholder="Where did you purchase from?"
                name="source"
                register={register}
                required
                error={errors.source}
              />
              
            </>
          )}

          {formVersion === '5' && (
            <>
              <TextInput
                label="Confirm Email Address*"
                placeholder="Confirm Email Address*"
                name="email"
                register={register}
                required
                validationRules={{
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                }}
                error={errors.email}
              />
              <TextInput
                label="Phone Number*"
                placeholder="Phone Number*"
                name="phone"
                register={register}
                required
                validationRules={{
                  pattern: {
                    value: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
                    message: "Invalid phone number",
                  },
                }}
                error={errors.phone}
              />
              <p className="text-center typography-body-text color-black">Tell us where you found us</p>
              <Dropdown
                options={['Tesco', 'Sainsbury’s', 'Asda', 'Morrisons', 'Waitrose', 'Co-op', 'Other']}
                placeholder="Where did you purchase from?"
                name="source"
                register={register}
                required
                error={errors.source}
              />
            </>
          )}

          {theme !== 'bt-freixenet' && (
            <p className="typography-body-reduced text-center">
              All fields marked * are mandatory
            </p>
          )}

          <div>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                id="agreeTerms"
                {...register('agreeTerms', { required: true })}
                defaultChecked={false}
              />
              {terms}
            </label>
            {errors.agreeTerms && (
              <span className="typography-body-reduced error">
                You must agree before submitting
              </span>
            )}

            <label className="custom-checkbox">
              <input
                type="checkbox"
                id="optIn"
                {...register('optIn')}
                defaultChecked={false}
              />
              {futureCommunications}
            </label>
          </div>

          {generalError && (
            <p className="form-error" style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>
              {generalError}
            </p>
          )}

          <button className="submitButton" type="submit">
            {confirmButtonText}
          </button>
        </form>
      </div>
    </main>
  );
}
