import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const LoginForm = ({ onUserData }) => {

  // Form
  const { register, handleSubmit, errors } = useForm();

  const [t] = useTranslation();

  // form submit
  const onSubmit = (data) => {
    onUserData(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId='formLogin.email'>
        <Form.Label>
          {t("dashboard.screens.login.form.control.email.title")}
        </Form.Label>
        <Form.Control
          type='text'
          name='email'
          placeholder='example@ubeslang.com'
          ref={register({
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
          })}
        />
        <Form.Text className='text-error'>
          {errors.email &&
            t(
              `dashboard.screens.login.form.control.email.errors.${errors.email.type}`
            )}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId='formLogin.password'>
        <Form.Label>
          {t("dashboard.screens.login.form.control.password.title")}
        </Form.Label>
        <Form.Control
          type='password'
          name='password'
          placeholder='*****'
          ref={register({
            required: true
          })}
        />
        <Form.Text className='text-error'>
          {errors.password &&
            t(
              `dashboard.screens.login.form.control.password.errors.${errors.password.type}`
            )}
        </Form.Text>
      </Form.Group>
      <Button variant='primary' type='submit'>
        {t(`dashboard.screens.login.form.control.submit`)}
      </Button>
    </Form>
  );
};

export default LoginForm;
