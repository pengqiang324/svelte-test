import { c as create_ssr_component } from "../../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>todos\u5E03\u5C40</div>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
