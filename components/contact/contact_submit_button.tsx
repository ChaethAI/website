import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function ContactSubmitButton({
  children,
  className,
  disabled,
  ...props
}: ContactSubmitButtonProps) {
  // TODO: Add tracking and other features here in the future
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Add tracking logic here when needed

    // Call the original onClick if provided
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Button
      variant="secondary"
      size="lg"
      className={cn("font-semibold", className)}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
}
