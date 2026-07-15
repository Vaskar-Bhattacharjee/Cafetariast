import { cn } from "@/app/lib/utils";

export const Section = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div className={cn("max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-zinc-50 dark:bg-neutral-900", className)}>
            {children}
        </div>
    )
}