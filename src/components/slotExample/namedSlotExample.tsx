import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";
import styles from "./namedSlotExample.css?inline";

export const NamedSlotExample = component$(() => {
  useStylesScoped$(styles);
  return (
    <button class="named-slot-example">
      <div>
        <Slot name="firstSlot" />
      </div>
      <div>
        <Slot name="secondSlot" />
      </div>
    </button>
  );
});
