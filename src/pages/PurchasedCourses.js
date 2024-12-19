import React, { useEffect, useState } from "react";
import axios from "axios";

const PurchasedCourses = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]); // Purchased courses state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      try {
        setLoading(true); // Set loading before fetching
        setError(""); // Reset any existing error

        // Retrieve user data from localStorage
        const user_data = JSON.parse(localStorage.getItem("user_data"));
        const userId = user_data?.userId;

        if (!userId) {
          setError("User is not logged in. Please log in to view your courses.");
          console.error("User ID is missing from localStorage.");
          return;
        }

        console.log("Fetching purchased courses for User ID:", userId);

        // Make API call to fetch purchased courses
        const response = await axios.get(
          `https://udemybackend-55dq.onrender.com/api/admin/purchased-courses/${userId}`
        );

        // Debugging: Log the API response
        console.log("API Response:", response.data);

        setPurchasedCourses(response.data || []); // Set courses or fallback to an empty array
      } catch (err) {
        console.error("Error fetching purchased courses:", err);
        setError(
          err.response?.data?.message || "Failed to load purchased courses."
        );
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPurchasedCourses();
  }, []); // Run only on component mount

  // Render loading state
  if (loading) {
    return <p>Loading purchased courses...</p>;
  }

  // Render error state
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  // Render purchased courses or a message if none are found
  return (
    <div>
      <h1>Purchased Courses</h1>
      {purchasedCourses.length > 0 ? (
        <ul>
          {purchasedCourses.map((course) => (
            <li key={course._id}>
              <strong>{course.title}</strong> {/* Display course title */}
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
