"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function summarize() {
    setLoading(true);

    const res = await fetch("/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col items-center p-10">

      <h1 className="text-5xl font-bold mb-4">
        FlowMind AI
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-xl">
        AI-powered productivity assistant that summarizes meetings,
        extracts tasks, and organizes your workflow automatically.
      </p>

      <div className="w-full max-w-3xl bg-zinc-900/70 backdrop-blur p-6 rounded-2xl border border-zinc-700">

        <textarea
          className="w-full h-40 p-4 rounded-lg bg-black border border-zinc-700 focus:outline-none"
          placeholder="Paste meeting notes here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={summarize}
          className="mt-4 w-full bg-white text-black py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
        >
          {loading ? "Thinking..." : "Generate AI Summary"}
        </button>

        {result && (
          <div className="mt-6 bg-black border border-zinc-700 p-5 rounded-lg whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>

    </main>
  );
}