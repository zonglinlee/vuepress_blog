const TemplateEngine = function (tpl, data) {
    const reg = /<%([^%<>]+)%>/g;
    const regKeyWord = /\s*(for|if|switch|case|break|else|else\s+if|})\s*{?/g
    let codeBody = `let arr=[];\n`
    let match;
    let cursor = 0;

    function addNewFunctionBody(line, js) {
        js ? (line.match(regKeyWord) ? codeBody += `${line}\n` : codeBody += `arr.push(${line});\n`) :
            codeBody += `arr.push("${line.replace('\n', '')}");\n`
    }

    while (match = reg.exec(tpl)) {
        // console.log("match::", match)
        addNewFunctionBody(match.input.substring(cursor, match.index))
        cursor = match.index + match[0].length
        // console.log(cursor)
        const matchPart = match[1]
        addNewFunctionBody(matchPart, true)
    }
    addNewFunctionBody(template.substring(cursor))
    codeBody += `return arr.join('');`
    console.log('========================codeBody======================\n', codeBody)
    const myFun = new Function(codeBody).bind(data);
    return myFun().replace(/\s{4}/g, '');
}

const template = `Hello, my name is <%this.name%>.I 
                    am <%this.profile.age%> years old.
                    My skills:<%for(var index in this.skills) {%><%this.skills[index]%><%}%>`

const data = {
    name: 'lee',
    profile: {age: 55},
    skills: ["js,", "html,", "css"]
}

console.log(TemplateEngine(template, data))
