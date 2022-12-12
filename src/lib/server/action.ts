import type { ActionMetadata } from '$lib/types/Action.type';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { PageServerLoadEvent } from './$types';
import type { Database } from '$lib/types/database.types';

export async function getOwnedActions(event: PageServerLoadEvent): Promise<ActionMetadata[]> {
  const { session, supabaseClient } = await getSupabase(event);
  if (!session) {
    throw new Error('Unauthorized');
  }

  const { data, error } = await supabaseClient
    .from('Actions')
    .select('creator, name, last_update')
    .eq('creator', session.user.user_metadata.user_name);
  if (error) {
    console.error(`[getOwnedActions][Error] - `, error);
    throw error;
  } else return actionMetadataMapper(data);
}

type ActionsDbType = Database['public']['Tables']['Actions'];

function actionMetadataMapper(db_obj: ActionsDbType['Row' | 'Insert'][]): ActionMetadata[] {
  return db_obj.map(({ creator, name, last_update }) => ({
    creator,
    name,
    last_update: new Date(Date.parse(last_update))
  }));
}
