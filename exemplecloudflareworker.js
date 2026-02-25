addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const targetUrl = `https://yourproject.figweb.site${url.pathname}${url.search}`;

  const response = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers
  });

  const contentType = response.headers.get('content-type');

  if (contentType && contentType.includes('text/html')) {
    let html = await response.text();

    const gtagScript = `
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXX');
      </script>
    `;

    html = html.replace('<body', `<body>${gtagScript}`);

    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  }

  return response;
}