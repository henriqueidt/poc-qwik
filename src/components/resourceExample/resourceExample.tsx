import { component$, useResource$, Resource, useStore } from "@builder.io/qwik";

export const ResourceExample = component$(() => {
  const state = useStore({ peopleId: 1 });

  /* 
    useResource can generate computed values asynchronously.
    The function passed as first argument is called on component mount
    and when the tracked values change.
  */
  const resource = useResource$(async (ctx) => {
    ctx.track(() => state.peopleId); // the resource will rerun when store.bar changes.
    ctx.cleanup(() => {
      // In case the resource need to be cleaned up, this function will be called.
      // Allowing to clean resources like timers, subscriptions, fetch requests, etc.
    });

    // Resources can contain async computations
    const value = await fetch(`https://swapi.dev/api/people/${state.peopleId}`);
    const parsedValue = await value.json();

    return parsedValue.name;
  });

  return (
    <div>
      {/* 
        The Resource component is a convenient way of rendering
        useResource result, as well as rejected and pending states
      */}
      <Resource
        value={resource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Failed to load people</div>}
        onResolved={(resourceResult) => {
          return <div>Value resolved: {resourceResult}</div>;
        }}
      />
      <button onClick$={() => state.peopleId++}>increment id</button>
    </div>
  );
});
