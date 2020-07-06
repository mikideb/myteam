import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from './Input/Input';

import styles from './Form.module.scss';

const FormFormik = () => {
  return (
    <div className={styles.Form}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          company: '',
          title: '',
          message: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Must be at least 3 characters.')
            .required('This field is required.'),
          email: Yup.string()
            .email('Invalid email address.')
            .required('This field is required.'),
          company: Yup.string().min(3, 'Must be at least 3 characters.'),
          title: Yup.string().min(3, 'Must be at least 3 characters.'),
          message: Yup.string()
            .min(10, 'Must be at least 3 characters.')
            .max(20, 'Must be 20 characters or less.')
            .required('This field is required.')
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {props => (
          <Form>
            <Input label="Name" name="name" type="text" inputtype="input" />
            <Input
              label="Email Address"
              name="email"
              type="email"
              inputtype="input"
            />
            <Input
              label="Company"
              name="company"
              type="text"
              inputtype="input"
            />
            <Input label="Title" name="title" type="text" inputtype="input" />
            <Input
              label="Message"
              name="message"
              type="text"
              inputtype="textarea"
            />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormFormik;
