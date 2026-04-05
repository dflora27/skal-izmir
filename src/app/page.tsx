export default function RootPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/tr" />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href = "/tr";` }} />
      </body>
    </html>
  );
}
