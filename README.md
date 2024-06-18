# `code-pen`

A Web Component for opening code blocks in [CodePen](https://codepen.io).

**[Demo](https://daviddarnes.github.io/code-pen/demo.html)** | **[Code attributes demo](https://daviddarnes.github.io/code-pen/demo-code-attributes.html)**  | **[Title and label demo](https://daviddarnes.github.io/code-pen/demo-title-label.html)** | **[Further reading](https://darn.es/code-pen-web-component/)**

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

_Note that the code samples have been escaped so they can be seen on the page correctly_

Examlpe with 3 `code` elements which default to HTML, CSS and JavaScript respectively:

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

## Features

This Web Component allows you to:

* Open `code` samples in the CodePen editor without any configuration
  * Open a single HTML `code` sample
  * Open a pair of HTML and CSS `code` samples, in respective order
  * Open a trio of HTML, CSS and JavaScript `code` samples, in respective order
* Adjust where the `code` sample is filled into in CodePen using the `css` and `js` attributes (`html` is the default)
* Adjust which elements are used as the code sample source by using the `html`, `css` and `js` attributes and an element selector as its value (e.g. `css="textarea"`)
* Add a title to the pre-filled pen using the `title` attribute
* Change the "Open in CodePen" button text label using the `label` attribute 

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

#### Using attributes

By default the `<code-pen>` component will assume the first `code` element it finds goes into the HTML editor in CodePen, the second goes into the CSS editor, and JavaScript into the third. If there is only one or two `code` elements it'll still follow this order and leave the missing ones blank in CodePen. However with attributes the order can be modified and changed.

Applying the `css` or `js` attributes will cause a single `code` elements content to be insered into the CSS or JavaScript editors in CodePen respectively:

```html
<script type="module" src="code-pen.js"></script>

<code-pen css>
  <pre>
    <code>:root { background: hotpink; }</code>
  </pre>
</code-pen>
```

```html
<script type="module" src="code-pen.js"></script>

<code-pen js>
  <pre>
    <code>document.querySelector(&quot;p&quot;).style.backgroundColor = &quot;orange&quot;;</code>
  </pre>
</code-pen>
```

_Note that, as mentioned above, not applying any attributes will mean the single `code` elements content will be inserted into the HTML editor on CodePen_

You can also overwrite the element selection entirely using the `html`, `css` and `js` attributues to set an element selector for each piece of code. This is useful for cases where your code is out of order, you have extra rogue elements in your content or if you wish to use a different element entirely.

```html
<script type="module" src="code-pen.js"></script>

<code-pen html=".language-html" css=".language-css" js=".language-js">
  <pre>
    <code>I'm a rogue code block to ruin this Web Component demo</code>
  </pre>
  <pre>
    <code>document.querySelector(&quot;p&quot;).style.backgroundColor = &quot;orange&quot;;</code>
  </pre>
  <pre>
    <code class="html">&lt;p&gt;Hello world&lt;/p&gt;</code>
  </pre>
  <pre>
    <code class="css">:root { color: hotpink; }</code>
  </pre>
</code-pen>
```

```html
<script type="module" src="code-pen.js"></script>

<code-pen css="textarea">
  <textarea>:root { background: hotpink; }</textarea>
</code-pen>
```

Optionally you can set the title of the newly create pen in CodePen as well as the button label for the "Open in CodePen" button using `title` and `label` respectively:

```html
<script type="module" src="code-pen.js"></script>

<code-pen title="Hello world example" label="Create new pen">
  <pre>
    <code>&lt;p&gt;Hello world&lt;/p&gt;</code>
  </pre>
</code-pen>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/code-pen)
