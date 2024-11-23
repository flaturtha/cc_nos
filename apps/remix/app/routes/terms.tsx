import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Terms of Service - Tales of Murder" },
    { name: "description", content: "Terms of service and conditions for Tales of Murder." },
  ];
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website at talesofmurder.press, you agree to be bound by these terms of
              service and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials (information or software) on
              Tales of Murder&apos;s website for personal, non-commercial transitory viewing only.
            </p>
            <p className="mt-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by Tales of Murder at any time.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p>
              The materials on Tales of Murder&apos;s website are provided on an &apos;as is&apos; basis.
              Tales of Murder makes no warranties, expressed or implied, and hereby disclaims and negates
              all other warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p>
              In no event shall Tales of Murder or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on Tales of Murder&apos;s website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:terms@talesofmurder.press" className="text-blue-600 hover:underline">
                terms@talesofmurder.press
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
