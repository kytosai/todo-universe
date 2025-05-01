import { YNValueType } from './../common';

export interface TodoItem {
  id: string;
  title: string;
  content: string;
  completedYn: YNValueType;
  createdAt: number; // millisecond
}
