const lessonsData = {
    "concentration": {
        "title": "Pourquoi on ne peut plus se concentrer ?",
        "level": "Niveau A2 - Basé sur la vidéo de HugoDécrypte",
        "video": {
            "id": "AM01IUcUiOw",
            "title": "Vidéo : \"Vous n'arrivez plus à vous concentrer, voici pourquoi\" - HugoDécrypte"
        },
        "activities": {
            "vocabulary": {
                "definitions": [
                    { "id": "A", "text": "Une molécule dans le corps qui donne du plaisir (récompense)." },
                    { "id": "B", "text": "La partie de l'ordinateur, de la télé ou du téléphone qu'on regarde." },
                    { "id": "C", "text": "Des applications comme TikTok, Instagram ou Facebook." },
                    { "id": "D", "text": "L'organe dans la tête qui pense et contrôle le corps." },
                    { "id": "E", "text": "Quand on a besoin de dormir ou de se reposer." },
                    { "id": "F", "text": "Regarder des mots dans un livre pour comprendre une histoire." },
                    { "id": "G", "text": "La capacité de penser à une seule chose sans changer." },
                    { "id": "H", "text": "Des messages qui apparaissent sur le téléphone (sonneries, vibrations)." }
                ],
                "items": [
                    { "label": "Concentration", "answer": "G" },
                    { "label": "Écran", "answer": "B" },
                    { "label": "Cerveau", "answer": "D" },
                    { "label": "Réseaux sociaux", "answer": "C" },
                    { "label": "Lire", "answer": "F" },
                    { "label": "Dopamine", "answer": "A" },
                    { "label": "Fatigué", "answer": "E" },
                    { "label": "Notifications", "answer": "H" }
                ]
            },
            "fillInTheBlanks": [
                { "before": "Nous passons beaucoup trop de temps devant un", "answer": "écran", "after": "chaque jour." },
                { "before": "Il est difficile de garder sa", "answer": "concentration", "after": "longtemps quand on travaille." },
                { "before": "Les", "answer": "réseaux sociaux", "after": "veulent capter notre attention pour gagner de l'argent." },
                { "before": "Notre", "answer": "cerveau", "after": "adore les récompenses rapides et faciles." },
                { "before": "", "answer": "lire", "after": "un livre demande plus d'effort que de regarder la télé." }
            ],
            "scrambled": [
                { "text": "le / téléphone / Regarder / est / facile / .", "answer": "Regarder le téléphone est facile." },
                { "text": "se / concentrer / difficile / C'est / de / .", "answer": "C'est difficile de se concentrer." },
                { "text": "aime / dopamine / Le / cerveau / la / .", "answer": "Le cerveau aime la dopamine." },
                { "text": "faut / pauses / des / Il / faire / .", "answer": "Il faut faire des pauses." }
            ],
            "comprehension": {
                "text": `
                    <p>Aujourd'hui, il est très difficile de se concentrer. Pourquoi ? Il y a plusieurs raisons. D'abord, nous utilisons beaucoup les <strong>écrans</strong> (téléphone, ordinateur, télévision). Nous passons trop de temps dessus.</p>
                    <p>Ensuite, les <strong>réseaux sociaux</strong> comme TikTok ou Instagram sont faits pour nous distraire. Ils donnent de la <strong>dopamine</strong> à notre cerveau. C'est une récompense rapide et facile. C'est comme du sucre pour le cerveau !</p>
                    <p>Aussi, les <strong>notifications</strong> nous interrompent tout le temps. Quand on regarde une notification, on perd sa concentration. Enfin, il y a trop d'informations partout. Pour aider notre cerveau, on peut cacher son téléphone dans une autre pièce, ranger son bureau ou faire de la méditation.</p>
                `,
                "questions": [
                    { "text": "Il est facile de se concentrer aujourd'hui.", "answer": "false" },
                    { "text": "Les réseaux sociaux aident à travailler.", "answer": "false" },
                    { "text": "La dopamine est comme une récompense pour le cerveau.", "answer": "true" },
                    { "text": "Les notifications aident à rester concentré.", "answer": "false" },
                    { "text": "Cacher son téléphone peut aider la concentration.", "answer": "true" }
                ]
            },
            "writtenExpression": {
                "questions": [
                    { "text": "Combien d'heures par jour passez-vous sur votre téléphone ? Est-ce trop ?" },
                    { "text": "Que faites-vous pour vous concentrer quand vous travaillez ou étudiez ?" }
                ],
                "examples": `
                    <p class="font-semibold text-blue-800">Voici des exemples de réponses :</p>
                    <p class="mt-2 font-bold text-sm">1. Temps d'écran :</p>
                    <ul class="list-disc list-inside ml-4 italic text-gray-700">
                        <li>"Je passe 4 heures par jour sur mon téléphone. C'est trop."</li>
                        <li>"J'utilise mon téléphone 1 heure par jour. Ce n'est pas beaucoup."</li>
                    </ul>
                    <p class="mt-2 font-bold text-sm">2. Concentration :</p>
                    <ul class="list-disc list-inside ml-4 italic text-gray-700">
                        <li>"Pour me concentrer, je mets mon téléphone dans mon sac."</li>
                        <li>"J'aime travailler dans le silence ou avec de la musique calme."</li>
                    </ul>
                `
            }
        }
    },
    "voyage": {
        "title": "Les vacances et le voyage",
        "level": "Niveau A1/A2 - Vocabulaire du voyage",
        "video": {
            "id": "dQw4w9WgXcQ", 
            "title": "Vidéo : Exemple de vidéo sur le voyage"
        },
        "activities": {
            "vocabulary": {
                "definitions": [
                    { "id": "A", "text": "Un document nécessaire pour voyager dans un autre pays." },
                    { "id": "B", "text": "L'endroit où on dort pendant les vacances (hôtel, camping...)." },
                    { "id": "C", "text": "Le moyen de transport qui vole dans le ciel." },
                    { "id": "D", "text": "Ce qu'on prépare avec ses vêtements avant de partir." }
                ],
                "items": [
                    { "label": "Passeport", "answer": "A" },
                    { "label": "Hébergement", "answer": "B" },
                    { "label": "Avion", "answer": "C" },
                    { "label": "Valise", "answer": "D" }
                ]
            },
            "fillInTheBlanks": [
                { "before": "Je dois prendre mon", "answer": "passeport", "after": "pour aller aux États-Unis." },
                { "before": "L'", "answer": "avion", "after": "décolle à 10 heures." }
            ],
            "scrambled": [
                { "text": "aime / J' / voyager / .", "answer": "J'aime voyager." },
                { "text": "est / valise / Ma / prête / .", "answer": "Ma valise est prête." }
            ],
            "comprehension": {
                "text": "<p>Paul adore voyager. Cet été, il va en Espagne. Il prend l'avion. Il a réservé un hôtel près de la plage.</p>",
                "questions": [
                    { "text": "Paul déteste voyager.", "answer": "false" },
                    { "text": "Il va en Italie.", "answer": "false" },
                    { "text": "Il va à l'hôtel.", "answer": "true" }
                ]
            },
            "writtenExpression": {
                "questions": [
                    { "text": "Où aimez-vous aller en vacances ?" }
                ],
                "examples": "<p>J'aime aller à la mer.</p>"
            }
        }
    },

    "tsunamis": {
        "title": "Comment fonctionnent les tsunamis ?",
        "level": "Niveau A2 - Basé sur la vidéo de TED-Ed",
        "video": {
            "id": "FTJLWwxki3Q",
            "title": "Comment fonctionnent les tsunamis – Alex Gendler"
        },
        "activities": {
            "vocabulary": {
                "definitions": [
                    { "id": "A", "text": "Une grande quantité d'eau qui monte et descend." },
                    { "id": "B", "text": "La terre qui est juste à côté de la mer." },
                    { "id": "C", "text": "Quand la terre tremble très fort (tremblement de terre)." },
                    { "id": "D", "text": "La force qui fait bouger les choses." },
                    { "id": "E", "text": "Une série de vagues géantes causées par un séisme." },
                    { "id": "F", "text": "Aller très rapidement (le contraire de lent)." },
                    { "id": "G", "text": "Un mur construit pour arrêter l'eau." },
                    { "id": "H", "text": "La distance entre la surface et le fond de l'océan." }
                ],
                "items": [
                    { "label": "Vague", "answer": "A" },
                    { "label": "Côte", "answer": "B" },
                    { "label": "Séisme", "answer": "C" },
                    { "label": "Énergie", "answer": "D" },
                    { "label": "Tsunami", "answer": "E" },
                    { "label": "Vite", "answer": "F" },
                    { "label": "Digue", "answer": "G" },
                    { "label": "Profondeur", "answer": "H" }
                ]
            },
            "fillInTheBlanks": [
                { "before": "Un tsunami n'est pas une", "answer": "vague", "after": "normale causée par le vent." },
                { "before": "Il est souvent provoqué par un", "answer": "séisme", "after": "sous l'océan." },
                { "before": "C'est l'", "answer": "énergie", "after": "du tremblement de terre qui pousse l'eau." },
                { "before": "Au milieu de l'océan, l'eau se déplace très", "answer": "vite", "after": "." },
                { "before": "Le danger est grand quand l'eau arrive sur la", "answer": "côte", "after": "." }
            ],
            "scrambled": [
                { "text": "vagues / Les / dangereuses / sont / .", "answer": "Les vagues sont dangereuses." },
                { "text": "terre / La / tremble / parfois / .", "answer": "La terre tremble parfois." },
                { "text": "vite / L'eau / déplace / se / très / .", "answer": "L'eau se déplace très vite." },
                { "text": "faut / Il / protéger / se / .", "answer": "Il faut se protéger." }
            ],
            "comprehension": {
                "text": "\n                    <p>Un <strong>tsunami</strong> n'est pas une vague normale. Les vagues normales sont créées par le vent. Les tsunamis sont créés par de l'<strong>énergie</strong> qui vient du fond de l'océan, souvent à cause d'un <strong>séisme</strong> (tremblement de terre).</p>\n                    <p>Au milieu de l'océan, le tsunami va très <strong>vite</strong> (800 km/h), mais il n'est pas très haut. Les bateaux ne le sentent pas. Mais quand le tsunami arrive près de la <strong>côte</strong>, la profondeur diminue. Alors, la vague ralentit et devient très haute. Elle peut faire 30 mètres de haut !</p>\n                    <p>L'eau entre dans les terres et détruit tout (arbres, maisons). Pour se protéger, les scientifiques surveillent l'océan pour prévenir les gens avant que la vague n'arrive.</p>\n                ",
                "questions": [
                    { "text": "Les tsunamis sont créés par le vent.", "answer": "false" },
                    { "text": "Un tsunami va très vite au milieu de l'océan.", "answer": "true" },
                    { "text": "Les bateaux sentent toujours les tsunamis au large.", "answer": "false" },
                    { "text": "La vague devient plus petite près de la côte.", "answer": "false" },
                    { "text": "Les scientifiques essaient de prévenir les gens.", "answer": "true" }
                ]
            },
            "writtenExpression": {
                "questions": [
                    { "text": "Pourquoi les tsunamis sont-ils dangereux ?" },
                    { "text": "Que feriez-vous si vous entendiez une alarme au bord de la mer ?" }
                ],
                "examples": "\n                    <p class=\"font-semibold text-blue-800\">Voici des exemples de réponses :</p>\n                    <p class=\"mt-2 font-bold text-sm\">1. Le danger :</p>\n                    <ul class=\"list-disc list-inside ml-4 italic text-gray-700\">\n                        <li>\"Ils sont dangereux parce que l'eau est très puissante.\"</li>\n                        <li>\"Ils détruisent les maisons et les arbres sur la côte.\"</li>\n                    </ul>\n                    <p class=\"mt-2 font-bold text-sm\">2. La réaction :</p>\n                    <ul class=\"list-disc list-inside ml-4 italic text-gray-700\">\n                        <li>\"Je courrais très vite vers une montagne ou une colline.\"</li>\n                        <li>\"J'écouterais les informations et je partirais loin de la plage.\"</li>\n                    </ul>\n                "
            }
        }
    }

};
