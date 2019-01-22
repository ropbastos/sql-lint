"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Query {
    constructor() {
        this.lines = [];
    }
    getContent() {
        let content = "";
        this.lines.forEach(line => {
            content += line.content;
        });
        return content;
    }
}
exports.Query = Query;
class Line {
    constructor(content, num) {
        this.tokens = [];
        this.content = content;
        this.num = num;
    }
}
exports.Line = Line;
/**
 * Grabs the querie(s) from the --file flag
 */
function getQueryFromFile(file) {
    const contents = fs.readFileSync(file, "utf8");
    return putContentIntoLines(contents);
}
exports.getQueryFromFile = getQueryFromFile;
function putContentIntoLines(contents) {
    let lineNumber = 1;
    const queriesFromFile = [];
    let currentQueryContent = "";
    let query = new Query();
    const skipChars = ["", "\n", "\r\n"];
    // 1. Split on new line
    // 2. Check if it starts with a comment, 
    //   2.1 If it does remove it.
    //   2.2 If not, leave it
    // 3. Rejoin the lines together as a single string.
    const lines = contents.split('\n');
    lines.forEach((line, index) => {
        if (line.startsWith('--') || line.startsWith('#') || line.startsWith('/*')) {
            delete lines[index];
        }
    });
    const contentWithoutComments = lines.join('\n');
    contents = contentWithoutComments;
    for (let i = 0; i < contents.length; i++) {
        if (!skipChars.includes(contents[i])) {
            currentQueryContent += contents[i];
        }
        if (contents[i] === "\n") {
            if (currentQueryContent.length > 0) {
                query.lines.push(new Line(currentQueryContent, lineNumber));
            }
            currentQueryContent = "";
            lineNumber++;
        }
        if (contents[i] === ";") {
            if (currentQueryContent.length > 0) {
                query.lines.push(new Line(currentQueryContent, lineNumber));
            }
            queriesFromFile.push(query);
            query = new Query();
            currentQueryContent = "";
        }
    }
    return queriesFromFile;
}
exports.putContentIntoLines = putContentIntoLines;
/**
 * Grabs the query from the --query flag
 * Line is always 0 since there are no
 * lines on the terminal.
 */
function getQueryFromLine(query) {
    return putContentIntoLines(query);
}
exports.getQueryFromLine = getQueryFromLine;
//# sourceMappingURL=reader.js.map