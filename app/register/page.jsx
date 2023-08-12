"use client";

import { useRouter } from "next/navigation";

function Page() {
  const Router = useRouter();
  return Router.push("/");
}

export default Page;
