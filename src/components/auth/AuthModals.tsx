
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignInForm } from "./SignInForm";
import { RegisterForm } from "./RegisterForm";

export function AuthModals() {
  const [signInOpen, setSignInOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);

  // Close the current dialog and open the other one
  const switchToSignIn = () => {
    setRegisterOpen(false);
    setTimeout(() => setSignInOpen(true), 100);
  };

  const switchToRegister = () => {
    setSignInOpen(false);
    setTimeout(() => setRegisterOpen(true), 100);
  };

  return (
    <>
      <Dialog open={signInOpen} onOpenChange={setSignInOpen}>
        <DialogTrigger id="signin-trigger" className="hidden">
          Open Sign In
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-6">
          <SignInForm onSuccess={() => setSignInOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
        <DialogTrigger id="register-trigger" className="hidden">
          Open Register
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px] p-6">
          <RegisterForm onSuccess={() => setRegisterOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* This exposes the functions to be called from other components */}
      <div className="hidden">
        <button id="open-signin" onClick={() => setSignInOpen(true)}>Sign In</button>
        <button id="open-register" onClick={() => setRegisterOpen(true)}>Register</button>
      </div>
    </>
  );
}
