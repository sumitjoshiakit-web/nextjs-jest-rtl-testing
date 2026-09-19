export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export type CardVariant = 'default' | 'highlight' | 'outlined' | 'subtle';

export interface CardProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: 'success' | 'warning' | 'info' | 'neutral';
  footer?: React.ReactNode;
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onCountChange?: (newCount: number) => void;
}

export interface UserProfileData {
  id: string;
  name: string;
  role: string;
  email: string;
  team: string;
  coverageScore: number;
  status: 'active' | 'auditing' | 'deployed';
}

export interface DataFetcherProps {
  apiUrl?: string;
  autoFetch?: boolean;
  onSuccess?: (data: UserProfileData) => void;
  onError?: (error: Error) => void;
}

export interface TestCaseResult {
  id: string;
  phase: 'Phase 1: Base Architecture' | 'Phase 2: State & Integration' | 'Phase 3: Advanced Optimization';
  suite: string;
  name: string;
  status: 'passed' | 'failed' | 'pending';
  durationMs: number;
  assertion: string;
}

export interface CoverageMetrics {
  statements: number;
  branches: number;
  functions: number;
  lines: number;
}
