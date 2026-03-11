import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AnswerOption {
    englishText: string;
    hindiText: string;
}
export interface QuizQuestion {
    answerOptions: Array<AnswerOption>;
    dimension: string;
    englishText: string;
    hindiText: string;
}
export interface PersonalityType {
    englishFamousExamples: Array<string>;
    englishStrengths: Array<string>;
    hindiDescription: string;
    code: string;
    englishName: string;
    hindiName: string;
    englishDescription: string;
    category: string;
    hindiFamousExamples: Array<string>;
    englishWeaknesses: Array<string>;
    hindiWeaknesses: Array<string>;
    hindiStrengths: Array<string>;
}
export interface backendInterface {
    calculatePersonalityType(answers: Array<bigint>): Promise<string>;
    getAllPersonalityTypes(): Promise<Array<PersonalityType>>;
    getAllQuizQuestions(): Promise<Array<QuizQuestion>>;
    getPersonalityTypeByCode(code: string): Promise<PersonalityType>;
    getQuizQuestionById(id: string): Promise<QuizQuestion>;
}
