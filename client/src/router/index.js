
import {
  createBrowserRouter,
  // RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

import LoginAdminPage from "../views/LoginAdminPage";

import PrivateRoute from "../components/routercomponents/PrivateRouter";
import DashboardPage from "../views/DashboardPage";
import CategoryPage from "../views/CategoryPage";
import IngredientPage from "../views/IngredientPage";
import RegisterWrappedPage from "../views/RegisterWrappedPage";
import FormAddFoodItem from "../components/formcomponents/formfooditem/FormAddFoodItem";
import FormEditFoodItem from "../components/formcomponents/formfooditem/FormEditFoodItem";
import FormAddFoodCategory from "../components/formcomponents/formcategory/FormAddFoodCategory";
import FormEditFoodCategory from "../components/formcomponents/formcategory/FormEditFoodCategory";
import FormAddFoodIngredient from "../components/formcomponents/formingredient/FormAddFoodIngredients";
import FormEditFoodIngredient from "../components/formcomponents/formingredient/FormEditFoodIngredient";
import PageLayout from "../components/PageLayout";



const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <PageLayout />,
        children: [
          {
            path: "/",
            element: <DashboardPage />,
          },
          {
            path: "categories",
            element: <CategoryPage />,
          },
          {
            path: "ingredients",
            element: <IngredientPage />,
          },
          {
            path: "register",
            element: <RegisterWrappedPage />,
          },
          {
            path: "addfooditem",
            element: <FormAddFoodItem />,
          },
          {
            path: "editfooditem/:id",
            element: <FormEditFoodItem />,
          },
          {
            path: "categories/add",
            element: <FormAddFoodCategory />,
          },
          {
            path: "categories/edit/:id",
            element: <FormEditFoodCategory />,
          },
          {
            path: "ingredients/add",
            element: <FormAddFoodIngredient />,
          },
          // {
          //   path: "ingredients/edit",
          //   element: <FormEditFoodIngredient />,
          // },
        ]
      },
    ]
  },
  // login dlu bang
  {
    path: "login",
    element: <LoginAdminPage />,
  },
]);


export default router;