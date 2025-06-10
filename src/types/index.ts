export interface SkipOption {
  id: string;
  name: string;
  size: string;
  price: number;
  hirePeriod: string;
  image?: string;
  description?: string;
}

export interface ApiSkipData {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export interface Step {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  completed: boolean;
  active?: boolean;
}

export interface StepperProps {
  steps?: Step[];
  isDarkMode: boolean;
  variant?: 'default' | 'compact';
}

export interface SkipCardProps {
  skip: SkipOption;
  isSelected: boolean;
  onSelect: (skipId: string) => void;
  isDarkMode?: boolean;
}

export interface SkipGridProps {
  skips: SkipOption[];
  selectedSkipId: string | null;
  onSkipSelect: (skipId: string) => void;
  isLoading?: boolean;
  isDarkMode?: boolean;
}

export interface CheckoutBottomSheetProps {
  selectedSkip: SkipOption | null;
  isDarkMode: boolean;
  onContinue: () => void;
  onBack: () => void;
  onClose: () => void;
}

export interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export interface FooterProps {
  isDarkMode: boolean;
}

export interface PageLayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  showHeader?: boolean;
  showFooter?: boolean;
}