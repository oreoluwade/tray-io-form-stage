import React from 'react';
import Spacer from '../spacer';
import styles from './Input.module.scss';

const Input = ({
  label,
  placeholder,
  error,
  required,
  handleInputChange,
  value,
  type,
  id
}) => {
  return (
    <div className={styles.root}>
      <label htmlFor={id} className={styles.label}>
        {/* {label} */}
        <p className={styles.label__text}>{label}</p>
        {required && (
          <>
            <Spacer width="5px" />

            <p className={styles.required}>*</p>
          </>
        )}
      </label>

      <Spacer height="5px" />

      <input
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        id={id}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
