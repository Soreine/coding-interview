import React, { Component } from 'react';
import './App.css';
import DOCUMENT from './DOCUMENT';
import DocumentRenderer from './DocumentRenderer';

// This would be user provided
const NODE_RENDERERS = {
  document: props => <div className="document">{props.children}</div>,
  heading1: 'h1',
  paragraph: 'p',
  quote: 'blockquote'
};

class App extends Component {
  render() {
    const document = DOCUMENT;

    return (
      <div className="App">
        <DocumentRenderer document={document} nodeRenderers={NODE_RENDERERS} />
      </div>
    );
  }
}

export default App;
