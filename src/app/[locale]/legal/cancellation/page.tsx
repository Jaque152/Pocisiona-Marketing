import { T } from "@/components/shared/T";

export default function CancellationPage() {
  return (
    <main className="min-h-screen bg-mesh pt-32 pb-24 text-[var(--text-main)] relative flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <div className="glass-panel p-12 md:p-20 rounded-[2rem] border border-white/60 shadow-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-pop tracking-tight">
            <T>Política de Devoluciones y Reembolsos</T>
          </h1>
        </div>
      </div>
    </main>
  );
}