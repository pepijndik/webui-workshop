import {h, switchCase} from '/js/src/index.js';
import homePage from './pages/home/homePage.js';
import aboutPage from './pages/about/aboutPage.js';
/**
 * Main view layout
 * @return {vnode} application view to be drawn according to model
 */
export default (model) => [
  h('.flex-column.absolute-fill', [
    header(model),
    content(model)
  ])
];

/**
 * Top header of the page
 * @return {vnode}
 */
const header = (model) =>
  h('.p2.shadow-level2.level2', {
    style: 'display: flex; justify-content: center'
  }, `Welcome to your ${model.router.params.page} page`);

/**
 * Page content
 * @return {vnode}
 */
const content = (model) => h('div', [
  switchCase(model.router.params.page, {
    home: homePage,
    about: aboutPage
  })(model)
  
]);
