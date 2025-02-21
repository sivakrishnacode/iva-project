import AuthLayout from "@/pages/auth";
import { LoginForm } from "@/pages/auth/components/login-form";
import { SignUpForm } from "@/pages/auth/components/sign-up-form";
import { Route, Routes } from "react-router";

export default function Router() {
  return (
    <Routes>
      <Route index element={<h1>home</h1>} />
      <Route path="about" element={<>about</>} />

      {/* <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<>register</>} /> */}

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
}
