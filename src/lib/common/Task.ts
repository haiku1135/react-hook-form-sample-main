export class Task {
  id: string;
  title: string;
  completed: boolean;

  constructor(taskRecord: { id: string; title: string; completed: boolean }) {
    const { id, title, completed } = taskRecord;

    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
