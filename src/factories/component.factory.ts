import { IComponent } from "../components/base.component";
import { TopbarComponent } from "../components/topbar.component";
import { ViewportComponent } from "../components/viewport.component";
import { DrawerComponent } from "../components/drawer.component";
import { ImageListComponent } from "../components/imagelist.component";

export class ComponentFactory {

    components: IComponent[];

    constructor() {
        this.components = [];
    }

    createTopbar(element: HTMLElement): IComponent {
        return new TopbarComponent(element);
    }

    createViewport(element: HTMLElement): IComponent {
        return new ViewportComponent(element);
    }

    createDrawer(element: HTMLElement): IComponent {
        return new DrawerComponent(element);
    }

    createImageList(element: HTMLElement): IComponent {
        return new ImageListComponent(element);
    }

    create(element: HTMLElement): IComponent {
        let component = this.get(element);

        if(component) {
            this.components.push(component);
            return component;
        }
        else {
            return null;
        }
    }

    isComponent(element: HTMLElement): boolean {
        if (element == null) {
            return false;
        }
        return (this.get(element) != null);
    }

    get(element: HTMLElement): IComponent {
        if (element == null) {
            return null;
        }

        let component = null;

        if (element.classList.contains('hv-topbar')) {
            component = this.createTopbar(element);
        }
        else if(element.classList.contains('hv-viewport')) {
            component = this.createViewport(element);
        }
        else if(element.classList.contains('mdc-drawer')) {
            component = this.createDrawer(element);
        }

        if(component) {
            return component;
        }
        else {
            return null;
        }
    }

}