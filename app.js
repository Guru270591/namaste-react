/**
 * 
 * <div id="parent">
 * 
 *  <div id = "child">
 *   
 *    <h1> I am h1 tag! </h1>
 *   
 *  </div>
 * 
 * </div>
 * 
 * 
 * 
 */



const parent = React.createElement('div', { id: "parent" }, [
    React.createElement('div', { id: "child1" }, [
    React.createElement("h1", { id: "heading", className: "heading" }, "I am Heading h1!"), 
    React.createElement("h2", { id: "heading", className: "heading" }, "I am Heading h2!"), 
    React.createElement('div', { id: "child2" }, [
    React.createElement("h1", { id: "heading", className: "heading" }, "I am Heading h1!"), 
    React.createElement("h2", { id: "heading", className: "heading" }, "I am Heading h2!")])])])
const rootF = ReactDOM.createRoot(document.getElementById('root'));
rootF.render(parent);
