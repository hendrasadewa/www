import { AtpAgent } from '@atproto/api';

const AGENT_SERVICE =
	import.meta.env.BSKY_AGENT_SERVICE || 'https://public.api.bsky.app';

export const agent = new AtpAgent({
	service: AGENT_SERVICE
});
