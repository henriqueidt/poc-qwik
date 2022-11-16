# Qwik App ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)
- [Partytown](https://partytown.builder.io/)
- [Mitosis](https://github.com/BuilderIO/mitosis)
- [Builder.io](https://www.builder.io/)

---

## Project Structure

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations

Use the `npm run qwik add` command to add additional integrations. Some examples of integrations include: Cloudflare, Netlify or Express server, and the [Static Site Generator (SSG)](https://qwik.builder.io/qwikcity/static-site-generation/static-site-config/).

```shell
npm run qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
npm run dev # or `yarn dev`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```

## About qwik

- Delays execution and download of JS for as long as possible

  - Initial application needs only 1KB of js to become interactive

- RESUMABILITY
  - It doesn't do hydratation like other frameworks
  - Serialize the state of the application and the framework on the server and resume it on the client
  - Listeners:

    - The event listeners are serialized into DOM like:

    ```
        <button on:click="./chunk.js#handler_symbol">click me</button>
    ```

    - Qwikloader sets up a global listener instead of individual listeners
    - The HTML contains a URL to the chunk and symbol name ("./chunk.js#handler_symbol")
    - Qwik's event processing understands asynchronicity to allow lazy loading

  - Component Trees

    - Qwik collects components boundary information as part of the SSR/SSG and serializes that info into the HTML

  - Application State
    - Qwik has state management tightly integrated into the lifecycle of the components
    - Components can be delay-loaded independently from the state of the component.
    - Qwik allows components to be resumed without the parent component being present
    - Serialization:
      - Different than JSON.stringify, Qwik can serialize DOM References, Dates(tbd), Function closures and circular references
