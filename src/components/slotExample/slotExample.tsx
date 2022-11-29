import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./slotExample.css?inline";

export const SlotExample = component$(() => {
  useStyles$(styles);
  return (
    <button class="slot-example">
      <Slot />
    </button>
  );
});
