import React from 'react';
import { render, screen } from '@testing-library/react';
import Salon from '../../../../src/components/features/Salon/Salon';
import salon from '../../../mock_data/Salon.json'

const props = {
    salon
}

describe('Salon component', () => {
    beforeEach(() => {
        render(
            <Salon {...props} />
        );
    });
    it('renders header with proper title', () => {
        expect(screen.getByText(/Sax & Fön/i)).toBeInTheDocument();
    });
})