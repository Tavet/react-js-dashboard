import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const RegisterForm = ({ onUserData, countryList, languageList }) => {

  // Form
  const { register, handleSubmit, control, errors } = useForm();

  const [t] = useTranslation();

  // form submit
  const onSubmit = (data) => {
    onUserData(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId='formRegister.name'>
        <Form.Label>
          {t("dashboard.screens.register.form.control.name.title")}
        </Form.Label>
        <Form.Control
          type='text'
          name='name'
          placeholder='Ubes Lang'
          ref={register({
            required: true,
            maxLength: 50,
            pattern: /(\w|\s|[.'-])+/,
          })}
        />
        <Form.Text className='text-muted'>
          {t("dashboard.screens.register.form.control.name.helper")}
        </Form.Text>
        <Form.Text className='text-error'>
          {errors.name &&
            t(
              `dashboard.screens.register.form.control.name.errors.${errors.name.type}`
            )}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId='formRegister.email'>
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
      <Form.Group controlId='formRegister.password'>
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
      <Form.Group controlId='formRegister.location'>
        <Form.Label>
          {t("dashboard.screens.register.form.control.location.title")}
        </Form.Label>
        <Controller as={<Select options={countryList} />}
          control={control}
          rules={{ required: true }}
          onChange={([selected]) => {
            return selected;
          }}
          name="location"
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
      <Form.Group controlId='formRegister.language'>
        <Form.Label>
          {t("dashboard.screens.register.form.control.language.title")}
        </Form.Label>
        <Controller as={<Select options={languageList} />}
          control={control}
          rules={{ required: true }}
          onChange={([selected]) => {
            return selected;
          }}
          name="language"
        />
        <Form.Text className='text-muted'>
          {t("dashboard.screens.register.form.control.language.helper")}
        </Form.Text>
        <Form.Text className='text-error'>
          {errors.language &&
            t(
              `dashboard.screens.register.form.control.language.errors.${errors.language.type}`
            )}
        </Form.Text>
      </Form.Group>
      <Button variant='primary' type='submit'>
        {t(`dashboard.screens.register.form.control.submit`)}
      </Button>
    </Form>
  );
};

RegisterForm.propTypes = {
  onUserData: PropTypes.func.isRequired,
  countryList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  languageList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired
}

export default RegisterForm;
