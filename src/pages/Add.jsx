import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/add.css';
import { useSelector } from 'react-redux';

export default function Add() {
  const prev = useSelector((store) => store.data.prevUrl);

  const [nameError, setNameError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [cityError, setCityError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [value, setValue] = useState({
    name: '',
    country: '',
    city: '',
    email: '',
  });

  const handleChange = (set) => (event) => {
    const val = event.target.value;

    let check = val;
    check = check.replace(/[^A-Za-z]/gi, '');
    setValue({ ...value, [set]: val });

    if (set === 'name') {
      if (val !== check) setNameError('Only letters');
      else if (val === '') setNameError('Required');
      else setNameError('');
    } else if (set === 'country') {
      if (val !== check) setCountryError('Only letters');
      else if (val === '') setCountryError('Required');
      else setCountryError('');
    } else if (set === 'city') {
      if (val !== check) setCityError('Only letters');
      else if (val === '') setCityError('Required');
      else setCityError('');
    } else if (set === 'email') {
      if (val === '') setEmailError('Required');
      else setEmailError('');
    }
  };

  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const errorCheck = () => {
    var filter =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (value.name === '' || value.country === '' || value.city === '' || value.email === '') {
      if (value.name === '') setNameError('Required');
      if (value.country === '') setCountryError('Required');
      if (value.city === '') setCityError('Required');
      if (value.email === '') setEmailError('Required');
    } else {
      if (!filter.test(value.email)) {
        setErrorMsg('Please provide a valid email address');
        setShowError(true);
      } else if (value.name.length < 4 || value.name.length > 60) {
        setErrorMsg('Name and surname should contain at least 4 words and at most 60 words');
        setShowError(true);
      } else if (value.country.length < 2 || value.country.length > 40) {
        setErrorMsg('Country should contain at least 2 words and at most 40 words');
        setShowError(true);
      } else if (value.city.length < 2 || value.city.length > 40) {
        setErrorMsg('City should contain at least 2 words and at most 40 words');
        setShowError(true);
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className="add">
      <div className="add-upper">
        <div className="add-logo" />
        <Link to={prev} className="add-return">
          <img className="add-return-icon" width={25} src="./return.png" alt="return" />
          <h1 className="add-return-text">Return to List Page</h1>
        </Link>
      </div>
      <div className="add-form">
        {nameError ? (
          <div className="add-form-input">
            <label className="error-label">Name Surname</label>
            <input
              autoComplete="off"
              className="error-input"
              value={value.name}
              onChange={handleChange('name')}
              placeholder="Enter name and surname"
              type="text"
              name="text"
            />
            <p className="error-msg">{nameError}</p>
          </div>
        ) : (
          <div className="add-form-input">
            <label>Name Surname</label>
            <input
              autoComplete="off"
              value={value.name}
              onChange={handleChange('name')}
              placeholder="Enter name and surname"
              type="text"
              name="text"
            />
          </div>
        )}

        {countryError ? (
          <div className="add-form-input">
            <label className="error-label">Country</label>
            <input
              autoComplete="off"
              className="error-input"
              value={value.country}
              onChange={handleChange('country')}
              placeholder="Enter a country"
              type="text"
              name="text"
            />
            <p className="error-msg">{countryError}</p>
          </div>
        ) : (
          <div className="add-form-input">
            <label>Country</label>
            <input
              autoComplete="off"
              value={value.country}
              onChange={handleChange('country')}
              placeholder="Enter a country"
              type="text"
              name="text"
            />
          </div>
        )}

        {cityError ? (
          <div className="add-form-input">
            <label className="error-label">City</label>
            <input
              autoComplete="off"
              className="error-input"
              value={value.city}
              onChange={handleChange('city')}
              placeholder="Enter a city"
              type="text"
              name="text"
            />
            <p className="error-msg">{cityError}</p>
          </div>
        ) : (
          <div className="add-form-input">
            <label>City</label>
            <input
              autoComplete="off"
              value={value.city}
              onChange={handleChange('city')}
              placeholder="Enter a city"
              type="text"
              name="text"
            />
          </div>
        )}

        {emailError ? (
          <div className="add-form-input">
            <label className="error-label">Email</label>
            <input
              autoComplete="off"
              className="error-input"
              value={value.email}
              onChange={handleChange('email')}
              placeholder="Enter an email (abc@xyz.com)"
              type="text"
              name="text"
            />
            <p className="error-msg">{emailError}</p>
          </div>
        ) : (
          <div className="add-form-input">
            <label>Email</label>
            <input
              autoComplete="off"
              value={value.email}
              onChange={handleChange('email')}
              placeholder="Enter an email (abc@xyz.com)"
              type="text"
              name="text"
            />
          </div>
        )}
        {!nameError && !countryError && !cityError && !emailError ? (
          <button className="add-form-button" onClick={errorCheck}>
            Add
          </button>
        ) : (
          <button className="add-form-button">Add</button>
        )}
      </div>

      {showError && (
        <div className="add-error">
          <div className="add-error-left">
            <h1 className="add-error-title">Error while adding link element</h1>
            <h1 className="add-error-msg">{errorMsg}</h1>
          </div>
          <div className="add-error-right">
            <img
              onClick={() => setShowError(false)}
              src="./close.png"
              width={25}
              alt="close"
              className="add-error-close"
            />
            <h1 className="add-error-badge">Error</h1>
          </div>
        </div>
      )}
    </div>
  );
}
