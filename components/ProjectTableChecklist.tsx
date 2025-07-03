import React from "react";

export default function ProjectTableChecklist({ width = 400, height = 340 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tableBg" x1="0" y1="0" x2="400" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3a8bfd" stopOpacity="0.18"/>
          <stop offset="1" stopColor="#5ee7df" stopOpacity="0.10"/>
        </linearGradient>
        <filter id="glow" x="-30" y="-30" width="460" height="400" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="16" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="50" y="40" width="300" height="220" rx="28" fill="url(#tableBg)" filter="url(#glow)" stroke="#5ee7df" strokeWidth="2.5" />
      {/* Linhas horizontais da tabela */}
      <line x1="80" y1="90" x2="320" y2="90" stroke="#5ee7df" strokeWidth="1.5" opacity="0.35" />
      <line x1="80" y1="140" x2="320" y2="140" stroke="#5ee7df" strokeWidth="1.5" opacity="0.25" />
      <line x1="80" y1="190" x2="320" y2="190" stroke="#5ee7df" strokeWidth="1.5" opacity="0.18" />
      {/* Linhas verticais da tabela */}
      <line x1="170" y1="60" x2="170" y2="240" stroke="#5ee7df" strokeWidth="1.5" opacity="0.18" />
      <line x1="250" y1="60" x2="250" y2="240" stroke="#5ee7df" strokeWidth="1.5" opacity="0.18" />
      {/* Checkmarks nas linhas */}
      <g filter="url(#glow)">
        <circle cx="105" cy="115" r="15" fill="#5ee7df33" stroke="#5ee7df" strokeWidth="2" />
        <polyline points="100,115 106,122 116,110" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="105" cy="165" r="15" fill="#5ee7df22" stroke="#5ee7df" strokeWidth="2" />
        <polyline points="100,165 106,172 116,160" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="105" cy="215" r="15" fill="#5ee7df11" stroke="#5ee7df" strokeWidth="2" />
        <polyline points="100,215 106,222 116,210" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* Linhas de texto simuladas */}
      <rect x="185" y="105" width="150" height="12" rx="4" fill="#fff" fillOpacity="0.18" />
      <rect x="185" y="155" width="110" height="12" rx="4" fill="#fff" fillOpacity="0.13" />
      <rect x="185" y="205" width="90" height="12" rx="4" fill="#fff" fillOpacity="0.10" />
    </svg>
  );
} 