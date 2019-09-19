import { Options } from "./common/options";
import { RootComponent } from "./components/root/root.component";
import { Component } from "./components/component";

const deepmerge = require('deepmerge');

export class HarmonizedViewer extends RootComponent {

    options: Options;

    private defaults: Options = {
        manifestUrl: undefined,
        navigation: {
            enabled: true,
            opened: false
        },
        annotations: {
            enabled: true,
            opened: false
        }
    };

    components: Component[] = [];

    constructor(id: string, options: Options) {
        super(document.getElementById(id));
        this.viewer = this;
        this.viewerId = id;
        this.options = deepmerge(this.defaults, options);
    }

    init() {
        this.execute();
    }
}

export function harmonizedViewer(id: string, options: Options) {
    return new HarmonizedViewer(id, options).init();
}