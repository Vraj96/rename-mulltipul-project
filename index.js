const { log } = require('node:console');
const fs = require('node:fs'); 
const path = require('path');
const replacethis = "mahek"
const replaceWith = "parth"
const preview = false
const folder =__dirname

try {
    const data = fs.readdir(folder, (err, data) => {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldfile = path.join(folder, item)
            let newFile = path.join(folder,item.replaceAll(replacethis, replaceWith))
            if (!preview) {
                fs.rename(oldfile, newFile, () => {
                    console.log("Rename Success");

                })
            }
            else{
            if ("data/" + item !== newFile) console.log("data/" + item + " Will Be Renamed To " + newFile);
                
            }
        }
    })
} catch (err) {
    console.error(err);
}
