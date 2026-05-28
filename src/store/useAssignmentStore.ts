import { create } from "zustand";

export interface QuestionType {
  type: string;
  count: number;
  marks: number;
}

export interface GeneratedQuestion {
  text: string;
  difficulty: string;
  marks: number;
}

export interface GeneratedSection {
  title: string;
  instruction: string;

  questions: GeneratedQuestion[];
}

interface AssignmentState {
  dueDate: string;

  instructions: string;

  questions: QuestionType[];

  generatedPaper: GeneratedSection[];

  setGeneratedPaper: (data: GeneratedSection[]) => void;

  setDueDate: (date: string) => void;

  setInstructions: (text: string) => void;

  addQuestion: () => void;

  updateQuestion: (
    index: number,
    field: keyof QuestionType,
    value: string | number,
  ) => void;
}

export const useAssignmentStore = create<AssignmentState>((set) => ({
  dueDate: "",

  instructions: "",

  questions: [
    {
      type: "Multiple Choice Questions",
      count: 4,
      marks: 1,
    },
  ],

  generatedPaper: [],

  setDueDate: (date) => set({ dueDate: date }),

  setInstructions: (text) => set({ instructions: text }),

  setGeneratedPaper: (data) =>
    set({
      generatedPaper: data,
    }),

  addQuestion: () =>
    set((state) => ({
      questions: [
        ...state.questions,
        {
          type: "Short Questions",
          count: 1,
          marks: 1,
        },
      ],
    })),

  updateQuestion: (index, field, value) =>
    set((state) => ({
      questions: state.questions.map((q, i) =>
        i === index
          ? {
              ...q,
              [field]: value,
            }
          : q,
      ),
    })),
}));
