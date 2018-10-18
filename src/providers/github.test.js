import { findKeywords } from './github';

describe('providers/github', () => {
	describe('findKeywords', () => {
		it('finds mentions from text', () => {
			expect(findKeywords('Something something @github something @bycedric.'))
				.toHaveLength(2)
				.toContain('github')
				.toContain('bycedric');
		});

		it('finds hastags from text', () => {
			expect(findKeywords('Something maintainer #project something #other.'))
				.toHaveLength(2)
				.toContain('project')
				.toContain('other');
		});

		it('finds mention and hastag from text', () => {
			expect(findKeywords('Something @github something maintainer #project.'))
				.toHaveLength(2)
				.toContain('github')
				.toContain('project');
		});

		it('returns empty array when nothing is found', () => {
			expect(findKeywords('Something something something.')).toHaveLength(0);
		});
	});
});
