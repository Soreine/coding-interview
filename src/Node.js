import React, { Component } from 'react';

/**
 * Render a node and its children
 */
class Node extends Component {
  /*
   * Generate a unique key for this node
   * It should be unique among other nodes
   * It should be stable (for now it is not because we use the index)
   * It should be predictable (the same between executions)
   */
  static generateKey(node, index) {
    const { nodes } = node;

    const childKey = nodes
      ? node.nodes.map(child => Node.generateKey(child)).join('_')
      : node.text;

    return [node.type, index, childKey].join('_');
  }

  render() {
    const {
      node: { type, nodes, text },
      nodeRenderers
    } = this.props;

    const inner = nodes
      ? nodes.map(child => (
          <Node
            key={Node.generateKey(child)}
            node={child}
            nodeRenderers={nodeRenderers}
          />
        ))
      : text;

    const Component = nodeRenderers[type] || 'div';

    return <Component>{inner}</Component>;
  }
}

export default Node;
