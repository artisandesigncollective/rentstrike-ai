# RentStrike AI — Project Overview

> **One-Line Pitch:** AI that empowers tenants to legally withhold rent or "repair and deduct" using the Implied Warranty of Habitability against non-responsive landlords.

| Field | Value |
|-------|-------|
| **Status** | ✅ MVP Built |
| **Repo** | `e:\hermes\github_fleet\rentstrike-ai` |
| **Price** | $29 flat fee |
| **Target MRR** | $17,400 (600 users/mo) |
| **Last Updated** | 2026-04-26 |

## Key Files
- `frontend/LandingPage.tsx` — Habitability Defender landing page
- `api/stripe_fee.ts` — $29 Stripe Checkout
- `api/generate_notice.ts` — RAG engine generating state-specific legal notices (Notice to Landlord, Code Enforcement Complaint)
- `.sovereign_memory.md` — Architectural log
