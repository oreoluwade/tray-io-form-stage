import { useState } from 'react';
import Spacer from '../spacer';
import styles from './PrivacyForm.module.scss';

const PrivacyForm = () => {
  const [getTrayIoProductUpdate, setGetTrayIoProductUpdate] = useState(false);
  const [getOtherProductsUpdate, setGetOtherProductsUpdate] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.form__row}>
        <img
          src={
            getTrayIoProductUpdate
              ? '/icons/checkbox-checked.svg'
              : '/icons/checkbox-unchecked.svg'
          }
          alt=""
          className={styles.form__check}
          onClick={() => {
            setGetTrayIoProductUpdate(t => !t);
          }}
          aria-hidden="true"
        />
        <Spacer width={10} />
        <p className={styles.form__label}>
          Receive updates about Tray.io products by email
        </p>
      </div>

      <Spacer height={25} />

      <div className={styles.form__row}>
        <img
          src={
            getOtherProductsUpdate
              ? '/icons/checkbox-checked.svg'
              : '/icons/checkbox-unchecked.svg'
          }
          alt=""
          className={styles.form__check}
          onClick={() => {
            setGetOtherProductsUpdate(t => !t);
          }}
          aria-hidden="true"
        />
        <Spacer width={10} />
        <p className={styles.form__label}>
          Receive communication by email for other products created by the
          Tray.io team
        </p>
      </div>
    </div>
  );
};

export default PrivacyForm;
