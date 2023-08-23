export type ConversationType = {
  timeStamp: number;
  isBot: boolean;
  msgContent: string;
};

export type ChatReducerType = {
  conversationThread: ConversationType[];
  isReplyPending: boolean;
};
