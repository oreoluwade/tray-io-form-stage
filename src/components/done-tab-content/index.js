import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Spacer from '../spacer';
import styles from './DoneTabContent.module.scss';
import validateForm from '../../helpers/validator';

const DoneTabContent = () => {
  const [formHasErrors, setFormHasErrors] = useState(true);
  const [errors, setErrors] = useState([]);
  const fullFormData = useSelector(state => state.form.data);

  const userData = fullFormData?.user;

  useEffect(() => {
    const formErrors = validateForm(userData);

    const arrayOfErrors = [];

    Object.values(formErrors)
      .flat()
      .forEach(value => {
        arrayOfErrors.push(value);
      });

    setErrors(arrayOfErrors);

    if (Object.values(formErrors).every(errArr => !errArr.length)) {
      setFormHasErrors(false);
    }
  }, [userData]);

  // Pretty Print Form data
  console.log(JSON.stringify(fullFormData, null, 2));

  return !formHasErrors ? (
    <div className={styles.root}>
      <img src="icons/checkmark.svg" alt="" className={styles.check} />
      <Spacer height={30} />

      <p className={styles.confirmation_text}>
        Please verify your email address.
      </p>
      <Spacer height={15} />
      <p className={styles.confirmation_text}>
        You should have received an email from us already!
      </p>
    </div>
  ) : (
    <div className={styles.root}>
      <img src="icons/close.svg" alt="" className={styles.check} />
      <Spacer height={30} />
      <p>Your form has the following errors:</p>
      <Spacer height={20} />

      <div className={styles.error__list}>
        {errors.map((err, idx) => (
          <div key={idx}>
            <p className={styles.error_text}>{err}</p>
            <Spacer height={5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoneTabContent;
