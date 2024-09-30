interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview1 = Omit<Todo1, "description">;

const todo1: TodoPreview1 = {
  title: "Study English",
  completed: false,
  createdAt: 20240915,
};

type TodoInfo = Omit<Todo1, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Study Math",
  description: "Exam Tomorrow",
};
