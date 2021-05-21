import { useReducer, useState, useEffect } from 'react';
import cn from 'classnames';
import { internalStateReducer } from '../../helpers/utlility-functions';
import Input from '../input';
import Spacer from '../spacer';
import styles from './UserForm.module.scss';
import validateForm from '../../helpers/validator';

const UserForm = ({ handleSubmit }) => {
  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const [{ name, role, email, password }, setState] = useReducer(
    internalStateReducer,
    {
      name: '',
      role: '',
      email: '',
      password: ''
    }
  );

  useEffect(() => {
    const errors = validateForm({ name, email, password });
    setFormErrors(errors);

    if (Object.values(errors).every(err => err.length === 0)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, name, password]);

  const handleInputChange = e => {
    setState({ [e.target.id]: e.target.value });
  };

  return (
    <div className={styles.root}>
      <Input
        value={name}
        id="name"
        handleInputChange={handleInputChange}
        label="Name"
        required
        type="text"
        placeholder="Enter your full name"
        error={formErrors.name}
      />

      <Spacer height={20} />

      <Input
        value={role}
        id="role"
        handleInputChange={handleInputChange}
        label="Role"
        type="text"
        placeholder="Enter your role (e.g Software Engineer)"
      />

      <Spacer height={20} />

      <Input
        value={email}
        id="email"
        handleInputChange={handleInputChange}
        label="Email"
        required
        type="email"
        placeholder="Enter your email"
        error={formErrors.email}
      />

      <Spacer height={20} />

      <Input
        value={password}
        id="password"
        handleInputChange={handleInputChange}
        label="Password"
        required
        type="password"
        placeholder="Enter your password"
        error={formErrors.password}
      />

      <Spacer height={80} />

      <button
        className={cn({
          'submit-button': true,
          [styles.submit]: true,
          [styles['submit--disabled']]: disabled
        })}
        onClick={handleSubmit}
        type="button"
        disabled={disabled}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default UserForm;
