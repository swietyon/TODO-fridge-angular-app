import { v4 as uuidv4 } from 'uuid';

export enum Priority {
    low = 'low',
    medium = 'medium',
    high = 'high'
  }

export interface Todo {
    id: string,
    title: string,
    todoText: string,
    date: Date,
    priority: Priority,
    userId: string
}

export const originalEmptyTodo = {
    id: uuidv4(),
    title: '',
    todoText: '',
    date: new Date(),
    priority: Priority.low,
    userId: ''
};