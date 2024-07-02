import fs from 'fs/promises';
import path from 'path';

import { Task } from '@/lib/common/Task';

const dataDir = path.join(process.cwd(), 'src/db');

export const getTasks = async (): Promise<Task[]> => {
  const data = await fs.readFile(path.join(dataDir, 'data01.json'));
  return JSON.parse(data.toString()) as Task[];
};

export const addTask = async (
  title: string,
): Promise<{ id: string; title: string; completed: boolean }> => {
  const tasks = await getTasks();
  const newTask = { id: Date.now().toString(), title, completed: false };
  tasks.push(newTask);
  await fs.writeFile(path.join(dataDir, 'data01.json'), JSON.stringify(tasks));
  return newTask;
};

export const updateTask = async (
  id: string,
  fields: { title?: string; completed?: boolean },
): Promise<Task | null> => {
  const Tasks = await getTasks();
  const index = Tasks.findIndex((Task) => Task.id === id);
  if (index === -1) {
    return null;
  }
  Tasks[index] = { ...Tasks[index], ...fields };
  await fs.writeFile(path.join(dataDir, 'data01.json'), JSON.stringify(Tasks));
  return Tasks[index];
};

export const deleteTask = async (id: string): Promise<boolean> => {
  const Tasks = await getTasks();
  const index = Tasks.findIndex((Task) => Task.id === id);
  if (index === -1) {
    return false;
  }
  Tasks.splice(index, 1);
  await fs.writeFile(path.join(dataDir, 'data01.json'), JSON.stringify(Tasks));
  return true;
};
