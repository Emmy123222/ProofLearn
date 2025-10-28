import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import InstructorDashboard from './pages/InstructorDashboard'
import StudentDashboard from './pages/StudentDashboard'
import Verify from './pages/Verify'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-pl-bg text-pl-text dark:bg-pld-bg dark:text-pld-text">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
