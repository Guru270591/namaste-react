# useEffect: first component gets rendered then useEffect  call back function will be called.
 - Optional chaining: The ?. operator is like the . chaining operator, except that instead of causing an - error if a reference is nullish (null or undefined), the expression short-circuits with a return - - - value of undefined. When used with function calls, it returns undefined if the given function does not exist.

        This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

# Shimmer UI: (a loading skeleton): it loads a fake page untill we get the data from API we can show a fake page/cards till the data loads.

# Cors Policy: No Access Allow control origin:
- Browser does not allow to target a API https domain from locale domain for to allow you need to pass header for allowing cross origin or download chrome extention.

# React Fiber: it is a new reconciliation algorithm which finds the difference between virtual dom and only updates the dom that portion is required.

# UseState Hook:
- Use state re renders the page everytime its get updated but because of reconciliation alogorith(Raect fiber) it compares and renders only updated part full full component.