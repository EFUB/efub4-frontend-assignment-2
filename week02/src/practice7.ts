interface Todo {
  title: string;
  description: string;
  completed: Boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Study English",
  completed: false,
  createdAt: 20241001,
};

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Study English",
  description: "Exam Tomorrow",
};
