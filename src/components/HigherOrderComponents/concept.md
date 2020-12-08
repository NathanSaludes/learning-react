# HIGHER ORDER COMPONENTS

## **What is a higher order component?**

We use the technique/concept of Higher Order Components (HOC) to implement shared functionalities/features across components that implement it without writing repeating code.

To make things clear, you can think of higher order components as functions
that accepts a plain react component as a parameter and return it along with
its own implementation of features/functionalities.

as a visual example think of it like this:

We have a component called 'TonyStark' and a function called 'nanoTechSuit'
as the higher order component.

```js
const IronMan = nanoTechSuit(TonyStark);
```