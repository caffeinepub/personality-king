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
    text: string;
    dimension: string;
}
export interface QuizQuestion {
    id: bigint;
    text: string;
    answerOptions: Array<AnswerOption>;
    dimension: string;
}
export interface PersonalityType {
    weaknesses: Array<string>;
    strengths: Array<string>;
    famousExamples: Array<string>;
    code: string;
    name: string;
    description: string;
    likes: Array<string>;
    dislikes: Array<string>;
}
export interface backendInterface {
    calculatePersonalityType(answers: Array<bigint>): Promise<string>;
    getAllPersonalityTypes(): Promise<Array<PersonalityType>>;
    getAllQuizQuestions(): Promise<Array<QuizQuestion>>;
    getPersonalityTypeByCode(code: string): Promise<PersonalityType>;
}
