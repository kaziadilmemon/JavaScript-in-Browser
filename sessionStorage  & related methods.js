/* used lessoften than localStorage. Properties and methods are same as local storage but:
1) The session Storage exists only within the current browser tab.Another tab with same page will have a different storage.

2) The data survives page refresh,but not closing/opening the tab.

* When the data gets updated in localStorage or sessionStorage event triggers with these properties(Storage Event).

1) key => The key
2) oldvalue => Previous value
3) newvalue => new value
4) url => page url
5) storageArea => local or sessionStorage.

We can listen the onstorage event of window which is triggerid which update made to the same Storage.



// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")
