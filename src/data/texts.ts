import type { TextData } from "../interfaces/types.js";

/*
  These are the list of data needed for this project.
  Add fields if you want but check the TextData[] type to be
  consistent.
*/

export const data: TextData[] = [
  {
    id: 1,
    content:
      "Hey team, quick update: deployment to staging passed, but login API is still returning 401 for expired tokens.",
    type: "long_text",
    typingSpeed: "normal",
    difficulty: "medium",
  },
  {
    id: 2,
    content: "git push origin feature/fix-null-pointer",
    type: "short_text",
    typingSpeed: "fast",
    difficulty: "easy",
  },
  {
    id: 3,
    content:
      "Bro, nag-crash yung app kapag walang internet. We need offline caching for product images and cart data ASAP.",
    type: "long_text",
    typingSpeed: "normal",
    difficulty: "hard",
  },
  {
    id: 4,
    content:
      "const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);",
    type: "short_text",
    typingSpeed: "normal",
    difficulty: "hard",
  },
  {
    id: 5,
    content:
      "Reminder: client meeting at 3:30 PM, prepare demo accounts, sample invoices, and backup screenshots just in case.",
    type: "long_text",
    typingSpeed: "normal",
    difficulty: "medium",
  },
  {
    id: 6,
    content: "Wait—did we migrate the database before running the seed script?",
    type: "short_text",
    typingSpeed: "fast",
    difficulty: "medium",
  },
  {
    id: 7,
    content:
      "User feedback says the checkout button is 'too hidden' on mobile. Let's move it above the fold and test on 360x800 resolution.",
    type: "long_text",
    typingSpeed: "normal",
    difficulty: "hard",
  },
  {
    id: 8,
    content: "npm install && npm run build",
    type: "short_text",
    typingSpeed: "fast",
    difficulty: "easy",
  },
  {
    id: 9,
    content:
      'Nag message si client: "Can we add PayMongo + GCash by Friday?" Realistically, backend integration pa lang 2–3 days na.',
    type: "long_text",
    typingSpeed: "normal",
    difficulty: "hard",
  },
  {
    id: 10,
    content: "TODO: refactor AuthService.ts before release 🚨",
    type: "short_text",
    typingSpeed: "fast",
    difficulty: "medium",
  },
  {
    id: 11,
    content:
      "When handling edge cases, remember to check null, undefined, empty arrays, and unexpected API payloads. Bugs love assumptions.",
    type: "long_text",
    typingSpeed: "slow",
    difficulty: "hard",
  },
  {
    id: 12,
    content: "SELECT * FROM users WHERE last_login < '2025-01-01';",
    type: "short_text",
    typingSpeed: "normal",
    difficulty: "hard",
  },
  {
    id: 13,
    content:
      "Quick thought: instead of building everything from scratch, can we reuse the analytics microservice we wrote last quarter?",
    type: "long_text",
    typingSpeed: "normal",
    difficulty: "medium",
  },
  {
    id: 14,
    content: "404 Not Found — check route spelling.",
    type: "short_text",
    typingSpeed: "fast",
    difficulty: "easy",
  },
  {
    id: 15,
    content:
      "Sometimes coding late at night feels productive, but remember to rest. A tired developer ships bugs faster than features.",
    type: "long_text",
    typingSpeed: "slow",
    difficulty: "medium",
  },
  {
    id: 16,
    content: "Branch A Merge Conflict Test Text.",
    type: "short_text",
    typingSpeed: "fast",
    difficulty: "easy",
  },
];
