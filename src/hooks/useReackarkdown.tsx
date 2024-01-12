import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DataObjectInterface<T> {
  markdownText: T;
}

export default function useReactMarkdown<T extends string | null | undefined>(dataObject: DataObjectInterface<T>) {


  return (
    <>
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
      p: ({ children }) => <p>{children}</p>,
      strong: ({ children }) => <span style={{ fontWeight: 'bold' }}>{children}</span>,
      em: ({ children }) => <span style={{ fontStyle: 'italic' }}>{children}</span>,
    }} children={dataObject.markdownText} />
  </>
  );
}


