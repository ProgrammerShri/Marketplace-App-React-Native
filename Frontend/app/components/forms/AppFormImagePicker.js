import { useFormikContext } from "formik";
import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const AppFormImagePicker = ({ name }) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  const imageUris = values[name];

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={(uri) => setFieldValue(name, [...imageUris, uri])}
        onRemoveImage={(uri) =>
          setFieldValue(
            name,
            imageUris.filter((imageUri) => imageUri !== uri)
          )
        }
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;
