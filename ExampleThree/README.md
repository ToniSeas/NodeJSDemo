# Install the TypeScript compiler

npm install --save-dev typescript

# Install the TypeScript type definitions for the Node.js runtime

npm install @types/node --save-dev

# The rootDir is where TypeScript will look for our code. We have directed it to /src folder where we will write our code. 
# The outDir folder defines where the compiled code is put. Such code is configured to be stored in build/ folder.

npx tsc --init --rootDir \ --outDir build \

#  ts-node allows you to directly run TypeScript code without the need to transpile it to JavaScript beforehand.

npm install --save-dev ts-node