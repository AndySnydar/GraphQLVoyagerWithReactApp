import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Voyager} from 'graphql-voyager';
import fetch from 'isomorphic-fetch';

function introspectionProvider(query) {
  return fetch('http://localhost:8080/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({query: query}),
  }).then(response => response.json());
}

ReactDOM.render(<Voyager workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'} introspection={introspectionProvider} />, document.getElementById('voyager'));
