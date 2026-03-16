import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Migration "migration";
import Runtime "mo:core/Runtime";

// Enable automatic migration
(with migration = Migration.run)
actor {
  type PersonalityType = {
    code : Text;
    name : Text;
    description : Text;
    strengths : [Text];
    weaknesses : [Text];
    likes : [Text];
    dislikes : [Text];
    famousExamples : [Text];
  };

  module PersonalityType {
    public func compare(type1 : PersonalityType, type2 : PersonalityType) : Order.Order {
      Text.compare(type1.code, type2.code);
    };
  };

  type AnswerOption = {
    text : Text;
    dimension : Text; // "E", "I", "S", "N", "T", "F", "J", "P"
  };

  module AnswerOption {
    public func compare(option1 : AnswerOption, option2 : AnswerOption) : Order.Order {
      Text.compare(option1.text, option2.text);
    };
  };

  type QuizQuestion = {
    id : Nat;
    text : Text;
    dimension : Text; // "EI", "SN", "TF", "JP"
    answerOptions : [AnswerOption];
  };

  module QuizQuestion {
    public func compare(question1 : QuizQuestion, question2 : QuizQuestion) : Order.Order {
      if (question1.id < question2.id) {
        return #less;
      };
      if (question1.id > question2.id) {
        return #greater;
      };
      #equal;
    };
  };

  let personalityTypes = Map.empty<Text, PersonalityType>();
  let quizQuestions = Map.empty<Nat, QuizQuestion>();

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

  public func calculatePersonalityType(answers : [Nat]) : async Text {
    let ei = answers.sliceToArray(0, 5);
    let sn = answers.sliceToArray(5, 10);
    let tf = answers.sliceToArray(10, 15);
    let jp = answers.sliceToArray(15, 20);

    let eiSum = ei.foldLeft(0, func(sum, answer) { sum + answer });
    let snSum = sn.foldLeft(0, func(sum, answer) { sum + answer });
    let tfSum = tf.foldLeft(0, func(sum, answer) { sum + answer });
    let jpSum = jp.foldLeft(0, func(sum, answer) { sum + answer });

    var personalityType = "";

    personalityType := personalityType # (if (eiSum > 2) { "E" } else { "I" });
    personalityType := personalityType # (if (snSum > 2) { "S" } else { "N" });
    personalityType := personalityType # (if (tfSum > 2) { "T" } else { "F" });
    personalityType # (if (jpSum > 2) { "J" } else { "P" });
  };
};
