namespace NavbarItemsStudentNamespace {
  export enum Items {
    Home = "student-dashboard",
    StudentBookClass = "book-class",
    StudentSettings = "settings",
    StudentBookedClasses = "booked-classes",
  }

  export const Data = {
    [Items.Home]: {
      id: "student-dashboard",
      title: "Dashboard",
      route: "/student-dashboard",
    },
    [Items.StudentBookClass]: {
      id: "student-book-class",
      title: "Book Class",
      route: "/student-book-class",
    },
    [Items.StudentSettings]: {
      id: "student-settings",
      title: "Settings",
      route: "/settings",
    },
    [Items.StudentBookedClasses]: {
      id: "student-booked-classes",
      title: "Booked Classes",
      route: "booked-classes",
    },
  };
}
