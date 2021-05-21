import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Spacer from '../spacer';
import styles from './PrivacyForm.module.scss';
import { setPrivacyData } from '../../redux/actions/form.action';

const PrivacyForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const privacyData = useSelector(state => state.form.data.privacy);

  const handleSubmit = () => {
    router.push('/done');
  };

  return (
    <div className={styles.root}>
      <div className={styles.form__row}>
        <img
          src={
            privacyData.receiveProductUpdates
              ? '/icons/checkbox-checked.svg'
              : '/icons/checkbox-unchecked.svg'
          }
          alt=""
          className={styles.form__check}
          onClick={() => {
            if (privacyData.receiveProductUpdates) {
              dispatch(setPrivacyData({ receiveProductUpdates: false }));
            } else {
              dispatch(setPrivacyData({ receiveProductUpdates: true }));
            }
          }}
          aria-hidden="true"
          data-cy="receive-product-updates-check"
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
            privacyData.receiveCommunicationUpdates
              ? '/icons/checkbox-checked.svg'
              : '/icons/checkbox-unchecked.svg'
          }
          alt=""
          className={styles.form__check}
          onClick={() => {
            if (privacyData.receiveCommunicationUpdates) {
              dispatch(setPrivacyData({ receiveCommunicationUpdates: false }));
            } else {
              dispatch(setPrivacyData({ receiveCommunicationUpdates: true }));
            }
          }}
          aria-hidden="true"
          data-cy="receive-communication-updates-check"
        />
        <Spacer width={10} />
        <p className={styles.form__label}>
          Receive communication by email for other products created by the
          Tray.io team
        </p>
      </div>

      <button
        className={cn({
          'submit-button': true,
          [styles.submit]: true
        })}
        onClick={handleSubmit}
        type="button"
        data-cy="submit-privacy-form"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default PrivacyForm;
