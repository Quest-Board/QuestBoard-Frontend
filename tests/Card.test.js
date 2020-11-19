import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../src/components/Card';

test('test1', () => {
    const component = renderer.create(
        <Card></Card>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});