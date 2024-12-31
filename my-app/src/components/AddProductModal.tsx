import { useState } from "react";

type AddProductModalProps = {
  addProduct: (newProduct: any) => void;
  setShowAddProduct: (show: boolean) => void;
};

const AddProductModal = ({ addProduct, setShowAddProduct }: AddProductModalProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
        setImage(file);
        // Convert the image file to a data URL for preview
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageUrl = reader.result as string;
            setPreview(imageUrl);
        };
        reader.readAsDataURL(file);
    }
};

  const handleSubmit = () => {
    if (title && category && price && preview) {  // Check preview instead of image
        const newProduct = {
            title,
            category,
            price: parseFloat(price),
            image: preview,  // Use the preview URL for the image
        };
        addProduct(newProduct);
        setShowAddProduct(false);
    } else {
        alert("Please fill all fields");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 mb-2 w-full"
        />
       {preview && (
    <div className="mb-4">
        <img
            src={preview}
            alt="Preview"
            className="w-48 h-48 rounded-lg shadow-md"
        />
    </div>
)}
        <div className="flex justify-end">
          <button
            onClick={() => setShowAddProduct(false)}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
