import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  type OldPersonalityType = {
    code : Text;
    englishName : Text;
    hindiName : Text;
    englishDescription : Text;
    hindiDescription : Text;
    englishStrengths : [Text];
    hindiStrengths : [Text];
    englishWeaknesses : [Text];
    hindiWeaknesses : [Text];
    englishFamousExamples : [Text];
    hindiFamousExamples : [Text];
    category : Text;
  };

  type OldAnswerOption = {
    englishText : Text;
    hindiText : Text;
  };

  type OldQuizQuestion = {
    englishText : Text;
    hindiText : Text;
    dimension : Text;
    answerOptions : [OldAnswerOption];
  };

  type OldActor = {
    personalityTypes : Map.Map<Text, OldPersonalityType>;
    quizQuestions : Map.Map<Text, OldQuizQuestion>;
  };

  type NewAnswerOption = {
    text : Text;
    dimension : Text;
  };

  type NewQuizQuestion = {
    id : Nat;
    text : Text;
    dimension : Text;
    answerOptions : [NewAnswerOption];
  };

  type NewPersonalityType = {
    code : Text;
    name : Text;
    description : Text;
    strengths : [Text];
    weaknesses : [Text];
    likes : [Text];
    dislikes : [Text];
    famousExamples : [Text];
  };

  type NewActor = {
    personalityTypes : Map.Map<Text, NewPersonalityType>;
    quizQuestions : Map.Map<Nat, NewQuizQuestion>;
  };

  public func run(old : OldActor) : NewActor {
    let newPersonalityTypes = old.personalityTypes.map<Text, OldPersonalityType, NewPersonalityType>(
      func(_code, oldType) {
        {
          code = oldType.code;
          name = oldType.englishName;
          description = oldType.englishDescription;
          strengths = oldType.englishStrengths;
          weaknesses = oldType.englishWeaknesses;
          likes = [];
          dislikes = [];
          famousExamples = oldType.englishFamousExamples;
        };
      }
    );

    // Transform quiz questions
    let newQuizQuestions = old.quizQuestions.map<Text, OldQuizQuestion, NewQuizQuestion>(
      func(textId, oldQuestion) {
        let newAnswerOptions = oldQuestion.answerOptions.map(
          func(oldOption) {
            {
              text = oldOption.englishText;
              dimension = "";
            };
          }
        );
        {
          id = 0;
          text = oldQuestion.englishText;
          dimension = oldQuestion.dimension;
          answerOptions = newAnswerOptions;
        };
      }
    );

    // Convert Text keys to Nat keys
    let natQuizQuestions = Map.empty<Nat, NewQuizQuestion>();
    for ((textId, question) in newQuizQuestions.entries()) {
      let natId = switch (Nat.fromText(textId)) {
        case (null) { 0 };
        case (?nid) { nid };
      };
      natQuizQuestions.add(natId, question);
    };

    { personalityTypes = newPersonalityTypes; quizQuestions = natQuizQuestions };
  };
};
