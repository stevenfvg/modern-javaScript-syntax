/* DOM (Document Object Model):
The DOM is a structured tree-like representation of an HTML or XML document. 
When a web browser loads a web page, it creates a representation of the page's content as objects that can be manipulated using JavaScript. 
Each HTML element becomes an object in the DOM, organized in a hierarchy that mirrors the document's structure. 
This allows JavaScript to dynamically access, modify, and manipulate elements and content on a web page. */

// Output the entire Document object
console.log(document);
// Output the domain of the current document
console.log(`domain: ${document.domain}`);
// Output the total number of HTML elements in the document
console.log(`elements: ${document.all.length}`);

// Output the <head> element of the document
console.log(document.head);
// Output the number of <meta> elements within the <head>
console.log(`metadata: ${document.head.querySelectorAll('meta').length}`);
// Output the number of <link> elements within the <head>
console.log(`links: ${document.head.querySelectorAll('link').length}`);
// Output the total number of child elements within the <head>
console.log(`totalElements: ${document.head.childElementCount}`);

// Output the <body> element of the document
console.log(document.body);

/* querySelectorAll: is also a method of the document object, but instead of returning only one element, it returns a collection (NodeList) of all elements that match a given CSS selector. 
You can use it to select multiple elements and then iterate over them. For example:

const elements = document.querySelectorAll('.element-class');
elements.forEach(element => {
  // Do something with each element
});

In summary, the DOM is the structured representation of an HTML or XML document's content in the form of an object tree. 
querySelector and querySelectorAll are methods that enable selecting specific elements in the DOM using CSS selectors, whether to select a single element or multiple elements at once. 
These features are essential for dynamically manipulating and working with web content using JavaScript. */

// Output the total number of elements with a "class" attribute in the document
console.log(`totalClass: ${document.querySelectorAll('[class]').length}`);
// Output the total number of elements with an "id" attribute in the document
console.log(`identifiers: ${document.querySelectorAll('[id]').length}`);

/* querySelector: is a method belonging to the document object in JavaScript. 
It allows selecting and returning the first element that matches a specified CSS selector. 
The CSS selector is a string following the same rules as those used in CSS stylesheets. 
For instance, if you have an element with the id "my-element," you can select it like this:

const element = document.querySelector('#my-element');

This returns the first element with the id "my-element" in the DOM.*/

// Output the number of attributes within the ".container" element (assuming it exists)
console.log(
  `containers: ${document.querySelector('.container').attributes.length}`
);
// Output the total number of <div> elements within the <body>
console.log(`divTags: ${document.body.querySelectorAll('div').length}`);
// Output the total number of <a> (link) elements in the document
console.log(`aTags: ${document.links.length}`);
// Output the total number of <img> elements in the document
console.log(`imgTags: ${document.images.length}`);
// Output the total number of <form> elements in the document
console.log(`formTags: ${document.forms.length}`);

// Get item by ID 
console.log(
  `darkMode: ${document.getElementById('flexSwitchCheckChecked').checked}`
);
// Get element by class name
console.log(`icons: ${document.getElementsByClassName('icon-link').length}`);
