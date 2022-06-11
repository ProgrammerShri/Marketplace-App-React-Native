import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  placeholder,
  PickerItemComponent,
  width,
}) => {
  const { errors, touched, setFieldValue, value } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={value}
        numberOfColumns={numberOfColumns}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
