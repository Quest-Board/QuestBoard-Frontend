import 'regenerator-runtime/runtime';
import React from 'react';
import renderer from 'react-test-renderer';
import StatsBar from '../src/components/StatsBar';


test('test2', () => {
    const component = renderer.create(
        <StatsBar></StatsBar>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});