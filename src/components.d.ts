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

export namespace Components {
  interface HarmonizedDrawer {
    'open': () => Promise<void>;
    'placement': string;
    'toolbar': boolean;
    'visible': boolean;
  }
  interface HarmonizedImage {
    'caption': string;
    'page': number;
    'preload': boolean;
    'showCaption': boolean;
    'showTooltip': boolean;
    'src': string;
    'srcset': string;
  }
  interface HarmonizedImageList {}
  interface HarmonizedMessage {
    'text': string;
    'type': MessageType;
  }
  interface HarmonizedNavigation {
    'cols': number;
    'placement': PlacementType;
    'rows': number;
  }
  interface HarmonizedOpenseadragon {
    'getOverlays': () => Promise<import("C:/Users/gabri/source/Workspaces/lac-harmonized-viewer/src/interfaces").DocumentOverlay[]>;
    'openseadragon': () => Promise<any>;
  }
  interface HarmonizedOverlay {
    'height': number;
    'mouseTracker': any;
    'width': number;
    'x': number;
    'y': number;
  }
  interface HarmonizedPager {}
  interface HarmonizedPdf {}
  interface HarmonizedSpinner {}
  interface HarmonizedTopbar {
    'backgroundColor': string;
  }
  interface HarmonizedViewer {
    'addOverlay': (x: number, y: number, width: number, height: number, text: string) => Promise<void>;
    'annotationsEnable': boolean;
    'backgroundColor': string;
    'documentUrl': string;
    'getPage': () => Promise<number>;
    'language': string;
    'navigationEnable': boolean;
    'navigationHeight'?: number;
    'navigationLocation': PlacementType;
  }
  interface HarmonizedViewport {
    'annotationsEnable': boolean;
    'navigationEnable': boolean;
    'navigationPlacement': PlacementType;
  }
  interface HarmonizedZoomSlider {}
  interface HvAnnotations {}
  interface HvSettings {
    'open': () => Promise<void>;
  }
  interface HvStatusbar {}
  interface HvToolbar {}
}

declare global {


  interface HTMLHarmonizedDrawerElement extends Components.HarmonizedDrawer, HTMLStencilElement {}
  var HTMLHarmonizedDrawerElement: {
    prototype: HTMLHarmonizedDrawerElement;
    new (): HTMLHarmonizedDrawerElement;
  };

  interface HTMLHarmonizedImageElement extends Components.HarmonizedImage, HTMLStencilElement {}
  var HTMLHarmonizedImageElement: {
    prototype: HTMLHarmonizedImageElement;
    new (): HTMLHarmonizedImageElement;
  };

  interface HTMLHarmonizedImageListElement extends Components.HarmonizedImageList, HTMLStencilElement {}
  var HTMLHarmonizedImageListElement: {
    prototype: HTMLHarmonizedImageListElement;
    new (): HTMLHarmonizedImageListElement;
  };

  interface HTMLHarmonizedMessageElement extends Components.HarmonizedMessage, HTMLStencilElement {}
  var HTMLHarmonizedMessageElement: {
    prototype: HTMLHarmonizedMessageElement;
    new (): HTMLHarmonizedMessageElement;
  };

  interface HTMLHarmonizedNavigationElement extends Components.HarmonizedNavigation, HTMLStencilElement {}
  var HTMLHarmonizedNavigationElement: {
    prototype: HTMLHarmonizedNavigationElement;
    new (): HTMLHarmonizedNavigationElement;
  };

  interface HTMLHarmonizedOpenseadragonElement extends Components.HarmonizedOpenseadragon, HTMLStencilElement {}
  var HTMLHarmonizedOpenseadragonElement: {
    prototype: HTMLHarmonizedOpenseadragonElement;
    new (): HTMLHarmonizedOpenseadragonElement;
  };

  interface HTMLHarmonizedOverlayElement extends Components.HarmonizedOverlay, HTMLStencilElement {}
  var HTMLHarmonizedOverlayElement: {
    prototype: HTMLHarmonizedOverlayElement;
    new (): HTMLHarmonizedOverlayElement;
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
    'harmonized-drawer': HTMLHarmonizedDrawerElement;
    'harmonized-image': HTMLHarmonizedImageElement;
    'harmonized-image-list': HTMLHarmonizedImageListElement;
    'harmonized-message': HTMLHarmonizedMessageElement;
    'harmonized-navigation': HTMLHarmonizedNavigationElement;
    'harmonized-openseadragon': HTMLHarmonizedOpenseadragonElement;
    'harmonized-overlay': HTMLHarmonizedOverlayElement;
    'harmonized-pager': HTMLHarmonizedPagerElement;
    'harmonized-pdf': HTMLHarmonizedPdfElement;
    'harmonized-spinner': HTMLHarmonizedSpinnerElement;
    'harmonized-topbar': HTMLHarmonizedTopbarElement;
    'harmonized-viewer': HTMLHarmonizedViewerElement;
    'harmonized-viewport': HTMLHarmonizedViewportElement;
    'harmonized-zoom-slider': HTMLHarmonizedZoomSliderElement;
    'hv-annotations': HTMLHvAnnotationsElement;
    'hv-settings': HTMLHvSettingsElement;
    'hv-statusbar': HTMLHvStatusbarElement;
    'hv-toolbar': HTMLHvToolbarElement;
  }
}

declare namespace LocalJSX {
  interface HarmonizedDrawer {
    'placement'?: string;
    'toolbar'?: boolean;
    'visible'?: boolean;
  }
  interface HarmonizedImage {
    'caption'?: string;
    'onImageAdded'?: (event: CustomEvent<any>) => void;
    'onImageLoad'?: (event: CustomEvent<any>) => void;
    'page'?: number;
    'preload'?: boolean;
    'showCaption'?: boolean;
    'showTooltip'?: boolean;
    'src'?: string;
    'srcset'?: string;
  }
  interface HarmonizedImageList {}
  interface HarmonizedMessage {
    'text'?: string;
    'type'?: MessageType;
  }
  interface HarmonizedNavigation {
    'cols'?: number;
    'placement'?: PlacementType;
    'rows'?: number;
  }
  interface HarmonizedOpenseadragon {
    'onOverlayClick'?: (event: CustomEvent<any>) => void;
    'onPageLoad'?: (event: CustomEvent<any>) => void;
  }
  interface HarmonizedOverlay {
    'height'?: number;
    'mouseTracker'?: any;
    'width'?: number;
    'x'?: number;
    'y'?: number;
  }
  interface HarmonizedPager {}
  interface HarmonizedPdf {}
  interface HarmonizedSpinner {}
  interface HarmonizedTopbar {
    'backgroundColor'?: string;
  }
  interface HarmonizedViewer {
    'annotationsEnable'?: boolean;
    'backgroundColor'?: string;
    'documentUrl'?: string;
    'language'?: string;
    'navigationEnable'?: boolean;
    'navigationHeight'?: number;
    'navigationLocation'?: PlacementType;
  }
  interface HarmonizedViewport {
    'annotationsEnable'?: boolean;
    'navigationEnable'?: boolean;
    'navigationPlacement'?: PlacementType;
  }
  interface HarmonizedZoomSlider {}
  interface HvAnnotations {}
  interface HvSettings {}
  interface HvStatusbar {}
  interface HvToolbar {}

  interface IntrinsicElements {
    'harmonized-drawer': HarmonizedDrawer;
    'harmonized-image': HarmonizedImage;
    'harmonized-image-list': HarmonizedImageList;
    'harmonized-message': HarmonizedMessage;
    'harmonized-navigation': HarmonizedNavigation;
    'harmonized-openseadragon': HarmonizedOpenseadragon;
    'harmonized-overlay': HarmonizedOverlay;
    'harmonized-pager': HarmonizedPager;
    'harmonized-pdf': HarmonizedPdf;
    'harmonized-spinner': HarmonizedSpinner;
    'harmonized-topbar': HarmonizedTopbar;
    'harmonized-viewer': HarmonizedViewer;
    'harmonized-viewport': HarmonizedViewport;
    'harmonized-zoom-slider': HarmonizedZoomSlider;
    'hv-annotations': HvAnnotations;
    'hv-settings': HvSettings;
    'hv-statusbar': HvStatusbar;
    'hv-toolbar': HvToolbar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'harmonized-drawer': LocalJSX.HarmonizedDrawer & JSXBase.HTMLAttributes<HTMLHarmonizedDrawerElement>;
      'harmonized-image': LocalJSX.HarmonizedImage & JSXBase.HTMLAttributes<HTMLHarmonizedImageElement>;
      'harmonized-image-list': LocalJSX.HarmonizedImageList & JSXBase.HTMLAttributes<HTMLHarmonizedImageListElement>;
      'harmonized-message': LocalJSX.HarmonizedMessage & JSXBase.HTMLAttributes<HTMLHarmonizedMessageElement>;
      'harmonized-navigation': LocalJSX.HarmonizedNavigation & JSXBase.HTMLAttributes<HTMLHarmonizedNavigationElement>;
      'harmonized-openseadragon': LocalJSX.HarmonizedOpenseadragon & JSXBase.HTMLAttributes<HTMLHarmonizedOpenseadragonElement>;
      'harmonized-overlay': LocalJSX.HarmonizedOverlay & JSXBase.HTMLAttributes<HTMLHarmonizedOverlayElement>;
      'harmonized-pager': LocalJSX.HarmonizedPager & JSXBase.HTMLAttributes<HTMLHarmonizedPagerElement>;
      'harmonized-pdf': LocalJSX.HarmonizedPdf & JSXBase.HTMLAttributes<HTMLHarmonizedPdfElement>;
      'harmonized-spinner': LocalJSX.HarmonizedSpinner & JSXBase.HTMLAttributes<HTMLHarmonizedSpinnerElement>;
      'harmonized-topbar': LocalJSX.HarmonizedTopbar & JSXBase.HTMLAttributes<HTMLHarmonizedTopbarElement>;
      'harmonized-viewer': LocalJSX.HarmonizedViewer & JSXBase.HTMLAttributes<HTMLHarmonizedViewerElement>;
      'harmonized-viewport': LocalJSX.HarmonizedViewport & JSXBase.HTMLAttributes<HTMLHarmonizedViewportElement>;
      'harmonized-zoom-slider': LocalJSX.HarmonizedZoomSlider & JSXBase.HTMLAttributes<HTMLHarmonizedZoomSliderElement>;
      'hv-annotations': LocalJSX.HvAnnotations & JSXBase.HTMLAttributes<HTMLHvAnnotationsElement>;
      'hv-settings': LocalJSX.HvSettings & JSXBase.HTMLAttributes<HTMLHvSettingsElement>;
      'hv-statusbar': LocalJSX.HvStatusbar & JSXBase.HTMLAttributes<HTMLHvStatusbarElement>;
      'hv-toolbar': LocalJSX.HvToolbar & JSXBase.HTMLAttributes<HTMLHvToolbarElement>;
    }
  }
}


