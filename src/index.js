import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/AuthContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { SidebarProvider } from './contexts/Sidebar_context.js';
import { CoursesProvider } from './contexts/courses_context.js';
import { CartProvider } from './contexts/Cart_context.js';
// import {SidebarProfileContext} from "./contexts/profileSidebar_context"

const root = ReactDOM.createRoot(document.getElementById('root'))
if (!root) {
  throw new Error('Failed to find element with id "root"');
}
root.render(
  <AuthProvider>
    <SidebarProvider>
      <CoursesProvider>
        <CartProvider>
            <App />
        </CartProvider>
      </CoursesProvider>
    </SidebarProvider>
  </AuthProvider>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVi tals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
