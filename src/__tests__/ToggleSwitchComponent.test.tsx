import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleSwitchComponent from '../components/ToggleSwitchComponent/ToggleSwitchComponent';
import toggleStates from '../config/toggleStates';

describe('ToggleSwitchComponent', () => {
    test('renders ToggleSwitchComponent', () => {
        render(<ToggleSwitchComponent switches={toggleStates} />);

        // Check if all toggle switches are rendered
        toggleStates.forEach((toggleStates) => {
            expect(screen.getByText(toggleStates.toggleLabel)).toBeInTheDocument();
        });
    });
});
