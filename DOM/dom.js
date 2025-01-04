function Name(name, colour) {
    const div = document.createElement('div')
    console.log(div);
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title", "generated title")
    div.style.backgroundColor = `${colour}`
    div.style.padding = "12px"
    // div.innerText = "Chai aur code"
    const addText = document.createTextNode(`${name}`)
    div.appendChild(addText)

    document.body.appendChild(div)
}

Name("Arrad Ahmed", "red")

Name("Arrad Ahmed", "green")

Name("Arrad Ahmed", "blue")

Name("Arrad Ahmed", "silver")