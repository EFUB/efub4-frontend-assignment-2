interface Todo {
    title: string;
    description: string;
    completed: Boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Study English",
    completed: false,
}
