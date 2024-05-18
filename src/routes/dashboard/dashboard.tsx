import React from "react";
import AdminDashboardPage from "./AdminDashboardPage";
import StudentDashboardPage from "./StudentDashboardPage";
import InstructorDashboardPage from "./InstructorDashboardPage";
import { SignOutButton, useClerk } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const { user } = useClerk();
  console.log(`User is: ${user}`);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a protected page.</p>
      <SignOutButton />
      <ul>
        <li>
          <Link to="/">Return to index</Link>
        </li>
        <li>
          <Link to="admin">Admin</Link>
        </li>
      </ul>
      {/* {user.role === 0 ? (
        <h1>
          <AdminDashboardPage />
        </h1>
      ) : user.role === 1 ? (
        <InstructorDashboardPage />
      ) : (
        <StudentDashboardPage />
      )} */}
    </div>
  );
}
