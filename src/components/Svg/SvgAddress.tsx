import React from 'react'

export default function SvgAddress(props) {
  return (
    <svg viewBox="0 0 480 480" {...props}>
      <path
        d="M72 176c0 92.8 168 296 168 296s168-203.2 168-296C408 83.216 332.784 8 240 8S72 83.216 72 176zM240 72l104 80h-32v96H168v-96h-32l104-80z"
        fill="#7cb8ff"
      />
      <path
        d="M168 248h48v-64h48v64h48v-96h32L240 72l-104 80h32v96z"
        fill="#2488ff"
      />
      <path d="M216 184h48v64h-48v-64z" fill="#bddbff" />
      <g fill="#231f20">
        <path d="M240 480a8.003 8.003 0 01-6.168-2.904C226.896 468.712 64 270.576 64 176 64 78.798 142.798 0 240 0s176 78.798 176 176c0 94.576-162.896 292.712-169.832 301.096A8.003 8.003 0 01240 480zm0-464c-88.324.101-159.899 71.676-160 160 0 78.976 129.896 245.712 160 283.288C270.104 421.704 400 254.96 400 176c-.101-88.324-71.676-159.899-160-160z" />
        <path d="M348.88 145.664l-104-80a8.001 8.001 0 00-9.76 0l-104 80A8 8 0 00136 160h24v88a8 8 0 008 8h144a8 8 0 008-8v-88h24a8 8 0 004.88-14.336zM224 240v-48h32v48h-32zm88-96a8 8 0 00-8 8v88h-32v-56a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h-32v-88a8 8 0 00-8-8h-8.48L240 82.096 320.48 144H312z" />
      </g>
    </svg>
  )
}
