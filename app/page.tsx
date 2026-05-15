export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Evaluation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Score and Rank AI Prompt Outputs{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload multiple prompt variations and get instant quality scores based on coherence, accuracy, and relevance — with a built-in A/B testing dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $29/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-6 mb-24">
        {[
          { title: "Multi-Criteria Scoring", desc: "Evaluate coherence, accuracy, relevance, and tone in one click." },
          { title: "A/B Testing Dashboard", desc: "Compare prompt variants side-by-side with ranked score cards." },
          { title: "OpenAI & Anthropic", desc: "Plug in your preferred evaluation model with a single API key." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited prompt evaluations",
              "A/B testing dashboard",
              "OpenAI & Anthropic integration",
              "CSV export of scores",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which AI models are used for evaluation?",
              a: "You can connect your own OpenAI or Anthropic API key. We use GPT-4o or Claude 3.5 Sonnet as the evaluation judge, configurable from your dashboard."
            },
            {
              q: "How many prompt variations can I compare at once?",
              a: "You can upload and compare up to 20 prompt variations in a single A/B test run, with side-by-side score breakdowns for each."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal — no questions asked, no lock-in contracts."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Prompt Output Quality Scorer. All rights reserved.
      </footer>
    </main>
  );
}
