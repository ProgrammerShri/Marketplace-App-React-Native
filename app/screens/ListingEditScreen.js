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
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object()
  .shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.string().required().nullable().min(1).label("Category"),
    images: Yup.array().min(1, "Please select at least one image"),
  })
  .required();

const categories = [
  { id: 1, label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  {
    id: 2,
    label: "Electronics",
    value: 2,
    backgroundColor: "green",
    icon: "cellphone-settings",
  },
  {
    id: 3,
    label: "Books",
    value: 3,
    backgroundColor: "blue",
    icon: "book-open-page-variant",
  },
  {
    id: 4,
    label: "Clothing",
    value: 4,
    backgroundColor: "purple",
    icon: "tshirt-crew-outline",
  },
  {
    id: 5,
    label: "Camera",
    value: 5,
    backgroundColor: "orange",
    icon: "camera-iris",
  },
  {
    id: 6,
    label: "Games",
    value: 6,
    backgroundColor: "pink",
    icon: "gamepad",
  },
  {
    id: 7,
    label: "Tools",
    value: 7,
    backgroundColor: "brown",
    icon: "toolbox",
  },
  {
    id: 8,
    label: "Books",
    value: 8,
    backgroundColor: "blue",
    icon: "book-open-page-variant",
  },
  {
    id: 9,
    label: "Doc",
    value: 9,
    backgroundColor: "gray",
    icon: "file-document-outline",
  },
];

const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <AppFormImagePicker name="images" />
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
