import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { ChildrenAsProps } from "types/types";
import NavbarComp from "../navbar/NavbarComp";

/**
 * A React component that acts as an authentication guard.
 * It renders its children only if the user is signed in,
 * otherwise, it redirects the user to the sign-in page.
 *
 * @param children - The React children to be rendered when the user is signed in.
 * @returns A React component that handles authentication and renders children or redirects.
 */
const AuthGuard = ({ children }: ChildrenAsProps) => (
  <>
    <SignedIn>
      <nav>
        <NavbarComp />
      </nav>
      {children}
    </SignedIn>
  </>
);

export default AuthGuard;
