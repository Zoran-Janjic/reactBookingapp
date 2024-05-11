import React from "react";
import AdminDashboardPage from "./AdminDashboardPage";
import StudentDashboardPage from "./StudentDashboardPage";
import InstructorDashboardPage from "./InstructorDashboardPage";
const user = { name: null, email: "example@example.com", role: 2 };

export default function DashboardPage() {
  return (
    <div>
      <h1>DashboardPage for role : ${user.role}</h1>
      {user.role === 0 ? (
        <h1>
          <AdminDashboardPage />
        </h1>
      ) : user.role === 1 ? (
        <InstructorDashboardPage />
      ) : (
        <StudentDashboardPage />
      )}
    </div>
  );
}
