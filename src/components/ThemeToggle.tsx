import { Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="relative"
      disabled
    >
      <Moon className="h-5 w-5" />
      <span className="sr-only">Dark Theme aktiv</span>
    </Button>
  );
};

export default ThemeToggle;
