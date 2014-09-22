var singleTag = {
    area: 1,
    base: 1,
    basefont: 1,
    br: 1,
    col: 1,
    frame: 1,
    hr: 1,
    img: 1,
    input: 1,
    isindex: 1,
    link: 1,
    meta: 1,
    param: 1,
    embed: 1,
    include: 1,
    yield: 1
};

var tagType = {
    tag: 1,
    script: 1,
    link: 1,
    style: 1,
    template: 1
};

var render = module.exports = function(dom, output) {

    dom = Array.isArray(dom) ? dom : [dom];
    output = output || [];

    var renderTag = function(elem) {
        var tag = "<" + elem.name;
        if (elem.attribs) {
            var attrstring = "";
            Object.keys(elem.attribs).forEach(function(element, index, array){
                attrstring += " "+element+"="+"'"+elem.attribs[element]+"'";
            });
            tag += attrstring;
        }
        if (!singleTag[elem.name])
            tag += ">";
        else
            tag += "/>";

        return tag;
    };

    var renderDirective = function(elem) { return "<" + elem.data + ">"; };
    var renderText = function(elem) { return elem.data; };
    var renderComment = function(elem) { return '<!--' + elem.data + '-->'; };

    dom.forEach(function(elem, i){

        var str = elem.name;
        var data = elem.data || "";

        if (elem.raw === null) return;

        if (data[0] === '%' && data[data.length - 1] === '%')
            elem.type = "template";

        if (tagType[elem.type])
            output.push(renderTag(elem));
        else if (elem.type === "directive")
            output.push(renderDirective(elem));
        else if (elem.type === "comment")
            output.push(renderComment(elem));
        else
            output.push(renderText(elem));

        if (elem.children) output.push(render(elem.children));
        if (!singleTag[elem.name] && tagType[elem.type])
            output.push("</" + elem.name + ">");
    });

    return output.join("");
};
