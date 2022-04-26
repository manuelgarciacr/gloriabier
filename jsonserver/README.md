# JSON SERVER

## Install:

&emsp;&emsp;`~ ... /gloriabier$`\
&emsp;&emsp;`~ ... /gloriabier$ cd jsonserver`\
&emsp;&emsp;`~ ... /gloriabier/jsonserver$ npm i`

## Execute:

- Default port 3000:  
`~ ... /gloriabier/jsonserver$ npm run serve`  
- Custom parameters (ex. port):  
`~ ... /gloriabier/jsonserver$ npm run serve -- --port 3030`  

## db/data.json

    {
        table1: [
            {
                "id": 1,
                ...
            },
            ...
            {
                "id": n,
                ...
            }
        ],
        table2: [
            {
                "id": 1,
                ...
            },
            ...
        ],
        ...
        table-n: [
            ...
        ]
    }