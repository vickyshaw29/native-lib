export default ()=>({
    "cards": {
      "background": "https://media.istockphoto.com/vectors/abstract-white-background-vector-id1146367620?b=1&k=20&m=1146367620&s=612x612&w=0&h=FAHG88o1mZORtiKTcBMbfa1INl13ifFn11le0UJafvQ="
    },
    "logo": "https://firebasestorage.googleapis.com/v0/b/the-digital-journey.appspot.com/o/media%2Fe4job%2Fcommon%2Flogo.png?alt=media&token=6034cde0-dffa-4dbd-ad1a-fdd3b1aaaa20",
    "palette": {
      "iconDarkActive": "#144aa8",
      "iconDarkInactive": "#CCCCCC",
      "iconLightActive": "#144aa8",
      "iconLightInactive": "#CCCCCC",
      "primary": "#005F73",
      "secondary": "#0000d2",
      "textDark": "#333333",
      "textGray": "#999999",
      "textLight": "#FFFFFF",
      "textOnPrimary": "#fff",
      "disabledColor":"#005F73",
      "buttonLightBackground":"#ffffff"
    },
    "screens": [  
      {
        "initialScreen": "Drawer",
        "name": "MainStack",
        "screens": [
          {
            "initialScreen": "Dashboard",
            "name": "Dashboard",
            "screens": [
              {
                "name": "Home",
                "templateId": "home",
                "type": "Template"
              },
              {
                "name": "MyProgress",
                "templateId": "analytics",
                "type": "Template"
              },
              {
                "name": "TestSimulation",
                "templateId": "assessment_finale",
                "type": "Template"
              }
            ],
            "type": "Tab"
          },
          {
            "name": "Settings",
            "templateId": "settings",
            "type": "Template"
          },
          {
            "name": "Glossario",
            "templateId": "Glossario",
            "type": "Contents"
          },
          {
            "name": "Assistenza",
            "templateId": "Assistenza",
            "type": "Content"
          },
          {
            "name": "Books",
            "templateId": "Books",
            "type": "Contents"
          }
        ],
        "type": "Drawer"
      }
    ],
    "typography": {
      "fontFamily": {
        "bold": "Helvetica",
        "regular": "Helvetica"
      }
    }
  }
)
