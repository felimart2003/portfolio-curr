import React from 'react';

interface EclipseButtonProps {
  href: string;
  text: string;
}

const EclipseButton: React.FC<EclipseButtonProps> = ({ href, text }) => {
  return (
    <div className="inline-block">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block"
      >
        <div className="absolute inset-0 rounded-full overflow-hidden blur-sm">
          <div className="eclipse glow absolute inset-0 rounded-full -z-[1]"></div>
        </div>
        <div className="relative rounded-full text-sm text-white font-thin bg-black/0 overflow-hidden">
          <div className="eclipse absolute inset-0 rounded-full bg-white -z-[1]"></div>
          <div className="m-[2px] px-4 py-1.5 rounded-full bg-black/95">
            {text}
          </div>
        </div>
      </a>
    </div>
  );
};

export default EclipseButton;