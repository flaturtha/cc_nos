import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return redirect("/lp/coming-soon2?utm_source=1");
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-[#f7f3e9] text-center">
        <h1 className="text-3xl font-light mb-4">Tales of Murder Press</h1>
        <p className="text-lg opacity-75">Redirecting to library...</p>
      </div>
    </div>
  );
}
