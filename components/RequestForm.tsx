"use client";

import { useState } from "react";

export default function RequestForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const event = formData.get("event");

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, event }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // fallback → open mail client
        window.location.href = `mailto:hi@stageleads.io?subject=Custom%20List%20Request&body=Name:%20${name}%0AEmail:%20${email}%0AEvent:%20${event}`;
      }
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
        ✅ Thanks for your request! We'll get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="event" className="block text-sm font-medium">
          Event(s) you want a list for
        </label>
        <textarea
          name="event"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black sm:text-sm"
          placeholder="e.g. Web Summit, INBOUND, custom mix..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Request Custom List"}
      </button>
    </form>
  );
}