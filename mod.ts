// Sift is a small routing library that abstracts away details like starting a
// listener on a port, and provides a simple function (serve) that has an API
// to invoke a function for a specific path.
import {
  json,
  serve,
} from "https://deno.land/x/sift@0.4.0/mod.ts";

// For all requests to "/" endpoint, we want to invoke home() handler.
serve({
  "/": home,
});

async function home(request: Request) {
  const payload = await request.text();

  const body = JSON.parse(payload);

  console.log(body);
  return json({
    type: 4,
    data: {
      content: `Hello!`,
    },
  });

  // shouldn't reach here.
  // return json({ error: "bad request" }, { status: 400 });
}
