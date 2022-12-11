import { supabase } from '$lib/supabase';
import type { AuthError, OAuthResponse } from '@supabase/supabase-js';
import { PUBLIC_AUTH_REDIRECT_URI } from '$env/static/public';

/**
 * Interface with the supabase service to sign into desired user session
 */
export async function signIn(): Promise<OAuthResponse> {
  return await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: PUBLIC_AUTH_REDIRECT_URI
    }
  });
}

/**
 * Interface with supabase service to sign out the current user
 */
export async function signOut(): Promise<{ error: AuthError | null }> {
  return await supabase.auth.signOut();
}
