import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Counter } from "~/components/counter/counter";
import { PreventDefaultLink } from "~/components/preventDefaultLink/preventDefaultLink";
import { ResourceExample } from "~/components/resourceExample/resourceExample";

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>

      <Counter />
      <PreventDefaultLink />
      <ResourceExample />

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
