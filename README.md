# `code-pen`

A Web Component to open code samples in [CodePen](https://codepen.io).

**[Demo](https://daviddarnes.github.io/code-pen/demo.html)** | **[Further reading](https://darn.es/web-component-github-starter-template/)**

## Examples

General usage example:

```html
<script type="module" src="code-pen.js"></script>

<code-pen>
  <pre>
    <code>&lt;p&gt;Hello world&lt;/p&gt;</code>
  </pre>
</code-pen>
```

_Note that the code samples have been escaped so they can be seen on the page_

Example with 3 code blocks (1st defaults to `html`, 2nd to `css`, 3rd to `js`):

```html
<script type="module" src="code-pen.js"></script>

<code-pen>
  <pre>
    <code>&lt;p&gt;Hello world&lt;/p&gt;</code>
  </pre>
  <pre>
    <code>:root { color: hotpink; }</code>
  </pre>
  <pre>
    <code>document.querySelector(&quot;p&quot;).style.backgroundColor = &quot;orange&quot;;</code>
  </pre>
</code-pen>
```

Example setting to `css`:

```html
<script type="module" src="code-pen.js"></script>

<code-pen css>
  <pre>
    <code>:root { background: hotpink; }</code>
  </pre>
</code-pen>
```

Example explicitly setting all the languages by a selector:

```html
<script type="module" src="code-pen.js"></script>

<code-pen html=".language-html" css=".language-css" js=".language-js">
  <pre>
    <code>I'm a rogue code block to ruin this Web Component demo</code>
  </pre>
  <pre>
    <code class="language-html">&lt;p&gt;Hello world&lt;/p&gt;</code>
  </pre>
  <pre>
    <code class="language-css">:root { color: hotpink; }</code>
  </pre>
  <pre>
    <code class="language-js">document.querySelector(&quot;p&quot;).style.backgroundColor = &quot;orange&quot;;</code>
  </pre>
</code-pen>
```

Example usage in markdown:

````
<code-pen>

```
<p>Hello world</p>
```

</code-pen>
````

_This depends on how your markdown parses HTML_

## Features

This Web Component allows you to:

- Add a button under `code` elements which open that code in CodePen
- Add a button under multiple `code` elements to open each of them in CodePen (`html`, `css` and `js` in that order)
- Direct `code` content to a particular language in CodePen using `html`, `css` and `js` attributes
- Direct and select specific elements to be opened up in CodePen, e.g. `html=".language-html` etc

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/code-pen): `npm install @daviddarnes/code-pen`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/code-pen/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="code-pen.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://www.unpkg.com/@daviddarnes/code-pen@1.0.0/code-pen.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://esm.sh/@daviddarnes/code-pen@1.0.0"></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/code-pen)
