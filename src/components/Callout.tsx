import type { ReactNode } from 'react';

type CalloutType = 'note' | 'warning' | 'info' | 'success';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutStyles: Record<
  CalloutType,
  { bg: string; border: string; title: string }
> = {
  note: {
    bg: 'bg-amber-50',
    border: 'border-amber-400',
    title: 'text-amber-800',
  },
  warning: {
    bg: 'bg-red-50',
    border: 'border-red-400',
    title: 'text-red-800',
  },
  info: {
    bg: 'bg-sky-50',
    border: 'border-sky-400',
    title: 'text-sky-800',
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-green-400',
    title: 'text-green-800',
  },
};

const defaultTitles: Record<CalloutType, string> = {
  note: 'Note',
  warning: 'Warning',
  info: 'Note',
  success: 'Success',
};

export const Callout = ({ type = 'note', title, children }: CalloutProps) => {
  const styles = calloutStyles[type];
  const displayTitle = title ?? defaultTitles[type];

  return (
    <div
      className={`my-6 rounded-lg border-l-4 px-4 py-3 ${styles.bg} ${styles.border} [&>p]:m-0 [&>p]:inline`}
    >
      {displayTitle && (
        <span className={`font-semibold ${styles.title}`}>
          {displayTitle}:{' '}
        </span>
      )}
      {children}
    </div>
  );
};
