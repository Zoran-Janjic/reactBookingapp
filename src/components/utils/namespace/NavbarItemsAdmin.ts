namespace NavbarNavigationItemsAdmin {
  export enum Items {
    Home = "admin-dashboard",
    AddNewUser = "add-user",
    SearchStudent = "search-user",
    AdminSettings = "settings",
    AllBookings = "all-bookings",
  }

  export const Data = {
    [Items.Home]: {
      id: "admin-dashboard",
      title: "Dashboard",
      route: "/dashboard",
    },
    [Items.AddNewUser]: {
      id: "addNewUser",
      title: "Add new user",
      route: "/add-new-user",
    },
    [Items.SearchStudent]: {
      id: "searchStudent",
      title: "Search Students",
      route: "/search-user",
    },
    [Items.AdminSettings]: {
      id: "settings",
      title: "Settings",
      route: "/settings",
    },
    [Items.AllBookings]: {
      id: "allBookings",
      title: "All Bookings",
      route: "/all-bookings",
    },
  };
}
