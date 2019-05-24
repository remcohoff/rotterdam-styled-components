// This icon file is generated by build/generateIcons.ts
// tslint:disable

import { IconDefinition, AbstractNode } from '../types';

type PathArgs = string | ([string, string]);

function getNode(viewBox: string, ...paths: PathArgs[]): AbstractNode {
  return {
    tag: 'svg',
    attrs: { viewBox },
    children: (paths.map((path) => {
      if(Array.isArray(path)) {
        return {
          tag: 'path',
          attrs: {
            fill: path[0],
            d: path[1]
          }
        };
      }
      return {
        tag: 'path',
        attrs: {
          d: path
        }
      };
    }) as any)
  };
}

function getIcon(name: string, icon: any): IconDefinition {
  return {
    name,
    icon
  };
}

export const Alert: IconDefinition = getIcon(
  'Alert',
  getNode(
    '0 0 36 36',
    'M33.63 30.9H2.37L18 3zm-24.44-4h17.62L18 11.19z',
    'M17 16.99h2v4.95h-2zM17 22.94h2v1.95h-2z'
  )
);
export const Calendar: IconDefinition = getIcon(
  'Calendar',
  getNode(
    '0 0 36 36',
    'M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z',
    'M10 17h4v4h-4zM16 17h4v4h-4zM22 17h4v4h-4zM10 23h4v4h-4zM16 23h4v4h-4z'
  )
);
export const Card: IconDefinition = getIcon(
  'Card',
  getNode(
    '0 0 36 36',
    'M34 30H2V6h32zM6 26h24V10H6z',
    'M15.6 19.2H10a2 2 0 0 0-2 2V24h9.6v-2.8a2 2 0 0 0-2-2zM28 17h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z'
  )
);
export const Announcement: IconDefinition = getIcon(
  'Announcement',
  getNode(
    '0 0 36 36',
    'M28.3 13.29l3.05-3.06 1.42 1.41-3.06 3.06zM28.31 22.72l1.39-1.44 3.06 2.93-1.39 1.45zM30 17h4v2h-4zM25 13.78V2.16L9.43 10.5H2v15h7.43l1.46.78-4.3 4.3 2.83 2.83 5.16-5.16L25 33.84V22.22a4.47 4.47 0 0 0 0-8.45zM6 21.5v-7h4v7zm15 5.66l-9-4.82v-8.68l9-4.82z'
  )
);
export const ChevronDown: IconDefinition = getIcon(
  'ChevronDown',
  getNode('0 0 32 32', 'M16 25.76l-16-16 2.91-2.9L16 19.94 29.09 6.86 32 9.76z')
);
export const Checkmark: IconDefinition = getIcon(
  'Checkmark',
  getNode(
    '0 0 32 32',
    'M12.22 27.02L0 14.17l2.91-2.77 9.35 9.83L29.13 4 32 6.8z'
  )
);
export const ChevronLeft: IconDefinition = getIcon(
  'ChevronLeft',
  getNode('0 0 32 32', 'M22.86 32l-16-16 16-16 2.9 2.91L12.68 16l13.08 13.09z')
);
export const ChevronRight: IconDefinition = getIcon(
  'ChevronRight',
  getNode('0 0 32 32', 'M9.76 32l-2.9-2.91L19.94 16 6.86 2.91 9.76 0l16 16z')
);
export const ChevronTop: IconDefinition = getIcon(
  'ChevronTop',
  getNode('0 0 32 32', 'M29.09 25.76L16 12.68 2.91 25.76 0 22.86l16-16 16 16z')
);
export const Close: IconDefinition = getIcon(
  'Close',
  getNode(
    '0 0 32 32',
    'M29.33 5.47l-2.8-2.8L16 13.19 5.47 2.67l-2.8 2.8L13.19 16 2.67 26.53l2.8 2.8L16 18.81l10.53 10.52 2.8-2.8L18.81 16z'
  )
);
export const DocumentText: IconDefinition = getIcon(
  'DocumentText',
  getNode(
    '0 0 36 36',
    'M12 16h12v2H12z',
    'M21.83 2H6v32h24V10.17zM10 30V6h10.17L26 11.83V30z',
    'M12 20h12v2H12zM12 24h12v2H12z'
  )
);
export const Document: IconDefinition = getIcon(
  'Document',
  getNode('0 0 36 36', 'M21.83 2H6v32h24V10.17zM10 30V6h10v6h6v18z')
);
export const Download: IconDefinition = getIcon(
  'Download',
  getNode(
    '0 0 32 32',
    'M0 28h32v4H0v-4zM22.36 14l2.83 2.83-9.19 9.2-9.19-9.2L9.64 14 14 18.38V0h4v18.38L22.36 14z'
  )
);
export const Eclipse: IconDefinition = getIcon(
  'Eclipse',
  getNode(
    '0 0 1024 1024',
    'M784 565.6H675.4V457H784v108.6zm-217.2 0H458.2V457h108.6v108.6zm-218.2 0H240V457h108.6v108.6z'
  )
);
export const Email: IconDefinition = getIcon(
  'Email',
  getNode(
    '0 0 32 32',
    'M0 4v24h32V4H0zm16.12 12.33L6 8h20.06l-9.94 8.33zM11.33 15L4 21.78V8.94L11.33 15zm1.56 1.28l3.24 2.67 3.08-2.58L27.45 24H4.55l8.34-7.72zm7.87-1.2L28 9v12.8l-7.24-6.72z'
  )
);
export const Embed: IconDefinition = getIcon(
  'Embed',
  getNode(
    '0 0 32 32',
    'M18.14 6l1.86.5L14.86 25 13 24.5 18.14 6zM11 9.55L5.08 15.5 11 21.45 8.46 24 0 15.5 8.46 7 11 9.55zm10 11.9l5.92-5.95L21 9.55 23.54 7 32 15.5 23.54 24 21 21.45z'
  )
);
export const Enlarge: IconDefinition = getIcon(
  'Enlarge',
  getNode('0 0 32 32', 'M32 14H18V0h-4v14H0v4h14v14h4V18h14z')
);
export const EnlargeFont: IconDefinition = getIcon(
  'EnlargeFont',
  getNode(
    '0 0 36 36',
    'M17.83 21.64l1.51 3.64h8.36L29.56 30H34L24 6h-5.59l-3.56 8.48L17 19.62l4.13-9.21 5 11.24zM15.84 30l-1.24-3.14H6.4L5.23 30H2l6.74-16h3.75l6.64 16zm-5.3-12.73l-3 6.49h6z'
  )
);
export const ExternalLink: IconDefinition = getIcon(
  'ExternalLink',
  getNode(
    '0 0 32 32',
    'M19 0h13.01v13h-4V6.82L14.43 20.42 11.6 17.6 25.2 4H19V0zm7 14l.02 18H0V6.02h17.98L14 9.99l.02.02h-10v18h18L22 17.98l4-4z'
  )
);
export const Facebook: IconDefinition = getIcon(
  'Facebook',
  getNode(
    '0 0 30 30',
    'M24.5 18.13l.64-4.61h-4.77v-2.97c0-1.33.42-2.25 2.33-2.25h2.55V4.2c-.42-.1-1.91-.2-3.71-.2-3.71 0-6.15 2.15-6.15 6.14v3.38h-4.14v4.6h4.14V30h4.98V18.13h4.14z'
  )
);
export const FacebookPadded: IconDefinition = getIcon(
  'FacebookPadded',
  getNode(
    '0 0 1024 1024',
    'M667.7 541.1l15.88-119.05H564.53v-76.73c0-34.4 10.58-58.2 58.2-58.2h63.5V181.29c-10.58-2.64-47.62-5.29-92.6-5.29-92.6 0-153.45 55.56-153.45 158.74v87.3H337V541.1h103.18V848h124.35V541.1H667.7z'
  )
);
export const Linkedin: IconDefinition = getIcon(
  'Linkedin',
  getNode(
    '0 0 32 32',
    'M11 10.45V32h6.7V21.3c0-2.86.6-5.57 4.1-5.57 3.5 0 3.5 3.16 3.5 5.72V32H32V20.25C32 14.37 30.78 10 23.93 10c-3.34 0-5.47 1.8-6.39 3.47h-.15v-3.02H11zM0 11h7v21H0V11zm4-3a4 4 0 1 1 0-8 4 4 0 0 1 0 8z'
  )
);
export const Location: IconDefinition = getIcon(
  'Location',
  getNode(
    '0 0 36 36',
    'M18 33.42l-1.2-1.06C16.36 32 6.18 22.91 6.18 14a11.82 11.82 0 0 1 23.64 0c0 8.91-10.18 18-10.62 18.36zm0-27.6A8.19 8.19 0 0 0 9.82 14c0 5.26 5.12 11.45 8.17 14.49C20.52 26 26.18 19.67 26.18 14A8.19 8.19 0 0 0 18 5.82z'
  )
);
export const Logout: IconDefinition = getIcon(
  'Logout',
  getNode(
    '0 0 36 36',
    'M16 6V2H2v32h14v-4H6V6h10z',
    'M24.82 8.81L22 11.64 26.36 16H8v4h18.36L22 24.36l2.82 2.83 9.2-9.19-9.2-9.19z'
  )
);
export const Menu: IconDefinition = getIcon(
  'Menu',
  getNode(
    '0 0 32 32',
    'M0 3.24h32V7.8H0V3.24zM0 13.7h32v4.58H0V13.7zM0 24.2h32v4.57H0V24.2z'
  )
);
export const Minimise: IconDefinition = getIcon(
  'Minimise',
  getNode('0 0 32 32', 'M0 13.71h32v4H0z')
);
export const OpeningHours: IconDefinition = getIcon(
  'OpeningHours',
  getNode(
    '0 0 36 36',
    'M21 16h-4v-5h2v3h2v2z',
    'M18 2.18A11.83 11.83 0 0 0 6.18 14c0 8.91 10.18 18 10.62 18.36l1.2 1.06 1.2-1.06C19.64 32 29.82 22.91 29.82 14A11.83 11.83 0 0 0 18 2.18zm0 26.31c-2.68-2.66-6.94-7.74-8-12.49h2v-2H9.82A8.19 8.19 0 0 1 17 5.89V8h2V5.89A8.19 8.19 0 0 1 26.18 14H24v2h2c-1.1 5.09-5.77 10.26-8 12.49z'
  )
);
export const Passport: IconDefinition = getIcon(
  'Passport',
  getNode(
    '0 0 36 36',
    'M24 26v-1c0-3-1.7-4-4-4h-4c-2.31 0-4 1-4 4v1z',
    'M26 6V2L5 6v28h26V6zm1 24H9V10h18z'
  )
);
export const Print: IconDefinition = getIcon(
  'Print',
  getNode(
    '0 0 32 32',
    'M27 12h5v16h-5v4H5v-4H0V12h5V0h16.41L27 5.59V12zM7 2v10h18V7h-5V2H7zm18 28V20H7v10h18zM9 22h14v2H9v-2zm0 4h14v2H9v-2z'
  )
);
export const Quote: IconDefinition = getIcon(
  'Quote',
  getNode(
    '0 0 32 32',
    'M0 13.1v-2.03l5.07-5.04L5.05 6h3.12v7.1H14V27H0V13.1zm18 0v-2.03l5.08-5.04-.03-.03h3.12v7.1H32V27H18V13.1z'
  )
);
export const Search: IconDefinition = getIcon(
  'Search',
  getNode(
    '0 0 32 32',
    'M32 29.12l-9.82-9.83a12.22 12.22 0 1 0-2.89 2.89L29.12 32 32 29.12zm-19.77-8.75a8.14 8.14 0 1 1 0-16.29 8.14 8.14 0 0 1 0 16.3z'
  )
);
export const TrashBin: IconDefinition = getIcon(
  'TrashBin',
  getNode(
    '0 0 36 36',
    'M31 6h-8V2H13v4H5v4h2v24h22V10h2zM15 4h6v2h-6zm10 26H11V10h14z',
    'M13.02 14H15v12h-1.98zM17 14h2v12h-2zM21.02 14H23v12h-1.98z'
  )
);
export const Twitter: IconDefinition = getIcon(
  'Twitter',
  getNode(
    '0 0 32 32',
    'M10.17 29c12.07 0 18.58-10.13 18.58-18.75v-.82A12.97 12.97 0 0 0 32 6.01c-1.22.55-2.44.82-3.8 1.1a6.02 6.02 0 0 0 2.85-3.7 11.27 11.27 0 0 1-4.2 1.64A6.63 6.63 0 0 0 22.1 3a6.54 6.54 0 0 0-6.5 6.57c0 .55 0 .96.13 1.5A18.25 18.25 0 0 1 2.3 4.23c-.55.69-.82 1.92-.82 3.15a6.68 6.68 0 0 0 2.85 5.47 5.77 5.77 0 0 1-2.98-.82v.14c0 3.15 2.3 5.88 5.28 6.43-.54.14-1.08.27-1.76.27-.4 0-.81 0-1.22-.13a6.75 6.75 0 0 0 6.1 4.65 13.1 13.1 0 0 1-8.13 2.87c-.55 0-1.09 0-1.63-.13A19.61 19.61 0 0 0 10.17 29'
  )
);
export const LogoTall: IconDefinition = getIcon(
  'LogoTall',
  getNode(
    '0 0 100 68',
    'M39.48 10.74c-.48.22-1 .4-1.56.53-.56.12-1.21.19-1.95.19a5.7 5.7 0 0 1-2.06-.36 4.55 4.55 0 0 1-2.65-2.54 5.06 5.06 0 0 1-.37-1.98c0-.74.13-1.4.38-2a4.45 4.45 0 0 1 2.66-2.48 6.23 6.23 0 0 1 4.04-.02c.62.21 1.12.5 1.5.84l-1.15 1.22a2.82 2.82 0 0 0-.99-.66 3.47 3.47 0 0 0-1.39-.27c-.49 0-.93.08-1.33.26a3 3 0 0 0-1.67 1.78c-.15.41-.23.85-.23 1.33 0 .5.08.95.23 1.36a2.96 2.96 0 0 0 1.7 1.79 4.83 4.83 0 0 0 3.24-.07V7.3h-1.96V5.96h3.56v4.78zm7.94-2.57v.21l-.01.2h-4.8a1.54 1.54 0 0 0 .58 1.11 2 2 0 0 0 1.23.44c.39 0 .72-.08 1-.22.27-.14.49-.34.66-.6l1.05.84a3.17 3.17 0 0 1-2.7 1.25c-.5 0-.94-.07-1.35-.22A2.9 2.9 0 0 1 41.3 9.5a3.5 3.5 0 0 1-.26-1.38c0-.5.09-.96.26-1.37a3.13 3.13 0 0 1 1.76-1.74A3.56 3.56 0 0 1 45.59 5c.37.14.7.35.97.64.27.28.48.63.63 1.05.16.42.23.92.23 1.48zm-1.57-.7c0-.2-.03-.4-.09-.58a1.3 1.3 0 0 0-.73-.81c-.2-.08-.41-.12-.67-.12-.47 0-.87.14-1.2.42-.33.28-.5.64-.54 1.09h3.23zm10.62-2.69c.41 0 .77.08 1.06.22a2.08 2.08 0 0 1 1.14 1.37c.08.3.13.62.13.94v3.91h-1.58V7.75c0-.18-.01-.37-.04-.57-.02-.2-.08-.38-.17-.54-.09-.16-.2-.3-.36-.4-.15-.1-.36-.15-.61-.15s-.46.05-.63.15c-.18.1-.32.24-.43.4-.12.17-.2.36-.25.56-.06.2-.08.4-.08.6v3.42h-1.58V7.44c0-.39-.1-.71-.28-.97-.19-.26-.49-.38-.89-.38a1.22 1.22 0 0 0-1.04.53c-.11.16-.2.34-.25.54-.06.2-.09.41-.09.62v3.44h-1.57V4.97h1.5v1h.02c.07-.16.16-.3.28-.44a2.2 2.2 0 0 1 .98-.65c.21-.06.44-.1.7-.1.49 0 .9.11 1.22.33.32.22.57.5.75.86a2.24 2.24 0 0 1 2.07-1.19zm10.18 3.4v.2l-.01.2h-4.8a1.54 1.54 0 0 0 .58 1.11 2 2 0 0 0 1.22.44c.4 0 .73-.08 1-.22s.5-.34.67-.6l1.05.84a3.17 3.17 0 0 1-2.7 1.25c-.5 0-.94-.07-1.36-.22a2.9 2.9 0 0 1-1.78-1.67 3.5 3.5 0 0 1-.25-1.38c0-.5.08-.96.25-1.37a3.13 3.13 0 0 1 1.76-1.74A3.56 3.56 0 0 1 64.82 5c.37.14.7.35.97.64.27.28.48.63.63 1.05.16.42.23.92.23 1.48zm-1.57-.71c0-.2-.03-.4-.09-.58a1.3 1.3 0 0 0-.74-.81c-.18-.08-.4-.12-.66-.12-.47 0-.87.14-1.2.42-.33.28-.51.64-.55 1.09h3.24zm9.11.7v.21l-.01.2h-4.8a1.54 1.54 0 0 0 .58 1.11 2 2 0 0 0 1.22.44c.4 0 .73-.08 1-.22s.5-.34.67-.6l1.05.84a3.17 3.17 0 0 1-2.7 1.25c-.5 0-.94-.07-1.36-.22a2.9 2.9 0 0 1-1.78-1.67 3.5 3.5 0 0 1-.25-1.38c0-.5.08-.96.25-1.37a3.13 3.13 0 0 1 1.76-1.74A3.56 3.56 0 0 1 72.36 5c.37.14.7.35.96.64.28.28.49.63.64 1.05.15.42.23.92.23 1.48zm-1.58-.7c0-.2-.02-.4-.08-.58a1.3 1.3 0 0 0-.74-.81c-.18-.08-.4-.12-.66-.12-.47 0-.87.14-1.2.42-.33.28-.51.64-.55 1.09h3.23zm3.1-2.5h1.5v1h.03c.14-.31.38-.59.73-.83a2.1 2.1 0 0 1 1.23-.36c.4 0 .76.08 1.05.22a2.08 2.08 0 0 1 1.14 1.37c.09.3.13.62.13.94v3.91h-1.58V7.75c0-.18 0-.37-.04-.57-.02-.2-.08-.38-.17-.54-.08-.16-.2-.3-.36-.4-.15-.1-.35-.15-.6-.15a1.36 1.36 0 0 0-1.12.53c-.12.16-.2.34-.27.54-.06.2-.09.41-.09.62v3.44h-1.58V4.97zm6.74 1.25V4.97h1.1V3.15h1.56v1.82h1.57v1.25h-1.57v2.9c0 .28.05.51.15.7.1.18.32.27.67.27a1.97 1.97 0 0 0 .67-.13l.06 1.22a3.54 3.54 0 0 1-1.05.17c-.43 0-.77-.06-1.03-.17a1.55 1.55 0 0 1-.62-.49c-.16-.2-.26-.44-.32-.7a4.06 4.06 0 0 1-.08-.85V6.22h-1.1zm11.39 1.95v.21l-.01.2h-4.8a1.54 1.54 0 0 0 .58 1.11 2 2 0 0 0 1.22.44c.4 0 .73-.08 1-.22s.5-.34.67-.6l1.05.84a3.17 3.17 0 0 1-2.7 1.25c-.5 0-.95-.07-1.36-.22a2.9 2.9 0 0 1-1.78-1.67 3.5 3.5 0 0 1-.25-1.38c0-.5.08-.96.25-1.37a3.13 3.13 0 0 1 1.76-1.74A3.56 3.56 0 0 1 92.01 5c.37.14.7.35.96.64.27.28.49.63.64 1.05.15.42.23.92.23 1.48zm-1.58-.7c0-.2-.02-.4-.08-.58a1.3 1.3 0 0 0-.74-.81c-.19-.08-.4-.12-.66-.12-.47 0-.87.14-1.2.42-.33.28-.51.64-.55 1.09h3.23zm-55.9 13.26l-1.44-3.75-1.46 3.75h2.9zm-2.11-5.7h1.43l4 9.22H37.8l-.87-2.1H32.9l-.84 2.1H30.2l4.05-9.22zm13.8 2.78c.42 0 .77.08 1.06.22a2.08 2.08 0 0 1 1.14 1.37c.08.3.13.62.13.94v3.91H48.8V20.8c0-.19-.01-.38-.04-.58-.02-.2-.08-.38-.17-.54-.09-.16-.2-.3-.36-.4-.15-.1-.36-.15-.61-.15-.24 0-.46.05-.63.15-.18.1-.32.24-.43.4-.12.17-.2.36-.25.56-.06.2-.08.4-.08.6v3.42h-1.58v-3.78c0-.39-.1-.71-.28-.97-.19-.25-.48-.38-.89-.38a1.22 1.22 0 0 0-1.04.53c-.11.16-.2.34-.25.54-.06.2-.09.41-.09.62v3.44h-1.57V18h1.5v1h.02c.07-.16.17-.3.28-.44a2.2 2.2 0 0 1 .98-.65c.21-.06.44-.1.7-.1.49 0 .9.11 1.22.33.32.22.57.5.75.86a2.24 2.24 0 0 1 2.07-1.19zm7.62 1.86a1.82 1.82 0 0 0-1.38-.68c-.25 0-.48.05-.7.15a.54.54 0 0 0-.3.53c0 .24.1.41.34.51.23.1.57.2 1.02.3l.71.21c.24.1.46.2.66.35a1.53 1.53 0 0 1 .66 1.31 1.83 1.83 0 0 1-.8 1.62c-.23.16-.51.28-.83.35a4.4 4.4 0 0 1-2.43-.15 3.03 3.03 0 0 1-1.15-.76l1.04-.97a2.07 2.07 0 0 0 1.61.78c.12 0 .23-.01.35-.04.12-.02.23-.06.33-.12s.18-.13.24-.23.1-.21.1-.35a.58.58 0 0 0-.37-.56c-.24-.11-.6-.23-1.08-.34a5.24 5.24 0 0 1-.7-.2c-.21-.08-.41-.2-.59-.33-.17-.13-.31-.3-.42-.5-.1-.2-.16-.45-.16-.74a1.78 1.78 0 0 1 .8-1.52c.23-.16.5-.28.8-.36a3.9 3.9 0 0 1 2.25.12c.43.16.77.4 1.03.72l-1.03.9zm1.47-.42V18h1.1v-1.81h1.56v1.8h1.57v1.26H59.8v2.9c0 .28.05.51.15.7.1.18.32.27.67.27a1.97 1.97 0 0 0 .67-.13l.06 1.22a3.54 3.54 0 0 1-1.05.17c-.43 0-.77-.06-1.03-.17a1.55 1.55 0 0 1-.62-.49c-.16-.2-.26-.43-.32-.7a4.06 4.06 0 0 1-.08-.85v-2.92h-1.1zm11.39 1.95v.21l-.01.21h-4.8a1.54 1.54 0 0 0 .58 1.1 2 2 0 0 0 1.22.44c.4 0 .73-.07 1-.22.27-.14.5-.34.67-.59l1.05.83a3.17 3.17 0 0 1-2.7 1.25c-.5 0-.95-.07-1.36-.22a2.9 2.9 0 0 1-1.78-1.67 3.5 3.5 0 0 1-.25-1.38c0-.5.08-.96.25-1.37a3.13 3.13 0 0 1 1.76-1.73 3.56 3.56 0 0 1 2.54-.03c.37.14.7.36.96.64.27.28.49.63.64 1.05.15.43.23.92.23 1.48zm-1.58-.7c0-.2-.02-.4-.08-.57a1.3 1.3 0 0 0-.74-.82c-.19-.08-.4-.12-.66-.12-.47 0-.87.14-1.2.42-.33.28-.51.65-.55 1.09h3.23zm3.1-2.5h1.51v1.04h.03c.18-.37.42-.66.74-.89a1.84 1.84 0 0 1 1.3-.33c.07 0 .13.02.18.03v1.44a2.22 2.22 0 0 0-.49-.07c-.35 0-.64.07-.86.2a1.57 1.57 0 0 0-.76 1.03c-.05.19-.07.34-.07.45v3.35h-1.58V18zm5.77 3.1c0 .24.04.49.11.73a2 2 0 0 0 .34.65 1.68 1.68 0 0 0 1.37.65c.28 0 .54-.06.77-.17a1.9 1.9 0 0 0 .95-1.11 2.19 2.19 0 0 0-.37-2.1c-.16-.2-.36-.35-.58-.48a1.62 1.62 0 0 0-.78-.18 1.68 1.68 0 0 0-1.37.64 2.42 2.42 0 0 0-.45 1.37zm5.19 3.15h-1.5v-.94h-.03c-.21.37-.52.65-.9.84-.4.19-.82.28-1.26.28a3.02 3.02 0 0 1-2.27-.98c-.27-.3-.47-.65-.62-1.05a3.82 3.82 0 0 1 .01-2.6 2.95 2.95 0 0 1 2.84-2 2.82 2.82 0 0 1 1.37.35 2.31 2.31 0 0 1 .74.64h.04V14.4h1.58v9.85zm5.8-2.85h-.35c-.26 0-.52 0-.8.03a3.5 3.5 0 0 0-.78.14c-.23.08-.43.18-.59.32a.69.69 0 0 0-.23.55.66.66 0 0 0 .35.61c.1.06.22.1.35.13.14.03.27.04.4.04.54 0 .95-.14 1.23-.43.28-.28.42-.67.42-1.17v-.22zm.03 2.06h-.04c-.16.28-.41.5-.76.68a2.6 2.6 0 0 1-1.2.27c-.25 0-.52-.03-.8-.1a2.37 2.37 0 0 1-.75-.32 1.72 1.72 0 0 1-.8-1.52c-.01-.47.12-.85.39-1.12.27-.28.61-.5 1.03-.64.42-.15.89-.25 1.4-.3a16.2 16.2 0 0 1 1.5-.07v-.15c0-.4-.14-.68-.42-.87a1.81 1.81 0 0 0-1.02-.28c-.33 0-.65.07-.96.2-.3.15-.56.32-.76.52l-.82-.95c.36-.33.78-.58 1.24-.75a4.26 4.26 0 0 1 2.82-.01c.36.16.65.36.86.61.2.25.35.54.44.85.08.31.12.62.12.94v3.8h-1.47v-.8zm10.84-5.65c.4 0 .76.08 1.05.22a2.08 2.08 0 0 1 1.14 1.37c.09.3.13.62.13.94v3.91h-1.58V20.8c0-.19 0-.38-.04-.58-.02-.2-.08-.38-.17-.54-.08-.16-.2-.3-.36-.4-.15-.1-.35-.15-.6-.15s-.46.05-.64.15c-.17.1-.32.24-.43.4-.12.17-.2.36-.25.56-.05.2-.08.4-.08.6v3.42h-1.58v-3.78c0-.39-.1-.71-.28-.97-.19-.25-.48-.38-.89-.38a1.22 1.22 0 0 0-1.04.53c-.1.16-.2.34-.25.54-.06.2-.08.41-.08.62v3.44h-1.58V18h1.5v1h.02a2.2 2.2 0 0 1 1.26-1.09c.21-.06.45-.1.7-.1.49 0 .9.11 1.22.33.33.22.57.5.75.86a2.24 2.24 0 0 1 2.08-1.19zM0 64.01l5.93-6L0 52l3.95-4 5.93 6 5.92-6 3.95 4-5.92 6 5.92 6L15.8 68l-5.92-6-5.93 6L0 64zm0-48.02l5.93-6L0 4 3.95 0l5.93 6 5.92-6 3.95 4-5.92 6 5.92 6-3.95 3.99-5.92-6-5.93 6-3.95-4zm0 24.03l5.93-6-5.93-6 3.95-4 5.93 6 5.92-6 3.95 4-5.92 6 5.92 6-3.95 4-5.92-6-5.93 6-3.95-4z'
  )
);

