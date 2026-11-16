# Product Requirements Document

## SprachFit — Goethe A1 Exam Readiness Check

| Document field | Value |
|---|---|
| Product | SprachFit |
| Supporting organization | Globio |
| Product owner | Globio |
| Document status | MVP requirements |
| Version | 1.0 |
| Primary examination | Goethe-Zertifikat A1 (Start Deutsch 1) |

## 1. Product summary

SprachFit is a short, supportive diagnostic check for learners who have completed German A1 training. It helps a learner understand how their vocabulary, grammar, and reading perform in a small set of A1-style questions, and what they could practise before booking an exam.

The check is an initial knowledge snapshot, not an official exam, a complete readiness assessment, or a prediction of passing. It does not assess listening, writing, or speaking.

### Product promise

> Understand your A1 strengths, find useful next steps, and prepare thoughtfully before booking.

## 2. Problem and opportunity

After completing an A1 course, learners may not know which topics they understand well or what to revise before paying for an examination. A single overall score is not enough to show where they need support.

SprachFit addresses this need with a brief diagnostic, a score for each assessed skill, transparent answer explanations, and concrete practice suggestions based on missed topics.

## 3. Goals and success criteria

### Goals

- Help A1 learners identify strengths and gaps in vocabulary, grammar, and reading.
- Explain the result in clear, encouraging language.
- Recommend two or three relevant study actions.
- Make clear which Goethe A1 skills this check does not assess.
- Keep the initial assessment simple, deterministic, and inexpensive to operate.

### MVP success criteria

- A learner can complete the assessment without creating an account.
- Results show the overall score and separate scores for all three assessed skills.
- The result includes up to three actionable recommendations based on the learner's answers.
- Every question has a correct answer and a short explanation available in the results.
- The app clearly states that listening, writing, and speaking are not assessed and that the score is not an official exam result or pass prediction.

## 4. Users

### Primary users

- Learners who have completed German A1 training.
- Learners preparing for the Goethe-Zertifikat A1.
- Learners deciding what to revise before selecting an exam date.

### User need

> I have completed A1 German. I want to understand what I know, what I should practise next, and what this short check cannot tell me about exam readiness.

## 5. Product principles

1. **Supportive, not discouraging.** Results should guide the learner, not shame or alarm them.
2. **Transparent.** Show the answer key, the learner's response, and an explanation.
3. **Deterministic.** The same answers and rules produce the same scores and recommendations.
4. **Honest about coverage.** Do not imply that three assessed skills represent the full Goethe exam.
5. **Privacy-conscious.** The MVP requires no account and does not send assessment answers to a backend.
6. **German-first assessment.** Question prompts, answer options, and learning feedback are in German.

## 6. Scope

### MVP scope

- A welcome screen with confirmation that the learner has completed A1 training.
- A 15-question multiple-choice diagnostic:
  - 5 vocabulary questions.
  - 5 grammar questions.
  - 5 reading-comprehension questions based on one shared short passage.
- One point for each correct answer; no negative marking.
- Overall and per-skill scores.
- Informal readiness bands and explanations.
- A personalized plan of two or three study actions.
- An answer review with the correct option, the learner's choice, and a short explanation for each question.
- Retake the same assessment.
- Explicitly identify listening, writing, and speaking as not assessed.

### Out of scope for the MVP

- A complete or official Goethe-Zertifikat A1 examination.
- Listening, writing, or speaking assessments.
- A prediction of the learner's probability of passing.
- Accounts, learner profiles, backend services, or a question-results database.
- Saving attempt history or comparing scores across attempts.
- AI-generated scoring, explanations, or recommendations.
- A separate grammar-only reassessment.

## 7. User journey

1. **Welcome:** The learner reads the purpose and limitations of the check.
2. **Confirm A1 training:** The learner confirms they have completed A1 training before starting.
3. **Answer questions:** The learner answers 15 German multiple-choice questions. The next question is unavailable until an answer is selected.
4. **View results:** The learner sees the overall score, readiness band, and scores for vocabulary, grammar, and reading.
5. **Plan practice:** The learner receives the top two or three relevant learning activities, with an exercise, suggested duration, and a way to check their work.
6. **Review answers:** The learner can inspect their answer, the correct answer, and its explanation for every question.
7. **Retake or revise:** The learner can restart the assessment or change answers by revisiting the quiz.

## 8. Assessment design

### Assessment blueprint

| Skill | Question count | Coverage |
|---|---:|---|
| Vocabulary | 5 | Everyday expressions, word meanings, days and time, food and drink, places |
| Grammar | 5 | Verb conjugation, possessive articles, noun articles, prepositions |
| Reading | 5 | Finding details, days and routine, times; questions share one short passage |
| **Total** | **15** | **Three assessed skills** |

Question categories must be mutually exclusive:

- **Vocabulary:** meanings, everyday expressions, food, time, places, and similar words or phrases.
- **Grammar:** articles, verb conjugation, pronouns, sentence structure, and prepositions.
- **Reading:** understanding short texts and identifying information in context.

For example, an item testing the article in “Ich ___ 30 Jahre alt” belongs to grammar, not vocabulary.

### Question and answer rules

- Each question has three or four multiple-choice options and one correct option.
- The question bank includes a stable skill and topic tag for each question.
- Reading questions use a shared A1-level passage.
- A question earns one point if the selected option matches its answer key; otherwise it earns zero.
- Blank answers are not scored as correct.
- Learners may retake the check.

## 9. Scoring and readiness interpretation

### Scoring

For each skill:

```text
Skill score (%) = correct answers in skill / 5 × 100
```

For the overall score:

```text
Overall score (%) = total correct answers / 15 × 100
```

Each question is equally weighted. The displayed overall percentage is rounded to a whole percent. For example, 11/15 is displayed as 73%; the unrounded value is 73.33%.

The overall calculation is equivalent to the mean of the three skill percentages because each skill has five questions.

### Proposed overall readiness bands

These are informal product interpretations, not Goethe-Institut grades or validated pass thresholds.

| Overall score | Interpretation | Suggested next step |
|---:|---|---|
| 85–100% | Strong foundation | Try a full mock exam that includes all exam modules. |
| 70–84% | Nearly ready in assessed skills | Practise identified gaps and try a full mock exam before booking. |
| 50–69% | Developing | Complete focused revision and check progress again. |
| Below 50% | More preparation recommended | Revisit A1 fundamentals before deciding when to book. |

### Skill-level interpretation

Show the score and number correct for each skill. The numerical skill-specific readiness thresholds are a product decision to confirm. Do not treat a display label alone as the overall readiness decision.

### Required safeguard

Always describe the result as a preliminary knowledge-readiness snapshot. Never describe it as a pass probability. Listening, writing, and speaking must be visibly marked “not assessed” wherever the results describe assessment coverage.

## 10. Deterministic recommendation rules

The MVP recommendation engine uses predefined question tags and authored recommendation content. It does not use a model or generate new recommendations dynamically.

### Inputs

- The answer key and the learner's selected answer for each question.
- Each question's skill and topic tag.
- The correct/incorrect result for each question.

### Selection rules

1. Ignore correctly answered questions when selecting weak topics.
2. Group missed questions by topic tag.
3. Rank missed-topic groups by number of missed questions, descending. Break ties using the lower score of the associated skill.
4. Select up to three distinct missed-topic recommendations.
5. If fewer than three topics were missed, fill the remaining slots in order with the predefined full-mock-exam, listening, and writing/speaking recommendations.
6. Return no more than three recommendations.
7. For each recommendation, show the topic, why it is suggested, an exercise, an estimated duration, and a self-check.

The same question set and answer set must always produce the same overall score, skill scores, readiness band, and recommendations.

### Recommendation tag examples

| Question tag | Recommendation topic |
|---|---|
| `vocabulary.food` | Food and drink |
| `vocabulary.time` | Days and time |
| `vocabulary.places` | Places around town |
| `grammar.verbs` | Present-tense verb forms |
| `grammar.articles` | German articles |
| `grammar.pronouns` | Pronouns and possessives |
| `grammar.prepositions` | Prepositions for places |
| `reading.details` | Finding key details |
| `reading.sequence` | Days and routine |
| `reading.time` | Times in short texts |

## 11. Functional requirements

Priority definitions: **P0** = required for the MVP; **P1** = planned enhancement; **P2** = future capability.

| ID | Requirement | Priority | Acceptance criteria | MVP status |
|---|---|---:|---|---|
| FR01 | Learner onboarding | P0 | A learner must confirm A1 training completion before the assessment can start. | Implemented |
| FR02 | Question bank | P0 | Present 15 A1-level questions: 5 vocabulary, 5 grammar, and 5 reading. | Implemented |
| FR03 | Assessment engine | P0 | Show one question at a time; capture a single choice; prevent advancing without a choice; allow navigation to previous questions. | Implemented |
| FR04 | Scoring engine | P0 | Score one point per correct answer; apply no negative marking; compute overall and per-skill scores deterministically. | Implemented |
| FR05 | Readiness dashboard | P0 | Show the overall score, overall band, skill scores, and the unassessed exam modules. | Implemented |
| FR06 | Recommendation engine | P0 | Select no more than three recommendations using the deterministic rules in §10. | Implemented |
| FR07 | Learning exercises | P1 | Each recommendation includes a concrete exercise, suggested duration, and a way to verify improvement. | Implemented |
| FR08 | Reassessment | P1 | Allow the learner to start a fresh attempt. | Implemented; same question set |
| FR09 | Progress tracking | P1 | Store and compare a learner's previous and latest attempts. | Not implemented |
| FR10 | Additional exam skills | P2 | Add assessment coverage for listening, writing, and speaking alongside reading to cover all four Goethe exam skills. | Not implemented |
| FR11 | Rule-based deterministic scoring | P0 | Fixed answer keys and scoring rules produce repeatable results. | Implemented |
| FR12 | Skill-specific readiness thresholds | P0 | Define and apply approved per-skill thresholds in addition to the overall band. | Partially implemented; numeric thresholds require product confirmation |
| FR13 | Tagged question bank | P0 | Each question has a skill and topic tag usable by the scoring and recommendation rules. | Implemented |
| FR14 | Randomized question selection | P0 | Select questions from the bank while preserving the required skill balance. | Not implemented; questions are fixed and ordered |
| FR15 | Avoid unnecessary question repetition | P0 | Avoid presenting recently completed questions again when other eligible questions are available. | Not implemented |
| FR16 | Equivalent difficulty between attempts | P0 | Retakes use equivalent question counts, skills, and difficulty. | Not implemented; the same set is reused |
| FR17 | Store attempt history | P1 | Persist attempts so learners can revisit previous results. | Not implemented |
| FR18 | Compare attempts | P1 | Show changes in overall and per-skill performance across saved attempts. | Not implemented |
| FR19 | AI-powered answer explanations | P2 | Optionally generate explanations with AI; this must not alter deterministic scoring. | Not implemented; current explanations are authored and deterministic |
| FR20 | Full Goethe mock examination | P2 | Provide a full-length, four-skill mock examination with appropriate exam conditions. | Not implemented |

## 12. Non-functional requirements

- **Responsive:** The assessment and results should work on mobile and desktop screens.
- **Accessible interaction:** Controls should be keyboard operable, have visible focus, and expose progress and answer state to assistive technology.
- **Privacy:** Do not require sign-in or transmit answers to a server in the MVP. State clearly that answers stay on the device.
- **Availability:** The MVP should be deployable as static files with no runtime backend dependency.
- **Performance:** Questions and results should render locally without waiting for a network request.
- **Brand:** Present the check as a Globio-supported product named SprachFit.
- **Language:** Keep question prompts, choices, instructions, explanations, results, and study recommendations in German.

## 13. Data and privacy

The MVP collects no personal information and does not persist assessment answers or attempt history. The A1 completion confirmation is used only to gate access to the quiz. Attempts exist only in page memory and are lost when the page is refreshed or restarted.

Persistent progress tracking requires a future product and privacy decision, including the storage location, retention, learner identification, and consent model.

## 14. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Learner interprets the score as a pass guarantee. | Use the preliminary knowledge-readiness wording and display the assessment limitations on results. |
| Three skills give an incomplete view of exam readiness. | Mark listening, writing, and speaking as not assessed and recommend full mock practice. |
| A small question sample overstates or understates ability. | Show skill-level counts and describe the result as an informal snapshot. |
| Reusing a fixed question set makes retakes predictable. | Track randomized selection, repeat avoidance, and equivalent difficulty as P0 follow-up work. |
| Thresholds or recommendations feel arbitrary. | Keep cutoffs explicit, deterministic, documented, and clearly non-official; confirm skill-specific thresholds before implementing them. |

## 15. Assumptions and open decisions

- Overall readiness bands are proposed product guidance and not validated exam cut scores.
- **Open:** Approve the numerical skill-specific readiness thresholds required by FR12.
- **Open:** Define the minimum question-bank size and selection rules needed to implement randomization and reduce repeats.
- **Open:** Define how equivalent difficulty will be measured across question sets.
- **Open:** Decide whether attempt history will remain device-local or require accounts and server storage.
- **Open:** Determine whether and how to add writing to the assessment before describing it as a four-skill mock examination.

## 16. Current MVP implementation note

The published MVP is a static, client-side application. It contains 15 German questions, deterministic answer checking, rounded overall and skill scores, four overall readiness bands, authored answer explanations, and up to three deterministic practice recommendations. It requires no account or backend.

Randomized question selection, repeat avoidance, equivalent-difficulty question sets, numerical per-skill readiness thresholds, saved attempt history, and attempt comparisons remain outstanding. See the MVP status column in §11 before treating a requirement as delivered.
