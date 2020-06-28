import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import getUserGeolocation from "../../../../../services/userLocation";

const RegisterForm = ({ onUserData }) => {
  const { register, handleSubmit, errors } = useForm();

  const [country, setCountry] = useState(undefined);

  const [t] = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      setCountry(await (await getUserGeolocation.get("/")).data.country_name);
    };
    fetchData();
  }, []);

  const onSubmit = (data) => {
    console.log("country: ", country);
    onUserData(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId='formRegisterEmail'>
        <Form.Label>
          {t("dashboard.screens.register.form.control.email.title")}
        </Form.Label>
        <Form.Control
          type='text'
          name='email'
          placeholder='example@ubeslang.com'
          ref={register({
            required: true,
            maxLength: 50,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        <Form.Text className='text-muted'>
          {t("dashboard.screens.register.form.control.email.helper")}
        </Form.Text>
        <Form.Text className='text-error'>
          {errors.email &&
            t(
              `dashboard.screens.register.form.control.email.errors.${errors.email.type}`
            )}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId='formRegisterPassword'>
        <Form.Label>
          {t("dashboard.screens.register.form.control.password.title")}
        </Form.Label>
        <Form.Control
          type='password'
          name='password'
          placeholder='*****'
          ref={register({
            required: true,
            minLength: 7,
          })}
        />
        <Form.Text className='text-error'>
          {errors.password &&
            t(
              `dashboard.screens.register.form.control.password.errors.${errors.password.type}`
            )}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId='formRegisterEmail'>
        <Form.Label>
          {t("dashboard.screens.register.form.control.location.title")}
        </Form.Label>
        <Form.Control
          type='text'
          name='location'
          ref={register({
            required: true,
          })}
        />
        <Form.Text className='text-muted'>
          {t("dashboard.screens.register.form.control.location.helper")}
        </Form.Text>
        <Form.Text className='text-error'>
          {errors.location &&
            t(
              `dashboard.screens.register.form.control.location.errors.${errors.location.type}`
            )}
        </Form.Text>
      </Form.Group>
      <Button variant='primary' type='submit'>
        {t(`dashboard.screens.register.form.control.submit`)}
      </Button>
    </Form>
  );
};

export default RegisterForm;
