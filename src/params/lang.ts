import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string): param is 'en' | 'id' => {
	return param === 'en' || param === 'id';
}) satisfies ParamMatcher;
