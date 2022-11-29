import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Counter } from "~/components/counter/counter";
import { LiteComponent } from "~/components/liteComponent/liteComponent";
import { PreventDefaultLink } from "~/components/preventDefaultLink/preventDefaultLink";
import { ResourceExample } from "~/components/resourceExample/resourceExample";
import { NamedSlotExample } from "~/components/slotExample/namedSlotExample";
import { SlotExample } from "~/components/slotExample/slotExample";

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>

      <Counter />
      <PreventDefaultLink />
      <ResourceExample />
      <LiteComponent />
      <SlotExample>
        This content will be rendered as a child of SlotExample
      </SlotExample>
      <NamedSlotExample>
        <div q:slot="firstSlot">first slot content</div>
        <div q:slot="secondSlot">second slot content</div>
        <div q:slot="secondSlot">also second slot content</div>
      </NamedSlotExample>

      <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
