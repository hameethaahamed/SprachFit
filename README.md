# SprachFit — A1 readiness check

A lightweight, mobile-friendly self-check for learners who have completed A1 training and are preparing for the Goethe-Zertifikat A1. It has 15 short questions across vocabulary, grammar and reading, followed by skill-by-skill scores and a focused practice plan.

The quiz and results are presented in German. Results include all correct answers, the learner's selected answers, short explanations, and personalized next steps based on missed topics.

See [PRD.md](./PRD.md) for the product goals, assessment and scoring rules, functional requirements, and outstanding MVP gaps.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. For example, with Node.js:

```powershell
npx serve .
```

No build step, backend, account or data collection is required.

## How the check works

- Learners confirm that they have completed A1 training before starting.
- Five questions each for vocabulary, grammar and reading. The five reading questions share one short passage.
- Each skill is reported independently as a percentage, alongside the number correct.
- The overall preliminary knowledge-readiness score is correct answers divided by 15; each skill score is correct answers divided by 5.
- **Strong foundation:** 85–100%.
- **Nearly ready in assessed skills:** 70–84%.
- **Developing:** 50–69%.
- **More preparation needed:** below 50%.
- Missed topics are grouped by concept and ranked by misses. The plan includes up to three targeted practice actions with an exercise, suggested duration and a way to check progress.
- Listening, writing and speaking are explicitly shown as not assessed, with suggestions to practise those exam modules.

These are informal learning guidelines, not validated exam cut scores. The score is not a chance of passing, an official Goethe-Institut exam or a reliable pass prediction. The check samples only vocabulary, grammar and reading; the real A1 exam also includes listening, writing and speaking.

## Publish on GitHub Pages

The app is static and can be hosted on GitHub Pages or any static web host. To deploy with the included workflow:

1. Create a GitHub repository and push the contents of this folder to its `main` branch.
2. In **Settings → Pages**, select **GitHub Actions** as the build and deployment source.
3. The workflow deploys on each subsequent push to `main`. Its first run can also be started from the **Actions** tab.
4. GitHub shows the public URL in **Settings → Pages** and on the completed deployment.

The app uses local system fonts and makes no external API or font requests.
