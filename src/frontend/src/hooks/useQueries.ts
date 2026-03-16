import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  LocalPersonalityType,
  LocalQuizQuestion,
} from "../data/personalityData";
import {
  QUIZ_QUESTIONS,
  STATIC_PERSONALITY_TYPES,
} from "../data/personalityData";
import { useActor } from "./useActor";

export function useAllPersonalityTypes() {
  const { isFetching } = useActor();
  return useQuery<LocalPersonalityType[]>({
    queryKey: ["personalityTypes"],
    queryFn: async () => {
      return STATIC_PERSONALITY_TYPES;
    },
    enabled: !isFetching,
    initialData: STATIC_PERSONALITY_TYPES,
  });
}

export function usePersonalityType(code: string) {
  const { isFetching } = useActor();
  return useQuery<LocalPersonalityType | null>({
    queryKey: ["personalityType", code],
    queryFn: async () => {
      return STATIC_PERSONALITY_TYPES.find((tp) => tp.code === code) ?? null;
    },
    enabled: !!code && !isFetching,
  });
}

export function useQuizQuestions() {
  const { isFetching } = useActor();
  return useQuery<LocalQuizQuestion[]>({
    queryKey: ["quizQuestions"],
    queryFn: async () => {
      return QUIZ_QUESTIONS;
    },
    enabled: !isFetching,
    initialData: QUIZ_QUESTIONS,
  });
}

export function useCalculatePersonalityType() {
  const { actor } = useActor();
  return useMutation<string, Error, number[]>({
    mutationFn: async (answers: number[]) => {
      if (!actor) {
        return calculateLocally(answers);
      }
      try {
        return await actor.calculatePersonalityType(answers.map(BigInt));
      } catch {
        return calculateLocally(answers);
      }
    },
  });
}

function calculateLocally(answers: number[]): string {
  const dimensions = ["EI", "SN", "TF", "JP"];
  const counts: Record<string, [number, number]> = {
    EI: [0, 0],
    SN: [0, 0],
    TF: [0, 0],
    JP: [0, 0],
  };
  const questionDimensions = [
    "EI",
    "SN",
    "TF",
    "JP",
    "EI",
    "SN",
    "TF",
    "JP",
    "EI",
    "SN",
    "TF",
    "JP",
  ];
  for (let i = 0; i < answers.length; i++) {
    const dim = questionDimensions[i];
    counts[dim][answers[i]]++;
  }
  let code = "";
  for (const dim of dimensions) {
    const [a, b] = counts[dim];
    if (dim === "EI") code += a >= b ? "E" : "I";
    else if (dim === "SN") code += a >= b ? "S" : "N";
    else if (dim === "TF") code += a >= b ? "T" : "F";
    else code += a >= b ? "J" : "P";
  }
  return code;
}
