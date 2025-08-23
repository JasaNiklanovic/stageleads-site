import { bundles, events } from "@/data/content";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-5 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Close more deals from conferences.
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Download ready-to-use CSVs of <span className="font-semibold">speakers & attendees</span> with <span className="font-semibold">LinkedIn profiles</span>.
          <br/>Verified data, instant delivery.
        </p>

        {/* Mini sample (trust builder) */}
        <div
          className="mt-6 mx-auto max-w-2xl border rounded-2xl bg-white shadow-soft text-left overflow-hidden"
          aria-label="Sample rows"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="text-slate-600">
                  <th className="px-4 py-2 font-semibold text-left">Name</th>
                  <th className="px-4 py-2 font-semibold text-left">Title</th>
                  <th className="px-4 py-2 font-semibold text-left">Company</th>
                  <th className="px-4 py-2 font-semibold text-left">LinkedIn</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-2">Alex Chen</td>
                  <td className="px-4 py-2">VP Growth</td>
                  <td className="px-4 py-2">Nimbus.io</td>
                  <td className="px-4 py-2">linkedin.com/in/<span className="whitespace-nowrap">alexchen</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Maya Singh</td>
                  <td className="px-4 py-2">Head of Sales</td>
                  <td className="px-4 py-2">Helix Labs</td>
                  <td className="px-4 py-2">linkedin.com/in/<span className="whitespace-nowrap">mayasingh</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Tom Alvarez</td>
                  <td className="px-4 py-2">Founder</td>
                  <td className="px-4 py-2">BrightEdge</td>
                  <td className="px-4 py-2">linkedin.com/in/<span className="whitespace-nowrap">tomalvarez</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 inline-flex gap-3 flex-wrap justify-center">
          <a
            href="#bundles"
            className="inline-block bg-brand text-white rounded-2xl px-5 py-3 font-semibold shadow-soft hover:-translate-y-0.5 transition"
          >
            Get bundles
          </a>
          <a
            href="#events"
            className="inline-block border border-brand text-brand rounded-2xl px-5 py-3 font-semibold hover:bg-blue-50 transition"
          >
            Browse events
          </a>
          <a
            href="#request"
            className="inline-block border border-brand text-brand rounded-2xl px-5 py-3 font-semibold hover:bg-blue-50 transition"
          >
            Request a specific event
          </a>
        </div>
        <p className="mt-2 text-xs text-slate-500">Instant, secure delivery via Gumroad.</p>
      </section>

      {/* Why speakers (the “why this list” moment) */}
      <section className="max-w-[960px] mx-auto px-5 py-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-2xl p-4 bg-white shadow-soft">
            <h3 className="font-semibold mb-1">Why speakers?</h3>
            <ul className="text-slate-600 text-sm list-disc ml-5 space-y-1">
              <li><span className="font-medium">Decision-makers:</span> speakers are founders, VPs, and buyers.</li>
              <li><span className="font-medium">Warm context:</span> reference their talk for instant relevance.</li>
              <li><span className="font-medium">High reply rates:</span> they’re publicly active and open to outreach.</li>
            </ul>
          </div>

          <div className="border rounded-2xl p-4 bg-white shadow-soft">
            <h3 className="font-semibold mb-1">How teams use this</h3>
            <ul className="text-slate-600 text-sm list-disc ml-5 space-y-1">
              <li><span className="font-medium">Pre-event:</span> book meetings with target accounts.</li>
              <li><span className="font-medium">During:</span> know who’s on-site and worth approaching.</li>
              <li><span className="font-medium">Post-event:</span> follow-ups tied to talk titles & themes.</li>
            </ul>
          </div>

          <div className="border rounded-2xl p-4 bg-white shadow-soft">
            <h3 className="font-semibold mb-1">What you get</h3>
            <ul className="text-slate-600 text-sm list-disc ml-5 space-y-1">
              <li>CSV: Name, Title, Company, LinkedIn, Domain</li>
              <li>Verified rows + review flags</li>
              <li>Import to HubSpot/Salesforce/Outreach</li>
            </ul>
          </div>
        </div>

        {/* Quick outcomes strip */}
        <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
          <div className="border rounded-2xl p-4 bg-white shadow-soft text-center">
            <div className="font-extrabold text-xl">20+ hrs</div>
            <div className="text-slate-600">research time saved per event</div>
          </div>
          <div className="border rounded-2xl p-4 bg-white shadow-soft text-center">
            <div className="font-extrabold text-xl">Decision-makers</div>
            <div className="text-slate-600">no junior titles or filler contacts</div>
          </div>
          <div className="border rounded-2xl p-4 bg-white shadow-soft text-center">
            <div className="font-extrabold text-xl">One-time purchase</div>
            <div className="text-slate-600">no subscription and no login</div>
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section id="bundles" className="max-w-[960px] mx-auto px-5 py-8">
        <h2 className="text-2xl font-bold mb-2">Bundles (3 events) — <span className="text-slate-600 font-normal">$99</span></h2>
        <p className="text-slate-600 mb-4 text-sm">Best value if you prospect a whole category.</p>

        <div className="grid md:grid-cols-2 gap-4">
          {bundles.map((b, i) => (
            <div key={i} className="border rounded-2xl p-5 bg-white shadow-soft">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <ul className="text-sm text-slate-600 list-disc ml-5 mt-2">
                {b.includes.map((x: string, idx: number) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={b.previewUrl || "#"} variant="outline" target="_blank" rel="noopener noreferrer">
                  View sample
                </Button>
                <Button href={b.gumroadUrl} target="_blank" rel="noopener noreferrer">
                  Get Full CSV – ${b.price}
                </Button>
              </div>
              <p className="mt-2 text-xs text-slate-500">Instant delivery via Gumroad.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="max-w-[960px] mx-auto px-5 py-8">
        <h2 className="text-2xl font-bold mb-2">Single Event Packs — <span className="text-slate-600 font-normal">$49 each</span></h2>
        <p className="text-slate-600 mb-4 text-sm">Pick a specific conference and start outreach today.</p>

        <div className="grid md:grid-cols-2 gap-4">
          {events.map((e, i) => (
            <div key={i} className="border rounded-2xl p-5 bg-white shadow-soft">
              <h3 className="text-lg font-semibold">{e.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{e.location}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={e.previewUrl || "#"} variant="outline" target="_blank" rel="noopener noreferrer">
                  View 10-row sample
                </Button>
                <Button href={e.gumroadUrl} target="_blank" rel="noopener noreferrer">
                  Get Full CSV – ${e.price}
                </Button>
              </div>
              <p className="mt-2 text-xs text-slate-500">Instant delivery via Gumroad.</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a href="#" className="text-brand underline">See all events</a>
        </div>
      </section>

      {/* Custom Requests */}
      <section id="request" className="max-w-[960px] mx-auto px-5 py-8">
        <h2 className="text-2xl font-bold mb-2">Need a different event?</h2>
        <p className="text-slate-600 mb-4 text-sm">
          Order a one-off list or your own bundle. We’ll verify rows and deliver shortly after purchase.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-2xl p-5 bg-white shadow-soft text-center">
            <h3 className="text-lg font-semibold mb-2">Custom Single Event</h3>
            <Button href="https://stageleads.gumroad.com/l/vqesf" target="_blank" rel="noopener noreferrer">
              Order Custom Event → $49
            </Button>
            <p className="mt-2 text-xs text-slate-500">Delivery shortly after purchase.</p>
          </div>
          <div className="border rounded-2xl p-5 bg-white shadow-soft text-center">
            <h3 className="text-lg font-semibold mb-2">Custom Bundle (up to 3 events)</h3>
            <Button href="https://stageleads.gumroad.com/l/qrtflr" target="_blank" rel="noopener noreferrer">
              Order Custom Bundle → $99
            </Button>
            <p className="mt-2 text-xs text-slate-500">Delivery shortly after purchase.</p>
          </div>
        </div>
      </section>

      {/* Why StageLeads / FAQs */}
      <section className="max-w-[960px] mx-auto px-5 py-8">
        <div className="border rounded-2xl p-5 bg-white shadow-soft">
          <h2 className="text-xl font-bold mb-2">Why StageLeads?</h2>
          <ul className="text-slate-600 text-sm list-disc ml-5 space-y-1">
            <li>Save 20+ hours of manual LinkedIn research per event</li>
            <li>Focus on decision-makers only (founders, VPs, heads of…) </li>
            <li>Import directly into HubSpot, Salesforce, or Outreach</li>
            <li>No logins or subscriptions — pay once, download instantly</li>
          </ul>

          {/* Micro-FAQ to remove friction */}
          <div className="mt-5 grid md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-1">Where does data come from?</h3>
              <p className="text-slate-600">
                Official event pages & public profiles. We only include public LinkedIn URLs.
              </p>
            </div>
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-1">Is email included?</h3>
              <p className="text-slate-600">
                No. Most teams DM on LinkedIn or enrich emails in their own tools.
              </p>
            </div>
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-1">Who gets the most value?</h3>
              <p className="text-slate-600">
                SDR/AE teams, founders, recruiters, and agencies prospecting around events.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Button href="#bundles">Get your first list →</Button>
          </div>
        </div>
      </section>
    </>
  );
}