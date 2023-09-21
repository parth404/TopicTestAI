import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
// import WordCloud from "../WordCloud";
// import { prisma } from "@/lib/db";

type Props = {};

const TrendingTopicsCard = (props: Props) => {
  // const topics = await prisma.topic_count.findMany({});
  // const formattedTopics = topics.map((topic) => {
  //   return {
  //     text: topic.topic,
  //     value: topic.count,
  //   };
  // });
  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Trending Topics</CardTitle>
        <TrendingUp size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent className="pl-2">
        word cloud
        {/* <WordCloud formattedTopics={formattedTopics} /> */}
      </CardContent>
    </Card>
  );
};

export default TrendingTopicsCard;
