import 'regenerator-runtime/runtime';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../src/pages/Login';
import { BrowserRouter } from 'react-router-dom';


global.fetch = jest.fn(() => Promise.resolve());

test('Login snapshot test', () => {
    const component = renderer.create(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});