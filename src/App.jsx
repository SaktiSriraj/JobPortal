import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/app-layout"
import LandingPage from "./pages/landing"
import Onboarding from "./pages/onboarding"
import JobListing from "./pages/job-listing"
import JobPage from "./pages/job"
import PostJob from "./pages/post-job"
import SavedJobs from "./pages/save-job"
import MyJobs from "./pages/my-job"

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
      <Route path='onboarding' element={<Onboarding />} />
      <Route path='jobs' element={<JobListing />} />
      <Route path='job/:id' element={<JobPage />} />
      <Route path='post-job' element={<PostJob />} />
      <Route path='saved-jobs' element={<SavedJobs />} />
      <Route path='my-jobs' element={<MyJobs />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}>
      Hello World
    </RouterProvider>
  )
}

export default App
