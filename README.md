Installed:

Next.js
npx create-next-app@latest .

Contentful
npm install contentful

Styled Components
npm install --save styled-components

____________
For using local fonts:
OBS! Create a folder "fonts" in app-folder

-- in layout.tsx --
1. Import font
import localFont from "next/font/local";

2. configure font
const exampleFont = localFont({
  src: "./fonts/SOME_FONT.woff",
  variable: "--font-NAME-type",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    3. use font-varible
      <body className={`${exampleFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
____________

## Favicon Recommendations

To ensure your favicon looks good across different devices and browsers, consider using the following sizes:

- **16x16 px**: Standard for browser tabs.
- **32x32 px**: For high-resolution displays and bookmarks.
- **48x48 px**: Some browsers use this size.
- **64x64 px and 128x128 px**: For larger icons in applications.

**Recommended File Formats:**

- **ICO**: Best for compatibility, can include multiple sizes in one file.
- **PNG**: Good quality and supports transparency.

OBS! Save it as favicon.ico and place the icon in the same folder as app-folder

____________

OBS! IN CONTENTFUL, LOG IN AND GO TO SETTINGS, CHOSE API KEYS, CREATE ONE OF IF EMPTY, USE THE CREDENTIALS

.env.local - file needs to setup and configure in teh root-map
example things to add in your .env.local:

CONTENTFUL_SPACE_ID=your Space ID
CONTENTFUL_ACCESS_TOKEN=Content Delivery API token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=Content Preview API token
