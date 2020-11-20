import 'regenerator-runtime/runtime';
import React from 'react';
import renderer from 'react-test-renderer';
import StatsBar from '../src/components/StatsBar';


test('Stats bar snapshot test', () => {
    const component = renderer.create(
        <StatsBar></StatsBar>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});