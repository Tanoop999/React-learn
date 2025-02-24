function customRender(reactEelement, container){
    // const domElement = document.createElement(reactEelement.type)
    // domElement.innerHTML = reactEelement.children
    // domElement.setAttribute('href',reactEelement.props.href)
    // domElement.setAttribute('target',reactEelement.props.href)

    // container.appendChild(domElement)
    const domElement = document.createElement(reactEelement.type)
    domElement.innerHTML = reactEelement.children
    for (const prop in reactEelement.props) {
        if (prop === 'children') 
               continue;
            domElement.setAttribute(prop, reactEelement.props[prop])
            domElement.setAttribute(prop)
    }
    container.appendChild(domElement)

}


const reactEelement = {
    type : 'a',
    props:{
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'click me to visit google' 
}


const mainContainer  = document.querySelector('#root');

customRender(reactEelement,mainContainer)