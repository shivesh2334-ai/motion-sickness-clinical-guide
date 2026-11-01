# MotionCare — motion sickness clinical guide

Buildless, mobile-friendly clinical reference for assessment, selective tests, prevention, treatment, Indian medicine brands and follow-up. Rule-based logic; no AI API key required.

## Run

Serve this directory with `python3 -m http.server 8000` and open http://localhost:8000. Run checks with `node clinical.test.cjs`. No package installation or build needed.

## Deploy to Vercel

Import the repository, select Other as framework, leave build/install commands empty, and serve the root directory. `vercel.json` supplies response security headers. No environment variables are required.

## Content

15 brand references: five centrally acting H1 antihistamine products, five cinnarizine products and five cinnarizine/dimenhydrinate combination products including Spinfree. Groups overlap pharmacologically. Listing does not establish popularity, current stock or therapeutic suitability. Company fields reflect the listing's marketer, not necessarily the pack manufacturer. Scopolamine Indian availability could not be verified; no unsupported five-brand list is invented.

The supplied PDF informed the clinical framework but is not redistributed. Sources are linked in the application. Evidence checked 1 November 2026; no automatic guideline update or real-time inventory feature.

## Clinical boundaries

Not a diagnostic device or prescription generator. Red flags take priority; atypical episodes prompt assessment of alternatives. Adult dose references do not establish pediatric or pregnancy dosing. Spinfree is identified as a vertigo-labelled combination rather than automatically recommended for travel sickness. Verify exact formulation, contraindications, frequency, daily maximum and duration against the current local label before prescribing.

Inputs are held only in page memory. No storage, analytics, account, backend or patient upload. External source links open third-party websites. Print/save PDF includes all reference sections and any generated assessment.
