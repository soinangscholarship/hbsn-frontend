import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { login } from "../../../auth/authApi";
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

export function LoginPage() {
  // Store what the user types. Each field = one piece of state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Store the error response
  const [err, setErr] = useState("");
  const nav = useNavigate();

  //Runs when the form is submitted
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    try {
      await login(username, password);
      nav("/users");
    } catch {
      setErr("Wrong Username or Password!");
    }
  }

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-muted p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            Enter your username and password to access your account
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 px-4 rounded-xl w-full border border-gray-300 focus-visible:border-gray-500"
              />
            </div>
            <p className="text-center text-sm text-red-600">{err}</p>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl px-4 h-9 w-full mt-4"
            >
              Sign In
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
