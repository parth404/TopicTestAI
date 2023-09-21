import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { History } from "lucide-react";
// import HistoryComponent from "../HistoryComponent";
// import { prisma } from "@/lib/db";
type Props = {};

const RecentCard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  // const games_count = await prisma.game.count({
  //   where: {
  //     userId: session.user.id,
  //   },
  // });
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">
          <Link href="/history">Recent Activity</Link>
        </CardTitle>
        <History size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-auto">
        <CardDescription>You have played a total of 7 quizzes.</CardDescription>
        {/* <HistoryComponent limit={10} userId={session.user.id} /> */}
      </CardContent>
    </Card>
  );
};

export default RecentCard;
