import React, { useContext } from "react";
import { Field, Formik } from "formik";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ContextType, ProductContext } from "pages/_app";

import Button from "atoms/Button/Button";

import { FormSection, SForm, SField } from "./Form.styles";

interface FormValuesProps {
  name: string;
  email: string;
  address: string;
  postalCode: string;
  country: string;
  phone: string;
}

const Form = () => {
  const { t } = useTranslation("common");
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;

  const initialValues: FormValuesProps = {
    name: "",
    email: "",
    address: "",
    postalCode: "",
    country: "",
    phone: "",
  };

  return (
    <FormSection>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setProductsContext({
            product: { shipping: { ...values }, ...productsContext.product },
            products: productsContext.products,
          });
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <SForm onSubmit={handleSubmit}>
            <label>name</label>
            <Field name="name" type="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label>email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label>address</label>
            <Field name="address" type="text" />
            {errors.address && touched.address ? (
              <div>{errors.address}</div>
            ) : null}
            <label>postalCode</label>
            <Field name="postalCode" type="number" />
            {errors.postalCode && touched.postalCode ? (
              <div>{errors.postalCode}</div>
            ) : null}
            <label>country</label>
            <Field name="country" type="text" />
            {errors.country && touched.country ? (
              <div>{errors.country}</div>
            ) : null}
            <label>phone</label>
            <Field name="phone" type="tel" />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}

            {!productsContext?.product?.shipping && (
              <Button type="submit">{t("confirm")}</Button>
            )}
          </SForm>
        )}
      </Formik>
    </FormSection>
  );
};

export default Form;
