const React = {

    createElement: function(tag, styles, children){

        const element = document.createElement(tag)
        if (typeof children === 'object'){
            for(let value of children){
                element.append(value)
            }

        }
        else{
            element.innerText = children
        }
        

        for(let key in styles){
            element.style[key] = styles[key]
        }
        return element

    }

}


const ReactDom = {
    render : function(element, root){
        root.append(element)
    }
}


// const header1 = document.createElement('h1')
// header1.innerText = "Hello coder army"
// header1.style.color = 'white'
// header1.style.backgroundColor = 'blue'
// header1.style.fontSize = '20px'


// const header2 = document.createElement('h1')
// header2.innerText = "Mai kuch bada karne wala hu"
// header2.style.color = 'white'
// header2.style.backgroundColor = 'black'
// header2.style.fontSize = '10px'


// React : Object
// ReactDom : Object

const header1 = React.createElement('h1', {fontSize:'20px', backgroundColor: 'blue', color: "white"}, "Hello Nagendra jiiiii")
const header2 = React.createElement('h1', {fontSize:'30px', backgroundColor: 'black', color: "white"}, "Aap bahut bade aadmi ho..")

// const root = document.getElementById('root')
// root.append(header1)
// root.append(header2)

// unordered list
// html
// css
// js

const li1 = React.createElement('li', {}, 'HTML')
const li2 = React.createElement('li', {}, 'CSS')
const li3 = React.createElement('li', {}, 'JS')
const UL = React.createElement('ul', {fontSize:'20px', backgroundColor: 'blue', color: "white"}, [li1, li2, li3])


ReactDom.render(header1, document.getElementById('root'))
ReactDom.render(header2, document.getElementById('root'))
ReactDom.render(UL, document.getElementById('root'))