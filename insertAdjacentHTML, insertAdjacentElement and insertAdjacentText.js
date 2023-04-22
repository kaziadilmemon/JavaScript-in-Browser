// beforebegin : Insert HTML immediately before element. 
 first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');

// afterbegin : Insert HTML into element at the beginning.
 first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');

// beforeend : Insert HTML into element at the end.
 first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');

// afterend : Insert HTML immediately after element. 
 first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');

// To remove a node, there's  a method node.remove().
first.remove()

