import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string): param is 'ollie' | 'anya' | 'reine' => {
	return ['ollie', 'anya', 'reine'].includes(param);
}) satisfies ParamMatcher;
