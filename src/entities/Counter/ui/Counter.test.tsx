import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Sidebar', () => {
    test('text initial value', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment value', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });

        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement value', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });

        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
