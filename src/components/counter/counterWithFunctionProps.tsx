import { component$, PropFunction } from "@builder.io/qwik";

interface ICounterWithFunctionProps {
  onClick$?: PropFunction<() => void>;
}

export const CounterWithFunctionProps = component$(
  (props: ICounterWithFunctionProps) => {
    return (
      <div>
        <button onClick$={props.onClick$}>
          Increment state count on child with function props
        </button>
      </div>
    );
  }
);
