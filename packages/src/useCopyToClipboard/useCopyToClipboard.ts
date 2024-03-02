import { useState } from 'react';

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    if (!navigator.clipboard) {
      // Clipboard API not supported, fallback to execCommand
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setIsCopied(true);
    } else {
      navigator.clipboard.writeText(text)
        .then(() => setIsCopied(true))
        .catch((error) => console.error('Error copying to clipboard:', error));
    }
  };

  return [isCopied, copyToClipboard];
};
