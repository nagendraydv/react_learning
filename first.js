const React = {

    createElement: function(tag, styles, children){

        const element = document.createElement(tag)
        element.innerText = children

        for(let key in styles){
            element.style[key] = styles[key]
        }
        return element

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

const header1 = React.createElement('h1', {fontSize:'20px', backgroundColor: 'blue', color: "white"}, "Hello Nagendra ji")
const header2 = React.createElement('h1', {fontSize:'30px', backgroundColor: 'black', color: "white"}, "Aap bahut bade aadmi ho..")

const root = document.getElementById('root')
root.append(header1)
root.append(header2)