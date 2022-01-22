import ConstantsType from "./types/utils";

export const baseLength = 62 as const;

export const CHAR_STATUSES = {
  IN_THE_WORD_AND_COLLECT_SPOT: "IN_THE_WORD_AND_COLLECT_SPOT",
  IN_THE_WORD_AND_WRONG_SPOT: "IN_THE_WORD_AND_WRONG_SPOT",
  NOT_IN_THE_WORD: "NOT_IN_THE_WORD",
} as const;

export type CharStatus = ConstantsType<typeof CHAR_STATUSES>;

export const COLORS = {
  COLLECT: "#6AAA64",
  WRONG: "#C9B458",
  NOT_IN_THE_WORD: "#787C7E",
} as const;

export type ColorTypes = ConstantsType<typeof COLORS>;
