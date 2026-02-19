import { Routes, Route } from "react-router-dom";

// AUTH
import Login from "./Pages/auth/login.jsx";

// STUDENT
import StudentDashboard from "./Pages/student/StudentDashboard.jsx";
import SubmitAssignment from "./Pages/student/SubmitAssignment.jsx";
import SubmissionStatus from "./Pages/student/submissionStatus.jsx";
import Feedback from "./Pages/student/feedback.jsx";

// INSTRUCTOR
import InstructorDashboard from "./Pages/instructor/instructorDashboard.jsx";

function App() {
  return (
    <Routes>
      {/* AUTH */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* STUDENT ROUTES */}
      <Route path="/student/StudentDashboard" element={<StudentDashboard />} />
      <Route
        path="/student/SubmitAssignment/:assignmentId"
        element={<SubmitAssignment />}
      />
      <Route
        path="/student/submissionStatus"
        element={<SubmissionStatus />}
      />
      <Route path="/student/feedback/:id" element={<Feedback />} />

      {/* INSTRUCTOR ROUTES */}
      <Route
        path="/instructor/dashboard"
        element={<InstructorDashboard />}
      />
    </Routes>
  );
}

export default App;
