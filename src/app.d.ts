/// <refrence types="@svelte/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Supabase {
    Database: import('./DatabaseDefinitions').Database;
  }
  // interface Error {}
  // interface Locals {}
  interface PageData {
    session: import('@supabase/supabase-js').Session | null;
  }

  // interface PageData {}
  // interface Platform {}
}

declare namespace svelteHTML {
  interface HTMLAttributes {
    'on:click_outside'?: (() => any) | ((event: MouseEvent) => any);
  }
}
