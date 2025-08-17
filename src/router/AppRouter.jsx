import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../screens/authScreens/Login";
import Register from "../screens/authScreens/Register";
import MainLayout from "../layouts/MainLayout";
import HomeScreen from "../screens/mainScreens/HomeScreen";
import ProductDetailScreen from "../screens/mainScreens/ProductDetailScreen";
import CartScreen from "../screens/mainScreens/CartScreen";
import AdminLayout from "../layouts/AdminLayout";
import AdminHomeScreen from "../screens/adminScreens/AdminHomeScreen";
import AllProductsScreen from "../screens/adminScreens/AllProductsScreen";

const AppRouter = () => {
   const router = createBrowserRouter([
     {
       path: "/",
       element: <AuthLayout />,
       children: [
         {
           index: true,
           element: <Login />,
         },

         {
           path: "/register",
           element: <Register />,
         },
       ],
     },

     {
       path: "/main",
       element: <MainLayout />,
       children: [
         {
           index: true,
           element: <HomeScreen />,
         },
         {
           path: "product/:productId",
           element: <ProductDetailScreen />,
         },
         {
           path: "cart",
           element: <CartScreen />,
         },
       ],
     },
     {
       path: "/admin",
       element: <AdminLayout />,
       children: [
         {
           index: true,
           element: <AdminHomeScreen />,
         },
         {
           path: "all-products",
           element: <AllProductsScreen />,
         },
       ],
     },
   ]);
  return <RouterProvider router={router} />
}

export default AppRouter;