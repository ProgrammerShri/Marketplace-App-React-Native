import React from "react";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object()
  .shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.string().required().nullable().min(1).label("Category"),
  })
  .required();

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Electronics", value: 2 },
  { label: "Books", value: 3 },
  { label: "Clothing", value: 4 },
  { label: "Other", value: 5 },
];

const ListingEditScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          placeholder="Title"
          maxLength={255}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="price"
          maxLength={8}
          placeholder="Price"
          keyboardType="numeric"
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />

        <AppFormField
          maxLength={255}
          name="description"
          placeholder="Description"
          multiline={true}
          numberOfLines={3}
        />

        <SubmitButton title="Post" color="primary" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;
