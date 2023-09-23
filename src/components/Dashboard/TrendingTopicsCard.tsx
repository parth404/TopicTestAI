import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import CustomWordCloud from "../CustomWordCloud";
import { prisma } from "@/lib/db";

type Props = {};

const TrendingTopicsCard = async (props: Props) => {
  const topics = await prisma.topic_count.findMany({});
  const formattedTopics = topics.map((topic) => {
    return {
      text: topic.topic,
      value: topic.count,
    };
  });
  return (
    <Card className="col-span-4">
      <CardHeader>
        <div className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-2xl font-bold">Trending Topics</CardTitle>
          <TrendingUp size={28} strokeWidth={2.5} />
        </div>
        <CardDescription>Click on the words to start a test</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <CustomWordCloud formattedTopics={formattedTopics} />
      </CardContent>
    </Card>
  );
};

export default TrendingTopicsCard;
