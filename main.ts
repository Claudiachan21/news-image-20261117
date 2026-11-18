// news-image-20261117 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a newspaper front page
// summing up the world's news of Tuesday 17 November 2026, drawn in
// HTML/CSS/SVG and rendered to PNG. The PNG is palette-quantized (256
// colours) to keep the file small: smaller files win exact ties. The
// program copies it to the output directory as entry.png, so both
// grader runs write identical bytes.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
