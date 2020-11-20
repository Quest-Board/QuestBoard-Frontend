import 'regenerator-runtime/runtime';
import React from 'react';
import renderer from 'react-test-renderer';
import Board from '../src/pages/Board';
import { BrowserRouter } from 'react-router-dom';


global.fetch = jest.fn(() => Promise.resolve());

test('Board snapshot test', () => {
    const component = renderer.create(
        <BrowserRouter>
            <Board/>
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});