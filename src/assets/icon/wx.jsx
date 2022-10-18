import React, { memo } from 'react';
import { cssToObj } from '../../utils';

const wx = memo(() => {
  return (
    <svg
      viewBox='0 0 32 32'
      role='presentation'
      aria-hidden='true'
      focusable='false'
      style={cssToObj('height: 1em; width: 1em; display: block; fill: currentcolor;')}
    >
      <path
        d='m25.09 19.47c-.62 0-1.11-.53-1.08-1.16.02-.59.52-1.08 1.1-1.08.62.01 1.11.54 1.09 1.17a1.08 1.08 0 0 1 -1.1 1.07zm-6.89.01a1.12 1.12 0 0 1 -1.11-1.08 1.13 1.13 0 0 1 1.12-1.16c.62 0 1.13.53 1.1 1.17a1.12 1.12 0 0 1 -1.11 1.07zm-1.31-5.54c-4.74 3.15-5.33 9.05-1.23 12.9 2.15 2.02 4.77 2.85 7.68 2.54.96-.1 1.92-.64 2.84-.54s1.78.73 2.72 1.16c-.43-1.74-.44-2.47.48-3.3 3.16-2.85 3.46-7.35.87-10.74-2.97-3.89-9.15-4.82-13.36-2.02zm-9.74-2.66a1.32 1.32 0 0 1 -1.3-1.38 1.34 1.34 0 0 1 1.39-1.31c.73.02 1.34.67 1.32 1.39a1.36 1.36 0 0 1 -1.4 1.3zm9.89-1.36c.01.77-.56 1.36-1.32 1.37a1.35 1.35 0 0 1 -1.38-1.33c-.01-.72.61-1.36 1.34-1.37a1.33 1.33 0 0 1 1.36 1.33zm5.18 1.29a9.07 9.07 0 0 0 -1.85-4.76c-2.88-3.82-8.21-5.42-12.95-3.85-3.47 1.15-6.03 3.36-7.07 7-1.13 3.94.38 7.76 3.95 10.32.56.4.7.96.52 1.57-.25.83-.45 1.48-.66 2.47 1.17-.74 2.16-1.41 3.2-2 .31-.18.75-.22 1.11-.19 1.06.09 2.12.25 3.28.4-.27-3.17.7-5.72 2.82-7.81 2.1-2.07 4.68-2.98 7.65-3.14z'
        fill-rule='evenodd'
      ></path>
    </svg>
  );
});

export default wx;
