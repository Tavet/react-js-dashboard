import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { format } from 'react-string-format';
import { useTranslation } from "react-i18next";
import getUserGeolocation from "../../../../../services/userLocation";

const RegisterForm = ({ onUserData, countryList, languageList }) => {

  // Form
  const { register, handleSubmit, control, errors } = useForm();

  // Hooks
  const [country, setCountry] = useState(undefined);
  const [countryWarning, setCountryWarning] = useState(false);
  const [countryValidated, setCountryValidated] = useState(false);
  const [formData, setFormData] = useState(undefined);

  // Popup country validation
  const handleCountryWarningShow = () => {
    setCountryValidated(true);
    setCountryWarning(true);
  };

  const handleCountryWarningClose = () => {
    setCountryValidated(true);
    setCountryWarning(false);
  };

  const [t] = useTranslation();

  // Effect hook
  useEffect(() => {
    const fetchData = async () => {
      setCountry(await (await getUserGeolocation.get("/")).data);
    };
    fetchData();
  }, []);

  // form submit
  const onSubmit = (data) => {
    console.log("yeah submit")
    if (!countryValidated && data.location.label !== country.country_name) {
      handleCountryWarningShow();
    } else {
      setCountryValidated(false);
      onUserData(data);
      console.log("form data: ", data)
      debugger;
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
      <Modal
        show={countryWarning}
        onHide={handleCountryWarningClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{t(`dashboard.screens.register.form.control.location.modal.title`)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {format(t(`dashboard.screens.register.form.control.location.modal.message`), country?.country_name, formData?.location.label)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCountryWarningClose}>
            {t(`dashboard.screens.register.form.control.location.modal.no`)}
          </Button>
          <Button variant="primary">{t(`dashboard.screens.register.form.control.location.modal.yes`)}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterForm;
