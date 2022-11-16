import { component$ } from "@builder.io/qwik";

export const PreventDefaultLink = component$(() => {
  return (
    <a
      href="/flower"
      /* 
        Events cannot have default behavior prevent inside the handlers,
        since they are async downloaded. Instead you need to pass a 
        preventdefault property to the element
      */
      preventdefault:click // This will prevent the default behavior of the "click" event.
    >
      Go to flower link
    </a>
  );
});
