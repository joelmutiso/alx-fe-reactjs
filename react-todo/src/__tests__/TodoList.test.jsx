import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

describe("TodoList component", () => {
  const mockToggle = jest.fn();
  const sampleTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
  ];

  test("renders todos correctly", () => {
    render(<TodoList todos={sampleTodos} onToggle={mockToggle} />);
    
    // Verify both items appear
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("calls onToggle when checkbox is clicked", () => {
    render(<TodoList todos={sampleTodos} onToggle={mockToggle} />);
    const checkbox = screen.getAllByRole("checkbox")[0];

    fireEvent.click(checkbox);
    expect(mockToggle).toHaveBeenCalledWith(1); // should toggle first todo
  });
});
