# eraykaya.me

Personal site of Eray Kaya. The home page is a small pixel-art room, drawn on a canvas, where the room doubles as the menu: the monitor leads to Work, the bookshelf to Writing, the window to About and the mug to Contact. The desk lamp switches between the light and dark theme.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- `next-themes` for system-aware light and dark themes
- Articles come from the dev.to API and refresh at most once an hour

## Editing content

All text lives in `src/content/site.ts`: the tagline, the rotating "Now" lines, the About paragraphs, work history and social links.

The scene itself is in `src/components/room/draw.ts`. It is a 192×108 grid of filled rectangles, scaled up with `image-rendering: pixelated`.

## Development

```bash
yarn install
yarn dev        # http://localhost:3000
yarn lint
yarn typecheck
yarn build
```

Requires Node.js 20.9 or newer.
