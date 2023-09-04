export type ConversationType = {
  timeStamp: number;
  isBot: boolean;
  msgContent: string;
};

export type ChatReducerType = {
  conversationThread: ConversationType[];
  isReplyPending: boolean;
};

interface ChoiceType {
  text: string;
  index: number;
  logprobs: null | any; // You can specify the correct type for logprobs
  finish_reason: string;
}

interface UsageType {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface ResponseDataType {
  warning: string;
  object: string;
  created: number;
  model: string;
  choices: ChoiceType[];
  usage: Usage;
}
