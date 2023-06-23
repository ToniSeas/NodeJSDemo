# Inicialize npm
npm init

# Install the TypeScript compiler

npm install --save-dev typescript

# Install the TypeScript type definitions for the Node.js runtime

npm install @types/node --save-dev

# Inicialize tsconfig

npx tsc --init

#  ts-node allows you to directly run TypeScript code without the need to transpile it to JavaScript beforehand.

npm install --save-dev ts-node

# Generate React app with ts

npx create-react-app my-app --template typescript