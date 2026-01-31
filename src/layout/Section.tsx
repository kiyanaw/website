import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  id?: string;
  // Optional class to override the default max width for this section
  maxWidthClass?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto ${
      props.maxWidthClass ? props.maxWidthClass : 'max-w-screen-lg'
    } px-3 ${props.yPadding ? props.yPadding : 'py-16'}`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2
            className="text-4xl font-bold text-gray-900"
            id={props.id || props.title}
          >
            {props.title}
          </h2>
        )}
        {props.description && (
          <div
            className="mt-4 text-xl md:px-20 [&_a]:text-primary-500 [&_a]:underline [&_a]:hover:text-primary-600"
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
