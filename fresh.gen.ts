// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/about.tsx";
import * as $2 from "./routes/csv.tsx";
import * as $3 from "./routes/docs.tsx";
import * as $4 from "./routes/index.tsx";
import * as $$0 from "./islands/CopyToClip.tsx";
import * as $$1 from "./islands/CsvChart.tsx";
import * as $$2 from "./islands/MemoryChart.tsx";
import * as $$3 from "./islands/Nav.tsx";
import * as $$4 from "./islands/Upload.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/about.tsx": $1,
    "./routes/csv.tsx": $2,
    "./routes/docs.tsx": $3,
    "./routes/index.tsx": $4,
  },
  islands: {
    "./islands/CopyToClip.tsx": $$0,
    "./islands/CsvChart.tsx": $$1,
    "./islands/MemoryChart.tsx": $$2,
    "./islands/Nav.tsx": $$3,
    "./islands/Upload.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
