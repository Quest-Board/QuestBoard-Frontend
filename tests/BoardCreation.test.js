import 'regenerator-runtime/runtime';
import React from 'react';
import renderer from 'react-test-renderer';
import BoardCreation from '../src/pages/BoardCreation';
import { BrowserRouter } from 'react-router-dom';


test('Board creation snapshot test', () => {
    const component = renderer.create(
        <BrowserRouter>
            <BoardCreation/>
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});