import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type PersonalityType = {
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

  module PersonalityType {
    public func compare(type1 : PersonalityType, type2 : PersonalityType) : Order.Order {
      Text.compare(type1.code, type2.code);
    };
  };

  type AnswerOption = {
    englishText : Text;
    hindiText : Text;
  };

  module AnswerOption {
    public func compare(option1 : AnswerOption, option2 : AnswerOption) : Order.Order {
      Text.compare(option1.englishText, option2.englishText);
    };
  };

  type QuizQuestion = {
    englishText : Text;
    hindiText : Text;
    dimension : Text; // "EI", "SN", "TF", "JP"
    answerOptions : [AnswerOption];
  };

  module QuizQuestion {
    public func compare(question1 : QuizQuestion, question2 : QuizQuestion) : Order.Order {
      Text.compare(question1.englishText, question2.englishText);
    };
  };

  let personalityTypes = Map.empty<Text, PersonalityType>();
  let quizQuestions = Map.empty<Text, QuizQuestion>();

  public query ({ caller }) func getAllPersonalityTypes() : async [PersonalityType] {
    personalityTypes.values().toArray();
  };

  public query ({ caller }) func getPersonalityTypeByCode(code : Text) : async PersonalityType {
    switch (personalityTypes.get(code)) {
      case (null) { Runtime.trap("Personality type does not exist") };
      case (?personalityType) { personalityType };
    };
  };

  public query ({ caller }) func getAllQuizQuestions() : async [QuizQuestion] {
    quizQuestions.values().toArray();
  };

  public query ({ caller }) func getQuizQuestionById(id : Text) : async QuizQuestion {
    switch (quizQuestions.get(id)) {
      case (null) { Runtime.trap("Quiz question does not exist") };
      case (?quizQuestion) { quizQuestion };
    };
  };

  public func calculatePersonalityType(answers : [Nat]) : async Text {
    let ei = answers.sliceToArray(0, 3);
    let sn = answers.sliceToArray(3, 6);
    let tf = answers.sliceToArray(6, 9);
    let jp = answers.sliceToArray(9, 12);

    let eiSum = ei.foldLeft(0, func(sum, answer) { sum + answer });
    let snSum = sn.foldLeft(0, func(sum, answer) { sum + answer });
    let tfSum = tf.foldLeft(0, func(sum, answer) { sum + answer });
    let jpSum = jp.foldLeft(0, func(sum, answer) { sum + answer });

    var personalityType = "";

    personalityType := personalityType # (if (eiSum > 1) { "E" } else { "I" });
    personalityType := personalityType # (if (snSum > 1) { "S" } else { "N" });
    personalityType := personalityType # (if (tfSum > 1) { "T" } else { "F" });
    personalityType # (if (jpSum > 1) { "J" } else { "P" });
  };
};
