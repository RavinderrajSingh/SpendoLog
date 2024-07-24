import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Root from "./Root"
import Reports from "./Components/Reports/Reports";
import Dashbard from "./Components/DashBoard/Dashbard";

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}> // root page
            <Route path='/' element={<Dashbard />} />
            <Route path='/Reports' element={<Reports />} />
        </Route>
    )
)