import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CategoriesSelect } from "./CategoriesSelect";
export const AddProduct = () => {
  const [catArr, setCatArr] = useState([]);
  const [catId, setCatId] = useState("");

  const [form, setForm] = useState({
    title: "",
    brand: "",
    price: "",
    category: catId,
    description: "",
    image: "",
    ratings: "",
  });

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios.get("https://negast.herokuapp.com/categories").then(({ data }) => {
      console.log(data);
      set(data);
    });
  };

  //setting up the categories arr
  const set = (data) => {
    setCatArr([...data]);
    console.log("catArr", catArr);
  };
  //send category id to reference
  const selectCat = (id) => {
    setCatId(id);
    // console.log(catId);
    form.category = id;
    console.log(id);
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form State", form);
    axios
      .post(`https://negast.herokuapp.com/products`, form)
      .then(() => {
        alert("Product Added Succesfully");
      })
      .catch((err) => {
        alert("Error Try Again");
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };
  return (
    <div>
      <h2>Select Any one category</h2>
      {catArr.map((el) => {
        return (
          <CategoriesSelect key={el._id} item={el} selectCat={selectCat} />
        );
      })}

      <br />
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* title */}
        <input
          value={form.title}
          type="text"
          id="title"
          placeholder="title"
          onChange={(e) => handleChange(e)}
        />
        <br />
        {/* brand */}
        <input
          value={form.brand}
          type="text"
          id="brand"
          placeholder="Brand Name"
          onChange={(e) => handleChange(e)}
        />
        <br />
        {/* price */}
        <input
          value={form.price}
          type="text"
          id="price"
          placeholder="price"
          onChange={(e) => handleChange(e)}
        />
        <br />
        {/* desc */}
        <input
          value={form.description}
          type="text"
          id="description"
          placeholder="description"
          onChange={(e) => handleChange(e)}
        />
        <br />
        {/* image */}
        <input
          value={form.image}
          type="text"
          id="image"
          placeholder="Image Link"
          onChange={(e) => handleChange(e)}
        />
        <br />
        {/* ratings */}
        <input
          value={form.ratings}
          type="text"
          id="ratings"
          placeholder="Ratings"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input type="submit" value={"Add Product"} />
      </form>
    </div>
  );
};
