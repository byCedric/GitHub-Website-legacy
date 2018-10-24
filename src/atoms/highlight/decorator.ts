/**
 * Decorator transforms a matched highlight to a renderable value.
 */
export type Decorator = (match: string, text: string, key?: number | string) => React.ReactNode;

/**
 * An object of decorators may be provided to use for all found highlights.
 * The key of the object represents the unique character to use with the decorator.
 */
export interface Decorators {
	[key: string]: Decorator;
}

/**
 * Create a decorator pattern based on starting characters.
 */
export const createPattern = (chars: string[]) => (
	new RegExp(`([${chars.join('')}][a-z0-9-_]+)`, 'gi')
);

/**
 * Create a list of segments relevant to the decorators.
 */
export const createSegments = (text: string, decorators: Decorators) => (
	text.split(createPattern(Object.keys(decorators)))
);

/**
 * Apply one of the decorators to a single segment.
 * It will invoke a decorator with the matched segment, inner text, and an optional key.
 */
export const applyDecorator = (segment: string, decorators: Decorators, key?: number | string) => {
	const decorator = decorators[segment.charAt(0)];

	return decorator
		? decorator(segment, segment.substr(1), key)
		: segment;
};

/**
 * Decorate a string and return a list of text or components.
 * These can be rendered directly with React.
 */
export default (text: string, decorators: Decorators) => (
	createSegments(text, decorators).map(
		(segment, key) => applyDecorator(segment, decorators, key)
	)
);
