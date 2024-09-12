import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/auth/categories');
        setCategories(response.data.categories); // Set the categories from the response
        setLoading(false);
      } catch (err) {
        setError('Error fetching categories');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>All Categories</h1>
      <ul>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category}>
              <Link to={`/categories/${category}/courses`}>{category}</Link>
            </li>
          ))
        ) : (
          <li>No categories available.</li>
        )}
      </ul>
    </div>
  );
};

export default CategoryPage;
