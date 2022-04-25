export default [
    {
      "conditions": [],
      "isPositive": false,
      "label": "Base",
      "shortDescription": "Farai meglio la prossima volta, per ora inizierai con il livello base",
      "value": "base"
    },
    {
      "conditions": [
        {
          "type": ">=",
          "value1": "$CONTEXT.percentage",
          "value2": 50
        }
      ],
      "isPositive": false,
      "label": "Intermedio",
      "shortDescription": "Potrai impararare molto da questa app, il tuo livello è intermedio.",
      "value": "intermedio"
    },
    {
      "conditions": [
        {
          "type": ">=",
          "value1": "$CONTEXT.percentage",
          "value2": 80
        }
      ],
      "isPositive": false,
      "label": "Avanzato",
      "shortDescription": "Apprezzerai sicuramente i nostri approfondimenti avanzati",
      "value": "avanzato"
    }
  ]