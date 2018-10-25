import React, { Component } from 'react';
import Node from './Node';

class DocumentRenderer extends Component {
  render() {
    const { document, nodeRenderers } = this.props;

    return <Node node={document} nodeRenderers={nodeRenderers} />;
  }
}

export default DocumentRenderer;
