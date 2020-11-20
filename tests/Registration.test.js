import 'regenerator-runtime/runtime';
import React from 'react';
import renderer from 'react-test-renderer';
import Registration from '../src/pages/Registration';
import { BrowserRouter } from 'react-router-dom';


global.fetch = jest.fn(() => Promise.resolve());

test('Registration snapshot test', () => {
    const component = renderer.create(
        <BrowserRouter>
            <Registration />
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});