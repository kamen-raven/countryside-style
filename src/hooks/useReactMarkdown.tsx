import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface markdownStylesInterface {
  p?: string;
  strong?: string;
  em?: string;
}

export default function useReactMarkdown(
  markdownText: string,
  markdownStyles: markdownStylesInterface
  ) {


  return (
    <>
      <ReactMarkdown
        children={markdownText}
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) =>
            <p className={markdownStyles.p}>
              {children}
            </p>,

          strong: ({ children }) =>
            <span className={markdownStyles.strong}>
              {children}
            </span>,

          em: ({ children }) =>
            <span className={markdownStyles.em}>
              {children}
            </span>,
        }} />
    </>
  );
}


