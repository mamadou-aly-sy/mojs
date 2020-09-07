let title = select('h1');
title.setText('Hello');
let list = select('.list');
list.setHTML('<li>Apple</li><li>Orange</li><li>Milk</li>');
list.setHTML(list.getHTML() + '<li>Eggs</li><li>bread</li><li>yaourt</li>')
title.css({color: "green"})
title.on('click', () => {
  title.toggle("color", ["yellow", "green"]);
});

title.setClass('green');

favs = selectAll('li');
favs.childs.forEach((child) => {
  child.on('click', () => {
    child.display('inline');
  })
})
