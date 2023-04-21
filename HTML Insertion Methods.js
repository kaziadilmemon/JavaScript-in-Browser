let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';

 a.append(div); // append at the end of the node.
 a.prepend(div); // Insert at the beginning of the node.
 a.before(div);  // Insert before node.
 a.after(div);  // Insert after node.
 a.replaceWith(div); //replaces node with the given node.
