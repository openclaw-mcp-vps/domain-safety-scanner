export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Domain Safety Scanner
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Scan Domains for Registration Traps
          <span className="text-[#58a6ff]"> & Hidden Fees</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Before you register, we analyze registrar pricing pages, terms of service, and checkout flows to expose hidden fees, auto-renewal traps, and predatory practices.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started – $19/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔍", title: "Hidden Fee Detection", desc: "Uncovers ICANN fees, privacy add-ons, and transfer lock charges buried in fine print." },
          { icon: "🔄", title: "Auto-Renewal Alerts", desc: "Flags registrars that silently auto-renew at inflated prices without clear notice." },
          { icon: "📊", title: "Safety Score", desc: "Each registrar gets a 0–100 safety score with a detailed risk breakdown." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited domain scans",
              "Full registrar safety reports",
              "Auto-renewal risk alerts",
              "Hidden fee breakdown",
              "Email scan summaries"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Scanning
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which registrars do you cover?",
              a: "We analyze all major registrars including GoDaddy, Namecheap, Google Domains, Porkbun, Cloudflare, and more — with new ones added regularly."
            },
            {
              q: "How is the safety score calculated?",
              a: "Scores factor in pricing transparency, auto-renewal clarity, transfer lock policies, privacy fee practices, and historical complaint data."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Domain Safety Scanner. All rights reserved.
      </footer>
    </main>
  );
}
