/* tslint:disable */
import React, { useContext } from "react";
import { Formik } from "formik";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import validation from "./validation";
import { ContextType, ProductContext } from "pages/_app";

import Button from "atoms/Button/Button";
import fields from "components/molecules/Form/fields";

import { FormSection, SForm, SField } from "./Form.styles";

export interface FormValuesProps {
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
  const router = useRouter();

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
        validate={(values) => {
          validation(values);
        }}
        onSubmit={(values, { setSubmitting }) => {
          setProductsContext({
            product: { shipping: { ...values }, ...productsContext.product },
            products: productsContext.products,
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <SForm onSubmit={handleSubmit}>
            {fields.map((f, index) => {
              const { type } = f;
              const value = type;
              return (
                <SField key={`${f}-${index}`}>
                  <label>{type}</label>
                  <input
                    type={type}
                    name={type}
                    value={value}
                    onChange={handleChange}
                  />
                  {`errors.${type}` && `touched.${type}` && `errors${type}`}
                </SField>
              );
            })}

            {!productsContext?.product?.shipping && (
              <Button type="submit">{t("confirm")}</Button>
            )}
            {productsContext?.product?.shipping && (
              <Button type="button" onClick={() => router.push("success")}>
                {t("close")}
              </Button>
            )}
          </SForm>
        )}
      </Formik>
    </FormSection>
  );
};

export default Form;
