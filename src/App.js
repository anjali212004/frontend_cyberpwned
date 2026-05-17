// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/Herosection";
// import FeatureCards from "./components/FeatureCards";
// import Pricing from "./components/Pricing";
// // import FeatureSection from "./components/FeatureSection";
// import ContactForm from "./components/ContactForm";
// import PrivacyPolicy from "./components/PrivacyPolicy"; // Import Privacy Policy page
// import BreachCard from "./components/BreachCards";
// import About from "./components/About";
// import FAQ from "./components/Faq";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Footer from "./components/Footer";
// import Services from "./components/Services";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<><HeroSection />
//           <Services/>
//         <Pricing/>

//         </>} />



//         <Route path="/features" element={<FeatureCards />} />
//         {/* <Route path="/pricing" element={<Pricing />} /> */}
//         <Route path="/contact" element={<ContactForm />} />
//         <Route path="/privacy" element={<PrivacyPolicy />} />
//         <Route path="/breaches" element={<BreachCard />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/faq" element={<FAQ />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/pricing" element={<Pricing />} />
//         {/* <Route path="/features" element={<About />} /> */}

//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;

import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

// Public components
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import FeatureCards from "./components/FeatureCards";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import PrivacyPolicy from "./components/PrivacyPolicy";
import BreachCard from "./components/BreachCards";
import About from "./components/About";
import FAQ from "./components/Faq";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Services from "./components/Services";

// Admin components
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./components/AdminDashboard";
import Users from "./components/Users";
import BreachedEmails from "./components/BreachedEmails";
import SearchHistory from "./components/SearchHistory";
import AdminSettings from "./components/AdminSettings";

function App() {
  // State to track if user is logged in and their role
  // const [auth, setAuth] = useState({
  //   isLoggedIn: false,
  //   role: null, // 'admin' or 'user'
  //   loading: true
  // });

  // Simulate checking user auth status on app load
  // useEffect(() => {
  // In a real app, you would check localStorage, cookies, or make an API call
  // This is just for demonstration
  // const checkAuthStatus = () => {
  // Check if user is logged in from localStorage or session
  //   const userInfo = localStorage.getItem('userInfo');
  //   if (userInfo) {
  //     const user = JSON.parse(userInfo);
  //     setAuth({
  //       isLoggedIn: true,
  //       role: user.role,
  //       loading: false
  //     });
  //   } else {
  //     setAuth({
  //       isLoggedIn: false,
  //       role: null,
  //       loading: false
  //     });
  //   }
  // };

  // Simulate async auth check
  //   setTimeout(checkAuthStatus, 500);
  // }, []);

  // Protected route component for admin routes
  // const AdminRoute = ({ children }) => {
  //   if (auth.loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (!auth.isLoggedIn || auth.role !== 'admin') {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };

  // // Protected route component for user routes
  // const UserRoute = ({ children }) => {
  //   if (auth.loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (!auth.isLoggedIn) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };
  console.log(process.env.REACT_APP_BASE_URL);


  return (
    <HashRouter>
      {/* Only show navbar on non-admin routes */}
      {/* {(!auth.isLoggedIn || auth.role !== 'admin') && <Navbar />} */}
      <Navbar />
      
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <HeroSection />
              <Services />
              <Pricing />
            </>
          } />
          <Route path="/features" element={<FeatureCards />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/breaches" element={<BreachCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Admin Routes - Nested under /admin path with layout */}
          <Route
            path="/admin"
            element={
              // <AdminRoute>
              <AdminLayout />
              // </AdminRoute>
            }
          >
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="breached-emails" element={<BreachedEmails />} />
            <Route path="search-history" element={<SearchHistory />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Catch-all redirect to home */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
        <Footer />
      

      {/* Only show footer on non-admin routes */}
      {/* {(!auth.isLoggedIn || auth.role !== 'admin') && <Footer />} */}
    </HashRouter>
  );
}

export default App;