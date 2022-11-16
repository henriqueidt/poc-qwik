import {
  component$,
  useSignal,
  useStore,
  createContext,
  useContextProvider,
  useMount$,
  useServerMount$,
  useWatch$,
  useClientEffect$,
} from "@builder.io/qwik";
import { CounterChild } from "./counterChild";
import { CounterWithFunctionProps } from "./counterWithFunctionProps";

// Creates the context with an unique identifier
export const CTX = createContext("stuff");

export const Counter = component$(() => {
  // useSignal is equivalent to useState, with only one signal (property)
  const count = useSignal(0);

  /* 
  useStore is similar to useSignal, but with multiple signals.
  Changing a property of that, will update components that depend
  on it.
  A second parameter { recursive: true } can be passed to track deep
  changes to objects or individual values inside of arrays.
  */
  const state = useStore({ deepObject: { count: 0 } }, { recursive: true });

  /* 
    Assigns a value to the context.
    Should be called in a component context.
    Will only be available inside the component tree.
  */
  useContextProvider(CTX, state);

  /* 
    useMount is ran on the component creation.
    Blocks the component rendering until after the callback is resolved.
    Runs exactly once.
    Can run on server or client.
  */
  useMount$(() => {
    console.log("mounted");
  });

  /* 
    useServerMount is similar to useMount, but only ran once on the server.
  */
  useServerMount$(() => {
    console.log("server mounted");
  });

  /* 
    useWatch will execute everytime the tracked value changes.
  */
  useWatch$(({ track }) => {
    const count = track(() => state.deepObject.count);
    console.log("useWatch: ", count);
  });

  /* 
    useClientEffect is similar to useWatch, but only ran on the client
  */
  useClientEffect$(({ track }) => {
    const count = track(() => state.deepObject.count);
    console.log("useClientEffect: ", count);
  });

  return (
    /* 
      Window and document event listeners can be registered
      inside of the DOM elements. The events get automatically
      cleaned up when the component is destroyed.
    */
    <section window:onScroll$={(e) => console.log("scroll")}>
      <div>
        {/* 
          The $ on the onClick indicates that the code associated with
          the click event will only donwload when the user clicks on the
          button
        */}
        <button onClick$={() => count.value++}>Increment signal count</button>
        Signal Count: {count.value}
      </div>
      <div>
        <button onClick$={() => state.deepObject.count++}>
          Increment store count
        </button>
        Store Count: {state.deepObject.count}
      </div>
      <CounterChild />
      <CounterWithFunctionProps onClick$={() => state.deepObject.count++} />
    </section>
  );
});
