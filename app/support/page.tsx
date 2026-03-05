import React from "react";

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Support Center
        </h1>
        <p className="text-slate-600">
          Have questions? We're here to help you get on the road.
        </p>
      </header>

      <div className="space-y-4">
        {/* Question 1 */}
        <details className="group border border-slate-200 rounded-2xl bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
            <h2 className="text-lg font-bold">How do I unlock the car?</h2>
            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-slate-600">
            Once your rental period begins, go to your <strong>Profile</strong>{" "}
            page. You will see a large blue "Unlock" button. Ensure your phone's
            Bluetooth is turned on when standing next to the vehicle.
          </p>
        </details>

        {/* Question 2 */}
        <details className="group border border-slate-200 rounded-2xl bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
            <h2 className="text-lg font-bold">
              What is the fuel/charging policy?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-slate-600">
            Please return the vehicle with the same fuel level or battery charge
            as when you picked it up. A refueling fee may apply if returned
            significantly lower.
          </p>
        </details>
      </div>

      <div className="mt-12 text-center p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
        <p className="text-slate-600 mb-4">Still need help?</p>
        <button className="text-blue-600 font-bold hover:underline">
          Contact 24/7 Roadside Assistance
        </button>
      </div>
    </div>
  );
}
