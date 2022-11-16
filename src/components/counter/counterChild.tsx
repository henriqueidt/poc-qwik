import { component$, useContext } from "@builder.io/qwik";
import { CTX } from "./counter";

export const CounterChild = component$(() => {
  const state = useContext(CTX);

  return (
    <div>
      <button onClick$={() => state.deepObject.count++}>
        Increment state count on child
      </button>
      state Count on child: {state.deepObject.count}
    </div>
  );
});
