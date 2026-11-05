import { BrainCircuit, Coffee, Terminal, type LucideIcon } from 'lucide-react';
import type { ProgramId } from '@/content/training';

/** Icon for each training program. Plain module so server and client components can both use it. */
export const PROGRAM_ICONS: Record<ProgramId, LucideIcon> = {
  aiml: BrainCircuit,
  java: Coffee,
  python: Terminal,
};
