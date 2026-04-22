import React from "react";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DashBoardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("Session data in DashBoardPage:", session);
  const user = session?.user;
  if (!user) {
    redirect("/auth/signin");
    return <h1>Please sign in to access the dashboard.</h1>;
  }
  return (
    <div>
      <h1>This is dashboard</h1>
    </div>
  );
};

export default DashBoardPage;
