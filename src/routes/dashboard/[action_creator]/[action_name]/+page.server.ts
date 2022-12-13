import type { PageServerLoad, PageServerLoadEvent } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
  const parent = await event.parent();
  if (!parent.session) {
    throw redirect(307, '/');
  }

  try {
    // get action data
    return {
      action: {
        metrics: {
          runs: 5
        }
      }
    };
  } catch (e) {
    return {
      error: e
    };
  }
};
