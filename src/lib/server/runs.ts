import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { PageServerLoadEvent } from './$types';
// import type { Database } from '$lib/types/database.types';

type ActionPk = {
  creator: string;
  name: string;
};

export async function getTotalRuns(event: PageServerLoadEvent, action: ActionPk): Promise<number> {
  const { session, supabaseClient } = await getSupabase(event);
  if (!session) {
    console.error(`[getTotalRuns][Error] - No session`);
    throw new Error('Unauthorized');
  }

  if (action.creator !== session.user.user_metadata.user_name) {
    console.error(`[getTotalRuns][Unauthorized] - Session user is not creator`);
    throw new Error('Unauthorized');
  }

  const { data, error } = await supabaseClient.rpc('get_action_runs', {
    name: action.name,
    creator: action.creator
  });

  if (error) {
    console.log(`data`, data);
    console.error(`[getTotalRuns][Error] - Error getting all the runs.`, error);
    throw error;
  }

  return (data as number) || 0;
}

export async function getTotalReposCount(
  event: PageServerLoadEvent,
  action: ActionPk
): Promise<number> {
  const { session, supabaseClient } = await getSupabase(event);
  if (!session) {
    console.error(`[getTotalReposCount][Error] - No session`);
    throw new Error('Unauthorized');
  }

  if (action.creator !== session.user.user_metadata.user_name) {
    console.error(`[getTotalReposCount][Unauthorized] - Session user is not creator`);
    throw new Error('Unauthorized');
  }

  const { data, error } = await supabaseClient.rpc('get_number_of_repos_using_action', {
    name: action.name,
    creator: action.creator
  });

  if (error) {
    console.log(`data`, data);
    console.error(`[getTotalReposCount][Error] - Error getting all the runs.`, error);
    throw error;
  }

  return (data as number) || 0;
}

export async function getAverageLatencyMs(
  event: PageServerLoadEvent,
  action: ActionPk
): Promise<number> {
  const { session, supabaseClient } = await getSupabase(event);
  if (!session) {
    console.error(`[getAverageLatencyMs][Error] - No session`);
    throw new Error('Unauthorized');
  }

  if (action.creator !== session.user.user_metadata.user_name) {
    console.error(`[getAverageLatencyMs][Unauthorized] - Session user is not creator`);
    throw new Error('Unauthorized');
  }

  const { data, error } = await supabaseClient.rpc('get_average_action_latency_ms', {
    name: action.name,
    creator: action.creator
  });

  if (error) {
    console.log(`data`, data);
    console.error(`[getAverageLatencyMs][Error] - Error getting all the runs.`, error);
    throw error;
  }

  return (data as number) || 0;
}
