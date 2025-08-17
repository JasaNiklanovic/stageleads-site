export function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="max-w-[960px] mx-auto px-5 py-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}
