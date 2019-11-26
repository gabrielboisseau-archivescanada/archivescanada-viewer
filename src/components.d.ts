/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MessageType,
} from './components/message/message-options';

export namespace Components {
  interface HarmonizedAnnotations {}
  interface HarmonizedButton {
    'disabled': boolean;
    'dropdown': boolean;
    'fullWidth': boolean;
    'icon': string;
    'iconClassName': string;
    'label': string;
    'outline': boolean;
    'raised': boolean;
    'size': string;
    'tooltip': string;
  }
  interface HarmonizedContent {
    'placement': PlacementType;
    'rows': number;
    'showMetadata': boolean;
    'showNavigation': boolean;
    'visible': boolean;
    'width': number;
  }
  interface HarmonizedCustomResolver {
    'contentType': string;
    'url': string;
  }
  interface HarmonizedDrawer {
    'close': () => Promise<void>;
    'open': () => Promise<void>;
    'placement': PlacementType;
    'toolbar': boolean;
    'visible': boolean;
    'width': number;
  }
  interface HarmonizedEmbed {}
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
    'getOverlays': () => Promise<DocumentOverlay[]>;
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
  interface HarmonizedSpinner {}
  interface HarmonizedTab {
    'active': boolean;
    'icon': string;
    'label': string;
  }
  interface HarmonizedTabs {}
  interface HarmonizedTopbar {}
  interface HarmonizedVideo {
    'url': string;
  }
  interface HarmonizedViewer {
    'addOverlay': (x: number, y: number, width: number, height: number) => Promise<void>;
    'addResolver': () => Promise<void>;
    'defaultLanguage': string;
    'defaultTheme': string;
    'documentUrl': string;
    'exitFullscreen': () => Promise<void>;
    'fullscreen': () => Promise<void>;
    'getPage': () => Promise<number>;
    'getUrl': () => Promise<string>;
    'navigationBackgroundColor': string;
    'navigationCols': number;
    'navigationEnable': boolean;
    'navigationPlacement': PlacementType;
    'pagingEnable': boolean;
  }
  interface HarmonizedViewport {
    'annotationsEnable': boolean;
  }
  interface HarmonizedZoomSlider {}
}

declare global {


  interface HTMLHarmonizedAnnotationsElement extends Components.HarmonizedAnnotations, HTMLStencilElement {}
  var HTMLHarmonizedAnnotationsElement: {
    prototype: HTMLHarmonizedAnnotationsElement;
    new (): HTMLHarmonizedAnnotationsElement;
  };

  interface HTMLHarmonizedButtonElement extends Components.HarmonizedButton, HTMLStencilElement {}
  var HTMLHarmonizedButtonElement: {
    prototype: HTMLHarmonizedButtonElement;
    new (): HTMLHarmonizedButtonElement;
  };

  interface HTMLHarmonizedContentElement extends Components.HarmonizedContent, HTMLStencilElement {}
  var HTMLHarmonizedContentElement: {
    prototype: HTMLHarmonizedContentElement;
    new (): HTMLHarmonizedContentElement;
  };

  interface HTMLHarmonizedCustomResolverElement extends Components.HarmonizedCustomResolver, HTMLStencilElement {}
  var HTMLHarmonizedCustomResolverElement: {
    prototype: HTMLHarmonizedCustomResolverElement;
    new (): HTMLHarmonizedCustomResolverElement;
  };

  interface HTMLHarmonizedDrawerElement extends Components.HarmonizedDrawer, HTMLStencilElement {}
  var HTMLHarmonizedDrawerElement: {
    prototype: HTMLHarmonizedDrawerElement;
    new (): HTMLHarmonizedDrawerElement;
  };

  interface HTMLHarmonizedEmbedElement extends Components.HarmonizedEmbed, HTMLStencilElement {}
  var HTMLHarmonizedEmbedElement: {
    prototype: HTMLHarmonizedEmbedElement;
    new (): HTMLHarmonizedEmbedElement;
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

  interface HTMLHarmonizedSpinnerElement extends Components.HarmonizedSpinner, HTMLStencilElement {}
  var HTMLHarmonizedSpinnerElement: {
    prototype: HTMLHarmonizedSpinnerElement;
    new (): HTMLHarmonizedSpinnerElement;
  };

  interface HTMLHarmonizedTabElement extends Components.HarmonizedTab, HTMLStencilElement {}
  var HTMLHarmonizedTabElement: {
    prototype: HTMLHarmonizedTabElement;
    new (): HTMLHarmonizedTabElement;
  };

  interface HTMLHarmonizedTabsElement extends Components.HarmonizedTabs, HTMLStencilElement {}
  var HTMLHarmonizedTabsElement: {
    prototype: HTMLHarmonizedTabsElement;
    new (): HTMLHarmonizedTabsElement;
  };

  interface HTMLHarmonizedTopbarElement extends Components.HarmonizedTopbar, HTMLStencilElement {}
  var HTMLHarmonizedTopbarElement: {
    prototype: HTMLHarmonizedTopbarElement;
    new (): HTMLHarmonizedTopbarElement;
  };

  interface HTMLHarmonizedVideoElement extends Components.HarmonizedVideo, HTMLStencilElement {}
  var HTMLHarmonizedVideoElement: {
    prototype: HTMLHarmonizedVideoElement;
    new (): HTMLHarmonizedVideoElement;
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
  interface HTMLElementTagNameMap {
    'harmonized-annotations': HTMLHarmonizedAnnotationsElement;
    'harmonized-button': HTMLHarmonizedButtonElement;
    'harmonized-content': HTMLHarmonizedContentElement;
    'harmonized-custom-resolver': HTMLHarmonizedCustomResolverElement;
    'harmonized-drawer': HTMLHarmonizedDrawerElement;
    'harmonized-embed': HTMLHarmonizedEmbedElement;
    'harmonized-image': HTMLHarmonizedImageElement;
    'harmonized-image-list': HTMLHarmonizedImageListElement;
    'harmonized-message': HTMLHarmonizedMessageElement;
    'harmonized-navigation': HTMLHarmonizedNavigationElement;
    'harmonized-openseadragon': HTMLHarmonizedOpenseadragonElement;
    'harmonized-overlay': HTMLHarmonizedOverlayElement;
    'harmonized-pager': HTMLHarmonizedPagerElement;
    'harmonized-spinner': HTMLHarmonizedSpinnerElement;
    'harmonized-tab': HTMLHarmonizedTabElement;
    'harmonized-tabs': HTMLHarmonizedTabsElement;
    'harmonized-topbar': HTMLHarmonizedTopbarElement;
    'harmonized-video': HTMLHarmonizedVideoElement;
    'harmonized-viewer': HTMLHarmonizedViewerElement;
    'harmonized-viewport': HTMLHarmonizedViewportElement;
    'harmonized-zoom-slider': HTMLHarmonizedZoomSliderElement;
  }
}

declare namespace LocalJSX {
  interface HarmonizedAnnotations {}
  interface HarmonizedButton {
    'disabled'?: boolean;
    'dropdown'?: boolean;
    'fullWidth'?: boolean;
    'icon'?: string;
    'iconClassName'?: string;
    'label'?: string;
    'outline'?: boolean;
    'raised'?: boolean;
    'size'?: string;
    'tooltip'?: string;
  }
  interface HarmonizedContent {
    'placement'?: PlacementType;
    'rows'?: number;
    'showMetadata'?: boolean;
    'showNavigation'?: boolean;
    'visible'?: boolean;
    'width'?: number;
  }
  interface HarmonizedCustomResolver {
    'contentType'?: string;
    'url'?: string;
  }
  interface HarmonizedDrawer {
    'placement'?: PlacementType;
    'toolbar'?: boolean;
    'visible'?: boolean;
    'width'?: number;
  }
  interface HarmonizedEmbed {}
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
  interface HarmonizedSpinner {}
  interface HarmonizedTab {
    'active'?: boolean;
    'icon'?: string;
    'label'?: string;
  }
  interface HarmonizedTabs {}
  interface HarmonizedTopbar {}
  interface HarmonizedVideo {
    'url'?: string;
  }
  interface HarmonizedViewer {
    'defaultLanguage'?: string;
    'defaultTheme'?: string;
    'documentUrl'?: string;
    'navigationBackgroundColor'?: string;
    'navigationCols'?: number;
    'navigationEnable'?: boolean;
    'navigationPlacement'?: PlacementType;
    'onStatusChanged'?: (event: CustomEvent<any>) => void;
    'pagingEnable'?: boolean;
  }
  interface HarmonizedViewport {
    'annotationsEnable'?: boolean;
  }
  interface HarmonizedZoomSlider {}

  interface IntrinsicElements {
    'harmonized-annotations': HarmonizedAnnotations;
    'harmonized-button': HarmonizedButton;
    'harmonized-content': HarmonizedContent;
    'harmonized-custom-resolver': HarmonizedCustomResolver;
    'harmonized-drawer': HarmonizedDrawer;
    'harmonized-embed': HarmonizedEmbed;
    'harmonized-image': HarmonizedImage;
    'harmonized-image-list': HarmonizedImageList;
    'harmonized-message': HarmonizedMessage;
    'harmonized-navigation': HarmonizedNavigation;
    'harmonized-openseadragon': HarmonizedOpenseadragon;
    'harmonized-overlay': HarmonizedOverlay;
    'harmonized-pager': HarmonizedPager;
    'harmonized-spinner': HarmonizedSpinner;
    'harmonized-tab': HarmonizedTab;
    'harmonized-tabs': HarmonizedTabs;
    'harmonized-topbar': HarmonizedTopbar;
    'harmonized-video': HarmonizedVideo;
    'harmonized-viewer': HarmonizedViewer;
    'harmonized-viewport': HarmonizedViewport;
    'harmonized-zoom-slider': HarmonizedZoomSlider;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'harmonized-annotations': LocalJSX.HarmonizedAnnotations & JSXBase.HTMLAttributes<HTMLHarmonizedAnnotationsElement>;
      'harmonized-button': LocalJSX.HarmonizedButton & JSXBase.HTMLAttributes<HTMLHarmonizedButtonElement>;
      'harmonized-content': LocalJSX.HarmonizedContent & JSXBase.HTMLAttributes<HTMLHarmonizedContentElement>;
      'harmonized-custom-resolver': LocalJSX.HarmonizedCustomResolver & JSXBase.HTMLAttributes<HTMLHarmonizedCustomResolverElement>;
      'harmonized-drawer': LocalJSX.HarmonizedDrawer & JSXBase.HTMLAttributes<HTMLHarmonizedDrawerElement>;
      'harmonized-embed': LocalJSX.HarmonizedEmbed & JSXBase.HTMLAttributes<HTMLHarmonizedEmbedElement>;
      'harmonized-image': LocalJSX.HarmonizedImage & JSXBase.HTMLAttributes<HTMLHarmonizedImageElement>;
      'harmonized-image-list': LocalJSX.HarmonizedImageList & JSXBase.HTMLAttributes<HTMLHarmonizedImageListElement>;
      'harmonized-message': LocalJSX.HarmonizedMessage & JSXBase.HTMLAttributes<HTMLHarmonizedMessageElement>;
      'harmonized-navigation': LocalJSX.HarmonizedNavigation & JSXBase.HTMLAttributes<HTMLHarmonizedNavigationElement>;
      'harmonized-openseadragon': LocalJSX.HarmonizedOpenseadragon & JSXBase.HTMLAttributes<HTMLHarmonizedOpenseadragonElement>;
      'harmonized-overlay': LocalJSX.HarmonizedOverlay & JSXBase.HTMLAttributes<HTMLHarmonizedOverlayElement>;
      'harmonized-pager': LocalJSX.HarmonizedPager & JSXBase.HTMLAttributes<HTMLHarmonizedPagerElement>;
      'harmonized-spinner': LocalJSX.HarmonizedSpinner & JSXBase.HTMLAttributes<HTMLHarmonizedSpinnerElement>;
      'harmonized-tab': LocalJSX.HarmonizedTab & JSXBase.HTMLAttributes<HTMLHarmonizedTabElement>;
      'harmonized-tabs': LocalJSX.HarmonizedTabs & JSXBase.HTMLAttributes<HTMLHarmonizedTabsElement>;
      'harmonized-topbar': LocalJSX.HarmonizedTopbar & JSXBase.HTMLAttributes<HTMLHarmonizedTopbarElement>;
      'harmonized-video': LocalJSX.HarmonizedVideo & JSXBase.HTMLAttributes<HTMLHarmonizedVideoElement>;
      'harmonized-viewer': LocalJSX.HarmonizedViewer & JSXBase.HTMLAttributes<HTMLHarmonizedViewerElement>;
      'harmonized-viewport': LocalJSX.HarmonizedViewport & JSXBase.HTMLAttributes<HTMLHarmonizedViewportElement>;
      'harmonized-zoom-slider': LocalJSX.HarmonizedZoomSlider & JSXBase.HTMLAttributes<HTMLHarmonizedZoomSliderElement>;
    }
  }
}


