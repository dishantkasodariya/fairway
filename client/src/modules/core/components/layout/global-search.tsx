import { useNavigate } from "react-router-dom";
import { Activity, Building2, CheckSquare, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/modules/core/components/ui/command";
import { Dialog, DialogContent, DialogTitle } from "@/modules/core/components/ui/dialog";
import { useCrm } from "@/modules/core/providers/crm-provider";

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { companies, contacts, tasks, activities } = useCrm();

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return { companies: [], contacts: [], tasks: [], activities: [] };
    const match = (value: string) => value.toLowerCase().includes(term);
    return {
      companies: companies
        .filter((company) => match(company.name) || match(company.city) || match(company.industry))
        .slice(0, 5),
      contacts: contacts
        .filter((contact) => match(contact.fullName) || match(contact.email) || match(contact.phone))
        .slice(0, 5),
      tasks: tasks.filter((task) => match(task.title)).slice(0, 5),
      activities: activities.filter((item) => match(item.title) || match(item.description)).slice(0, 5),
    };
  }, [query, companies, contacts, tasks, activities]);

  const go = (fn: () => void) => {
    setOpen(false);
    setQuery("");
    fn();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 w-full max-w-xs items-center gap-2 rounded-md border border-border bg-background px-2.5 text-[13px] text-muted-foreground transition-colors hover:border-ring/60 md:w-64"
        aria-label="Open global search"
      >
        <Search className="h-4 w-4" aria-hidden />
        <span className="truncate">Search CRM…</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 sm:max-w-xl">
          <DialogTitle className="sr-only">Global search</DialogTitle>
          <Command shouldFilter={false}>
            <CommandInput
              value={query}
              onValueChange={setQuery}
              placeholder="Search companies, contacts, tasks and activities…"
            />
            <CommandList className="max-h-80">
              {query.trim() &&
              results.companies.length + results.contacts.length + results.tasks.length + results.activities.length ===
                0 ? (
                <CommandEmpty>No results for “{query}”.</CommandEmpty>
              ) : null}
              {!query.trim() ? (
                <div className="px-4 py-6 text-center text-[13px] text-muted-foreground">
                  Start typing to search across your CRM records.
                </div>
              ) : null}

              {results.companies.length ? (
                <CommandGroup heading="Companies">
                  {results.companies.map((company) => (
                    <CommandItem
                      key={company.id}
                      value={company.id}
                      onSelect={() =>
                        go(() =>
                          navigate(`/crm/companies/${company.id}`)
                        )
                      }
                    >
                      <Building2 className="h-4 w-4 text-muted-foreground" aria-hidden />
                      <span>{company.name}</span>
                      <span className="ml-auto text-[12px] text-muted-foreground">{company.city}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}

              {results.contacts.length ? (
                <CommandGroup heading="Contacts">
                  {results.contacts.map((contact) => (
                    <CommandItem
                      key={contact.id}
                      value={contact.id}
                      onSelect={() =>
                        go(() => navigate(`/crm/contacts/${contact.id}`))
                      }
                    >
                      <Users className="h-4 w-4 text-muted-foreground" aria-hidden />
                      <span>{contact.fullName}</span>
                      <span className="ml-auto text-[12px] text-muted-foreground">{contact.designation}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}

              {results.tasks.length ? (
                <CommandGroup heading="Tasks">
                  {results.tasks.map((task) => (
                    <CommandItem
                      key={task.id}
                      value={task.id}
                      onSelect={() => go(() => navigate("/crm/tasks"))}
                    >
                      <CheckSquare className="h-4 w-4 text-muted-foreground" aria-hidden />
                      <span className="truncate">{task.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}

              {results.activities.length ? (
                <CommandGroup heading="Activities">
                  {results.activities.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={item.id}
                      onSelect={() => go(() => navigate("/crm/activities"))}
                    >
                      <Activity className="h-4 w-4 text-muted-foreground" aria-hidden />
                      <span className="truncate">{item.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
