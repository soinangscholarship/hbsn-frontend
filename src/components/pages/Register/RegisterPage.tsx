import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../../auth/authApi"; 
import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    setSuccess("");

    if (password !== confirmPassword) {
      setErr("Passwords do not match!");
      return;
    }

    try {
      await register(username,email, password);
      setSuccess("Account created successfully!");
      setTimeout(() => {
        nav("/login");
      }, 1500);
    } catch {
      setErr("Registration failed! Username or Email might be taken.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-4 pt-28 pb-12 overflow-y-auto">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="h-12 px-4 rounded-xl w-full border border-gray-300 focus-visible:border-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 rounded-xl w-full border border-gray-300 focus-visible:border-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 px-4 rounded-xl w-full border border-gray-300 focus-visible:border-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Repeat your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="h-12 px-4 rounded-xl w-full border border-gray-300 focus-visible:border-gray-500"
              />
            </div>

            {err && <p className="text-center text-sm text-red-600">{err}</p>}
            {success && <p className="text-center text-sm text-green-600">{success}</p>}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl px-4 h-9 mt-4"
            >
              Sign In
            </Button>
            
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}