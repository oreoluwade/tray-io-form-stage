import { useState, useEffect } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Input from '../input';
import Spacer from '../spacer';
import styles from './UserForm.module.scss';
import validateForm from '../../helpers/validator';
import { setUserData } from '../../redux/actions/form.action';

const UserForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userData = useSelector(state => state.form.data.user);

  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const errors = validateForm(userData);
    setFormErrors(errors);

    if (Object.values(errors).every(err => err.length === 0)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userData]);

  const handleInputChange = e => {
    dispatch(
      setUserData({
        [e.target.id]: e.target.value
      })
    );
  };

  const handleSubmit = () => {
    router.push('/privacy');
  };

  return (
    <div className={styles.root}>
      <Input
        value={userData.name}
        id="name"
        handleInputChange={handleInputChange}
        label="Name"
        required
        type="text"
        placeholder="Enter your full name"
        error={formErrors.name}
        data-cy="name-input"
      />

      <Spacer height={20} />

      <Input
        value={userData.role}
        id="role"
        handleInputChange={handleInputChange}
        label="Role"
        type="text"
        placeholder="Enter your role (e.g Software Engineer)"
        data-cy="role-input"
      />

      <Spacer height={20} />

      <Input
        value={userData.email}
        id="email"
        handleInputChange={handleInputChange}
        label="Email"
        required
        type="email"
        placeholder="Enter your email"
        error={formErrors.email}
        data-cy="email-input"
      />

      <Spacer height={20} />

      <Input
        value={userData.password}
        id="password"
        handleInputChange={handleInputChange}
        label="Password"
        required
        type="password"
        placeholder="Enter your password"
        error={formErrors.password}
        data-cy="password-input"
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
        data-cy="submit-user-form"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default UserForm;
