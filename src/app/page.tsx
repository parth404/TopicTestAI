import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    // if already logged in
    return redirect("/dashboard");
  }
  return (
    <>
      <div className="text-5xl absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to TopicTest</CardTitle>

            <CardDescription className="pt-10 text-2xl">
              {" "}
              Your passport to a world of engaging, AI-generated quizzes on any
              subject you can think of! If you're a student seeking to expand
              your knowledge or simply looking for a good time, TopicTest is
              your friendly and personalized learning companion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInButton text="Sign in with Google" />
          </CardContent>
        </Card>
      </div>
      <div className="area z-0 md:inline-block">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
