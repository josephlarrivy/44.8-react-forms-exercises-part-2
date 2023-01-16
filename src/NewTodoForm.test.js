import { render, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm'

test('renders the form', () => {
    render(<NewTodoForm />);
});