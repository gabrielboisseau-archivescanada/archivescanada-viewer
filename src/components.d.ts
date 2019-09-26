/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HarmonizedViewer {
    'name': string;
  }
  interface HvNavigation {
    'name': string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface SidebarComponent {
    'name': string;
  }
}

declare global {


  interface HTMLHarmonizedViewerElement extends Components.HarmonizedViewer, HTMLStencilElement {}
  var HTMLHarmonizedViewerElement: {
    prototype: HTMLHarmonizedViewerElement;
    new (): HTMLHarmonizedViewerElement;
  };

  interface HTMLHvNavigationElement extends Components.HvNavigation, HTMLStencilElement {}
  var HTMLHvNavigationElement: {
    prototype: HTMLHvNavigationElement;
    new (): HTMLHvNavigationElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLSidebarComponentElement extends Components.SidebarComponent, HTMLStencilElement {}
  var HTMLSidebarComponentElement: {
    prototype: HTMLSidebarComponentElement;
    new (): HTMLSidebarComponentElement;
  };
  interface HTMLElementTagNameMap {
    'harmonized-viewer': HTMLHarmonizedViewerElement;
    'hv-navigation': HTMLHvNavigationElement;
    'my-component': HTMLMyComponentElement;
    'sidebar-component': HTMLSidebarComponentElement;
  }
}

declare namespace LocalJSX {
  interface HarmonizedViewer {
    'name'?: string;
  }
  interface HvNavigation {
    'name'?: string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface SidebarComponent {
    'name'?: string;
  }

  interface IntrinsicElements {
    'harmonized-viewer': HarmonizedViewer;
    'hv-navigation': HvNavigation;
    'my-component': MyComponent;
    'sidebar-component': SidebarComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'harmonized-viewer': LocalJSX.HarmonizedViewer & JSXBase.HTMLAttributes<HTMLHarmonizedViewerElement>;
      'hv-navigation': LocalJSX.HvNavigation & JSXBase.HTMLAttributes<HTMLHvNavigationElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'sidebar-component': LocalJSX.SidebarComponent & JSXBase.HTMLAttributes<HTMLSidebarComponentElement>;
    }
  }
}


