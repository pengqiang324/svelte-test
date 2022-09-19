import { c as create_ssr_component } from "../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>\u5173\u4E8E\u6211\u4EEC\u5E03\u5C40</div>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
