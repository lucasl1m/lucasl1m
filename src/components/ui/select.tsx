import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;

type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
  className?: string;
  children?: React.ReactNode;
};

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, ...props }, ref) => {
  const triggerProps = {
    ref,
    className: cn(
      'flex items-center justify-between gap-1.5 rounded-md border border-border bg-surface px-2 py-1.5 text-xs text-whiteText min-w-0',
      'hover:bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-button disabled:opacity-50 disabled:pointer-events-none',
      className
    ),
    ...props,
    children: (
      <>
        {children}
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <SelectPrimitive.Icon {...({ asChild: true, children: <svg className="h-3.5 w-3.5 shrink-0 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg> } as any)} />
      </>
    ),
  };
  return <SelectPrimitive.Trigger {...(triggerProps as React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & { children?: React.ReactNode })} />;
});
SelectTrigger.displayName = 'SelectTrigger';

type SelectContentProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
  className?: string;
  children?: React.ReactNode;
};

const SelectViewport = SelectPrimitive.Viewport as React.ForwardRefExoticComponent<
  SelectPrimitive.SelectViewportProps & { children?: React.ReactNode; className?: string } & React.RefAttributes<HTMLDivElement>
>;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, children, position = 'popper', ...props }, ref) => {
  const contentProps = {
    ref,
    className: cn(
      'relative z-50 max-h-96 min-w-0 overflow-hidden rounded-md border border-border bg-surface text-whiteText shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=top]:translate-y-[-1px]',
      className
    ),
    position,
    ...props,
    children: (
      <SelectViewport
        className={cn(
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectViewport>
    ),
  };
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content {...(contentProps as React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & { children?: React.ReactNode })} />
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = 'SelectContent';

type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
  className?: string;
  children?: React.ReactNode;
};

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, ...props }, ref) => {
  const itemProps = {
    ref,
    className: cn(
      'relative flex w-full cursor-pointer select-none items-center gap-1.5 rounded-sm py-1.5 pl-2 pr-7 text-xs text-whiteText outline-none',
      'focus:bg-background focus:text-whiteText data-[highlighted]:bg-background data-[highlighted]:text-whiteText',
      className
    ),
    ...props,
    children: <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>,
  };
  return <SelectPrimitive.Item {...(itemProps as React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & { children?: React.ReactNode })} />;
});
SelectItem.displayName = 'SelectItem';

export { Select, SelectTrigger, SelectContent, SelectItem, SelectPrimitive };
