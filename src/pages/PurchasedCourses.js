import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const PurchasedCourses = () => {
  const { user_data } = useContext(useAuth);
  const userId = user_data?.userId || ""; // Retrieve the userId from AuthContext
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      if (!userId) {
        console.error("User ID is not available. Cannot fetch courses.");
        setError("User is not logged in. Please log in to view your courses.");
        return;
      }

      setLoading(true);
      setError(""); // Reset error before fetching
      try {
        console.log("Fetching purchased courses for User ID:", userId);
        const response = await axios.get(
          `https://your-backend-url/api/purchased-courses/${userId}`
        );
        console.log("API Response:", response.data);
        setPurchasedCourses(response.data);
      } catch (err) {
        console.error("Error fetching purchased courses:", err);
        setError(
          err.response?.data?.message || "Failed to load purchased courses."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedCourses();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>Purchased Courses</h1>
      {purchasedCourses.length > 0 ? (
        <ul>
          {purchasedCourses.map((course) => (
            <li key={course._id}>
              {course.title} {/* Display course title */}
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not purchased any courses yet.</p>
      )}
    </div>
  );
};

export default PurchasedCourses;
