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
    }
};
