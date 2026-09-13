"use client";

import { useEffect } from "react";

export default function DemoRedirectPage() {
  useEffect(() => {
    window.location.replace("https://velotime.dg.tools/demo");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f4f6] text-slate-900 font-sans">
      <div className="p-8 text-center space-y-4">
        <div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm font-semibold text-slate-600">
          Redirecting to the VeloTime interactive matrix demo...
        </p>
        <p className="text-xs text-slate-400">
          If you are not redirected automatically,{" "}
          <a
            href="https://velotime.dg.tools/demo"
            className="text-blue-600 underline font-medium"
          >
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
