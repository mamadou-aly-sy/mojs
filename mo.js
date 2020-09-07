(function() {
  this.select = selector => {
    return new Element(document.querySelector(selector))
  }

  this.selectAll = selector => {
    return new Elements(document.querySelectorAll(selector))
  }

  this.log = element => {
    console.log(element);
  }

  class Element {
    constructor(element) {
      this.el = element;
      this.getText = () => element.innerText;
      this.getHTML = () => element.innerHTML;
      this.getClasses = () => element.classList;
    }

    setText(text) {
      this.el.tes = text
      return this;
    }

    setHTML(html) {
      this.el.innerHTML = html;
      return this;
    }

    css(styles) {
      const keys = Object.keys(styles);
      const values = Object.values(styles);
      for (var i = 0; i < keys.length; i++) {
        this.el.style[keys[i]] = values[i];
      }
      return this;
    }

    toggle(property, values) {
      if (this.el.style[property] == values[0]) {
        this.el.style[property] = values[1];
      } else {
        this.el.style[property] = values[0];
      }
      return this;
    }

    on(event, callback) {
      this.el.addEventListener(event, callback);
      return this;
    }

    hide() {
      this.css({"display": "none"});
    }

    display(val) {
      this.css({"display": val});
    }

    setClass(className) {
      this.el.classList.add(className);
      return this;
    }
  }

  class Elements {
    constructor(elements) {
      this.childs = [];
      this.els = elements;
      for (var i = 0; i < this.els.length; i++) {
       this.childs.push(new Element(this.els[i]));
      }
    }
  }

})()
