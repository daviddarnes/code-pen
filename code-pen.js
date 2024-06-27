const codePenTemplate = document.createElement("template");

codePenTemplate.innerHTML = `
<form action="https://codepen.io/pen/define" method="POST" target="_blank">
  <input type="hidden" name="data">
  <input type="submit" value="Open in CodePen">
</form>
`;

codePenTemplate.id = "code-pen-template";

if (!document.getElementById(codePenTemplate.id)) {
  document.body.appendChild(codePenTemplate);
}

class CodePen extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "code-pen", CodePen);
    }
  }

  connectedCallback() {
    this.append(this.template);
    if (this.label) this.button.value = this.label;
    
    this.form.addEventListener("submit", async (event) => {
      await this.input.setAttribute("value", JSON.stringify(this.data));
    });
  }

  get data() {
    const { html, css, js } = this.selectors;

    const findCode = (selector, index = 0) => {
      const block = [...this.code].find((code) => code.matches(selector));

      let code = block?.textContent;

      if (block?.localName.match('(input|textarea)')) code = block.value;
      if (!block) code = this.code[index]?.textContent;

      return code;
    };

    let data = {
      html: findCode(html),
      css: findCode(css, 1),
      js: findCode(js, 2)
    };

    switch (true) {
      case html && !css && !js:
        data = {
          html: findCode(html)
        };
        break;
      case !html && css && !js:
        data = {
          css: findCode(css)
        };
        break;
      case !html && !css && js:
        data = {
          js: findCode(js)
        };
        break;
    }

    data.title = this.title;

    return data;
  }

  get selectors() {
    const getAttribute = (key) =>
      this.getAttribute(key) || this.hasAttribute(key);

    return {
      html: getAttribute("html"),
      css: getAttribute("css"),
      js: getAttribute("js")
    };
  }

  get code() {
    const { html, css, js } = this.selectors;
    return [...this.querySelectorAll(`code, ${html}, ${css}, ${js}`)];
  }

  get template() {
    return document
      .getElementById(
        this.getAttribute("template") || `${this.localName}-template`
      )
      .content.cloneNode(true);
  }
  
  get form() {
    return this.querySelector("form");
  }

  get input() {
    return this.querySelector("input[name='data']");
  }

  get button() {
    return this.querySelector("input[type='submit']");
  }

  get title() {
    return this.getAttribute("title");
  }

  get label() {
    return this.getAttribute("label");
  }
}

CodePen.register();
