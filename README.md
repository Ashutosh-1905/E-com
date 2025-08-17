# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


--------------------------------------------------------------------------------------------------------
# Step-1
# Tailwind set-up


--------------------------------------------------------------------------------------------------------

# Step-2
# folder Structure


--------------------------------------------------------------------------------------------------------

# Step-3
# Dependencies
installed dependencies like react-router, redux, @reduxjs/toolkit, axios, etc.

--------------------------------------------------------------------------------------------------------

# Step-4

# create a Store
# Store.jsx file is a central state management.
A store is like a "big container" that holds the global state of your React app.

It allows React components to read the state and dispatch actions to update it.

Without a store, Redux cannot work — it’s the heart of the state management system.

# Why do we use store.jsx in Redux Toolkit?
When using Redux Toolkit (RTK), we create the store in one separate file so that:

1. Centralized State Management → All slices (like userSlice, cartSlice, authSlice) are combined in one store.

2. Clean Code Structure → Instead of mixing store logic with components, we keep it separate.

3. Reusability → Store can be imported anywhere (like in index.jsx to wrap <Provider>).

4. Configuration → Redux Toolkit gives us configureStore(), which automatically:
    . Combines reducers.
    . Adds good default middlewares (like Redux Thunk).
    . Enables Redux DevTools extension.

--------------------------------------------------------------------------------------------------------

# Step -5 : main.jsx

Entry point for React.

Purpose:
Import App.jsx
Wrap with Redux Store Provider (Provider store={store})

--------------------------------------------------------------------------------------------------------

# step -6 : AppRouter.jsx:
Setup Data Routing with createBrowserRouter

--------------------------------------------------------------------------------------------------------

# Step-7 : Layouts Structure
Each layout (layouts/) defines a common UI wrapper for a group of pages.

Outlet → placeholder where child route renders.
AuthLayout may only render <Outlet /> + simple header.
AdminLayout can include an admin sidebar + <Outlet />.

--------------------------------------------------------------------------------------------------------

# Step-8 : Protected Route 
ProtectedRoute → ensures only authorized users see certain routes.

--------------------------------------------------------------------------------------------------------

# STEP - 9 State Management (Redux Slices for Auth & Cart)

features/ folder (AuthSlice.jsx, CartSlice.jsx) manages global state for authentication and shopping cart.

# What Redux Toolkit Does

configureStore (already in store/Store.jsx) combines all slices.
Each slice manages a part of the state (auth, cart).

Components can:
# dispatch actions → change state
# useSelector → read state


# step - 10 
Import authReducer in store store.jsx
auth:authReducer,

# Step -11  Api Layer

