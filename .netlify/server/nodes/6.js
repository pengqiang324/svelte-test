import * as server from '../entries/pages/(app)/todos/_page.server.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/(app)/todos/_page@(app).svelte.js')).default;
export const file = '_app/immutable/components/pages/(app)/todos/_page@(app).svelte-f74f3053.js';
export { server };
export const imports = ["_app/immutable/components/pages/(app)/todos/_page@(app).svelte-f74f3053.js","_app/immutable/chunks/index-66220184.js","_app/immutable/chunks/singletons-bb5108da.js","_app/immutable/chunks/index-e366d1ab.js"];
export const stylesheets = ["_app/immutable/assets/_page@(app)-5c3529b5.css"];
