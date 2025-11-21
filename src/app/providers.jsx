// app/providers.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export function PostHogProvider({ children }) {
  useEffect(() => {
    // posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    //   api_host:
    //     process.env.NEXT_PUBLIC_POSTHOG_KEY || "https://us.i.posthog.com",
    //   person_profiles: "always", // or 'always' to create profiles for anonymous users as well
    //   capture_pageview: true,
    // });

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      person_profiles: "always",
      capture_pageview: true,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
