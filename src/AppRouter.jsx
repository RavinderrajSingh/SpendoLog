import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Root from "./Root"
import About from "./Components/About/About";
import Dashbard from "./Components/DashBoard/Dashbard";

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}> // root page
            <Route path='/' element={<Dashbard />} />
            <Route path='/about' element={<About />} />
        </Route>
    )
)