import { useReducer } from 'react';
import { internalStateReducer } from '../../helpers/utlility-functions';
import Input from '../input';
import Spacer from '../spacer';
import styles from './UserForm.module.scss';

const UserForm = () => {
  const [{ name, role, email, password }, setState] = useReducer(
    internalStateReducer,
    {
      name: '',
      role: '',
      email: '',
      password: ''
    }
  );

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
      />

      <Spacer height={80} />
    </div>
  );
};

export default UserForm;
