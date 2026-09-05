import React from "react";
import { auth, signIn, signOut } from "@/auth";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const session = await auth();

  // Membungkus NextAuth actions ke dalam Server Actions eksplisit
  // agar dapat diteruskan ke Client Component dengan aman.
  const handleSignIn = async () => {
    "use server";
    await signIn("github");
  };

  const handleSignOut = async () => {
    "use server";
    await signOut();
  };

  return (
    <NavbarClient 
      user={session?.user || null} 
      onSignIn={handleSignIn} 
      onSignOut={handleSignOut} 
    />
  );
}
