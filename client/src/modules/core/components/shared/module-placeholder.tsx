import { Construction } from "lucide-react";

export function ModulePlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <section className="rounded-lg border border-border bg-card p-8 text-center shadow-card">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Construction className="h-5 w-5" aria-hidden />
      </div>
      <h2 className="mt-4 text-[16px] font-semibold">{title}</h2>
      <p className="mx-auto mt-1 max-w-md text-[13px] text-muted-foreground">{description}</p>
    </section>
  );
}
