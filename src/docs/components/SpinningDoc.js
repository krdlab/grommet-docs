// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Spinning from 'grommet/components/icons/Spinning';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

export default class SpinningDoc extends Component {

  render () {
    return (
      <DocsArticle title="Spinning" colorIndex="neutral-3">

        <section>
          <p>An indeterminate spinning/busy icon. This should be used sparingly.
          If at all possible, use Meter with % to indicate progress. For content
          loading situations, Meter, Chart, and Distribution already have
          visuals for when the data has not arrived yet. In general,
          there should not be more than one Spinning icon on the screen at a
          time.</p>

        <Example code={
          <Spinning />
        } />
        </section>

      </DocsArticle>
    );
  }
};
