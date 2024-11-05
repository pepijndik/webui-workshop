import {h} from '/js/src/index.js';
import {iconPerson,iconBadge} from '/js/src/icons.js';
/**
 * Page content
 * @return {vnode}
 */
export default (model) => h('h1.success#aboutTile',{
    
    style: 'text-align: center'
},[
    h('h',"About"),
    h('button.btn.btn-primary', {onclick: () => model.router.go('?page=home')}, iconPerson()),
 
    h('button.btn.btn-primary', {
        onclick: () => {
        console.log("Go to Home")
        model.router.go('?page=home')
    }}, [
        iconBadge(),
        h('h',"title"),
    
    ]),

]
);