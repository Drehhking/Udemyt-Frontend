import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://udemybackend-55dq.onrender.com/api/auth/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <Link to={`/categories/${category.name}`} key={category._id}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};


export default CategoryPage