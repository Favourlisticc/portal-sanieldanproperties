
import './App.css';
import { Routes, Route } from "react-router-dom";
import Loginpage from "./Auth/login"
import Signup from "./Auth/signup"
import Dashboard from './dashboard';
import AdminLogin from "./Admin/Auth/login"


import { useContext } from 'react';
import { ColorContext } from './Admin/dashboard/ColorContext/darkContext';
import Home from './Admin/dashboard/Components/Home/Home';
import Orders from './Admin/dashboard/Components/Orders/Orders';
import AddNew from './Admin/dashboard/Pages/AddNew/AddNew';
import BlogDetail from './Admin/dashboard/Pages/BlogDetail/BlogDetail';
import Blogs from './Admin/dashboard/Pages/Blogs/Blogs';
import Detail from './Admin/dashboard/Pages/Detail/Detail';
import Lists from './Admin/dashboard/Pages/UserLists/UserLists.jsx';
import './app.scss';




const userInpDetails = [
  {
      id: 2,
      name: 'username',
      lable: 'Username',
      type: 'text',
      placeholder: 'John23',
      required: true,
      pattern: '^[A-Za-z0-9]{3,12}$',
      errorMsg: 'Username should be 3-12 characters & should not include any special character!',
  },
  {
      id: 3,
      name: 'name',
      lable: 'Name',
      type: 'text',
      placeholder: 'John Smith',
      required: true,
      pattern: '^[A-Za-z]{1,20}$',
      errorMsg: 'Name is required!',
  },
  {
      id: 4,
      name: 'email',
      lable: 'Email',
      type: 'email',
      placeholder: 'example@email.com',
      required: true,
      errorMsg: 'Enter a valid email!',
  },
  {
      id: 5,
      name: 'password',
      lable: 'Password',
      type: 'password',
      placeholder: 'Password',
      required: true,
      pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{6,20}$',
      errorMsg:
          'Password should be 6-20 characters and include at last 1 num, 1 letter, 1 special character!',
  },
  {
      id: 6,
      name: 'address',
      lable: 'Address',
      type: 'text',
      placeholder: 'Address',
      required: true,
      errorMsg: 'Address is required!',
  },
];
const productInpDetails = [
  {
      id: 2,
      name: 'title',
      lable: 'Title',
      type: 'text',
      placeholder: 'Product title',
      required: true,
      errorMsg: 'Title is required!',
  },
  {
      id: 3,
      name: 'description',
      lable: 'Description',
      type: 'text',
      placeholder: 'Product description',
      required: true,
      errorMsg: 'Description is required!',
  },
  {
      id: 4,
      name: 'category',
      lable: 'Category',
      type: 'text',
      placeholder: 'Product category',
      required: true,
      errorMsg: 'Category is required!',
  },
  {
      id: 5,
      name: 'price',
      lable: 'Price',
      type: 'number',
      placeholder: 'Product price',
      required: true,
      errorMsg: 'Price is required!',
  },
  {
      id: 6,
      name: 'stock',
      lable: 'In Stock',
      type: 'text',
      placeholder: 'In Stock',
      required: true,
      errorMsg: 'This field is required!',
  },
];
const blogInputs = [
  {
      id: 1,
      name: 'title',
      lable: 'Title',
      type: 'text',
      placeholder: 'Blog title',
      required: true,
      errorMsg: 'Title is required!',
  },
  {
      id: 2,
      name: 'description',
      lable: 'Description',
      type: 'text',
      placeholder: 'Blog description',
      required: true,
      errorMsg: 'Description is required!',
  },
  {
      id: 3,
      name: 'tags',
      lable: 'Tags',
      type: 'text',
      placeholder: 'Travel, Communication',
      required: true,
      errorMsg: 'Tag is required!',
  },
];

function App() {

  const { darkMode } = useContext(ColorContext);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <Routes>
        <Route path="/" element={<Loginpage />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="dashboard/*" element={<Dashboard />} />

        <Route path="/admin/auth/login" element={<AdminLogin />} />


        <Route path="/admin/dashboard" element={<Home />} />
        <Route path="/admin/dashboard/users" element={<Lists type="user" />}/>

<Route path="/admin/dashboard/users/:userId" element={<Detail />} />

<Route path="/admin/dashboard/users/addnew" element={ <AddNew inputs={userInpDetails} titlee="Add New User" type="USER"/>}/>


<Route path="/admin/dashboard/orders" element={<Orders />} />


<Route path="/admin/dashboard/products" element={<Lists type="product" />} />

<Route path="/admin/dashboard/products/:productId" element={<Detail />} />

<Route path="/admin/dashboard/products/addnew" element={<AddNew inputs={productInpDetails} titlee="Add New Product"    type="PRODUCT"  />    }/>


<Route path="/admin/dashboard/blogs" element={<Blogs type="blog" />} />

<Route path="/admin/dashboard/:blogId" element={<BlogDetail />} />

<Route path="/admin/dashboard/blogs/addnew" element={ <AddNew inputs={blogInputs} titlee="Add New Blog" type="BLOG"/>} />




        {/* Add more routes as needed */}
      </Routes>


      {/* <Route path="/admin/dashboard" element={<Home />} />


{/* nested routes *
<Route path="/admin/dashboard/users" element={<Lists type="user" />}/>

<Route path="/admin/dashboard/users/:userId" element={<Detail />} />

<Route path="/admin/dashboard/users/addnew" element={ <AddNew inputs={userInpDetails} titlee="Add New User" type="USER"/>}/>


<Route path="/admin/dashboard/orders" element={<Orders />} />


<Route path="/admin/dashboard/products" element={<Lists type="product" />} />

<Route path="/admin/dashboard/products/:productId" element={<Detail />} />

<Route path="/admin/dashboard/products/addnew" element={<AddNew inputs={productInpDetails} titlee="Add New Product"    type="PRODUCT"  />    }/>


<Route path="/admin/dashboard/blogs" element={<Blogs type="blog" />} />

<Route path="/admin/dashboard/:blogId" element={<BlogDetail />} />

<Route path="addnew" element={ <AddNew inputs={blogInputs} titlee="Add New Blog" type="BLOG" />   }/> */}


    </div>
  );
}

export default App;
