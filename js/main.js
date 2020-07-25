import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Portfolio Boilerplate",
        'href': "https://example.com",
        'desc': "First React project.",
        'image': {
            'desc': "Serverless Portfolio",
            'src': "images/example2.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example #2",
        'href': "https://example.com",
        'desc': "Sample React website using Auth0.",
        'image': {
            'desc': "Example screenshot of a project involving code.",
            'src': "images/example1.png",
            'comment': ""
        }
    },
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
