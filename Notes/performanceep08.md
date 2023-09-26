# Design Pattern
- Single Responsibility principle: Using this feature we can get reusability of the code.
 - code becomes more maintanable
 - code becomes testable
 - myNote: Using single responsibility principle we allow the component i mean we split the component in  small small component like header shoud have the header related code or footer should have footer  related code if want use some where i can import and re use it thats what single responsibilty principle design is.

 # lazy loading: we split the bundle in mltiple chunks and lazy loading loads the code when it is requested. 
 - it is one of the important feature of react js for mproving the performance of web application
 - and requires to wrap inside Suspense.
 - Suspense: it waits for the wraped component to load and till that time it shows user a fall back UI

 # Example of lazy loading.
 - import looks like this inside router page:
    ` const Grocery = lazy(()=> import("./components/Grocery")); `
    `   {
        path: '/grocery',
        element : <Suspense fallback ={<h1>Loading ......</h1>}><Grocery /> </Suspense>
      },  `