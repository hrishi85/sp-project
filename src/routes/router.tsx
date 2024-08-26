import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import ProtectedRoutes from "../components/ProtectedRoutes"
import ErrorBoundary from "../components/ErrorBoundary"
import Root from "../pages/Root"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import NoMatch from "../pages/NoMatch"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="" element={<ErrorBoundary><Login /></ErrorBoundary>} index={true} />
    <Route path="dashboard" element={<ProtectedRoutes><ErrorBoundary><Dashboard /></ErrorBoundary></ProtectedRoutes>} />
    <Route path="dashboard/:id" element={<ProtectedRoutes><ErrorBoundary><Dashboard /></ErrorBoundary></ProtectedRoutes>} />
    <Route path="dashboard/assets/:id" element={<ProtectedRoutes><ErrorBoundary><Dashboard /></ErrorBoundary></ProtectedRoutes>} />
    <Route path="dashboard/uptime/:id" element={<ProtectedRoutes><ErrorBoundary><Dashboard /></ErrorBoundary></ProtectedRoutes>} />
    <Route path="dashboard/operation/:id" element={<ProtectedRoutes><ErrorBoundary><Dashboard /></ErrorBoundary></ProtectedRoutes>} />
    <Route path="dashboard/efficiency/:id" element={<ProtectedRoutes><ErrorBoundary><Dashboard /></ErrorBoundary></ProtectedRoutes>} />
    <Route path="dashboard/notifications/:id" element={<ProtectedRoutes><ErrorBoundary><Dashboard /></ErrorBoundary></ProtectedRoutes>} />
    <Route path="*" element={<NoMatch />} />
  </Route>
));

export default router;