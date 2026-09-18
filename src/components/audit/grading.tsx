import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Grade = { score: number | null; note: string };
type GradeMap = Record<string, Grade>;

const STORAGE_KEY = "vello-audit-grades";

const GradeContext = createContext<{
  grades: GradeMap;
  setGrade: (id: string, grade: Grade) => void;
  reset: () => void;
} | null>(null);

export function GradeProvider({ children }: { children: ReactNode }) {
  const [grades, setGrades] = useState<GradeMap>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setGrades(JSON.parse(raw) as GradeMap);
    } catch {
      /* ignore unreadable storage */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(grades));
    } catch {
      /* ignore unwritable storage */
    }
  }, [grades]);

  const value = useMemo(
    () => ({
      grades,
      setGrade: (id: string, grade: Grade) =>
        setGrades((prev) => ({ ...prev, [id]: grade })),
      reset: () => setGrades({}),
    }),
    [grades],
  );

  return <GradeContext.Provider value={value}>{children}</GradeContext.Provider>;
}

export function useGrades() {
  const ctx = useContext(GradeContext);
  if (!ctx) throw new Error("useGrades must be used inside GradeProvider");
  return ctx;
}

const SCORES = [1, 2, 3, 4, 5];

export function GradePanel({ id, label }: { id: string; label: string }) {
  const { grades, setGrade } = useGrades();
  const grade = grades[id] ?? { score: null, note: "" };
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8 rounded-2xl border border-border bg-muted/50 p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            Mentor grade
          </p>
          <p className="mt-1 text-sm text-ink-body">{label}</p>
        </div>
        <div
          role="radiogroup"
          aria-label={`Score for ${label}`}
          className="flex items-center gap-1.5"
        >
          {SCORES.map((s) => {
            const active = grade.score === s;
            return (
              <button
                key={s}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setGrade(id, { ...grade, score: active ? null : s })}
                className={`h-11 w-11 rounded-xl border font-mono text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  active
                    ? "border-green-700 bg-green-100 text-green-700"
                    : "border-border bg-card text-ink-muted hover:border-ink-muted"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 font-mono text-xs text-green-700 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        aria-expanded={open}
      >
        {open ? "Hide note" : grade.note ? "Edit note" : "Add a note"}
      </button>

      {open ? (
        <textarea
          value={grade.note}
          onChange={(e) => setGrade(id, { ...grade, note: e.target.value })}
          rows={3}
          placeholder="What holds up here, and what doesn't?"
          aria-label={`Note for ${label}`}
          className="mt-3 w-full rounded-xl border border-border bg-card p-3 text-sm text-ink-body placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        />
      ) : grade.note ? (
        <p className="mt-3 whitespace-pre-wrap rounded-xl border border-border bg-card p-3 text-sm text-ink-body">
          {grade.note}
        </p>
      ) : null}
    </div>
  );
}

export function GradeSummary({ total }: { total: number }) {
  const { grades, reset } = useGrades();
  const scored = Object.values(grades).filter((g) => g.score !== null);
  const average =
    scored.length > 0
      ? (scored.reduce((sum, g) => sum + (g.score ?? 0), 0) / scored.length).toFixed(1)
      : "—";

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
        Graded {scored.length}/{total}
      </p>
      <p className="font-mono text-sm text-foreground">
        Average <span className="text-green-700">{average}</span>
      </p>
      <button
        type="button"
        onClick={reset}
        className="ml-auto font-mono text-xs text-ink-muted underline underline-offset-4 hover:text-persimmon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Clear grades
      </button>
    </div>
  );
}
