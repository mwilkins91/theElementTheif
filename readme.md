# Usage
 Copy and paste the following function into the chrome dev tool's console

```JavaScript

function serializeHtmlStyles(element) {
	function inlineStyles() {
		let styles = getComputedStyle(this);
		this.setAttribute('style', styles.cssText);
	}

	function styleTheif() {
		let childrenArray = Array.from(this.children);
		if (childrenArray.length) {
			childrenArray.forEach(child => styleTheif.call(child));
		}
		inlineStyles.call(this);
		return this;
	}
	const serializedElement = styleTheif.call(element);
	return serializedElement.outerHTML;
}

```

Then, run the function in the console by using:

```JavaScript

copy(serializeHtmlStyles(document.querySelectorAll('#header')[0]));
console.log('element copied to clipboard');

```

Replace `document.querySelectorAll('#header')[0]` with the DOM node of your choosing. **NOTE: The function expects a single node to be passed, a node list or jquery object will cause an error!**

The newly aquired element will be copied to your clipboard with all styles inlined. Simply paste it to whereever you need it! 