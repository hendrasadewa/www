---
date: 2023/03/07

title: Triple AAA Test
description: How to write an unit test with AAA pattern

tags:
  - react
  - notes
  - unit-test
---

## The AAA (Arrange-Act-Assert)

AAA pattern is a common approach used in unit testing to structure the tests and make them more organized and readable.

![image by Hans Reniers from unsplash](https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)

Here's how you can use the AAA pattern in your unit tests:

### Arrange

In this step, you set up the initial conditions for your test. This involves creating any objects, initializing any variables, and configuring any dependencies that your test requires. Essentially, you are arranging the elements that your test will act upon.

### Act

This step involves actually executing the code that you want to test. This may involve calling a method or function, passing in some arguments, and obtaining the result.

### Assert

Finally, in this step, you verify that the output of the code under test matches what you expected. This may involve checking values of variables or properties, comparing expected and actual results, or ensuring that certain conditions are met.

## TS Examples

Here's an example of using the AAA pattern in TypeScript to test a function that adds two numbers:

```ts
function addNumbers(x: number, y: number): number {
	return x + y;
}

describe('addNumbers', () => {
	it('should add two numbers correctly', () => {
		// Arrange
		const x = 2;
		const y = 3;

		// Act
		const result = addNumbers(x, y);

		// Assert
		expect(result).toEqual(5);
	});
});
```

In this TypeScript example, we have a function `addNumbers()` that takes two number parameters and returns their sum. We use the describe() and `it()` functions provided by a testing library (such as Jest or Mocha) to define a test suite and a test case respectively. Inside the test case, we follow the AAA pattern:

1. **Arrange**: We set up the values of x and y that we want to test with.
2. **Act**: We call the `addNumbers()` function with the values of x and y, and store the result in result.
3. **Assert**: We use the `expect()` function provided by the testing library to check that the value of result is equal to the expected value of 5.

## React Example

Here is an example of using the AAA pattern in a unit test for a React component written in TypeScript. The component being tested is called `ItemList`, which takes an array of `Item` objects as a prop and renders them as a list of `<li>` elements.

Component file - `ItemList.tsx`

```tsx
export interface Item {
	id: number;
	name: string;
}

export interface Props {
	items: Item[];
}

function ItemList({ items }: Props): JSX.Element {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	);
}
```

Test File - `ItemList.test.tsx`

```tsx
import { render, screen } from '@testing-library/react';
import ItemList, { Item } from './ItemList';

describe('ItemList', () => {
	it('should render a list of items correctly', () => {
		// Arrange
		const items: Item[] = [
			{ id: 1, name: 'Item 1' },
			{ id: 2, name: 'Item 2' },
			{ id: 3, name: 'Item 3' }
		];

		// Act
		render(<ItemList items={items} />);
		const itemElements = screen.getAllByRole('listitem');

		// Assert
		expect(itemElements).toHaveLength(3);
		expect(itemElements[0]).toHaveTextContent('Item 1');
	});
});
```

Here's how the AAA pattern is used in unit test above:

1. **Arrange**: In this step, we set up the initial conditions for the test. In this case, we create an array of `Item` objects that we want to render in the list.
2. **Act**: This step involves actually rendering the component under test and obtaining any elements that we want to make assertions on. In this case, we use the `render()` function provided by the `@testing-library/react` library to render the ItemList component with the items prop we created in the Arrange step. Then, we use the `getAllByRole()` function to get all of the `<li>` elements rendered by the component and store them in the `itemElements` variable.
3. **Assert**: Finally, in this step, we verify that the output of the component under test matches what we expected. In this case, we use the expect() function provided by the testing library to check that the itemElements array has a length of 3 (since we passed in 3 Item objects), and that the first item element has the correct text content ("Item 1").

By following the AAA pattern, we can write clear and readable tests that are easy to understand and maintain.

_Credit to [Hans Reniers](https://unsplash.com/@hansreniers), for the photo at the heading_
