import { AppBskyFeedPost } from '@atproto/api';
import { AppBskyFeedDefs } from '@atproto/api';
import { agent } from '../services';

export const postHandlers = {
	getPostByURI: async (uri: string) => {
		const thread = await agent.app.bsky.feed.getPostThread({ uri });

		if (!AppBskyFeedDefs.isThreadViewPost(thread.data.thread)) {
			throw new Error('Expected a thread view post');
		}

		const { post } = thread.data.thread;
		if (!AppBskyFeedPost.isRecord(post.record)) {
			throw new Error('Expected a post with a record');
		}

		return post;
	}
};
