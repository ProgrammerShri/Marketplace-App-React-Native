// All Items must be an array of objects.

const categories = [
{ label: "Clothing", value: 1 },
{ label: "Electronics", value: 2 },
{ label: "Furniture", value: 3 },
{ label: "Books", value: 4 },
{ label: "Other", value: 5 },
];

// Use a State for the selected category.
const [category, setCategory] = useState(categories[0]);

// Use AppPicker Component with the following props:

<AppPicker
icon="apps"
placeholder="Category"
items={categories}
onSelectItem={(item) => setCategory(item)}
selectedItem={category}
/>
