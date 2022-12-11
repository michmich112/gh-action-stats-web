//https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7

import type { Action } from 'svelte/types/runtime/action';

/** Dispatch event on click outside of node */
export const clickOutside: Action<HTMLElement, undefined> = (node) => {
  const handleClick = (event: MouseEvent) => {
    if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('click_outside', event));
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
};
