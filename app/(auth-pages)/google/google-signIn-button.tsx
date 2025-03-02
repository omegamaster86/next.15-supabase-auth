"use client";

import { SignInWithGoogle } from "../google/index";

export default function GoogleSignInButton() {
  const handleClick = async () => {
    await SignInWithGoogle();
  };

  return (
    <button onClick={handleClick}>
      Sign in with Google
    </button>
  );
}
