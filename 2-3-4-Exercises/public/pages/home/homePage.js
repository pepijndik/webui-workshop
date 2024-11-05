import {h,RemoteData} from '/js/src/index.js';
import {info,iconPerson} from '/js/src/icons.js';
/**
 * Page content
 * @return {vnode}
 */
export default (model) => h('h1.danger',{
    id:"homeTitle",
    style: 'text-align: center'
},[
    h('h',"Home"),
    h('button.btn.btn-primary', {onclick: () => model.router.go('?page=about')}, info()),
    h('button.btn.btn-primary', {onclick: () => model.homeModel.userName = "test"}, iconPerson()),
    
    button({
        label:'Get Data for Alice', 
        onclick: () => model.homeModel.retrieveInformation("alice"),
        classParameters: '.btn.btn-danger', 
        isDisabled: model.homeModel.data.isLoading()
    }),
    button({
        label:'Get Data for Alice',
        onclick: () =>model.homeModel.retrieveInformation("bob"),
        classParameters:  '.btn',
        isDisabled: model.homeModel.data.isLoading()
    }),
    informationPanel(model.homeModel.data),
    informationPanel(RemoteData.Success(model.homeModel.greetingMessage)),
]
);


const button = ({
    label,
    onclick, 
    classParameters = '.btn.btn-primary', 
    isDisabled = false
}) => 
    h(`button${classParameters}`,{
    disabled: isDisabled,
    onclick: ()=>{
        model.homeModel.retrieveInformation("Alice")
    },
    },label);

const informationPanel = (data)=>{
    return  data.match({
        NotAsked: ()=> h('div','Not asked'),
        Loading: ()=> h('div',"Loading"),
        Failure: ()=> h('div', data),
        Success:(data)=> h('div',data)
    });
};