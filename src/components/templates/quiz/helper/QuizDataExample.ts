export default {
    "questions": {
        "q1": {
            "answers": {
                "0": {
                    "answerId": 0,
                        "label": "Tutte le risposte",
                            "points": 1
                },
                "1": {
                    "answerId": 1,
                        "label": "Un LMS",
                            "points": 0
                },
                "2": {
                    "answerId": 2,
                        "label": "Un app per il microlearning",
                            "points": 0
                },
                "3": {
                    "answerId": 3,
                        "label": "Un app personalizzabile",
                            "points": 0
                }
            },
            "feedbacks": {
                "0": "<div style=\"padding: 16px; color: #ffffff\"><p>Bravo!</p></div>",
                    "default": "<div style=\"padding: 16px; color: #ffffff\"><p>No, riprova!</p></div>"
            },
            "label": "Che cos'è digital journey?",
                "order": 0,
                    "questionId": "q1",
                        "return": "q2",
                            "showFeedback": true,
                                "topics": [
                                    "CAT1"
                                ]
        },
        "q2": {
            "answers": {
                "0": {
                    "answerId": 0,
                        "label": "Tutte le altre risposte sono vere",
                            "points": 1
                },
                "1": {
                    "answerId": 1,
                        "label": "Vengono distribuiti automaticamente da un algoritmo parametrizzabile",
                            "points": 0
                },
                "2": {
                    "answerId": 2,
                        "label": "Vengono distribuiti in base ad un piano editoriale che prende in considerazione diversi gruppi e caratteristiche degli utenti",
                            "points": 0
                },
                "3": {
                    "answerId": 3,
                        "label": "Vengono pubblicati su canali, modi blog, a cui gli utenti possono iscriversi",
                            "points": 0
                }
            },
            "feedbacks": {
                "0": "<div style=\"padding: 16px; color: #ffffff\"><p>Bravo!</p></div>",
                    "default": "<div style=\"padding: 16px; color: #ffffff\"><p>No, riprova!</p></div>"
            },
            "label": "Come vengono distribuiti i contenuti?",
                "order": 1,
                    "questionId": "q2",
                        "return": true,
                            "showFeedback": true,
                                "topics": [
                                    "CAT2"
                                ]
        }
    },
    "quizId": "assessment_default",
        "topics": [
            "CAT1",
            "CAT2"
        ]
}