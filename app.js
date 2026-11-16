const readingPassage = "Hallo! Ich heiße Lukas. Ich wohne in Berlin. Ich arbeite von Montag bis Freitag in einem Café. Am Samstag spiele ich Fußball. Am Sonntag besuche ich meine Eltern. Ich stehe jeden Tag um 7 Uhr auf.";

function question(skill, topic, prompt, options, answer, tag, practice, tip, exercise, minutes, verify, explanation, passage = "") {
  return { skill, topic, prompt, options, answer, tag, practice, tip, exercise, minutes, verify, explanation, passage };
}

const questions = [
  question("Vocabulary", "Alltagsausdrücke", "Was bedeutet: „Ich hätte gern ein Brötchen“?", ["Ich möchte bitte ein Brötchen.", "Ich habe ein Brötchen zu Hause.", "Ich suche die Bäckerei."], 0, "vocabulary.requests", "Bitten und bestellen", "Übe wichtige Sätze zum Bestellen: „Ich hätte gern …“, „Bitte“ und „Danke“.", "Schreibe drei Bestellungen für ein Café und sprich sie laut aus.", 10, "Prüfe, ob jede Bestellung ein Lebensmittel nennt und „gern“ richtig verwendet.", "„Ich hätte gern …“ ist eine höfliche Bitte. Hier möchte die Person ein Brötchen bestellen."),
  question("Vocabulary", "Wortbedeutungen", "Was ist das Gegenteil von „teuer“?", ["billig", "groß", "schön"], 0, "vocabulary.words", "Wörter und Gegenteile", "Wiederhole häufige Gegenteile: teuer/billig, groß/klein und alt/neu.", "Schreibe fünf Wortpaare mit Gegenteilen auf und bilde kurze Sätze damit.", 10, "Decke eine Seite der Wortpaare ab und nenne das passende Gegenteil.", "„Billig“ bedeutet nicht teuer. „Groß“ und „schön“ sind keine Gegenteile von „teuer“."),
  question("Vocabulary", "Wochentage und Uhrzeit", "Welcher Tag ist „Mittwoch“?", ["Montag", "Mittwoch", "Freitag"], 1, "vocabulary.time", "Wochentage und Uhrzeit", "Wiederhole die Wochentage und wichtige Zeitangaben.", "Sage die sieben Wochentage der Reihe nach und plane drei Aktivitäten mit „am …“.", 10, "Prüfe, ob du jeden Wochentag ohne deine Notizen nennen kannst.", "„Mittwoch“ ist der dritte Wochentag. Danach kommt Donnerstag."),
  question("Vocabulary", "Essen und Trinken", "Welcher Satz bedeutet: „Wir trinken Kaffee“?", ["Wir trinken einen Kaffee.", "Wir essen einen Kaffee.", "Wir kaufen einen Kaffee."], 0, "vocabulary.food", "Essen und Trinken", "Wiederhole Wörter für Essen und Getränke und übe sie mit passenden Verben.", "Schreibe fünf Getränke auf und bilde mit jedem Getränk einen Satz mit „trinken“.", 10, "Prüfe, ob jeder Satz ein Getränk und das passende Verb enthält.", "„Trinken“ bedeutet, dass man etwas trinkt. „Essen“ bedeutet, dass man etwas isst."),
  question("Vocabulary", "Orte in der Stadt", "Was bedeutet „der Bahnhof“?", ["der Flughafen", "der Bahnhof", "die Fahrkarte"], 1, "vocabulary.places", "Orte in der Stadt", "Wiederhole wichtige Orte: der Bahnhof, die Apotheke, der Supermarkt und das Hotel.", "Zeichne einen kleinen Stadtplan und beschrifte fünf Orte auf Deutsch.", 10, "Decke die Wörter ab und benenne jeden Ort aus dem Gedächtnis.", "„Der Bahnhof“ ist der Ort, an dem Züge halten. „Der Flughafen“ ist für Flugzeuge."),
  question("Grammar", "Verbkonjugation", "Ergänze den Satz: „Ich ___ 30 Jahre alt.“", ["bin", "bist", "ist"], 0, "grammar.verbs", "Verben im Präsens", "Wiederhole die Formen von „sein“ und die Präsensendungen für ich, er/sie und wir.", "Schreibe je einen Satz mit „ich bin“, „er ist“ und „wir sind“. Übe danach „wohnen“ und „lernen“.", 15, "Prüfe, ob die Verbform in jedem Satz zum Subjekt passt.", "Bei „ich“ verwenden wir die Verbform „bin“: „Ich bin 30 Jahre alt.“"),
  question("Grammar", "Verbkonjugation", "Ergänze den Satz: „Er ___ in Dubai.“", ["wohnen", "wohnt", "wohnst"], 1, "grammar.verbs", "Verben im Präsens", "Wiederhole die Formen von „sein“ und die Präsensendungen für ich, er/sie und wir.", "Schreibe je einen Satz mit „ich bin“, „er ist“ und „wir sind“. Übe danach „wohnen“ und „lernen“.", 15, "Prüfe, ob die Verbform in jedem Satz zum Subjekt passt.", "Bei „er“ endet das regelmäßige Verb „wohnen“ auf „-t“: „Er wohnt“."),
  question("Grammar", "Possessivartikel", "Das ist Maria. ___ Bruder heißt Ali.", ["Sein", "Ihr", "Seine"], 1, "grammar.pronouns", "Pronomen und Possessivartikel", "Wiederhole Personalpronomen und Possessivartikel. Achte darauf, auf welche Person sich das Wort bezieht.", "Ergänze fünf kurze Sätze mit „mein“, „dein“, „sein“, „ihr“ und „unser“.", 10, "Prüfe, ob der Possessivartikel zur Person und zum Nomen passt.", "Maria ist eine Frau, deshalb heißt es „ihr Bruder“. Vor dem maskulinen Nomen „Bruder“ steht hier „ihr“."),
  question("Grammar", "Artikel", "Ergänze den Satz: „Das ist ___ Apfel.“", ["eine", "ein", "einen"], 1, "grammar.articles", "Artikel", "Wiederhole „der“, „die“ und „das“ sowie „ein“ und „eine“ in einfachen Sätzen.", "Schreibe zehn bekannte Nomen mit Artikel auf und ergänze fünf Lückensätze.", 10, "Prüfe den Artikel jedes Nomens und lies deine Sätze laut vor.", "„Apfel“ ist maskulin: „der Apfel“. In diesem Satz heißt es „ein Apfel“."),
  question("Grammar", "Präpositionen", "Ergänze den Satz: „Ich gehe ___ Schule.“", ["zur", "im", "aus"], 0, "grammar.prepositions", "Präpositionen für Orte", "Wiederhole Ortsangaben wie „zur Schule“, „im Supermarkt“ und „aus der Stadt“.", "Bilde fünf kurze Sätze über Orte, zu denen du gehst, und benutze passende Präpositionen.", 10, "Vergleiche deine Ortsangaben mit A1-Beispielen und prüfe den Artikel.", "„Zur“ ist die Kurzform von „zu der“. Man sagt „zur Schule gehen“."),
  question("Reading", "Wichtige Informationen finden", "Wo wohnt Lukas?", ["In München", "In Berlin", "In Hamburg"], 1, "reading.details", "Wichtige Informationen finden", "Suche nach Namen, Orten, Wochentagen und Uhrzeiten. Finde dann die passende Information im Text.", "Lies einen kurzen A1-Text und markiere Orte, Wochentage und Uhrzeiten.", 10, "Zeige den Satz im Text, der deine Antwort bestätigt.", "Im Text steht: „Ich wohne in Berlin.“ Deshalb wohnt Lukas in Berlin.", readingPassage),
  question("Reading", "Wichtige Informationen finden", "Wo arbeitet Lukas?", ["In einem Café", "In einer Schule", "In einem Büro"], 0, "reading.details", "Wichtige Informationen finden", "Suche nach Namen, Orten, Wochentagen und Uhrzeiten. Finde dann die passende Information im Text.", "Lies einen kurzen A1-Text und markiere Orte, Wochentage und Uhrzeiten.", 10, "Zeige den Satz im Text, der deine Antwort bestätigt.", "Im Text steht: „Ich arbeite … in einem Café.“", readingPassage),
  question("Reading", "Wochentage und Alltag", "Wann spielt Lukas Fußball?", ["Am Montag", "Am Freitag", "Am Samstag"], 2, "reading.sequence", "Wochentage und Alltag", "Achte auf Wörter wie „am Samstag“ und verbinde sie mit der passenden Aktivität.", "Lies einen kurzen Wochenplan und notiere die Aktivitäten für jeden Tag.", 10, "Prüfe, ob jede Aktivität zum richtigen Wochentag gehört.", "Im Text steht: „Am Samstag spiele ich Fußball.“", readingPassage),
  question("Reading", "Wichtige Informationen finden", "Wen besucht Lukas am Sonntag?", ["Seine Freunde", "Seine Eltern", "Seine Kollegen"], 1, "reading.details", "Wichtige Informationen finden", "Suche nach Namen, Orten, Wochentagen und Uhrzeiten. Finde dann die passende Information im Text.", "Lies einen kurzen A1-Text und markiere Orte, Wochentage und Uhrzeiten.", 10, "Zeige den Satz im Text, der deine Antwort bestätigt.", "Im Text steht: „Am Sonntag besuche ich meine Eltern.“", readingPassage),
  question("Reading", "Uhrzeiten und Alltag", "Wann steht Lukas auf?", ["Um 6 Uhr", "Um 7 Uhr", "Um 8 Uhr"], 1, "reading.time", "Uhrzeiten in kurzen Texten", "Übe Uhrzeiten und verbinde sie mit den passenden Verben für den Alltag.", "Lies einen kurzen Tagesplan und schreibe die Uhrzeit zu jeder Aktivität auf.", 10, "Prüfe, ob du jede Uhrzeit laut sagen und der richtigen Aktivität zuordnen kannst.", "Im Text steht: „Ich stehe jeden Tag um 7 Uhr auf.“", readingPassage)
];

const secondReadingPassage = "Hallo! Ich heiße Anna. Ich wohne in Köln. Ich arbeite von Montag bis Freitag in einem Hotel. Am Freitag treffe ich Freunde. Am Sonntag koche ich mit meiner Familie. Ich stehe jeden Tag um 6 Uhr auf.";

const secondQuestionSet = [
  question("Vocabulary", "Alltagsausdrücke", "Was sagt man im Café, wenn man Tee bestellen möchte?", ["Ich hätte gern einen Tee, bitte.", "Ich bestelle keinen Tee.", "Wo ist mein Tee?"], 0, "vocabulary.requests", "Bitten und bestellen", "Übe wichtige Sätze zum Bestellen: „Ich hätte gern …“, „Bitte“ und „Danke“.", "Schreibe drei Bestellungen für ein Café und sprich sie laut aus.", 10, "Prüfe, ob jede Bestellung ein Getränk nennt und „gern“ richtig verwendet.", "„Ich hätte gern …“ ist eine höfliche Bitte. Damit kannst du im Café ein Getränk bestellen."),
  question("Vocabulary", "Wortbedeutungen", "Was ist ein Gegenteil von „teuer“?", ["günstig", "lang", "früh"], 0, "vocabulary.words", "Wörter und Gegenteile", "Wiederhole häufige Gegenteile: teuer/billig, groß/klein und alt/neu.", "Schreibe fünf Wortpaare mit Gegenteilen auf und bilde kurze Sätze damit.", 10, "Decke eine Seite der Wortpaare ab und nenne das passende Gegenteil.", "„Günstig“ bedeutet nicht teuer. „Lang“ und „früh“ sind keine Gegenteile von „teuer“."),
  question("Vocabulary", "Wochentage und Uhrzeit", "Welcher Tag kommt nach Dienstag?", ["Mittwoch", "Freitag", "Montag"], 0, "vocabulary.time", "Wochentage und Uhrzeit", "Wiederhole die Wochentage und wichtige Zeitangaben.", "Sage die sieben Wochentage der Reihe nach und plane drei Aktivitäten mit „am …“.", 10, "Prüfe, ob du jeden Wochentag ohne deine Notizen nennen kannst.", "Auf Dienstag folgt Mittwoch. Danach kommt Donnerstag."),
  question("Vocabulary", "Essen und Trinken", "Welches Wort ist ein Getränk?", ["Wasser", "Brot", "Käse"], 0, "vocabulary.food", "Essen und Trinken", "Wiederhole Wörter für Essen und Getränke und übe sie mit passenden Verben.", "Schreibe fünf Getränke auf und bilde mit jedem Getränk einen Satz mit „trinken“.", 10, "Prüfe, ob jedes Wort ein Getränk ist und in einen Satz mit „trinken“ passt.", "Wasser kann man trinken. Brot und Käse sind Lebensmittel, die man isst."),
  question("Vocabulary", "Orte in der Stadt", "Wo kauft man Medikamente?", ["In der Apotheke", "Am Bahnhof", "Im Restaurant"], 0, "vocabulary.places", "Orte in der Stadt", "Wiederhole wichtige Orte: der Bahnhof, die Apotheke, der Supermarkt und das Hotel.", "Zeichne einen kleinen Stadtplan und beschrifte fünf Orte auf Deutsch.", 10, "Decke die Wörter ab und benenne jeden Ort aus dem Gedächtnis.", "Medikamente kauft man in der Apotheke. Am Bahnhof fahren Züge, und im Restaurant kann man essen."),
  question("Grammar", "Verbkonjugation", "Ergänze den Satz: „Du ___ in Köln.“", ["wohnst", "wohnen", "wohnt"], 0, "grammar.verbs", "Verben im Präsens", "Wiederhole die Formen von „sein“ und die Präsensendungen für ich, er/sie und wir.", "Schreibe je einen Satz mit „ich bin“, „er ist“ und „wir sind“. Übe danach „wohnen“ und „lernen“.", 15, "Prüfe, ob die Verbform in jedem Satz zum Subjekt passt.", "Bei „du“ endet das regelmäßige Verb „wohnen“ auf „-st“: „Du wohnst“."),
  question("Grammar", "Verbkonjugation", "Ergänze den Satz: „Wir ___ heute Kaffee.“", ["trinken", "trinkt", "trinkst"], 0, "grammar.verbs", "Verben im Präsens", "Wiederhole die Formen von „sein“ und die Präsensendungen für ich, er/sie und wir.", "Schreibe je einen Satz mit „ich bin“, „er ist“ und „wir sind“. Übe danach „wohnen“ und „lernen“.", 15, "Prüfe, ob die Verbform in jedem Satz zum Subjekt passt.", "Bei „wir“ hat das Verb im Präsens die Endung „-en“: „Wir trinken“."),
  question("Grammar", "Possessivartikel", "Das ist Paul. ___ Schwester heißt Mia.", ["Seine", "Ihr", "Sein"], 0, "grammar.pronouns", "Pronomen und Possessivartikel", "Wiederhole Personalpronomen und Possessivartikel. Achte darauf, auf welche Person sich das Wort bezieht.", "Ergänze fünf kurze Sätze mit „mein“, „dein“, „sein“, „ihr“ und „unser“.", 10, "Prüfe, ob der Possessivartikel zur Person und zum Nomen passt.", "Paul ist ein Mann, deshalb heißt es „seine Schwester“. Das Wort richtet sich auch nach dem femininen Nomen „Schwester“."),
  question("Grammar", "Artikel", "Ergänze den Satz: „Ich habe ___ Tasche.“", ["eine", "ein", "einen"], 0, "grammar.articles", "Artikel", "Wiederhole „der“, „die“ und „das“ sowie „ein“ und „eine“ in einfachen Sätzen.", "Schreibe zehn bekannte Nomen mit Artikel auf und ergänze fünf Lückensätze.", 10, "Prüfe den Artikel jedes Nomens und lies deine Sätze laut vor.", "„Tasche“ ist feminin: „die Tasche“. Deshalb heißt es hier „eine Tasche“."),
  question("Grammar", "Präpositionen", "Ergänze den Satz: „Ich fahre ___ dem Bus.“", ["mit", "zur", "aus"], 0, "grammar.prepositions", "Präpositionen für Orte", "Wiederhole Ortsangaben wie „zur Schule“, „im Supermarkt“ und „aus der Stadt“.", "Bilde fünf kurze Sätze über Orte, zu denen du gehst, und benutze passende Präpositionen.", 10, "Vergleiche deine Ortsangaben mit A1-Beispielen und prüfe den Artikel.", "Man fährt „mit dem Bus“. Die Präposition „mit“ steht hier mit „dem Bus“."),
  question("Reading", "Wichtige Informationen finden", "Wo wohnt Anna?", ["In Köln", "In Berlin", "In Hamburg"], 0, "reading.details", "Wichtige Informationen finden", "Suche nach Namen, Orten, Wochentagen und Uhrzeiten. Finde dann die passende Information im Text.", "Lies einen kurzen A1-Text und markiere Orte, Wochentage und Uhrzeiten.", 10, "Zeige den Satz im Text, der deine Antwort bestätigt.", "Im Text steht: „Ich wohne in Köln.“ Deshalb wohnt Anna in Köln.", secondReadingPassage),
  question("Reading", "Wichtige Informationen finden", "Wo arbeitet Anna?", ["In einem Hotel", "In einer Schule", "In einem Büro"], 0, "reading.details", "Wichtige Informationen finden", "Suche nach Namen, Orten, Wochentagen und Uhrzeiten. Finde dann die passende Information im Text.", "Lies einen kurzen A1-Text und markiere Orte, Wochentage und Uhrzeiten.", 10, "Zeige den Satz im Text, der deine Antwort bestätigt.", "Im Text steht: „Ich arbeite … in einem Hotel.“", secondReadingPassage),
  question("Reading", "Wochentage und Alltag", "Wann trifft Anna ihre Freunde?", ["Am Montag", "Am Freitag", "Am Samstag"], 1, "reading.sequence", "Wochentage und Alltag", "Achte auf Wörter wie „am Freitag“ und verbinde sie mit der passenden Aktivität.", "Lies einen kurzen Wochenplan und notiere die Aktivitäten für jeden Tag.", 10, "Prüfe, ob jede Aktivität zum richtigen Wochentag gehört.", "Im Text steht: „Am Freitag treffe ich Freunde.“", secondReadingPassage),
  question("Reading", "Wichtige Informationen finden", "Mit wem kocht Anna am Sonntag?", ["Mit ihrer Familie", "Mit ihren Freunden", "Mit ihren Kollegen"], 0, "reading.details", "Wichtige Informationen finden", "Suche nach Namen, Orten, Wochentagen und Uhrzeiten. Finde dann die passende Information im Text.", "Lies einen kurzen A1-Text und markiere Orte, Wochentage und Uhrzeiten.", 10, "Zeige den Satz im Text, der deine Antwort bestätigt.", "Im Text steht: „Am Sonntag koche ich mit meiner Familie.“", secondReadingPassage),
  question("Reading", "Uhrzeiten und Alltag", "Wann steht Anna auf?", ["Um 6 Uhr", "Um 7 Uhr", "Um 8 Uhr"], 0, "reading.time", "Uhrzeiten in kurzen Texten", "Übe Uhrzeiten und verbinde sie mit den passenden Verben für den Alltag.", "Lies einen kurzen Tagesplan und schreibe die Uhrzeit zu jeder Aktivität auf.", 10, "Prüfe, ob du jede Uhrzeit laut sagen und der richtigen Aktivität zuordnen kannst.", "Im Text steht: „Ich stehe jeden Tag um 6 Uhr auf.“", secondReadingPassage)
];

const questionSets = [questions, secondQuestionSet];
const skillOrder = ["Vocabulary", "Grammar", "Reading"];
const skillLabels = { Vocabulary: "Wortschatz", Grammar: "Grammatik", Reading: "Lesen" };
const nextSteps = [
  {
    practice: "Eine vollständige A1-Prüfung üben",
    skill: "Prüfungsvorbereitung",
    tip: "Dieser kurze Test prüft nicht alle Prüfungsteile und keine Prüfung unter Zeitdruck.",
    exercise: "Bearbeite eine vollständige Goethe-A1-Modellprüfung unter Prüfungsbedingungen.",
    minutes: 60,
    verify: "Prüfe deine Antworten in allen Prüfungsteilen und notiere, was dir schwergefallen ist."
  },
  {
    practice: "Hören üben",
    skill: "Hier nicht geprüft",
    tip: "Hören ist Teil der Goethe-A1-Prüfung, wird in diesem Test aber nicht bewertet.",
    exercise: "Höre eine A1-Audioübung an und beantworte die Fragen, ohne die Aufnahme anzuhalten.",
    minutes: 15,
    verify: "Prüfe deine Antworten und höre die Aufnahme noch einmal. Achte auf wichtige Wörter."
  },
  {
    practice: "Schreiben und Sprechen üben",
    skill: "Hier nicht geprüft",
    tip: "Auch Schreiben und Sprechen sind wichtige Prüfungsteile, die dieser Test nicht bewertet.",
    exercise: "Schreibe eine kurze Nachricht und übe, dich auf Deutsch vorzustellen.",
    minutes: 15,
    verify: "Vergleiche deine Nachricht mit einem A1-Beispiel. Nenne in deiner Vorstellung deinen Namen, deine Herkunft und deinen Alltag."
  }
];

const app = document.querySelector("#app");
let current = 0;
let activeSetIndex = 0;
let activeQuestions = questionSets[activeSetIndex];
let answers = Array(activeQuestions.length).fill(null);

function renderIntro() {
  app.innerHTML = `
    <section class="intro-grid" aria-labelledby="intro-title">
      <div class="intro-copy">
        <div class="eyebrow">Your next step with Globio</div>
        <h1 id="intro-title">A1 ready?<br><em>Let's find out.</em></h1>
        <p class="intro-description">Finished your A1 course? Take this friendly check to see where your German is feeling strong — and what to practise before you book your Goethe exam. One confident step closer to Germany starts here.</p>
        <div class="intro-meta">
          <span><span class="meta-icon" aria-hidden="true">◷</span> About 8 minutes</span>
          <span><span class="meta-icon" aria-hidden="true">◎</span> 15 quick questions · 2 versions</span>
          <span><span class="meta-icon" aria-hidden="true">↗</span> No sign-up needed</span>
        </div>
        <label class="training-confirmation"><input id="training-complete" type="checkbox"><span>I have completed an A1 German course.</span></label>
        <button class="start-button" id="start-quiz" disabled>Start my check <span class="start-arrow" aria-hidden="true">→</span></button>
      </div>
      <aside class="side-card" aria-label="Encouragement">
        <div class="side-card-top"><span class="small-label">YOUR GERMANY JOURNEY</span><span class="seedling" aria-hidden="true">✳</span></div>
        <p class="quote">You don't need to be perfect.<br>You just need to know <span>your next step.</span></p>
        <div class="card-rule"></div>
        <p class="quote-caption">A little clarity goes a long way.</p>
        <div class="skill-preview"><span class="skill-chip">Wortschatz</span><span class="skill-chip">Grammatik</span><span class="skill-chip">Lesen</span></div>
      </aside>
    </section>
    <section class="how-section" aria-labelledby="how-title">
      <h2 class="how-title" id="how-title">Three small steps</h2>
      <div class="steps">
        <div class="step"><span class="step-number">1</span><span><strong>Answer at your own pace</strong>Vocabulary, grammar and everyday reading.</span></div>
        <div class="step"><span class="step-number">2</span><span><strong>See your skill snapshot</strong>A simple breakdown of what feels solid.</span></div>
        <div class="step"><span class="step-number">3</span><span><strong>Leave with a next step</strong>Focused ideas for your study time.</span></div>
      </div>
    </section>`;
  const trainingComplete = document.querySelector("#training-complete");
  const startButton = document.querySelector("#start-quiz");
  trainingComplete.addEventListener("change", () => { startButton.disabled = !trainingComplete.checked; });
  startButton.addEventListener("click", () => {
    current = 0;
    answers = Array(activeQuestions.length).fill(null);
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function renderQuestion() {
  const item = activeQuestions[current];
  const selected = answers[current];
  const passage = item.passage
    ? `<div class="reading-passage" lang="de">${item.passage}</div>`
    : "";
  const options = item.options.map((option, index) => `
    <button class="answer-option${selected === index ? " selected" : ""}" type="button" data-answer="${index}" aria-pressed="${selected === index}">
      <span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>
    </button>`).join("");
  app.innerHTML = `
    <section class="quiz" aria-labelledby="question-title">
      <div class="quiz-header"><span class="quiz-skill">${skillLabels[item.skill]} · ${item.topic}</span><span class="quiz-count">Frage ${current + 1} von ${activeQuestions.length} · Satz ${activeSetIndex + 1}</span></div>
      <div class="progress-track" role="progressbar" aria-label="Fortschritt im Quiz" aria-valuemin="0" aria-valuemax="${activeQuestions.length}" aria-valuenow="${current + 1}"><div class="progress-fill" style="width:${((current + 1) / activeQuestions.length) * 100}%"></div></div>
      <div class="quiz-card">
        <div class="question-type">${item.passage ? "Lies den Text und wähle die richtige Antwort." : "Wähle die richtige Antwort."}</div>
        ${passage}
        <h1 class="question-title" id="question-title">${item.prompt}</h1>
        <div class="answer-list" role="group" aria-label="Antwortmöglichkeiten">${options}</div>
        <div class="quiz-actions">
          <button class="back-button" id="previous-question" type="button" ${current === 0 ? "disabled" : ""}>← &nbsp;Zurück</button>
          <button class="primary-button" id="next-question" type="button" ${selected === null ? "disabled" : ""}>${current === activeQuestions.length - 1 ? "Ergebnis ansehen" : "Weiter"} &nbsp;→</button>
        </div>
      </div>
      <p class="keyboard-note">Deine Antworten bleiben auf diesem Gerät und werden nicht gespeichert oder geteilt.</p>
    </section>`;
  app.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      answers[current] = Number(button.dataset.answer);
      renderQuestion();
      app.querySelector(`[data-answer="${answers[current]}"]`).focus();
    });
  });
  document.querySelector("#previous-question").addEventListener("click", () => {
    if (current > 0) { current -= 1; renderQuestion(); }
  });
  document.querySelector("#next-question").addEventListener("click", () => {
    if (answers[current] === null) return;
    if (current < activeQuestions.length - 1) { current += 1; renderQuestion(); }
    else renderResults();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function getResults() {
  const results = Object.fromEntries(skillOrder.map((skill) => {
    const indexes = activeQuestions.map((item, index) => item.skill === skill ? index : -1).filter((index) => index >= 0);
    const correct = indexes.filter((index) => answers[index] === activeQuestions[index].answer).length;
    return [skill, { correct, total: indexes.length, percent: Math.round(correct / indexes.length * 100) }];
  }));
  const correct = activeQuestions.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0);
  return { results, correct, percent: Math.round(correct / activeQuestions.length * 100) };
}

function renderResults() {
  const { results, correct, percent } = getResults();
  const status = percent >= 85
    ? { label: "Starke Grundlagen", title: "Du hast eine gute Basis in den geprüften Bereichen.", text: "Deine Ergebnisse zeigen starke Grundlagen in Wortschatz, Grammatik und Lesen. Übe vor der Buchung eine vollständige Modellprüfung mit Hören, Schreiben und Sprechen." }
    : percent >= 70
      ? { label: "Gute Basis", title: "Gezieltes Üben kann dir noch mehr Sicherheit geben.", text: "Du hast eine gute Basis in den geprüften Bereichen. Übe die Themen unten und mache eine vollständige Modellprüfung, bevor du dich für einen Prüfungstermin entscheidest." }
      : percent >= 50
        ? { label: "Im Aufbau", title: "Gezielte Wiederholung hilft dir weiter.", text: "Deine Ergebnisse zeigen erste A1-Grundlagen. Übe die Themen unten und prüfe deinen Fortschritt erneut, bevor du einen Prüfungstermin buchst." }
        : { label: "Mehr Vorbereitung empfohlen", title: "Nimm dir Zeit für deine A1-Grundlagen.", text: "Nutze die Übungsvorschläge unten, um deine Grundlagen zu stärken. Mache danach den Test und eine vollständige Modellprüfung noch einmal." };
  const skills = skillOrder.map((skill) => `
    <article class="skill-card">
      <div class="skill-card-top"><span class="skill-name">${skillLabels[skill]}</span><span class="skill-score">${results[skill].percent}%</span></div>
      <div class="skill-bar" role="progressbar" aria-label="${skillLabels[skill]} score" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${results[skill].percent}"><div class="skill-bar-fill" style="width:${results[skill].percent}%"></div></div>
      <div class="skill-card-foot"><span>${results[skill].correct} von ${results[skill].total} richtig</span><span>${results[skill].percent >= 75 ? "Stark" : results[skill].percent >= 50 ? "Im Aufbau" : "Weiter üben"}</span></div>
    </article>`).join("");
  const missedTopics = new Map();
  activeQuestions.forEach((item, index) => {
    if (answers[index] === item.answer) return;
    const existing = missedTopics.get(item.tag);
    if (existing) existing.missed += 1;
    else missedTopics.set(item.tag, { ...item, missed: 1 });
  });
  const personalized = [...missedTopics.values()]
    .sort((a, b) => b.missed - a.missed || results[a.skill].percent - results[b.skill].percent)
    .slice(0, 3);
  const recommendations = personalized.slice();
  nextSteps.forEach((step) => {
    if (recommendations.length < 3) recommendations.push(step);
  });
  const practice = recommendations.map((item, index) => `
    <article class="practice-item">
      <span class="practice-rank">${index + 1}</span>
      <div>
        <h3>${item.practice} <span class="practice-skill">· ${skillLabels[item.skill] ?? item.skill}</span></h3>
        ${item.missed ? `<p>Bei diesem Thema ${item.missed === 1 ? "hast du eine Frage" : `hast du ${item.missed} Fragen`} falsch beantwortet. ${item.tip}</p>` : `<p>${item.tip}</p>`}
        <p class="practice-exercise"><strong>Übung:</strong> ${item.exercise} <span>Ca. ${item.minutes} Min.</span></p>
        <p class="practice-verify"><strong>So prüfst du dich:</strong> ${item.verify}</p>
      </div>
    </article>`).join("");
  const answerKey = activeQuestions.map((item, index) => {
    const isCorrect = answers[index] === item.answer;
    const selected = answers[index] === null ? "Keine Antwort" : item.options[answers[index]];
    return `
      <details class="answer-review ${isCorrect ? "correct" : "incorrect"}">
        <summary>
          <span class="answer-review-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="answer-review-prompt">${item.prompt}</span>
          <span class="answer-review-status">${isCorrect ? "Richtig" : "Üben"}</span>
          <span class="answer-review-correct">✓ ${item.options[item.answer]}</span>
        </summary>
        <div class="answer-review-body">
          <p><strong>Deine Antwort:</strong> ${selected}${isCorrect ? " ✓" : ""}</p>
          <p><strong>Erklärung:</strong> ${item.explanation}</p>
        </div>
      </details>`;
  }).join("");
  app.innerHTML = `
    <section class="results" aria-labelledby="results-title">
      <div class="results-top"><div><div class="eyebrow">Dein A1-Check · Satz ${activeSetIndex + 1}</div><h1 id="results-title">Dein Ergebnis.</h1><p class="results-subtitle">Du hast <strong>${correct} von ${activeQuestions.length}</strong> Fragen richtig beantwortet. Hier siehst du deine Ergebnisse.</p></div><button class="restart-button" id="restart-quiz" type="button">↻ &nbsp;Anderen Satz starten</button></div>
      <div class="score-overview">
        <div class="score-total"><div class="score-ring" style="--score:${percent * 3.6}deg"><div class="score-ring-inner"><span class="score-number">${percent}%</span><span class="score-out-of">Wissensstand</span></div></div><span class="score-total-label">${correct} / ${activeQuestions.length} richtig</span></div>
        <div class="readiness-result"><span class="readiness-label"><span aria-hidden="true">✳</span> ${status.label}</span><h2>${status.title}</h2><p>${status.text}</p></div>
      </div>
      <div class="section-heading"><h2>Deine Fähigkeiten</h2><span>Jeder Bereich einzeln bewertet · je 5 Fragen</span></div>
      <div class="skill-grid">${skills}</div>
      <div class="section-heading"><h2>Weitere Prüfungsteile</h2><span>Hier nicht geprüft</span></div>
      <div class="exam-skill-grid"><div class="exam-skill-card"><span>Hören</span><strong>Nicht geprüft</strong></div><div class="exam-skill-card"><span>Schreiben</span><strong>Nicht geprüft</strong></div><div class="exam-skill-card"><span>Sprechen</span><strong>Nicht geprüft</strong></div></div>
      <section class="practice-panel" aria-labelledby="practice-title"><h2 id="practice-title">Dein persönlicher Lernplan</h2><p class="practice-intro">Beginne mit den Themen, bei denen du noch üben möchtest.</p><div class="practice-list">${practice}</div></section>
      <section class="answer-key" aria-labelledby="answer-key-title">
        <div class="section-heading"><h2 id="answer-key-title">Lösungen und Erklärungen</h2><span>Wähle eine Frage für Details</span></div>
        <p class="answer-key-intro">Die richtige Antwort siehst du direkt. Öffne eine Frage, um deine Antwort und die Erklärung zu vergleichen.</p>
        <div class="answer-review-list">${answerKey}</div>
      </section>
      <p class="honesty-note">Dieser Test gibt eine erste Einschätzung deines Wissens. Er ist keine offizielle Prüfung und sagt nicht voraus, ob du bestehst. Geprüft werden nur Wortschatz, Grammatik und Lesen. Hören, Schreiben und Sprechen werden nicht bewertet. Die Einstufungen sind eine Lernhilfe und keine offiziellen Goethe-Institut-Bewertungen.</p>
      <div class="results-bottom"><p>Mach weiter — jeder Schritt zählt.</p><button class="primary-button" id="review-answers" type="button">Antworten ändern &nbsp;↗</button></div>
    </section>`;
  document.querySelector("#restart-quiz").addEventListener("click", () => {
    current = 0;
    activeSetIndex = (activeSetIndex + 1) % questionSets.length;
    activeQuestions = questionSets[activeSetIndex];
    answers = Array(activeQuestions.length).fill(null);
    renderIntro();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelector("#review-answers").addEventListener("click", () => {
    current = 0;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

renderIntro();
