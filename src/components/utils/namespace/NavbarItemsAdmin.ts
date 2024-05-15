/**
 * @namespace NavbarNavigationItemsAdmin
 * @description This namespace contains the enum and data for the admin navigation items.
 */
namespace NavbarItemsAdmin {
  /**
   * @enum Items
   * @description Enum representing the different admin navigation items.
   * @readonly
   * @enum {string}
   */
  export enum Items {
    /**
     * @description Represents the admin dashboard navigation item.
     */
    Home = "admin-dashboard",

    /**
     * @description Represents the add new user navigation item.
     */
    AddNewUser = "add-user",

    /**
     * @description Represents the search student navigation item.
     */
    SearchStudent = "search-user",

    /**
     * @description Represents the admin settings navigation item.
     */
    AdminSettings = "settings",

    /**
     * @description Represents the all bookings navigation item.
     */
    AllBookings = "all-bookings",
  }

  /**
   * @constant Data
   * @description Object containing data for each admin navigation item.
   * @readonly
   * @type {Record<Items, { id: string; title: string; route: string; }>}
   */
  export const Data: Record<
    Items,
    { id: string; title: string; route: string }
  > = {
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

export { NavbarItemsAdmin };
