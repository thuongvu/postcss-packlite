# PostCSS Packlite [![Build Status][ci-img]][ci]

[PostCSS] plugin bundle that includes imports, variables, mixins, and nesting.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/thuongvu/postcss-packlite.svg
[ci]:      https://travis-ci.org/thuongvu/postcss-packlite

### Imports

```css
/* Before */

@import "base"; /* Contents of base.css: `body { margin: 0; }` */


/* After */

body { margin: 0; }
```

### Variables

```css
/* before */

$full-width: 100px;

.foo {
	width: $full-width;
}


/* after */

.foo {
	width: 100px;
}

```

### Variables

```css
/* before */

$full-width: 100px;

.foo {
	width: $full-width;
}


/* after */

.foo {
	width: 100px;
}

```

### Mixins

```css
/* before */

@define-mixin link $link, $visited, $hover {
	a {
		color: $link;
	}
	a:visited {
		color: $visited;
	}
	a:hover {
		color: $hover;
	}
}
.home {
	@mixin link red, yellow, orange;
}



/* after */

.home a {
    color: red
}
.home a:visited {
    color: yellow
}
.home a:hover {
    color: orange
}


```

### Nesting

```css
/* before */

.foo {
	.bar {
		width: 100px;
	}
}

.foo {
	&.bar {
		width: 200px;
	}
}


/* after */

.foo .bar {
    width: 100px;
}

.foo.bar {
    width: 200px;
}

```


## Usage

Run `npm install postcss-packlite`
```js
postcss([ require('postcss-packlite') ])
```
