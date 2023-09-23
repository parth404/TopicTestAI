import TestCreation from "@/components/TestCreation";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: {
    topic?: string;
  };
};

export const metadata = {
  title: "Test | TopicTest",
};

const TestPage = async ({ searchParams }: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return <TestCreation topicParam={searchParams.topic ?? ""} />;
};

export default TestPage;
