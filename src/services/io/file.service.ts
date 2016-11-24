import { Injectable } from '@angular/core'


@Injectable()
export class File{

    getContents(name: string): string{
        var testContent = `{
            "Fields":
                [{
                    "Name":"Heading"
                },{
                    "Name":"Para"
                }],
            "Script":"\\n<html>\\n<body>\\n<h1>My First Heading: @~Heading~</h1>\\n<p>My first paragraph.@~Para~</p>\\n</body>\\n</html>\\n"
        }`;
        return testContent;
    }
}