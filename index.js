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

copy(serializeHtmlStyles(document.querySelectorAll('#header')[0]));
console.log('element copied to clipboard');
