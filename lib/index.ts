var os = require("os");
var S = require("string");
var fs = require("fs");

export class CodeWriter {
    indent = 0;
    constructor(public outputStream, public indentSize = 4) {
    }

    writeOpen() {
        this.writeIndentLine("{");
        this.indent++;
    }
    writeClose(extraLine?: boolean) {
        this.indent--;
        this.writeIndentLine("}");
        if (extraLine) {
            this.writeLine();
        }
    }

    writeIndentLine(value?: string) {
        if (value) {
            this.writeIndent(value);
        }
        this.outputStream.write(os.EOL);
    }

    writeIndentLines(lines?: string[]) {
        if (lines) {
            for (let l = 0; l < lines.length; l++) {
                this.writeIndentLine(lines[l]);
            }
        }
    }

    writeLine(value?: string) {
        if (value) {
            this.outputStream.write(value);
        }
        this.outputStream.write(os.EOL);
    }

    writeLines(lines?: string[]) {
        if (lines) {
            for (let l = 0; l < lines.length; l++) {
                this.writeLine(lines[l]);
            }
        }
    }

    write(value) {
        this.outputStream.write(value);
    }

    writeIndent(value?: string) {
        for (var i = 0; i < this.indent; i++) {
            for (var j = 0; j < this.indentSize; j++) {
                this.outputStream.write(" ");
            }
        }
        if (value) {
            this.outputStream.write(value);
        }
    }

    pushIndent() {
        this.indent++;
    }
    popIndent() {
        this.indent--;
    }
}
