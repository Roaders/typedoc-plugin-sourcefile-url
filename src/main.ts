import { SourcefileUrlMapPlugin } from "./SourcefileUrlMapPlugin";
import { PluginHost  } from "typedoc/dist/lib/utils";
import { ParameterType } from "typedoc/dist/lib/utils/options/declaration";

export default function(host: PluginHost){
    var app = host.owner;

    app.options.addDeclaration({
        name: 'sourcefile-url-map',
        help: 'location of a json file containing advanced mappings',
        type: ParameterType.String,
    });

    app.options.addDeclaration({
        name: 'sourcefile-url-prefix',
        help: 'Will create URLs by prefixing the given parameter in front of each source file.',
    });

    app.converter.addComponent('sourcefile-url', new SourcefileUrlMapPlugin(app.converter));
}