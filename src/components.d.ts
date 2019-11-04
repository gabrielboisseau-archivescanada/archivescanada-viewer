/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MessageType,
} from './components/message-component/message-options';
import {
  Overlay,
} from './overlay';

export namespace Components {
  interface HarmonizedMessage {
    'text': string;
    'type': MessageType;
  }
  interface HarmonizedOpenseadragon {
    'getOverlays': () => Promise<Overlay[]>;
  }
  interface HarmonizedPager {}
  interface HarmonizedPdf {}
  interface HarmonizedSpinner {}
  interface HarmonizedTopbar {}
  interface HarmonizedViewer {
    'annotationsEnable': boolean;
    'documentUrl': string;
    'language': string;
    'navigationEnable': boolean;
    'navigationHeight'?: number;
    'navigationLocation': LocationOption;
  }
  interface HarmonizedViewport {
    'annotationsEnable': boolean;
    'navigationEnable': boolean;
    'navigationLocation': LocationOption;
  }
  interface HarmonizedZoomSlider {}
  interface HvAnnotations {}
  interface HvNavigation {}
  interface HvSettings {}
  interface HvStatusbar {}
  interface HvToolbar {}
}

declare global {


  interface HTMLHarmonizedMessageElement extends Components.HarmonizedMessage, HTMLStencilElement {}
  var HTMLHarmonizedMessageElement: {
    prototype: HTMLHarmonizedMessageElement;
    new (): HTMLHarmonizedMessageElement;
  };

  interface HTMLHarmonizedOpenseadragonElement extends Components.HarmonizedOpenseadragon, HTMLStencilElement {}
  var HTMLHarmonizedOpenseadragonElement: {
    prototype: HTMLHarmonizedOpenseadragonElement;
    new (): HTMLHarmonizedOpenseadragonElement;
  };

  interface HTMLHarmonizedPagerElement extends Components.HarmonizedPager, HTMLStencilElement {}
  var HTMLHarmonizedPagerElement: {
    prototype: HTMLHarmonizedPagerElement;
    new (): HTMLHarmonizedPagerElement;
  };

  interface HTMLHarmonizedPdfElement extends Components.HarmonizedPdf, HTMLStencilElement {}
  var HTMLHarmonizedPdfElement: {
    prototype: HTMLHarmonizedPdfElement;
    new (): HTMLHarmonizedPdfElement;
  };

  interface HTMLHarmonizedSpinnerElement extends Components.HarmonizedSpinner, HTMLStencilElement {}
  var HTMLHarmonizedSpinnerElement: {
    prototype: HTMLHarmonizedSpinnerElement;
    new (): HTMLHarmonizedSpinnerElement;
  };

  interface HTMLHarmonizedTopbarElement extends Components.HarmonizedTopbar, HTMLStencilElement {}
  var HTMLHarmonizedTopbarElement: {
    prototype: HTMLHarmonizedTopbarElement;
    new (): HTMLHarmonizedTopbarElement;
  };

  interface HTMLHarmonizedViewerElement extends Components.HarmonizedViewer, HTMLStencilElement {}
  var HTMLHarmonizedViewerElement: {
    prototype: HTMLHarmonizedViewerElement;
    new (): HTMLHarmonizedViewerElement;
  };

  interface HTMLHarmonizedViewportElement extends Components.HarmonizedViewport, HTMLStencilElement {}
  var HTMLHarmonizedViewportElement: {
    prototype: HTMLHarmonizedViewportElement;
    new (): HTMLHarmonizedViewportElement;
  };

  interface HTMLHarmonizedZoomSliderElement extends Components.HarmonizedZoomSlider, HTMLStencilElement {}
  var HTMLHarmonizedZoomSliderElement: {
    prototype: HTMLHarmonizedZoomSliderElement;
    new (): HTMLHarmonizedZoomSliderElement;
  };

  interface HTMLHvAnnotationsElement extends Components.HvAnnotations, HTMLStencilElement {}
  var HTMLHvAnnotationsElement: {
    prototype: HTMLHvAnnotationsElement;
    new (): HTMLHvAnnotationsElement;
  };

  interface HTMLHvNavigationElement extends Components.HvNavigation, HTMLStencilElement {}
  var HTMLHvNavigationElement: {
    prototype: HTMLHvNavigationElement;
    new (): HTMLHvNavigationElement;
  };

  interface HTMLHvSettingsElement extends Components.HvSettings, HTMLStencilElement {}
  var HTMLHvSettingsElement: {
    prototype: HTMLHvSettingsElement;
    new (): HTMLHvSettingsElement;
  };

  interface HTMLHvStatusbarElement extends Components.HvStatusbar, HTMLStencilElement {}
  var HTMLHvStatusbarElement: {
    prototype: HTMLHvStatusbarElement;
    new (): HTMLHvStatusbarElement;
  };

  interface HTMLHvToolbarElement extends Components.HvToolbar, HTMLStencilElement {}
  var HTMLHvToolbarElement: {
    prototype: HTMLHvToolbarElement;
    new (): HTMLHvToolbarElement;
  };
  interface HTMLElementTagNameMap {
    'harmonized-message': HTMLHarmonizedMessageElement;
    'harmonized-openseadragon': HTMLHarmonizedOpenseadragonElement;
    'harmonized-pager': HTMLHarmonizedPagerElement;
    'harmonized-pdf': HTMLHarmonizedPdfElement;
    'harmonized-spinner': HTMLHarmonizedSpinnerElement;
    'harmonized-topbar': HTMLHarmonizedTopbarElement;
    'harmonized-viewer': HTMLHarmonizedViewerElement;
    'harmonized-viewport': HTMLHarmonizedViewportElement;
    'harmonized-zoom-slider': HTMLHarmonizedZoomSliderElement;
    'hv-annotations': HTMLHvAnnotationsElement;
    'hv-navigation': HTMLHvNavigationElement;
    'hv-settings': HTMLHvSettingsElement;
    'hv-statusbar': HTMLHvStatusbarElement;
    'hv-toolbar': HTMLHvToolbarElement;
  }
}

declare namespace LocalJSX {
  interface HarmonizedMessage {
    'text'?: string;
    'type'?: MessageType;
  }
  interface HarmonizedOpenseadragon {
    'onOverlayClick'?: (event: CustomEvent<any>) => void;
  }
  interface HarmonizedPager {}
  interface HarmonizedPdf {}
  interface HarmonizedSpinner {}
  interface HarmonizedTopbar {}
  interface HarmonizedViewer {
    'annotationsEnable'?: boolean;
    'documentUrl'?: string;
    'language'?: string;
    'navigationEnable'?: boolean;
    'navigationHeight'?: number;
    'navigationLocation'?: LocationOption;
  }
  interface HarmonizedViewport {
    'annotationsEnable'?: boolean;
    'navigationEnable'?: boolean;
    'navigationLocation'?: LocationOption;
  }
  interface HarmonizedZoomSlider {}
  interface HvAnnotations {}
  interface HvNavigation {}
  interface HvSettings {}
  interface HvStatusbar {}
  interface HvToolbar {}

  interface IntrinsicElements {
    'harmonized-message': HarmonizedMessage;
    'harmonized-openseadragon': HarmonizedOpenseadragon;
    'harmonized-pager': HarmonizedPager;
    'harmonized-pdf': HarmonizedPdf;
    'harmonized-spinner': HarmonizedSpinner;
    'harmonized-topbar': HarmonizedTopbar;
    'harmonized-viewer': HarmonizedViewer;
    'harmonized-viewport': HarmonizedViewport;
    'harmonized-zoom-slider': HarmonizedZoomSlider;
    'hv-annotations': HvAnnotations;
    'hv-navigation': HvNavigation;
    'hv-settings': HvSettings;
    'hv-statusbar': HvStatusbar;
    'hv-toolbar': HvToolbar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'harmonized-message': LocalJSX.HarmonizedMessage & JSXBase.HTMLAttributes<HTMLHarmonizedMessageElement>;
      'harmonized-openseadragon': LocalJSX.HarmonizedOpenseadragon & JSXBase.HTMLAttributes<HTMLHarmonizedOpenseadragonElement>;
      'harmonized-pager': LocalJSX.HarmonizedPager & JSXBase.HTMLAttributes<HTMLHarmonizedPagerElement>;
      'harmonized-pdf': LocalJSX.HarmonizedPdf & JSXBase.HTMLAttributes<HTMLHarmonizedPdfElement>;
      'harmonized-spinner': LocalJSX.HarmonizedSpinner & JSXBase.HTMLAttributes<HTMLHarmonizedSpinnerElement>;
      'harmonized-topbar': LocalJSX.HarmonizedTopbar & JSXBase.HTMLAttributes<HTMLHarmonizedTopbarElement>;
      'harmonized-viewer': LocalJSX.HarmonizedViewer & JSXBase.HTMLAttributes<HTMLHarmonizedViewerElement>;
      'harmonized-viewport': LocalJSX.HarmonizedViewport & JSXBase.HTMLAttributes<HTMLHarmonizedViewportElement>;
      'harmonized-zoom-slider': LocalJSX.HarmonizedZoomSlider & JSXBase.HTMLAttributes<HTMLHarmonizedZoomSliderElement>;
      'hv-annotations': LocalJSX.HvAnnotations & JSXBase.HTMLAttributes<HTMLHvAnnotationsElement>;
      'hv-navigation': LocalJSX.HvNavigation & JSXBase.HTMLAttributes<HTMLHvNavigationElement>;
      'hv-settings': LocalJSX.HvSettings & JSXBase.HTMLAttributes<HTMLHvSettingsElement>;
      'hv-statusbar': LocalJSX.HvStatusbar & JSXBase.HTMLAttributes<HTMLHvStatusbarElement>;
      'hv-toolbar': LocalJSX.HvToolbar & JSXBase.HTMLAttributes<HTMLHvToolbarElement>;
    }
  }
}


