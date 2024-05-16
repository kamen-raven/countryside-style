import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface markdownStylesInterface {
  p?: string;
  strong?: string;
  em?: string;
  /* максимально необязательные теги */
  h1?: string;
  h2?: string;
  h3?: string;
  blockquote?: string;
  del?: string;
  ul?: string;
  ol?: string;
  li?: string;
  a?: string;
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
          /*  */
          h1: ({ children }) =>
            <h1 className={markdownStyles.h1}>
              {children}
            </h1>,
          h2: ({ children }) =>
            <h2 className={markdownStyles.h2}>
              {children}
            </h2>,
          h3: ({ children }) =>
            <h3 className={markdownStyles.h3}>
              {children}
            </h3>,
          blockquote: ({ children }) =>
            <blockquote className={markdownStyles.blockquote}>
              {children}
            </blockquote>,
          del: ({ children }) =>
            <del className={markdownStyles.del}>
              {children}
            </del>,
          ul: ({ children }) =>
            <ul className={markdownStyles.ul}>
              {children}
            </ul>,
          ol: ({ children }) =>
            <ol className={markdownStyles.ol}>
              {children}
            </ol>,
          li: ({ children }) =>
            <li className={markdownStyles.li}>
              {children}
            </li>,
          a: (props) =>
            <a className={markdownStyles.a} href={props.href} >
              {props.children}
            </a>
        }} />
    </>
  );
}


