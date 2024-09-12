import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/auth/categories")
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