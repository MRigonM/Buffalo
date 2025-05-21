import { useState, useRef } from 'react';
import Link from 'next/link';

export default function AgeGate({ onAgeConfirmed }) {
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [error, setError] = useState('');
  const monthRef = useRef();
  const yearRef = useRef();

  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 111; // For a maximum age of 110 (for example)

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Strip non-digits
    const digits = value.replace(/\D/g, '');
    setDob((prev) => ({ ...prev, [name]: digits }));

    if (name === 'day' && digits.length === 2) monthRef.current.focus();
    if (name === 'month' && digits.length === 2) yearRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { day, month, year } = dob;

    if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(day) ||
        !/^(0?[1-9]|1[0-2])$/.test(month) ||
        !/^\d{4}$/.test(year)) {
      return setError('Invalid date format.');
    }

    const birth = new Date(+year, +month - 1, +day);
    if (
      birth.getFullYear() !== +year ||
      birth.getMonth() !== +month - 1 ||
      birth.getDate() !== +day
    ) {
      return setError('Invalid date');
    }

    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const birthdayPassed =
      today.getMonth() > birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

    if (!birthdayPassed) age--;

    // Age validation and limiting year input
    if (age < 18) {
      setError('You must be over 18 to enter this site.');
    } else if (+year < minYear || +year > currentYear) {
      setError('Please enter a valid year.');
    } else {
      setError('');
      onAgeConfirmed();
    }
  };

  return (
    <div className="age-gate">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="age-form">
            <div className="typeface-secondary">
              <h1>You must be <br/> over 18 to <br/> enter this site</h1>
            </div>

            <div className="input-group">
              <input
                name="day"
                placeholder="DD"
                maxLength="2"
                value={dob.day}
                onChange={handleChange}
                inputMode="numeric"
                pattern="\d*"
                required
              />
              <input
                ref={monthRef}
                name="month"
                placeholder="MM"
                maxLength="2"
                value={dob.month}
                onChange={handleChange}
                inputMode="numeric"
                pattern="\d*"
                required
              />
              <input
                ref={yearRef}
                name="year"
                className="age-gate-year"
                placeholder="YYYY"
                maxLength="4"
                value={dob.year}
                onChange={handleChange}
                inputMode="numeric"
                pattern="\d*"
                required
              />
            </div>
            {error && <p className="error">{error}</p>}

            <p className="typography-body-reduced-age-gate">
              Please enter <br /> your date <br/> of birth
            </p>
            <button type="submit" className="submitAge">Enter</button>
          </div>
        </form>
      </div>
    </div>
  );
}