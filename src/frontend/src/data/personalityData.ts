import type { PersonalityType } from "../backend.d";

export const STATIC_PERSONALITY_TYPES: PersonalityType[] = [
  {
    code: "INTJ",
    category: "Analysts",
    englishName: "The Architect",
    hindiName: "वास्तुकार",
    englishDescription:
      "Imaginative and strategic thinkers with a plan for everything. INTJs are independent, decisive, and determined. They possess a natural gift for turning theories into workable strategies.",
    hindiDescription:
      "कल्पनाशील और रणनीतिक विचारक जिनके पास हर चीज़ के लिए एक योजना होती है। INTJ स्वतंत्र, निर्णायक और दृढ़ होते हैं।",
    englishStrengths: [
      "Strategic thinking",
      "Highly analytical",
      "Independent",
      "Determined",
      "Confident",
    ],
    hindiStrengths: [
      "रणनीतिक सोच",
      "अत्यधिक विश्लेषणात्मक",
      "स्वतंत्र",
      "दृढ़",
      "आत्मविश्वासी",
    ],
    englishWeaknesses: [
      "Arrogant",
      "Dismissive of emotions",
      "Overly private",
      "Stubborn",
    ],
    hindiWeaknesses: ["अहंकारी", "भावनाओं को नकारना", "अत्यधिक निजी", "जिद्दी"],
    englishFamousExamples: ["Elon Musk", "Isaac Newton", "Nikola Tesla"],
    hindiFamousExamples: ["एलन मस्क", "आइज़क न्यूटन", "निकोला टेस्ला"],
  },
  {
    code: "INTP",
    category: "Analysts",
    englishName: "The Logician",
    hindiName: "तर्कशास्त्री",
    englishDescription:
      "Innovative inventors with an unquenchable thirst for knowledge. INTPs are brilliant problem-solvers who love exploring theoretical concepts and finding logical explanations.",
    hindiDescription:
      "ज्ञान की अतृप्त प्यास वाले अभिनव आविष्कारक। INTP प्रतिभाशाली समस्या समाधक हैं जो सैद्धांतिक अवधारणाओं की खोज करना पसंद करते हैं।",
    englishStrengths: [
      "Analytical mind",
      "Objective thinker",
      "Open-minded",
      "Creative",
      "Original",
    ],
    hindiStrengths: [
      "विश्लेषणात्मक मन",
      "वस्तुनिष्ठ विचारक",
      "खुले विचारों वाले",
      "रचनात्मक",
      "मौलिक",
    ],
    englishWeaknesses: [
      "Insensitive",
      "Absent-minded",
      "Condescending",
      "Impatient",
    ],
    hindiWeaknesses: ["असंवेदनशील", "अनुपस्थित-दिमाग", "अहंकारी", "अधीर"],
    englishFamousExamples: ["Albert Einstein", "Bill Gates", "Charles Darwin"],
    hindiFamousExamples: ["अल्बर्ट आइंस्टीन", "बिल गेट्स", "चार्ल्स डार्विन"],
  },
  {
    code: "ENTJ",
    category: "Analysts",
    englishName: "The Commander",
    hindiName: "सेनापति",
    englishDescription:
      "Bold, imaginative and strong-willed leaders who always find a way. ENTJs are natural born leaders who embody the drive for change and innovation.",
    hindiDescription:
      "साहसी, कल्पनाशील और दृढ़ इच्छाशक्ति वाले नेता जो हमेशा एक रास्ता खोज लेते हैं। ENTJ प्राकृतिक नेता हैं।",
    englishStrengths: [
      "Natural leader",
      "Efficient",
      "Strategic",
      "Charismatic",
      "Confident",
    ],
    hindiStrengths: ["प्राकृतिक नेता", "कुशल", "रणनीतिक", "करिश्माई", "आत्मविश्वासी"],
    englishWeaknesses: ["Stubborn", "Dominant", "Impatient", "Cold"],
    hindiWeaknesses: ["जिद्दी", "प्रभुत्वशाली", "अधीर", "ठंडे"],
    englishFamousExamples: [
      "Napoleon Bonaparte",
      "Steve Jobs",
      "Gordon Ramsay",
    ],
    hindiFamousExamples: ["नेपोलियन बोनापार्ट", "स्टीव जॉब्स", "गॉर्डन रैमसे"],
  },
  {
    code: "ENTP",
    category: "Analysts",
    englishName: "The Debater",
    hindiName: "बहसकार",
    englishDescription:
      "Smart and curious thinkers who cannot resist an intellectual challenge. ENTPs love debates and thrive on exploring new ideas from every angle.",
    hindiDescription:
      "स्मार्ट और जिज्ञासु विचारक जो बौद्धिक चुनौती का विरोध नहीं कर सकते। ENTP बहस पसंद करते हैं।",
    englishStrengths: [
      "Quick thinker",
      "Original ideas",
      "Energetic",
      "Charismatic",
      "Knowledgeable",
    ],
    hindiStrengths: ["तेज़ विचारक", "मौलिक विचार", "ऊर्जावान", "करिश्माई", "ज्ञानी"],
    englishWeaknesses: [
      "Argumentative",
      "Insensitive",
      "Disorganized",
      "Risk-prone",
    ],
    hindiWeaknesses: ["तर्कशील", "असंवेदनशील", "अव्यवस्थित", "जोखिम-प्रवण"],
    englishFamousExamples: ["Benjamin Franklin", "Mark Twain", "Celine Dion"],
    hindiFamousExamples: ["बेंजामिन फ्रैंकलिन", "मार्क ट्वेन", "सेलीन डियोन"],
  },
  {
    code: "INFJ",
    category: "Diplomats",
    englishName: "The Advocate",
    hindiName: "पक्षधर",
    englishDescription:
      "Quiet and mystical, yet very inspiring and tireless idealists. INFJs are rare personalities who combine visionary thinking with compassionate action.",
    hindiDescription:
      "शांत और रहस्यमय, फिर भी बहुत प्रेरणादायक और अथक आदर्शवादी। INFJ दुर्लभ व्यक्तित्व हैं।",
    englishStrengths: [
      "Insightful",
      "Principled",
      "Compassionate",
      "Creative",
      "Passionate",
    ],
    hindiStrengths: ["अंतर्दृष्टिपूर्ण", "सिद्धांतवादी", "दयालु", "रचनात्मक", "भावुक"],
    englishWeaknesses: [
      "Perfectionistic",
      "Sensitive",
      "Extremely private",
      "Burnout-prone",
    ],
    hindiWeaknesses: ["पूर्णतावादी", "संवेदनशील", "अत्यधिक निजी", "थकान-प्रवण"],
    englishFamousExamples: [
      "Martin Luther King Jr.",
      "Nelson Mandela",
      "Oprah Winfrey",
    ],
    hindiFamousExamples: ["मार्टिन लूथर किंग जूनियर", "नेल्सन मंडेला", "ओपरा विन्फ्रे"],
  },
  {
    code: "INFP",
    category: "Diplomats",
    englishName: "The Mediator",
    hindiName: "मध्यस्थ",
    englishDescription:
      "Poetic, kind and altruistic people, always eager to help a good cause. INFPs are guided by their values and bring creativity and idealism to everything they do.",
    hindiDescription:
      "काव्यात्मक, दयालु और परोपकारी लोग जो हमेशा एक अच्छे कारण की मदद करने के लिए उत्सुक रहते हैं।",
    englishStrengths: [
      "Empathetic",
      "Creative",
      "Open-minded",
      "Passionate",
      "Dedicated",
    ],
    hindiStrengths: [
      "सहानुभूतिशील",
      "रचनात्मक",
      "खुले विचारों वाले",
      "भावुक",
      "समर्पित",
    ],
    englishWeaknesses: [
      "Unrealistic",
      "Overly idealistic",
      "Impractical",
      "Emotionally vulnerable",
    ],
    hindiWeaknesses: [
      "अव्यावहारिक",
      "अत्यधिक आदर्शवादी",
      "अव्यावहारिक",
      "भावनात्मक रूप से कमज़ोर",
    ],
    englishFamousExamples: [
      "J.R.R. Tolkien",
      "William Shakespeare",
      "Princess Diana",
    ],
    hindiFamousExamples: [
      "जे.आर.आर. टोल्किन",
      "विलियम शेक्सपियर",
      "राजकुमारी डायना",
    ],
  },
  {
    code: "ENFJ",
    category: "Diplomats",
    englishName: "The Protagonist",
    hindiName: "नायक",
    englishDescription:
      "Charismatic and inspiring leaders, able to mesmerize their listeners. ENFJs are natural mentors who bring out the best in others and rally people around a shared vision.",
    hindiDescription:
      "करिश्माई और प्रेरणादायक नेता जो अपने श्रोताओं को मंत्रमुग्ध करने में सक्षम हैं। ENFJ प्राकृतिक गुरु हैं।",
    englishStrengths: [
      "Charismatic",
      "Empathetic",
      "Reliable",
      "Natural leader",
      "Inspiring",
    ],
    hindiStrengths: [
      "करिश्माई",
      "सहानुभूतिशील",
      "विश्वसनीय",
      "प्राकृतिक नेता",
      "प्रेरणादायक",
    ],
    englishWeaknesses: [
      "Overly idealistic",
      "Too selfless",
      "Condescending",
      "Struggle with decisions",
    ],
    hindiWeaknesses: [
      "अत्यधिक आदर्शवादी",
      "बहुत निःस्वार्थी",
      "अहंकारी",
      "निर्णय में संघर्ष",
    ],
    englishFamousExamples: ["Barack Obama", "Oprah Winfrey", "Morgan Freeman"],
    hindiFamousExamples: ["बराक ओबामा", "ओपरा विन्फ्रे", "मॉर्गन फ्रीमैन"],
  },
  {
    code: "ENFP",
    category: "Diplomats",
    englishName: "The Campaigner",
    hindiName: "प्रचारक",
    englishDescription:
      "Enthusiastic, creative and sociable free spirits who can always find a reason to smile. ENFPs are imaginative motivators with a gift for seeing the potential in people and ideas.",
    hindiDescription:
      "उत्साही, रचनात्मक और मिलनसार मुक्त आत्माएं जो हमेशा मुस्कुराने का कारण खोज सकती हैं।",
    englishStrengths: [
      "Enthusiastic",
      "Creative",
      "Sociable",
      "Optimistic",
      "Empathetic",
    ],
    hindiStrengths: ["उत्साही", "रचनात्मक", "मिलनसार", "आशावादी", "सहानुभूतिशील"],
    englishWeaknesses: [
      "Scattered",
      "Overly emotional",
      "Disorganized",
      "Easily stressed",
    ],
    hindiWeaknesses: ["बिखरे हुए", "अत्यधिक भावुक", "अव्यवस्थित", "आसानी से तनावग्रस्त"],
    englishFamousExamples: ["Robin Williams", "Walt Disney", "Will Smith"],
    hindiFamousExamples: ["रॉबिन विलियम्स", "वॉल्ट डिज्नी", "विल स्मिथ"],
  },
  {
    code: "ISTJ",
    category: "Sentinels",
    englishName: "The Logistician",
    hindiName: "रसद विशेषज्ञ",
    englishDescription:
      "Practical and fact-minded individuals whose reliability cannot be doubted. ISTJs bring order and structure to their environment and take their duties seriously.",
    hindiDescription:
      "व्यावहारिक और तथ्य-केंद्रित व्यक्ति जिनकी विश्वसनीयता पर संदेह नहीं किया जा सकता।",
    englishStrengths: [
      "Organized",
      "Responsible",
      "Calm",
      "Practical",
      "Detail-oriented",
    ],
    hindiStrengths: ["संगठित", "जिम्मेदार", "शांत", "व्यावहारिक", "विस्तार-उन्मुख"],
    englishWeaknesses: [
      "Stubborn",
      "Insensitive",
      "Always by the book",
      "Judgmental",
    ],
    hindiWeaknesses: ["जिद्दी", "असंवेदनशील", "हमेशा नियमों का पालन", "न्यायिक"],
    englishFamousExamples: [
      "Queen Elizabeth II",
      "George Washington",
      "Angela Merkel",
    ],
    hindiFamousExamples: [
      "महारानी एलिजाबेथ द्वितीय",
      "जॉर्ज वाशिंगटन",
      "एंजेला मर्केल",
    ],
  },
  {
    code: "ISFJ",
    category: "Sentinels",
    englishName: "The Defender",
    hindiName: "रक्षक",
    englishDescription:
      "Very dedicated and warm protectors, always ready to defend their loved ones. ISFJs are compassionate caretakers who bring stability and warmth to those around them.",
    hindiDescription:
      "बहुत समर्पित और गर्म रक्षक, हमेशा अपने प्रियजनों की रक्षा के लिए तैयार।",
    englishStrengths: [
      "Supportive",
      "Reliable",
      "Patient",
      "Observant",
      "Hardworking",
    ],
    hindiStrengths: ["सहायक", "विश्वसनीय", "धैर्यवान", "अवलोकनशील", "मेहनती"],
    englishWeaknesses: [
      "Humble and shy",
      "Overloaded",
      "Neglect own needs",
      "Too altruistic",
    ],
    hindiWeaknesses: [
      "विनम्र और शर्मीले",
      "अत्यधिक बोझिल",
      "अपनी ज़रूरतों की उपेक्षा",
      "बहुत परोपकारी",
    ],
    englishFamousExamples: ["Mother Teresa", "Kate Middleton", "Rosa Parks"],
    hindiFamousExamples: ["मदर टेरेसा", "केट मिडलटन", "रोज़ा पार्क्स"],
  },
  {
    code: "ESTJ",
    category: "Sentinels",
    englishName: "The Executive",
    hindiName: "प्रबंधक",
    englishDescription:
      "Excellent administrators, unsurpassed at managing things or people. ESTJs are natural organizers who bring order, structure, and accountability to their environment.",
    hindiDescription:
      "उत्कृष्ट प्रशासक जो चीजों या लोगों के प्रबंधन में अद्वितीय हैं। ESTJ प्राकृतिक आयोजक हैं।",
    englishStrengths: [
      "Organized",
      "Loyal",
      "Dedicated",
      "Direct",
      "Hardworking",
    ],
    hindiStrengths: ["संगठित", "वफादार", "समर्पित", "प्रत्यक्ष", "मेहनती"],
    englishWeaknesses: [
      "Inflexible",
      "Stubborn",
      "Uncomfortable with unconventional",
      "Too focused on status",
    ],
    hindiWeaknesses: [
      "अनम्य",
      "जिद्दी",
      "अपरंपरागत के साथ असहज",
      "स्थिति पर अत्यधिक ध्यान",
    ],
    englishFamousExamples: [
      "Henry Ford",
      "John D. Rockefeller",
      "Michelle Obama",
    ],
    hindiFamousExamples: ["हेनरी फोर्ड", "जॉन डी. रॉकफेलर", "मिशेल ओबामा"],
  },
  {
    code: "ESFJ",
    category: "Sentinels",
    englishName: "The Consul",
    hindiName: "परामर्शदाता",
    englishDescription:
      "Extraordinarily caring, social and popular people, always eager to help. ESFJs thrive in social situations and are deeply invested in the well-being of those around them.",
    hindiDescription:
      "असाधारण रूप से देखभाल करने वाले, सामाजिक और लोकप्रिय लोग जो हमेशा मदद करने के लिए उत्सुक रहते हैं।",
    englishStrengths: [
      "Loyal",
      "Warm-hearted",
      "Good at connecting with others",
      "Practical",
      "Caring",
    ],
    hindiStrengths: [
      "वफादार",
      "उदार हृदय",
      "दूसरों से जुड़ने में अच्छे",
      "व्यावहारिक",
      "देखभाल करने वाले",
    ],
    englishWeaknesses: [
      "Needy for approval",
      "Inflexible",
      "Vulnerable to criticism",
      "Too selfless",
    ],
    hindiWeaknesses: [
      "अनुमोदन की ज़रूरत",
      "अनम्य",
      "आलोचना के प्रति कमज़ोर",
      "बहुत निःस्वार्थी",
    ],
    englishFamousExamples: ["Taylor Swift", "Jennifer Lopez", "Bill Clinton"],
    hindiFamousExamples: ["टेलर स्विफ्ट", "जेनिफर लोपेज़", "बिल क्लिंटन"],
  },
  {
    code: "ISTP",
    category: "Explorers",
    englishName: "The Virtuoso",
    hindiName: "गुणी",
    englishDescription:
      "Bold and practical experimenters, masters of all kinds of tools. ISTPs are curious observers who can cut through distractions to focus on what matters most.",
    hindiDescription:
      "साहसी और व्यावहारिक प्रयोगकर्ता, सभी प्रकार के उपकरणों के स्वामी। ISTP जिज्ञासु पर्यवेक्षक हैं।",
    englishStrengths: [
      "Optimistic",
      "Logical",
      "Creative",
      "Practical",
      "Relaxed",
    ],
    hindiStrengths: ["आशावादी", "तार्किक", "रचनात्मक", "व्यावहारिक", "आरामदेह"],
    englishWeaknesses: ["Stubborn", "Insensitive", "Private", "Easily bored"],
    hindiWeaknesses: ["जिद्दी", "असंवेदनशील", "निजी", "आसानी से ऊब जाना"],
    englishFamousExamples: ["Clint Eastwood", "Michael Jordan", "Bruce Lee"],
    hindiFamousExamples: ["क्लिंट ईस्टवुड", "माइकल जॉर्डन", "ब्रूस ली"],
  },
  {
    code: "ISFP",
    category: "Explorers",
    englishName: "The Adventurer",
    hindiName: "साहसी",
    englishDescription:
      "Flexible and charming artists, always ready to explore and experience something new. ISFPs have a quiet, radiant beauty and a gift for sensory awareness.",
    hindiDescription:
      "लचीले और आकर्षक कलाकार जो हमेशा कुछ नया अन्वेषण और अनुभव करने के लिए तैयार रहते हैं।",
    englishStrengths: [
      "Charming",
      "Sensitive to others",
      "Imaginative",
      "Passionate",
      "Curious",
    ],
    hindiStrengths: [
      "आकर्षक",
      "दूसरों के प्रति संवेदनशील",
      "कल्पनाशील",
      "भावुक",
      "जिज्ञासु",
    ],
    englishWeaknesses: [
      "Fiercely independent",
      "Unpredictable",
      "Easily stressed",
      "Overly competitive",
    ],
    hindiWeaknesses: [
      "कट्टर स्वतंत्र",
      "अप्रत्याशित",
      "आसानी से तनावग्रस्त",
      "अत्यधिक प्रतिस्पर्धी",
    ],
    englishFamousExamples: ["Michael Jackson", "David Bowie", "Frida Kahlo"],
    hindiFamousExamples: ["माइकल जैक्सन", "डेविड बॉवी", "फ्रीदा काहलो"],
  },
  {
    code: "ESTP",
    category: "Explorers",
    englishName: "The Entrepreneur",
    hindiName: "उद्यमी",
    englishDescription:
      "Smart, energetic and very perceptive people, who truly enjoy living on the edge. ESTPs live in the moment and thrive on taking risks and experiencing life to the fullest.",
    hindiDescription:
      "स्मार्ट, ऊर्जावान और बहुत समझदार लोग जो वास्तव में जीवन के किनारे पर जीने का आनंद लेते हैं।",
    englishStrengths: ["Bold", "Rational", "Practical", "Observant", "Direct"],
    hindiStrengths: ["साहसी", "तर्कसंगत", "व्यावहारिक", "अवलोकनशील", "प्रत्यक्ष"],
    englishWeaknesses: [
      "Impatient",
      "Risk-prone",
      "Unstructured",
      "May miss emotional cues",
    ],
    hindiWeaknesses: [
      "अधीर",
      "जोखिम-प्रवण",
      "असंरचित",
      "भावनात्मक संकेतों को याद कर सकते हैं",
    ],
    englishFamousExamples: ["Donald Trump", "Eddie Murphy", "Ernest Hemingway"],
    hindiFamousExamples: ["डोनाल्ड ट्रम्प", "एडी मर्फी", "अर्नेस्ट हेमिंग्वे"],
  },
  {
    code: "ESFP",
    category: "Explorers",
    englishName: "The Entertainer",
    hindiName: "मनोरंजक",
    englishDescription:
      "Spontaneous, energetic and enthusiastic people—life is never boring around them. ESFPs are vivacious performers who love being the center of attention.",
    hindiDescription:
      "स्वत: स्फूर्त, ऊर्जावान और उत्साही लोग—उनके आसपास जीवन कभी उबाऊ नहीं होता।",
    englishStrengths: [
      "Bold",
      "Aesthetic sense",
      "Practical",
      "Observant",
      "People skills",
    ],
    hindiStrengths: [
      "साहसी",
      "सौंदर्यबोध",
      "व्यावहारिक",
      "अवलोकनशील",
      "लोगों के साथ कौशल",
    ],
    englishWeaknesses: [
      "Sensitive",
      "Conflict-averse",
      "Poor long-term planners",
      "Unfocused",
    ],
    hindiWeaknesses: [
      "संवेदनशील",
      "संघर्ष-विमुख",
      "दीर्घकालिक योजना में कमज़ोर",
      "अकेंद्रित",
    ],
    englishFamousExamples: ["Adele", "Elvis Presley", "Jamie Oliver"],
    hindiFamousExamples: ["अडेले", "एल्विस प्रेस्ली", "जेमी ओलिवर"],
  },
];

export const QUIZ_QUESTIONS = [
  {
    englishText: "At a social gathering, you prefer to:",
    hindiText: "एक सामाजिक समारोह में, आप क्या पसंद करते हैं?",
    dimension: "EI",
    answerOptions: [
      {
        englishText: "Meet as many people as possible",
        hindiText: "जितने हो सके उतने लोगों से मिलना",
      },
      {
        englishText: "Have deep conversations with a few",
        hindiText: "कुछ लोगों के साथ गहरी बातचीत करना",
      },
    ],
  },
  {
    englishText: "When solving a problem, you focus on:",
    hindiText: "किसी समस्या को हल करते समय, आप किस पर ध्यान देते हैं?",
    dimension: "SN",
    answerOptions: [
      {
        englishText: "Concrete facts and details",
        hindiText: "ठोस तथ्यों और विवरणों पर",
      },
      {
        englishText: "Patterns and possibilities",
        hindiText: "पैटर्न और संभावनाओं पर",
      },
    ],
  },
  {
    englishText: "When making decisions, you primarily rely on:",
    hindiText: "निर्णय लेते समय, आप मुख्य रूप से किस पर निर्भर करते हैं?",
    dimension: "TF",
    answerOptions: [
      {
        englishText: "Logic and objective analysis",
        hindiText: "तर्क और वस्तुनिष्ठ विश्लेषण",
      },
      {
        englishText: "Feelings and impact on people",
        hindiText: "भावनाओं और लोगों पर प्रभाव",
      },
    ],
  },
  {
    englishText: "Your daily schedule is typically:",
    hindiText: "आपका दैनिक कार्यक्रम आमतौर पर कैसा होता है?",
    dimension: "JP",
    answerOptions: [
      {
        englishText: "Well-organized and structured",
        hindiText: "अच्छी तरह से व्यवस्थित और संरचित",
      },
      {
        englishText: "Flexible and spontaneous",
        hindiText: "लचीला और स्वत: स्फूर्त",
      },
    ],
  },
  {
    englishText: "After a long week, you recharge by:",
    hindiText: "एक लंबे सप्ताह के बाद, आप कैसे ऊर्जा पाते हैं?",
    dimension: "EI",
    answerOptions: [
      {
        englishText: "Going out with friends",
        hindiText: "दोस्तों के साथ बाहर जाकर",
      },
      {
        englishText: "Spending quiet time alone",
        hindiText: "अकेले शांत समय बिताकर",
      },
    ],
  },
  {
    englishText: "You are more drawn to:",
    hindiText: "आप किसकी ओर अधिक आकर्षित होते हैं?",
    dimension: "SN",
    answerOptions: [
      {
        englishText: "What is real and tangible",
        hindiText: "जो वास्तविक और स्पर्शनीय है",
      },
      {
        englishText: "What could be and what inspires",
        hindiText: "जो हो सकता है और जो प्रेरित करता है",
      },
    ],
  },
  {
    englishText: "When someone shares a problem with you, you tend to:",
    hindiText: "जब कोई आपके साथ कोई समस्या साझा करता है, तो आप:",
    dimension: "TF",
    answerOptions: [
      {
        englishText: "Offer logical solutions",
        hindiText: "तार्किक समाधान प्रदान करते हैं",
      },
      {
        englishText: "Empathize and offer emotional support",
        hindiText: "सहानुभूति और भावनात्मक समर्थन देते हैं",
      },
    ],
  },
  {
    englishText: "You prefer your work environment to be:",
    hindiText: "आप अपने कार्य वातावरण को कैसा पसंद करते हैं?",
    dimension: "JP",
    answerOptions: [
      {
        englishText: "Predictable with clear expectations",
        hindiText: "स्पष्ट अपेक्षाओं के साथ अनुमानित",
      },
      {
        englishText: "Dynamic and ever-changing",
        hindiText: "गतिशील और हमेशा बदलते रहने वाला",
      },
    ],
  },
  {
    englishText: "In conversations, you are usually:",
    hindiText: "बातचीत में, आप आमतौर पर कैसे होते हैं?",
    dimension: "EI",
    answerOptions: [
      {
        englishText: "The one who initiates topics",
        hindiText: "वह जो विषयों की शुरुआत करता है",
      },
      { englishText: "A thoughtful listener", hindiText: "एक विचारशील श्रोता" },
    ],
  },
  {
    englishText: "You trust more:",
    hindiText: "आप किस पर अधिक भरोसा करते हैं?",
    dimension: "SN",
    answerOptions: [
      {
        englishText: "Your direct experience",
        hindiText: "अपने प्रत्यक्ष अनुभव पर",
      },
      {
        englishText: "Your gut feeling and intuition",
        hindiText: "अपनी अंतरात्मा की आवाज़ और अंतर्ज्ञान पर",
      },
    ],
  },
  {
    englishText: "When giving feedback, you tend to be:",
    hindiText: "फ़ीडबैक देते समय, आप आमतौर पर:",
    dimension: "TF",
    answerOptions: [
      {
        englishText: "Honest and direct, even if harsh",
        hindiText: "ईमानदार और सीधे, भले ही कठोर हों",
      },
      {
        englishText: "Diplomatic and considerate of feelings",
        hindiText: "कूटनीतिक और भावनाओं का ख्याल रखने वाले",
      },
    ],
  },
  {
    englishText: "When starting a new project, you prefer to:",
    hindiText: "एक नया प्रोजेक्ट शुरू करते समय, आप क्या पसंद करते हैं?",
    dimension: "JP",
    answerOptions: [
      {
        englishText: "Plan everything out in advance",
        hindiText: "पहले से सब कुछ योजना बनाना",
      },
      {
        englishText: "Jump in and figure it out as you go",
        hindiText: "शुरू करके चलते-चलते सीखना",
      },
    ],
  },
];

export const getCategoryImage = (category: string): string => {
  const map: Record<string, string> = {
    Analysts: "/assets/generated/type-analyst.dim_400x400.png",
    Diplomats: "/assets/generated/type-diplomat.dim_400x400.png",
    Sentinels: "/assets/generated/type-sentinel.dim_400x400.png",
    Explorers: "/assets/generated/type-explorer.dim_400x400.png",
  };
  return map[category] || "/assets/generated/type-analyst.dim_400x400.png";
};

export const getCategoryClass = (category: string): string => {
  const map: Record<string, string> = {
    Analysts: "analyst",
    Diplomats: "diplomat",
    Sentinels: "sentinel",
    Explorers: "explorer",
  };
  return map[category] || "analyst";
};
