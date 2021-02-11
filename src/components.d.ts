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
import {
  Item,
} from './models/item';

export namespace Components {
  interface HarmonizedAnnotations {}
  interface HarmonizedAudio {
    'contentType': string;
    'url': string;
  }
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
  interface HarmonizedDrawer {
    'headerTitle': string;
    'shown': boolean;
  }
  interface HarmonizedEmbed {
    'url': string;
  }
  interface HarmonizedImage {
    'LoadImageData': (index: any) => Promise<void>;
    'LoadPDFSplitData': () => Promise<void>;
    'addImageProperty': (value: string) => Promise<void>;
    'caption': string;
    'contentType': string;
    'page': number;
    'preload': boolean;
    'removeImageProperty': (value: string) => Promise<void>;
    'showCaption': boolean;
    'showTooltip': boolean;
    'src': string;
    'srcset': string;
  }
  interface HarmonizedImageList {}
  interface HarmonizedMessage {
    'type': MessageType;
  }
  interface HarmonizedNavigation {
    'autoResize': boolean;
    'cols': number;
    'rows': number;
    'togglePDFThumbnail': () => Promise<void>;
  }
  interface HarmonizedNavigationChild {
    'autoResize': boolean;
    'cols': number;
    'displayPdfChildNavigation': (contentType: string) => Promise<void>;
    'rows': number;
  }
  interface HarmonizedOpenseadragon {
    'allowPaging': boolean;
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
    'contentType': string;
    'url': string;
  }
  interface HarmonizedViewer {
    'addOverlay': (x: number, y: number, width: number, height: number) => Promise<void>;
    'customItemProps': string[];
    'customVideoPlayer': boolean;
    'deepzoomEnabled': boolean;
    'getCurrentItem': () => Promise<Item>;
    'getCustomVideoElement': () => Promise<HTMLElement>;
    'getDrawerElement': () => Promise<HTMLElement>;
    'getItemCount': () => Promise<number>;
    'getItems': () => Promise<Item[]>;
    'getNavigationElement': () => Promise<HTMLElement>;
    'getTopBarElement': () => Promise<HTMLElement>;
    'getViewportElement': () => Promise<HTMLElement>;
    'getViewportType': () => Promise<ViewportType>;
    'language': string;
    'navigationBackgroundColor': string;
    'navigationCols': number;
    'navigationEnable': boolean;
    'navigationPlacement': PlacementType;
    'navigationRows': number;
    'pdfManifestUri': string;
    'preventLoadOnEmpty': boolean;
    'setItem': (index: number) => Promise<boolean>;
    'setManifest': (newUrl: string) => Promise<void>;
    'suppressGallery': boolean;
    'url': string;
  }
  interface HarmonizedViewport {}
}

declare global {


  interface HTMLHarmonizedAnnotationsElement extends Components.HarmonizedAnnotations, HTMLStencilElement {}
  var HTMLHarmonizedAnnotationsElement: {
    prototype: HTMLHarmonizedAnnotationsElement;
    new (): HTMLHarmonizedAnnotationsElement;
  };

  interface HTMLHarmonizedAudioElement extends Components.HarmonizedAudio, HTMLStencilElement {}
  var HTMLHarmonizedAudioElement: {
    prototype: HTMLHarmonizedAudioElement;
    new (): HTMLHarmonizedAudioElement;
  };

  interface HTMLHarmonizedButtonElement extends Components.HarmonizedButton, HTMLStencilElement {}
  var HTMLHarmonizedButtonElement: {
    prototype: HTMLHarmonizedButtonElement;
    new (): HTMLHarmonizedButtonElement;
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

  interface HTMLHarmonizedNavigationChildElement extends Components.HarmonizedNavigationChild, HTMLStencilElement {}
  var HTMLHarmonizedNavigationChildElement: {
    prototype: HTMLHarmonizedNavigationChildElement;
    new (): HTMLHarmonizedNavigationChildElement;
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
  interface HTMLElementTagNameMap {
    'harmonized-annotations': HTMLHarmonizedAnnotationsElement;
    'harmonized-audio': HTMLHarmonizedAudioElement;
    'harmonized-button': HTMLHarmonizedButtonElement;
    'harmonized-drawer': HTMLHarmonizedDrawerElement;
    'harmonized-embed': HTMLHarmonizedEmbedElement;
    'harmonized-image': HTMLHarmonizedImageElement;
    'harmonized-image-list': HTMLHarmonizedImageListElement;
    'harmonized-message': HTMLHarmonizedMessageElement;
    'harmonized-navigation': HTMLHarmonizedNavigationElement;
    'harmonized-navigation-child': HTMLHarmonizedNavigationChildElement;
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
  }
}

declare namespace LocalJSX {
  interface HarmonizedAnnotations {}
  interface HarmonizedAudio {
    'contentType'?: string;
    'url'?: string;
  }
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
  interface HarmonizedDrawer {
    'headerTitle'?: string;
    'onViewerDrawerToggle'?: (event: CustomEvent<any>) => void;
    'shown'?: boolean;
  }
  interface HarmonizedEmbed {
    'url'?: string;
  }
  interface HarmonizedImage {
    'caption'?: string;
    'contentType'?: string;
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
    'type'?: MessageType;
  }
  interface HarmonizedNavigation {
    'autoResize'?: boolean;
    'cols'?: number;
    'onHvNavigationUpdated'?: (event: CustomEvent<any>) => void;
    'rows'?: number;
  }
  interface HarmonizedNavigationChild {
    'autoResize'?: boolean;
    'cols'?: number;
    'onHvNavigationUpdated'?: (event: CustomEvent<any>) => void;
    'rows'?: number;
  }
  interface HarmonizedOpenseadragon {
    'allowPaging'?: boolean;
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
  interface HarmonizedTopbar {
    'onHarmonizedViewerTopBarUpdated'?: (event: CustomEvent<any>) => void;
    'on_hvFullscreenToggle'?: (event: CustomEvent<any>) => void;
  }
  interface HarmonizedVideo {
    'contentType'?: string;
    'onHvCustomVideoPlayerRender'?: (event: CustomEvent<any>) => void;
    'url'?: string;
  }
  interface HarmonizedViewer {
    'customItemProps'?: string[];
    'customVideoPlayer'?: boolean;
    'deepzoomEnabled'?: boolean;
    'language'?: string;
    'navigationBackgroundColor'?: string;
    'navigationCols'?: number;
    'navigationEnable'?: boolean;
    'navigationPlacement'?: PlacementType;
    'navigationRows'?: number;
    'onHvManifestError'?: (event: CustomEvent<any>) => void;
    'onHvManifestIsEmpty'?: (event: CustomEvent<any>) => void;
    'onHvRender'?: (event: CustomEvent<any>) => void;
    'onItemChanged'?: (event: CustomEvent<any>) => void;
    'onItemsLoaded'?: (event: CustomEvent<any>) => void;
    'pdfManifestUri'?: string;
    'preventLoadOnEmpty'?: boolean;
    'suppressGallery'?: boolean;
    'url'?: string;
  }
  interface HarmonizedViewport {
    'onHarmonizedViewerViewportUpdated'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'harmonized-annotations': HarmonizedAnnotations;
    'harmonized-audio': HarmonizedAudio;
    'harmonized-button': HarmonizedButton;
    'harmonized-drawer': HarmonizedDrawer;
    'harmonized-embed': HarmonizedEmbed;
    'harmonized-image': HarmonizedImage;
    'harmonized-image-list': HarmonizedImageList;
    'harmonized-message': HarmonizedMessage;
    'harmonized-navigation': HarmonizedNavigation;
    'harmonized-navigation-child': HarmonizedNavigationChild;
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
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'harmonized-annotations': LocalJSX.HarmonizedAnnotations & JSXBase.HTMLAttributes<HTMLHarmonizedAnnotationsElement>;
      'harmonized-audio': LocalJSX.HarmonizedAudio & JSXBase.HTMLAttributes<HTMLHarmonizedAudioElement>;
      'harmonized-button': LocalJSX.HarmonizedButton & JSXBase.HTMLAttributes<HTMLHarmonizedButtonElement>;
      'harmonized-drawer': LocalJSX.HarmonizedDrawer & JSXBase.HTMLAttributes<HTMLHarmonizedDrawerElement>;
      'harmonized-embed': LocalJSX.HarmonizedEmbed & JSXBase.HTMLAttributes<HTMLHarmonizedEmbedElement>;
      'harmonized-image': LocalJSX.HarmonizedImage & JSXBase.HTMLAttributes<HTMLHarmonizedImageElement>;
      'harmonized-image-list': LocalJSX.HarmonizedImageList & JSXBase.HTMLAttributes<HTMLHarmonizedImageListElement>;
      'harmonized-message': LocalJSX.HarmonizedMessage & JSXBase.HTMLAttributes<HTMLHarmonizedMessageElement>;
      'harmonized-navigation': LocalJSX.HarmonizedNavigation & JSXBase.HTMLAttributes<HTMLHarmonizedNavigationElement>;
      'harmonized-navigation-child': LocalJSX.HarmonizedNavigationChild & JSXBase.HTMLAttributes<HTMLHarmonizedNavigationChildElement>;
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
    }
  }
}


