import { render, screen } from '@testing-library/react';
import Item from './Item'

test('renders an item', () => {
    render(<Item />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<Item id='testingId1' key='testingId1' item='testingItem1'/>);
    expect(asFragment()).toMatchSnapshot();
});