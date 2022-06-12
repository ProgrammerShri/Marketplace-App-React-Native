import React from "react";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import { StyleSheet } from "react-native";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object()
  .shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.string().required().nullable().min(1).label("Category"),
  })
  .required();

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  {
    label: "Electronics",
    value: 2,
    backgroundColor: "green",
    icon: "cellphone-settings",
  },
  {
    label: "Books",
    value: 3,
    backgroundColor: "blue",
    icon: "book-open-page-variant",
  },
  {
    label: "Clothing",
    value: 4,
    backgroundColor: "purple",
    icon: "tshirt-crew-outline",
  },
  {
    label: "Camera",
    value: 5,
    backgroundColor: "orange",
    icon: "camera-iris",
  },
  { label: "Other", value: 6, backgroundColor: "grey", icon: "crown" },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
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
          width={120}
          placeholder="Price"
          keyboardType="numeric"
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
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

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
