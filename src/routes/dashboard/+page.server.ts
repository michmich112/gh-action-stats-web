import { getOwnedActions } from '$lib/server/action';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, PageServerLoadEvent } from './$types';

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
  const parent = await event.parent();
  if (!parent.session) {
    throw redirect(307, '/'); //TODO: Redirect to auth page
  }

  try {
    return {
      ownedActions: await getOwnedActions(event)
    };
  } catch (e) {
    return {
      error: e
    };
  }
};
