/// <refrence types="@svelte/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Supabase {
    Database: import('$lib/types/database.types').Database;
    SchemaName: 'public';
  }
  // interface Error {}
  // interface Locals {
  //   action: import('$lib/types/Action.type').ActionMetadata;
  // }

  interface PageData {
    session: import('@supabase/supabase-js').Session | null;
  }

  // interface Platform {}
}

declare namespace svelteHTML {
  interface HTMLAttributes {
    'on:click_outside'?: (() => any) | ((event: MouseEvent) => any);
  }
}
