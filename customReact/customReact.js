function customReander(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    
    mainContainer.appendChild(domElement)
    
}


const reactElement = {

    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me'
}
const mainContainer = document.querySelector('#root')

customReander(reactElement, mainContainer)
 

function cumRender(reactele, mainContainer) {
    const domele = document.createElement(reactele.type)
    domele.innerHTML = reactele.children

    mainContainer.appendChild(domele)
}

const reactele = {
    type: 'h1',
    children: 'wow amazing'
}
 cumRender(reactele,mainContainer)