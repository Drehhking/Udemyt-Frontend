import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const PurchasedCourses = () => {
  const { user_data } = useContext(useAuth);
  const userId = user_data?.userId || ""; // Retrieve the userId
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const response = await axios.get(
          `https://your-backend-url/api/purchased-courses/${userId}`
        );
        setPurchasedCourses(response.data);
      } catch (err) {
        console.error("Error fetching purchased courses:", err);
        setError("Failed to load purchased courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedCourses();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Purchased Courses</h1>
      {purchasedCourses.length > 0 ? (
        <ul>
          {purchasedCourses.map((course) => (
            <li key={course._id}>{course.title}</li>
          ))}
        </ul>
      ) : (
        <p>You have not purchased any courses yet.</p>
      )}
    </div>
  );
};

export default PurchasedCourses;
