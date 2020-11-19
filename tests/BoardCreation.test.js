import 'regenerator-runtime/runtime';
import React from 'react';
import renderer from 'react-test-renderer';
import BoardCreation from '../src/pages/BoardCreation';
import { BrowserRouter } from 'react-router-dom';


test('test3', () => {
    const component = renderer.create(
        <BrowserRouter>
            <BoardCreation/>
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    //manually trigger callback
    //tree.props.onMouseEnter();
    //re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    //manually trigger the callback


});