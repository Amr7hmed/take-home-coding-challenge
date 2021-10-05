### To run the file, please install the project through in Your terminal
```
npm install
```

### To run the file, please install the project through the terminal
```
npm install
```

### The problem or what is needed for implementation
```
Create a product display page with the ability to filter it on the basis of category, price, color and number of reviews.
All data is called through an API link .
```

### Items used
```
I used the React Hooks method.
Instead of using "Redux" because I found it would be easier to read it and make adjustments if necessary.
```

### What I couldn't do due to lack of time
```
- The price filter was supposed to be based on the possibility of price adjustment from two directions and the presence of two input elements, but after a long search and testing more than one method did not work for me very much, so I applied it based on the creation of an input element of type "Range"
Create an input element of type "number" and link them together, allowing the possibility to modify them at the same time.
- The problem of data display speed has transformed thinking of many solutions to solve the problem of slow data display, but time did not seek to reach more efficient solutions
```

### Explain what you did
```
- For products and items, I called it from their Api link
And I made a system calling them in the "class" so that if any other elements were added or the link was modified, no changes were made or a new "function" was created, but a copy of the base "class" was created.
- For filtering in general to "Category, Color, Price, Rating". A new "array" element has been created, added to products after filtering and then displayed 
```