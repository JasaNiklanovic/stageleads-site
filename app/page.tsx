import RequestForm from "@/components/RequestForm";
import { bundles, events } from "@/data/content";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <section className="max-w-[960px] mx-auto px-5 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Speaker & attendee lists for sales, founders, and agencies.</h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Skip the research. Get ready-to-use CSVs of speakers, founders, and decision-makers from the world’s top conferences.
        </p>
        <div className="mt-6 inline-flex gap-3">
          <a href="#bundles" className="inline-block bg-brand text-white rounded-2xl px-5 py-3 font-semibold shadow-soft hover:-translate-y-0.5 transition">
            See bundles
          </a>
          <a href="#events" className="inline-block border border-brand text-brand rounded-2xl px-5 py-3 font-semibold hover:bg-blue-50 transition">
            Browse events
          </a>
        </div>
      </section>

      <section className="max-w-[960px] mx-auto px-5 py-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-2xl p-4 bg-white shadow-soft">
            <h3 className="font-semibold mb-1">Who is this for?</h3>
            <ul className="text-slate-600 text-sm list-disc ml-5 space-y-1">
              <li>Sales teams prepping outreach before events</li>
              <li>Founders looking for warm introductions</li>
              <li>Agencies & recruiters targeting decision-makers</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-4 bg-white shadow-soft">
            <h3 className="font-semibold mb-1">What you get</h3>
            <ul className="text-slate-600 text-sm list-disc ml-5 space-y-1">
              <li>CSV with Name, Title, Company, LinkedIn, Domain</li>
              <li>Verified rows with “review flags”</li>
              <li>Instant delivery (via Gumroad)</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-4 bg-white shadow-soft">
            <h3 className="font-semibold mb-1">Pricing</h3>
            <ul className="text-slate-600 text-sm list-disc ml-5 space-y-1">
              <li>Single Event Pack → $49</li>
              <li>Category Bundle (3 events) → $99</li>
              <li>Custom Bundle → request pricing</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="bundles" className="max-w-[960px] mx-auto px-5 py-8">
        <h2 className="text-2xl font-bold mb-4">Available Bundles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {bundles.map((b, i) => (
            <div key={i} className="border rounded-2xl p-5 bg-white shadow-soft">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <ul className="text-sm text-slate-600 list-disc ml-5 mt-2">
                {b.includes.map((x, idx) => <li key={idx}>{x}</li>)}
              </ul>
              <div className="mt-4 flex gap-3">
                <Button href={b.previewUrl || '#'} variant="outline">Preview sample</Button>
                <Button href={b.gumroadUrl}>Download Bundle – ${b.price}</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="events" className="max-w-[960px] mx-auto px-5 py-8">
        <h2 className="text-2xl font-bold mb-4">Single Event Packs — $49 each</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {events.map((e, i) => (
            <div key={i} className="border rounded-2xl p-5 bg-white shadow-soft">
              <h3 className="text-lg font-semibold">{e.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{e.location}</p>
              <div className="mt-4 flex gap-3">
                <Button href={e.previewUrl || '#'} variant="outline">Preview 10 speakers</Button>
                <Button href={e.gumroadUrl}>Download Full CSV – ${e.price}</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a href="#" className="text-brand underline">See all events</a>
        </div>
      </section>

      <section id="request" className="max-w-[960px] mx-auto px-5 py-8">
        <RequestForm />
      </section>

      <section className="max-w-[960px] mx-auto px-5 py-8">
        <div className="border rounded-2xl p-5 bg-white shadow-soft">
          <h2 className="text-xl font-bold mb-2">Why StageLeads?</h2>
          <ul className="text-slate-600 text-sm list-disc ml-5 space-y-1">
            <li>Save 20+ hours of manual LinkedIn research per event</li>
            <li>Focus on decision-makers only</li>
            <li>Import directly into HubSpot, Salesforce, or Outreach</li>
          </ul>
          <div className="mt-4">
            <Button href="#bundles">Download your first list today →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
