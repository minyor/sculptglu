const fs = require('fs');

class FileLister {
    constructor(options) {
        if (!options || !options.path || !options.outputFile) {
            const msg = "Please specify the path and outputFile options.";
            throw new Error(msg);
        }
        this.options = options
    }
    apply(compiler) {
        compiler.hooks.done.tap({name: 'FileLister'}, () => {
            const files = fs.readdirSync(this.options.path)
            fs.writeFileSync(this.options.outputFile, JSON.stringify(files));
        })
    }
}

module.exports = FileLister;