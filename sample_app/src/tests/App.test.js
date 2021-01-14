import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {

    // Renders app component
    render(<App />);

    // Expects that the 'learn react' link element is displayed
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
