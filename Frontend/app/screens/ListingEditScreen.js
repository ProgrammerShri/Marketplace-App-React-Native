import React, { useState } from "react";
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
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object()
  .shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image"),
  })
  .required();

const categories = [
  { id: 1, name: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  {
    id: 2,
    name: "Electronics",
    value: 2,
    backgroundColor: "green",
    icon: "cellphone-settings",
  },
  {
    id: 3,
    name: "Books",
    value: 3,
    backgroundColor: "blue",
    icon: "book-open-page-variant",
  },
  {
    id: 4,
    name: "Clothing",
    value: 4,
    backgroundColor: "purple",
    icon: "tshirt-crew-outline",
  },
  {
    id: 5,
    name: "Camera",
    value: 5,
    backgroundColor: "orange",
    icon: "camera-iris",
  },
  {
    id: 6,
    name: "Games",
    value: 6,
    backgroundColor: "pink",
    icon: "gamepad",
  },
  {
    id: 7,
    name: "Tools",
    value: 7,
    backgroundColor: "brown",
    icon: "toolbox",
  },
  {
    id: 8,
    name: "Books",
    value: 8,
    backgroundColor: "blue",
    icon: "book-open-page-variant",
  },
  {
    id: 9,
    name: "Doc",
    value: 9,
    backgroundColor: "gray",
    icon: "file-document-outline",
  },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadModalVisible(true);
    const result = await listingsApi.addListing(
      {
        ...listing,
        location,
      },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadModalVisible(false);
      return alert("Could not save listing");
    }

    resetForm();
  };
  return (
    <Screen style={styles.container}>
      <UploadScreen
        visible={uploadModalVisible}
        progress={progress}
        onDone={() => {
          setUploadModalVisible(false);
        }}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
