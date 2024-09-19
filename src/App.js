
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main1 from './components/Main1';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard';
// import Nav from './components/Nav';
// import Home from './pages/HomePage'
import Sidebar from './components/Sidebar'
import { useAuth } from './contexts/AuthContext';
import Signup from "./Admin/Signup"
import Loginin from "./Admin/LoginIn"
import 'bootstrap/dist/css/bootstrap.min.css'
// import { useSidebarContext } from './contexts/Sidebar_context';
import { Home, CoursesPage, SingleCoursePage, Cartpage } from "./pages"
import ProfilePage from './pages/ProfilePage';
import Admindas from './Admin/adminDashboard';
import Students from './Admin/students';
import TermsPage from './Admin/TermsPage';
import CoursesAdmin from './Admin/coursesAdmin';
import Courses from './Admin/coursesDepartment';
import Postedcourse from './Admin/postedCourses'
import CourseDetails from './components/courseDetails'
// import AuthGuard from './Auth/AuthGuard'
import CoursesByCategory from './components/CoursesByCategory';
import CertificatePage from './components/Certificate';
import CertificateDisplay from './components/certificateDisplay'
import CategoryPage from './components/Category'
// import AdminCourse from './Admin/adminCoursedetails'
const App = () => {
  const { isAuthenticated } = useAuth()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main1 />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/courses/:id' element={<SingleCoursePage />} />
          <Route path='/category/:category' element={<CoursesPage />} />
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Loginin' element={<Loginin />} />
          <Route path='/admin$3re' element={<Admindas />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/student@232' element={<Students />} />
          <Route path='/terms$45' element={<TermsPage />} />
          <Route path='/courses$105' element={<CoursesAdmin />} />
          <Route path='/courses001' element={<Courses />} />
          <Route path='/postedCourses20$' element={<Postedcourse />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          {/* <Route path="/admin/:id" element={<AdminCourse />} /> */}
          <Route path="/categories/:categoryId/courses" element={<CoursesByCategory />} />
          <Route path="/generateCertificate" element={<CertificatePage />} />
          <Route path="/certificate/:categoryId" element={<CertificateDisplay />} />
          <Route path="/coursean/categoryList" element={<CategoryPage/>} />
        </Routes>
      </Router>
      <Sidebar />
    </div>

  );
}

export default App;
