# Notes

- JSX is not html inside js but it is html like syntax
- JSX code gets transpiled before it reaches to js engine

- Transpiled ? : it conerts the code that browsers can undewrstand
- JSX transpiles  => Parcel => Babel 

# Important Note about JSX: >

- JSX code gets converted into React.createelement and React element gets converted into html element
# Example for above
 - this jsx  let heading = <h1 id="Heading">Namaste react using JSX</h1> gets converted to 
 - React.CreateElement('h1',{id="heading"},"Namaste React using jsx") and then converted to normal HTML
 - Babel is conerting jsx code to React.create element

# IMP Extension 
-  Prettier, Bracket pair colorization, ES Lint, Better Comments

# Components

# Funcional component: A normal javascript function that returns a  piece of xml code or React element.

# Important

# Config driven UI: Controling your UI by DATA i mean via backened API

# Reconcilation: 
- A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on).

Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.

# Compilation vs. Transpilation:
Ever wondered about the difference between compilation and transpilation? Compilation turns high-level source code into executable machine code, while transpilation converts code between languages of similar abstraction levels. It's like speaking one programming language but writing it in another. 

# The Power of Babel:
Meet Babel, your JS transpiler sidekick! Bundled with tools like Parcel, Babel converts modern ES6 code into older syntax for better browser compatibility. In the context of React, it's your go-to for translating JSX into browser-readable code. 🚀