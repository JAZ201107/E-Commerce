import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function SetupPage() {
  return (
    <div className="underline">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
