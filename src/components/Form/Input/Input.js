import React from 'react';
import { useField } from 'formik';

import styles from './Input.module.scss';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const labelErrorStyle = {
    color: 'rgba(246, 126, 126, .6)'
  };

  const inputErrorStyle = {
    borderColor: 'rgb(246, 126, 126)'
  };

  let inputEl = null;

  switch (props.inputtype) {
    case 'input':
      inputEl = (
        <input
          className={styles.inputEl}
          style={meta.touched && meta.error ? inputErrorStyle : null}
          {...field}
          {...props}
        />
      );
      break;
    case 'textarea':
      inputEl = (
        <textarea
          className={styles.inputEl}
          style={meta.touched && meta.error ? inputErrorStyle : null}
          {...field}
          {...props}
        />
      );
      break;
    default:
      inputEl = (
        <input
          className={styles.inputEl}
          style={meta.touched && meta.error ? inputErrorStyle : null}
          {...field}
          {...props}
        />
      );
  }

  return (
    <div className={styles.Input}>
      {inputEl}
      <label
        className={styles.label}
        htmlFor={props.id || props.name}
        style={meta.touched && meta.error ? labelErrorStyle : null}
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className={styles.errorMessage}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
