/// <reference types="react" />

// based on https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/src/index.d.ts
declare namespace jest {
	interface ToMatchElementOptions {
		ignoreProps?: boolean;
	}

	interface Matchers<R> {
		/**
		 * Assert enzyme either has `defaultChecked` or `checked` props set to true.
		 */
		toBeChecked(): Matchers<R>;

		/**
		 * Assert enzyme has a truthy value for the `disabled` prop.
		 */
		toBeDisabled(): Matchers<R>;

		/**
		 * Assert enzyme current component resolves to a falsy value.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/shallow.html#isemptyrender--boolean
		 */
		toBeEmptyRender(): Matchers<R>;

		/**
		 * Assert enzyme contains at least one element matching the selector.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html
		 */
		toContainMatchingElement(selector: string): Matchers<R>;

		/**
		 * Assert enzyme contains exactly n elements matching the selector.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html
		 */
		toContainMatchingElements(n: number, selector: string): Matchers<R>;

		/**
		 * Assert enzyme contains precisely one element matching the selector.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html
		 */
		toContainExactlyOneMatchingElement(selector: string): Matchers<R>;

		/**
		 * Assert enzyme contains the react component, with the same props.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/contains.html
		 */
		toContainReact(component: React.ReactElement<any>): Matchers<R>;

		/**
		 * Assert enzyme contains at least a single element.
		 */
		toExist(): Matchers<R>;

		/**
		 * Assert enzyme contains one or more current nodes have the class name.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/shallow.html#getelements--arrayreactelement
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/is.html
		 */
		toHaveClassName(className: string): Matchers<R>;

		/**
		 * Assert enzyme contains a component with the display or tag name.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/name.html
		 */
		toHaveDisplayName(tagName: string): Matchers<R>;

		/**
		 * Assert enzyme contains the HTML, by a string.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/html.html
		 */
		toHaveHTML(html: string): Matchers<R>;

		/**
		 * Assert enzyme contains a component with the prop name, optionally with a specific value.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/props.html
		 */
		toHaveProp(propKey: object|string, propValue?: any): Matchers<R>;

		/**
		 * Assert enzyme contains a component with the ref name.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ReactWrapper/ref.html
		 */
		toHaveRef(refName: string): Matchers<R>;

		/**
		 * Assert enzyme contains a component with the state name, optionally with a specific value.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ReactWrapper/state.html
		 */
		toHaveState(stateKey: object|string, stateValue?: any): Matchers<R>;

		/**
		 * Assert enzyme contains a component with the style property, optionally with a specific value.
		 */
		toHaveStyle(styleKey: object|string, styleValue?: any): Matchers<R>;

		/**
		 * Assert enzyme contains a component with a specific tag name.
		 *
		 * @see toHaveDisplayName
		 */
		toHaveTagName(tagName: string): Matchers<R>;

		/**
		 * Assert enzyme contains a component with the exact text.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/text.html
		 */
		toHaveText(text: string): Matchers<R>;

		/**
		 * Assert enzyme either has `defaultValue` or `value` props set to the same value.
		 */
		toHaveValue(value: any): Matchers<R>;

		/**
		 * Assert enzyme contains a component with the provided text matching anywhere.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/text.html
		 */
		toIncludeText(text: string): Matchers<R>;

		/**
		 * Assert enzyme contains the same element, resolved with `.debug` comparison.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/debug.html
		 */
		toMatchElement(element: React.ReactElement<any>, options?: ToMatchElementOptions): Matchers<R>;

		/**
		 * Assert enzyme contains a node matching the selector.
		 *
		 * @see https://airbnb.io/enzyme/docs/api/ShallowWrapper/is.html
		 */
		toMatchSelector(selector: string): Matchers<R>;
	}
}
