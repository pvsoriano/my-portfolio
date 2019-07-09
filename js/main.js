import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Work Example #2",
        'image': {
            'desc': "Example screenshot of a project involving code.",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Portfolio Boilerplate",
        'image': {
            'desc': "Serverless Portfolio",
            'src': "images/example2.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example #3",
        'image': {
            'desc': "",
            'src': "images/example3.png",
            'comment': ""
        }
    },
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))