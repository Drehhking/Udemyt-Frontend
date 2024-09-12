import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { toast, ToastContainer } from "react-toastify";

const CoursesAdmin = () => {
    const [course, setCourse] = useState({
        courseCategory: '',
        image: '',
        video: '',
        courseName: '',
        description: '',
        creator: '',
        actualPrice: '',
        discountedPrice: '',
        what_you_will_learn: '',
        what_you_will_learn2: '',
        what_you_will_learn3: '',
        what_you_will_learn4: '',
        what_you_will_learn5: '',
        content: '',
        content2: '',
        content3: '',
        content4: '',
        content5: '',
        ratings: '',
        students: '',
        stars: ''
    });

    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const postCourse = async () => {
        if (!course.courseCategory || !course.image || !course.video || !course.courseName || !course.description || !course.creator || !course.actualPrice || !course.discountedPrice || !course.what_you_will_learn || !course.what_you_will_learn2 || !course.what_you_will_learn3 || !course.what_you_will_learn4 || !course.what_you_will_learn5 || !course.content || !course.content2 || !course.content3 || !course.content4 || !course.content5 || !course.ratings || !course.students) {
            toast.error('All fields are mandatory');
            return;
        }

        setLoading(true);

        try {
            const res = await axios.post('https://udemybackend-55dq.onrender.com/api/admin/uploadCourses', course);
            if (res.data.status === 'ok') {
                toast.success('Course posted successfully');
                // Clear form after successful submission
                setCourse({
                    courseCategory: '',
                    image: '',
                    video: '',
                    courseName: '',
                    description: '',
                    creator: '',
                    actualPrice: '',
                    discountedPrice: '',
                    what_you_will_learn: '',
                    what_you_will_learn2: '',
                    what_you_will_learn3: '',
                    what_you_will_learn4: '',
                    what_you_will_learn5: '',
                    content: '',
                    content2: '',
                    content3: '',
                    content4: '',
                    content5: '',
                    ratings: '',
                    students: '',
                    stars: ''
                });
                setImageUrl('');
                setVideoUrl('');
            } else {
                toast.error('Failed to post course');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (!file) return;

        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const validVideoTypes = ['video/mp4', 'video/avi', 'video/mkv'];

        if (type === 'image' && !validImageTypes.includes(file.type)) {
            toast.error('Invalid image file type');
            return;
        } else if (type === 'video' && !validVideoTypes.includes(file.type)) {
            toast.error('Invalid video file type');
            return;
        }


        const reader = new FileReader();
        reader.onload = (e) => {
            const fileUrl = e.target.result;
            setCourse((prevCourse) => ({
                ...prevCourse,
                [type]: fileUrl
            }));

            if (type === 'image') {
                setImageUrl(fileUrl);
            } else if (type === 'video') {
                setVideoUrl(fileUrl);
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <Courses>
            <ToastContainer />
            <div className="p-4">
                <div className="category fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>CATEGORY</h1>
                    <select onChange={(e) => setCourse({ ...course, courseCategory: e.target.value })} id="select">
                        <option value="">Select Course</option>
                        <option value="Python">Python</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Aws">AWS</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>
                <hr className="mt-5" />

                <div className="fw-bold d-flex flex-column align-items-center justify-content-center mt-4">
                    <h1>COURSE IMAGE</h1>
                    {imageUrl && <img className="image" src={imageUrl} alt="Course" />}
                    <input type="file" onChange={(e) => handleFileChange(e, 'image')} />
                </div>
                <hr className="mt-5" />

                <div className="fw-bold d-flex flex-column align-items-center justify-content-center mt-4">
                    <h1>COURSE VIDEO</h1>
                    {videoUrl && <video className="image1" src={videoUrl} controls />}
                    <input type="file" onChange={(e) => handleFileChange(e, 'video')} />
                </div>
                <hr className="mt-5" />

                <div className="course-name fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>COURSE NAME</h1>
                    <input type="text" value={course.courseName} onChange={(e) => setCourse({ ...course, courseName: e.target.value })} />
                </div>
                <hr className="mt-5" />

                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>DESCRIPTION</h1>
                    <input type="text" value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                </div>
                <hr className="mt-5" />

                <div className="description1 fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>CREATOR</h1>
                    <input type="text" value={course.creator} onChange={(e) => setCourse({ ...course, creator: e.target.value })} />
                </div>
                <hr className="mt-5" />

                <div className="description1 fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>ACTUAL PRICE</h1>
                    <input type="number" value={course.actualPrice} onChange={(e) => setCourse({ ...course, actualPrice: e.target.value })} />
                </div>
                <hr className="mt-5" />

                <div className="description1 fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>DISCOUNTED PRICE</h1>
                    <input type="number" value={course.discountedPrice} onChange={(e) => setCourse({ ...course, discountedPrice: e.target.value })} />
                </div>
                <hr className="mt-5" />

                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>WHAT YOU'LL LEARN</h1>
                    <input type="text" value={course.what_you_will_learn} onChange={(e) => setCourse({ ...course, what_you_will_learn: e.target.value })} />
                </div>
                <hr className="mt-5" />

                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>WHAT YOU'LL LEARN</h1>
                    <input type="text" value={course.what_you_will_learn2} onChange={(e) => setCourse({ ...course, what_you_will_learn2: e.target.value })} />
                </div>
                <hr className="mt-5" />
                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>WHAT YOU'LL LEARN</h1>
                    <input type="text" value={course.what_you_will_learn3} onChange={(e) => setCourse({ ...course, what_you_will_learn3: e.target.value })} />
                </div>
                <hr className="mt-5" />
                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>WHAT YOU'LL LEARN</h1>
                    <input type="text" value={course.what_you_will_learn4} onChange={(e) => setCourse({ ...course, what_you_will_learn4: e.target.value })} />
                </div>
                <hr className="mt-5" />
                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>WHAT YOU'LL LEARN</h1>
                    <input type="text" value={course.what_you_will_learn5} onChange={(e) => setCourse({ ...course, what_you_will_learn5: e.target.value })} />
                </div>
                <hr className="mt-5" />

                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>CONTENT</h1>
                    <input type="text" value={course.content} onChange={(e) => setCourse({ ...course, content: e.target.value })} />
                </div>
                <hr className="mt-5" />
                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>CONTENT</h1>
                    <input type="text" value={course.content2} onChange={(e) => setCourse({ ...course, content2: e.target.value })} />
                </div>
                <hr className="mt-5" />
                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>CONTENT</h1>
                    <input type="text" value={course.content3} onChange={(e) => setCourse({ ...course, content3: e.target.value })} />
                </div>
                <hr className="mt-5" />
                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>CONTENT</h1>
                    <input type="text" value={course.content4} onChange={(e) => setCourse({ ...course, content4: e.target.value })} />
                </div>
                <hr className="mt-5" />
                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>CONTENT</h1>
                    <input type="text" value={course.content5} onChange={(e) => setCourse({ ...course, content5: e.target.value })} />
                </div>
                <hr className="mt-5" />

                <hr className="mt-5" />
                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>RATINGS</h1>
                    <input type="text" value={course.ratings} onChange={(e) => setCourse({ ...course, ratings: e.target.value })} />
                </div>
                <hr className="mt-5" />

                <hr className="mt-5" />
                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>STUDENTS</h1>
                    <input type="text" value={course.students} onChange={(e) => setCourse({ ...course, students: e.target.value })} />
                </div>
                <hr className="mt-5" />

                <div className="description fw-bold d-flex flex-column align-items-center justify-content-center mt-2">
                    <h1>STARS</h1>
                    <input type="text" value={course.stars} onChange={(e) => setCourse({ ...course, stars: e.target.value })} />
                </div>

                <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                    <button onClick={postCourse} disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Course'}
                    </button>
                </div>
            </div>
        </Courses>
    );
};

const Courses = styled.div`
  #select {
    border: 1px solid black;
    padding: 10px;
    font-size: 16px;
    width: 60%;
  }
  .image, .image1 {
    max-width: 40%;
    height: auto;
    border: 3px solid black;
    padding: 20px;
    margin-top: 10px;
  }
  .course-name input, .description input, .description1 input {
    height: 50px;
    width: 60%;
    padding: 10px;
    outline: 0;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 16px;
  }
  button {
    border: 2px solid black;
    background-color: purple;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }
`;

export default CoursesAdmin;
