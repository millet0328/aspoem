"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  const params = useParams<{ lang: string }>();

  const { lang = "zh-Hans" } = params;

  return (
    <div className="relative m-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center">
      <div className="absolute top-[30%] text-center font-mono">
        <h1 className="prose-h1">Page Not Found !</h1>
        <p className="mt-12">
          <Button size={"lg"} asChild>
            <Link href={`/${lang}`}>
              <ArrowLeft className="mr-2" /> Go Back Home
            </Link>
          </Button>
        </p>
      </div>
    </div>
  );
}
