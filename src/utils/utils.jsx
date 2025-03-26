


export const highlightWords = (sentence, wordsToHighlight) => {
    const parts = sentence.split(new RegExp(`(${wordsToHighlight.join('|')})`, 'gi'));
    return parts.map((part, index) =>
      wordsToHighlight.some(word => word.toLowerCase() === part.toLowerCase())
        ? <span key={index} className="highlight">{part}</span>
        : part
    );
  };


 