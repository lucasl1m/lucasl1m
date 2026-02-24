import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormFieldProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement> &
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'name'
  > {
  name: string;
  placeholder: string;
  isTextArea?: boolean;
  icon?: React.ReactNode;
  error?: string;
}

const FormField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>(function FormField(
  { placeholder, isTextArea, icon, error, className, ...rest },
  ref
) {
  const containerClasses =
    'flex items-start p-4 gap-3 rounded-md border border-border bg-surface w-full focus-within:ring-2 focus-within:ring-button';

  return (
    <div className={cn(containerClasses, className)}>
      {icon && (
        <div className="w-5 h-5 text-icon shrink-0 self-start pt-0.5">{icon}</div>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        {isTextArea ? (
          <Textarea
            placeholder={placeholder}
            rows={6}
            className="min-h-[120px] border-0 bg-transparent p-0 text-base text-whiteText placeholder:caption focus-visible:ring-0 focus-visible:ring-offset-0"
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <Input
            placeholder={placeholder}
            className="border-0 bg-transparent p-0 h-auto text-base focus-visible:ring-0 focus-visible:ring-offset-0"
            ref={ref as React.Ref<HTMLInputElement>}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <span className="text-xs text-red-500 mt-1 block">{error}</span>
        )}
      </div>
    </div>
  );
});

export { FormField };
