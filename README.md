Folder contains code folders which I do while practicing React 

How to use the downloaded files

1) Run "npm install" in the extracted folder

2) Run "npm run eject" and add these lines of code in  ***webpack.config.dev.js, webpack.config.prod.js***

               importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]' 

3) Run "npm start" to view the project