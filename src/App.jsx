import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/app-layout"
import LandingPage from "./pages/landing"
import Onboarding from "./pages/onboarding"
import JobListing from "./pages/job-listing"
import JobPage from "./pages/job"
import PostJob from "./pages/post-job"
import SavedJobs from "./pages/saved-job"
import MyJobs from "./pages/my-job"
import { ThemeProvider } from "./components/theme-provider"
import ProtectedRoute from "./components/protected-route"

import "./App.css";
// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: '/',
//         element: <LandingPage />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route path='' element={<LandingPage />} />
      <Route path='onboarding' element={<ProtectedRoute> <Onboarding /> </ProtectedRoute>} />
      <Route path='jobs' element={<ProtectedRoute> <JobListing /> </ProtectedRoute>} />
      <Route path='job/:id' element={<ProtectedRoute> <JobPage /> </ProtectedRoute>} />
      <Route path='post-job' element={<ProtectedRoute> <PostJob /> </ProtectedRoute>} />
      <Route path='saved-jobs' element={<ProtectedRoute> <SavedJobs /> </ProtectedRoute>} />
      <Route path='my-jobs' element={<ProtectedRoute> <MyJobs /> </ProtectedRoute>} />
    </Route>
  )
)

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
