const formatText = (text: string): React.ReactNode => {
  const match = text.match(/\d/);
  if (match && typeof match.index === 'number') {
    const beforeMatch = text.slice(0, match.index);
    const matchedDigit = match[0];
    const afterMatch = text.slice(match.index + 1);
    
    return (
      <>
        {beforeMatch}
        <strong>{matchedDigit}</strong>
        {afterMatch}
      </>
    );
  } else {
    return text;
  }
};
