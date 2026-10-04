import React, { useEffect } from 'react';

interface ToastProps {
  message: string | null;
  onClear: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClear }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClear();
    }, 2800);
    return () => clearTimeout(timer);
  }, [message, onClear]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 transform transition-all duration-300 bg-[#c8f300] text-[#171e00] px-5 py-3 rounded-xl font-['Space_Mono'] text-xs font-bold uppercase shadow-[6px_6px_0px_#000000] flex items-center gap-2 pointer-events-auto border-2 border-black animate-bounce">
      <span className="material-symbols-outlined text-xl">done_all</span>
      <span>{message}</span>
      <button
        onClick={onClear}
        className="ml-2 text-black hover:text-[#586c00]"
        aria-label="Dismiss toast"
      >
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
};
