import { Component, h, Element, Prop, Host, State, Event, EventEmitter } from '@stencil/core';
import "../../utils/icon-library";
import { MyAppState } from '../../interfaces';
import { Store, Unsubscribe } from '@stencil/redux';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCMenu, Corner } from '@material/menu';
import iconMenu from '../../assets/material-design-icons/ic_menu_18px.svg'
import iconMore from '../../assets/material-design-icons/navigation/ic_more_vert_18px.svg'
import iconDisplay from '../../assets/material-icons/ic_display_24px.svg';
import iconDockLeft from '../../assets/material-icons/ic_dock_left_24px.svg';
import iconDockBottom from '../../assets/material-icons/ic_dock_bottom_24px.svg';
import { setViewport } from '../../store/actions/document';

@Component({
    tag: 'harmonized-topbar',
    styleUrl: 'topbar-component.scss'
})
export class TopbarComponent {

    @Element() el: HTMLElement

    @Prop() backgroundColor: string

    @Prop({ context: "store" }) store: Store

    @State() title: MyAppState["document"]["document"]["title"]
    @State() viewport: MyAppState["document"]["viewport"]

    setViewport: typeof setViewport

    storeUnsubscribe: Unsubscribe

    private topAppBar?: MDCTopAppBar
    private menuDisplay?: MDCMenu
    private elemSettings?: HTMLHvSettingsElement

    componentWillLoad() {

        this.store.mapDispatchToProps(this, { setViewport })
        this.storeUnsubscribe = this.store.mapStateToProps(this, (state: MyAppState) => {
            const {
                document: { document: document, viewport: viewport }
            } = state
            return {
                title: (document ? document.title : null),
                viewport: viewport
            }
        })
    }

    componentDidLoad() {

        this.topAppBar = new MDCTopAppBar(this.el.querySelector('.topbar'))

        this.menuDisplay = new MDCMenu(this.el.querySelector('.mdc-menu'))
        this.menuDisplay.setAnchorCorner(Corner.BOTTOM_LEFT)
    }

    componentDidUnload() {
        this.storeUnsubscribe()
    }

    handleDisplayClick() {
        this.menuDisplay.open = !this.menuDisplay.open
    }

    handleDisplaySelectionChange(placement: PlacementType, ev: any) {
        this.setViewport({
            navigationPlacement: placement
        })
    }

    openSettings() {
        this.elemSettings.open()
    }

    render() {
        return (
            <Host>
                <header class="topbar" style={{ backgroundColor: this.backgroundColor }}>
                    <div class="topbar-row">
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">
                                <i class="mdc-icon-button__icon" innerHTML={iconMenu}></i>
                            </button>
                            <span class="mdc-top-app-bar__title">
                                {this.title}
                            </span>
                        </section>
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                            {/* <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Download">file_download</button>
                            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Print this page">print</button> */}

                            <div class="mdc-menu-surface--anchor">
                                <button
                                    type="button"
                                    class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
                                    onClick={this.handleDisplayClick.bind(this)}>
                                    <i class="mdc-icon-button__icon" innerHTML={iconDisplay}></i>
                                </button>
                                <div class="mdc-menu mdc-menu-surface" id="demo-menu">
                                    <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
                                        <li>
                                            <ul class="mdc-menu__selection-group">
                                                <li
                                                    role="menuitem"
                                                    class="mdc-list-item mdc-list-item--selected"
                                                    onClick={this.handleDisplaySelectionChange.bind(this, 'left')}>
                                                    <span
                                                        class="mdc-list-item__graphic mdc-menu__selection-group-icon"
                                                        innerHTML={iconDockLeft}>
                                                    </span>
                                                    <span class="mdc-list-item__text">Left</span>
                                                </li>
                                                <li
                                                    role="menuitem"
                                                    class="mdc-list-item"
                                                    onClick={this.handleDisplaySelectionChange.bind(this, 'bottom')}>
                                                    <span class="mdc-list-item__graphic mdc-menu__selection-group-icon"
                                                        innerHTML={iconDockBottom}>
                                                    </span>
                                                    <span class="mdc-list-item__text">Bottom</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <button type="button" class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Bookmark this page" onClick={this.openSettings.bind(this)}>
                                <i class="mdc-icon-button__icon" innerHTML={iconMore}></i>
                            </button>
                        </section>
                    </div>
                </header>

                {/* <nav class="navbar is-primary" role="navigation" aria-label="Dropdown navigation">
                    <div class="navbar-brand">

                        <a class="navbar-item">
                            <figure class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/128x128.png" />
                            </figure>
                        </a>
                        <div class="navbar-item">
                            <h1 class="manifest-title">
                                {this.title}
                            </h1>
                            <span class="manifest-type tag is-info">IIIF</span>
                        </div>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="topbar-menu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>

                    </div>
                    <div id="topbar-menu" class="navbar-menu">

                        <div class="navbar-start">



                        </div>
                        <div class="navbar-end">

                            <a class="navbar-item" title="Settings" onClick={this.openSettings.bind(this)}>
                                <span class="icon" innerHTML={icon({ prefix: "fas", iconName: "share-alt" }).html[0]}></span>
                            </a>

                            <a class="navbar-item" title="Settings" onClick={this.openSettings.bind(this)}>
                                <span class="icon" innerHTML={icon({ prefix: "fas", iconName: "cog" }).html[0]}></span>
                            </a>

                            <a class="navbar-item button-fullscreen-exit" title="Exit fullscreen" onClick={this.openSettings.bind(this)}>
                                <span class="icon" innerHTML={icon({ prefix: "fas", iconName: "compress" }).html[0]}></span>
                                <span class="text">Exit fullscreen</span>
                            </a>

                        </div>
                    </div>
                </nav> */}

                <hv-settings
                    ref={el => this.elemSettings = el as HTMLHvSettingsElement}></hv-settings>
            </Host>
        )
    }
}
