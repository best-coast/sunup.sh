// sunup.sh — static landing page for sunup.
// The Worker only exists to fold www onto the apex and add headers;
// everything visible lives in ./public.

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.sunup.sh") {
      url.hostname = "sunup.sh";
      return Response.redirect(url.toString(), 301);
    }

    const res = await env.ASSETS.fetch(request);
    const headers = new Headers(res.headers);
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    return new Response(res.body, { status: res.status, headers });
  },
} satisfies ExportedHandler<Env>;
