// Pixel-art room drawn on a 192×108 canvas. Every shape is a filled rectangle,
// so the scene stays crisp when the canvas is scaled up with `image-rendering: pixelated`.

export const ROOM_W = 192;
export const ROOM_H = 108;

export type RoomState = {
  /** Animation tick, advances ~9 times a second. */
  t: number;
  night: boolean;
  /** The Claude mascot waves while its hotspot is hovered. */
  wave: boolean;
};

const PALETTE = {
  day: { wall: "#cfc6e6", wall2: "#bdb3db", floor: "#a57f63", floor2: "#8f6c53", sky: "#8cc4ff", frame: "#efe9ff" },
  night: { wall: "#2b2745", wall2: "#25213d", floor: "#3a2c3f", floor2: "#30243a", sky: "#1b2550", frame: "#4a4470" },
};

const CODE_COLORS = ["#7ee0a1", "#ffcf6b", "#7aa8ff", "#ff7a90", "#c6b8ff"];
const CODE = Array.from({ length: 40 }, (_, i) => ({
  indent: [0, 2, 4, 2, 4, 6][i % 6],
  len: 4 + ((i * 7) % 14),
  color: CODE_COLORS[(i * 3) % 5],
  color2: CODE_COLORS[(i * 2 + 1) % 5],
  len2: i % 3 ? 3 + (i % 5) : 0,
}));
const STARS = Array.from({ length: 14 }, (_, s) => [18 + ((s * 11) % 36), 16 + ((s * 7) % 20), s] as const);
const BOOKS = ["#e5484d", "#4a7bd0", "#ffcf6b", "#7ee0a1", "#c6b8ff", "#ff9a5a", "#5bc0be", "#e5484d"];

export function drawRoom(g: CanvasRenderingContext2D, { t, night, wave }: RoomState) {
  const R = (x: number, y: number, w: number, h: number, c: string) => {
    g.fillStyle = c;
    g.fillRect(x, y, w, h);
  };
  const p = night ? PALETTE.night : PALETTE.day;
  const typing = Math.floor(t / 2) % 2;
  const sip = t % 120 > 100;
  const think = t % 120 > 60 && t % 120 < 84;
  const blink = t % 37 === 0;

  // Wall and floor
  R(0, 0, ROOM_W, 88, p.wall);
  for (let y = 6; y < 86; y += 8) R(0, y, ROOM_W, 1, p.wall2);
  R(0, 86, ROOM_W, 2, "#1a1626");
  R(0, 88, ROOM_W, 20, p.floor);
  for (let x = 0; x < ROOM_W; x += 16) R(x + ((x / 16) % 2) * 8, 94, 1, 14, p.floor2);

  // Window
  R(14, 12, 44, 36, p.frame);
  R(16, 14, 40, 32, p.sky);
  if (night) {
    for (const [sx, sy, s] of STARS) if ((t + s * 5) % 40 > 6) R(sx, sy, 1, 1, "#fff6c9");
    R(44, 18, 6, 6, "#fff3c4");
    R(46, 18, 4, 2, p.sky);
  } else {
    R(20, 18, 6, 6, "#ffd84d");
    const cx = 16 + (Math.floor(t / 6) % 50) - 10;
    g.save();
    g.beginPath();
    g.rect(16, 14, 40, 32);
    g.clip();
    R(cx, 30, 12, 3, "#fff");
    R(cx + 3, 28, 6, 2, "#fff");
    g.restore();
    R(14, 12, 2, 36, p.frame);
    R(56, 12, 2, 36, p.frame);
  }
  R(35, 14, 2, 32, p.frame);
  R(16, 29, 40, 2, p.frame);
  R(12, 48, 48, 3, "#6b4a3a");

  // Bookshelf
  R(140, 26, 42, 2, "#6b4a3a");
  R(140, 45, 42, 2, "#6b4a3a");
  for (let b = 0; b < 8; b++) {
    const h = 9 + ((b * 5) % 4);
    R(142 + b * 5, 26 - h, 4, h, BOOKS[b]);
  }
  for (let b = 0; b < 5; b++) {
    const h = 8 + ((b * 3) % 4);
    R(142 + b * 5, 45 - h, 4, h, BOOKS[(b + 3) % 8]);
  }
  R(170, 39, 8, 6, "#3d7a4b");
  R(172, 35, 4, 4, "#4f9a5f");

  // Cat, asleep
  R(26, 83, 14, 5, "#e09a4f");
  R(36, 80, 6, 5, "#e09a4f");
  R(36, 79, 1, 1, "#e09a4f");
  R(41, 79, 1, 1, "#e09a4f");
  R(20, 85 + (Math.floor(t / 8) % 4 === 0 ? -1 : 0), 6, 2, "#e09a4f");
  R(30, 83, 1, 5, "#c07a35");
  R(33, 83, 1, 5, "#c07a35");

  // Chair
  R(62, 50, 3, 24, "#2a2638");
  R(64, 72, 26, 3, "#2a2638");
  R(76, 75, 2, 9, "#1c1a26");
  R(68, 84, 20, 2, "#1c1a26");
  R(68, 86, 2, 2, "#000");
  R(86, 86, 2, 2, "#000");

  // Desk
  R(60, 66, 112, 3, "#8a5f45");
  R(60, 69, 112, 1, "#6b4a3a");
  R(64, 70, 3, 18, "#6b4a3a");
  R(166, 70, 3, 18, "#6b4a3a");
  R(140, 70, 24, 10, "#7a543e");
  R(150, 74, 4, 1, "#c9a27a");

  // Plant
  R(66, 59, 8, 7, "#b5653f");
  R(68, 53, 2, 6, "#4f9a5f");
  R(70, 50, 2, 9, "#3d7a4b");
  R(72, 54, 2, 5, "#4f9a5f");

  // Monitor with scrolling code
  R(104, 36, 36, 26, "#151421");
  R(106, 38, 32, 22, "#0f1426");
  const off = Math.floor(t / 3);
  for (let l = 0; l < 7; l++) {
    const ln = CODE[(off + l) % CODE.length];
    const y = 39 + l * 3;
    R(107 + ln.indent, y, Math.min(ln.len, 28 - ln.indent), 1, ln.color);
    if (ln.len2) R(107 + ln.indent + ln.len + 1, y, ln.len2, 1, ln.color2);
  }
  if (t % 12 < 6) R(109, 59, 2, 2, "#ece6ff");
  R(120, 62, 4, 4, "#151421");
  R(114, 65, 16, 1, "#151421");

  // Keyboard
  R(92, 64, 20, 2, "#3a3650");
  for (let k = 0; k < 9; k++) R(93 + k * 2, 64, 1, 1, "#6a6488");

  // Mug and steam (the mug leaves the desk while he sips)
  if (!sip) {
    R(146, 59, 6, 7, "#e5484d");
    R(152, 61, 2, 3, "#e5484d");
    R(147, 59, 4, 1, "#3b2219");
    for (let s = 0; s < 3; s++) {
      const sy = 57 - ((t + s * 4) % 10);
      R(148 + ((t + s) % 3 === 0 ? 1 : 0), sy, 1, 1, night ? "#8f88b8" : "#ffffff");
    }
  }

  // Desk lamp
  R(158, 64, 9, 2, "#2a2638");
  R(162, 46, 2, 18, "#2a2638");
  R(154, 42, 12, 5, "#2a2638");
  R(155, 47, 10, 1, night ? "#ffd98a" : "#5a5570");
  if (night) {
    g.globalAlpha = 0.16;
    g.fillStyle = "#ffd98a";
    g.beginPath();
    g.moveTo(155, 48);
    g.lineTo(165, 48);
    g.lineTo(176, 66);
    g.lineTo(140, 66);
    g.closePath();
    g.fill();
    g.globalAlpha = 1;
  }

  // Developer: back arm, legs, torso
  R(88, 52, 6, 5, "#3a62ad");
  R(92, 57, 8, 4, "#3a62ad");
  R(99, 59 - (typing ? 0 : 1), 3, 3, "#d9a882");
  R(76, 68, 20, 5, "#2b3550");
  R(93, 72, 5, 14, "#2b3550");
  R(93, 86, 8, 2, "#f3f1f8");
  R(73, 47, 15, 23, "#4a7bd0");
  R(71, 46, 6, 9, "#3a62ad");
  R(74, 66, 14, 2, "#3a62ad");
  R(81, 45, 4, 3, "#e8b48f");

  // Head: bald, full beard
  const hb = think || sip ? -1 : 0;
  const beard = "#3b2a22";
  R(77, 35 + hb, 11, 11, "#f0c39b");
  R(78, 34 + hb, 9, 1, "#f0c39b");
  R(80, 36 + hb, 3, 1, "#f9dcc0");
  R(81, 35 + hb, 1, 1, "#f9dcc0");
  R(84, 37 + hb, 3, 1, beard);
  if (!blink) R(85, 39 + hb, 1, 2, "#1a1626");
  R(79, 39 + hb, 2, 4, beard);
  R(80, 42 + hb, 8, 4, beard);
  R(82, 46 + hb, 6, 1, beard);
  R(87, 41 + hb, 1, 1, beard);
  R(85, 43 + hb, 2, 1, "#c98a6a");
  R(81, 39 + hb, 2, 2, "#e3a982");

  // Front arm: typing, or lifting the mug
  if (sip) {
    R(84, 49, 6, 5, "#4a7bd0");
    R(90, 46, 6, 5, "#4a7bd0");
    R(96, 47, 3, 3, "#f0c39b");
    R(96, 44, 6, 7, "#e5484d");
  } else {
    R(84, 50, 7, 6, "#4a7bd0");
    R(89, 56, 10, 4, "#4a7bd0");
    R(98, 58 + (typing ? 1 : 0), 4, 3, "#f0c39b");
  }

  // Thought bubble with the Claude mascot inside
  R(91, 30, 2, 2, "#ece6ff");
  R(94, 25, 3, 3, "#ece6ff");
  R(97, 5, 26, 19, "#ece6ff");
  R(96, 6, 28, 17, "#ece6ff");
  const cl = "#d97757";
  const hop = (think || (t % 90 > 40 && t % 90 < 44)) && t % 6 < 3 ? -2 : 0;
  const my = 12 + hop;
  R(104, my, 12, 7, cl);
  if (t % 53 > 1) {
    R(107, my + 2, 1, 2, "#1a1626");
    R(112, my + 2, 1, 2, "#1a1626");
  }
  if (wave || think) {
    R(102, my - 1 + (t % 4 < 2 ? 0 : 1), 2, 3, cl);
    R(116, my - 1 + (t % 4 < 2 ? 1 : 0), 2, 3, cl);
  } else {
    R(102, my + 3, 2, 2, cl);
    R(116, my + 3, 2, 2, cl);
  }
  const ly = my + 7;
  const lh = 21 - ly;
  for (const lx of [105, 107, 112, 114]) R(lx, ly, 1, lh, cl);
  R(102, 21, 16, 1, "#d6cdf0");
}
