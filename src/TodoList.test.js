import { render, screen } from '@testing-library/react';
import TodoList from "./TodoList";

test('renders the list', () => {
    render(<TodoList />);
});