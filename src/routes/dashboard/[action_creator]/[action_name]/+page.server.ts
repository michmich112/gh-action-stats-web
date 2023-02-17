import type { PageServerLoad, PageServerLoadEvent } from './$types';
import { redirect } from '@sveltejs/kit';
import { getAverageLatencyMs, getTotalReposCount, getTotalRuns } from '$lib/server/runs';

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
  const parent = await event.parent();
  const { action_name, action_creator } = event.params;
  if (!parent.session) {
    throw redirect(307, '/');
  }

  const action = {
    creator: action_creator,
    name: action_name
  };
  try {
    // get action data
    return {
      action: {
        ...action,
        metrics: {
          runs: await getTotalRuns(event, action),
          repo_count: await getTotalReposCount(event, action),
          avg_latency: await getAverageLatencyMs(event, action)
        }
      }
    };
  } catch (e) {
    return {
      error: e
    };
  }
};
