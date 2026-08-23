import { cn } from "@/modules/core/lib/utils";

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

const palette = [
  "bg-primary/12 text-primary",
  "bg-info/12 text-info",
  "bg-warning/20 text-warning-foreground",
  "bg-success/12 text-success",
  "bg-destructive/12 text-destructive",
  "bg-secondary text-secondary-foreground",
];

function hueOf(seed: string): string {
  let sum = 0;
  for (let index = 0; index < seed.length; index += 1) sum += seed.charCodeAt(index);
  return palette[sum % palette.length] ?? palette[0]!;
}

export function CompanyAvatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-7 w-7 text-[11px]",
    md: "h-9 w-9 text-[12px]",
    lg: "h-14 w-14 text-base",
  } as const;
  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center rounded-md font-semibold",
        sizes[size],
        hueOf(name),
        className,
      )}
    >
      {initials(name)}
    </span>
  );
}

export function UserAvatar({
  name,
  size = "sm",
  className,
}: {
  name: string;
  size?: "xs" | "sm" | "md";
  className?: string;
}) {
  const sizes = {
    xs: "h-6 w-6 text-[10px]",
    sm: "h-7 w-7 text-[11px]",
    md: "h-9 w-9 text-[12px]",
  } as const;
  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-semibold",
        sizes[size],
        hueOf(name),
        className,
      )}
    >
      {initials(name)}
    </span>
  );
}

export function OwnerCell({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-2">
      <UserAvatar name={name} size="xs" />
      <span className="truncate text-[13px]">{name}</span>
    </span>
  );
}
