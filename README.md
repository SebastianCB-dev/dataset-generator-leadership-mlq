# Dataset generator project ML leadership using MLQ

> [!NOTE]  
> This project was created with Node.js and Typescript.

> [!IMPORTANT]
> The version used in this project are:
> - Node.js: v20
> - pnpm: 9.0.6

## Description

This project is a dataset generator for the ML leadership using MLQ project. The dataset is generated using random values simulating the answers of the MLQ test.

## Installation

To install the project, you need to have Node.js version 20. After that, you can run the following command:

```bash
npm install --location=global pnpm@9.0.6
```

Then, you can install the project dependencies:

```bash
pnpm install
```

## Usage

To generate the dataset, you can run the following command:
```bash
pnpm start
```

The dataset will be generated in the `output` folder.

## Output

The dataset will be generated in the `output` folder. The dataset will be a CSV file with the following columns:
["0. Question 1", "1. Question 2", ... "20. Question 21", "Class"]

The values of the columns will be a number between 0 and 4.
The class column will be a number between 0 and 2 where:
- 0: Low Leadership
- 1: Medium Leadership
- 2: High Leadership

## License
MIT
