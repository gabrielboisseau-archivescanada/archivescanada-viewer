import { Component, h, Element, Prop, State } from '@stencil/core';
import { getInstance } from '../../utils/utils';
import { icon } from '@fortawesome/fontawesome-svg-core';
import "../../utils/icon-library";
import { Unsubscribe, Store } from '@stencil/redux';
import { MyAppState } from '../../interfaces';
import { setPage } from '../../store/actions/document';
import { fromContentType } from '../../utils/icon-library';

@Component({
    tag: 'hv-toolbar',
    styleUrls: [
        'toolbar-component.scss'
    ]
})
export class HVToolbar {

    @Element() el: HTMLElement

    setPage: typeof setPage

    storeUnsubscribe: Unsubscribe

    @State() loading: MyAppState["document"]["loading"]
    @State() page: MyAppState["document"]["page"]
    @State() pageCount: MyAppState["document"]["pageCount"]
    @State() alternateFormats: MyAppState["document"]["alternateFormats"]

    @Prop({ context: "store" }) store: Store

    componentWillLoad() {

        this.store.mapDispatchToProps(this, { setPage })
        this.storeUnsubscribe = this.store.mapStateToProps(this, (state: MyAppState) => {
            const {
                document: { alternateFormats: alternateFormats, loading: loading, page: page, pageCount: pageCount }
            } = state
            return {
                alternateFormats: alternateFormats,
                loading: loading,
                page: page,
                pageCount: pageCount
            }
        })
    }

    componentDidUnload() {
        this.storeUnsubscribe()
    }

    isFirst() {
        return (this.page <= 0)
    }

    isLast() {
        return (this.page >= (this.pageCount - 1))
    }

    handleHomeClick() {
        this.setPage(0)
    }

    handlePreviousClick() {
        this.setPage(this.page - 1)
    }

    handleNextClick() {
        this.setPage(this.page + 1)
    }

    handleFullscreenClick() {

        const instance = this.el.closest('.harmonized-viewer')
        if (instance) {
            instance.requestFullscreen()
            instance.classList.add('is-fullscreen')
        }
    }

    handleAlternateFormatClick() {

    }

    handleDropdownClick(ev: MouseEvent) {

        ev.stopPropagation()

        const target = ev.currentTarget as HTMLElement
        if (target) {

            const dropdown = target.closest('.has-dropdown')
            if (dropdown) {
                dropdown.classList.toggle('is-active')
            }
        }
    }

    render() {

        return (
            <nav class="navbar is-light" role="toolbar" aria-label="Toolbar navigation">

                <div class="navbar-menu">

                    <div class="navbar-start">

                        <a class="navbar-item" title="Home" onClick={this.handleHomeClick.bind(this)}>
                            <span class="icon" innerHTML={icon({ prefix: 'fas', iconName: 'home' }).html[0]}></span>
                        </a>

                        <a class="navbar-item" title="Fullscreen" onClick={this.handleFullscreenClick.bind(this)}>
                            <span class="icon" innerHTML={icon({ prefix: 'fas', iconName: 'expand' }).html[0]}></span>
                        </a>

                        <div class="navbar-item">
                            <harmonized-zoom-slider />
                        </div>

                        {/* <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                100%
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">100%</a>
                            </div>
                        </div> */}

                    </div>

                    <div class="navbar-start navbar-center">

                        <a class="navbar-item" title="Previous" onClick={this.handlePreviousClick.bind(this)}>
                            <span class="icon" innerHTML={icon({ prefix: 'fas', iconName: 'chevron-left' }).html[0]}></span>
                        </a>

                        <div class="navbar-item toolbar-page">
                            <a class="tag">{(this.page + 1)}</a>
                            <span>&nbsp;</span>
                            <span>of {this.pageCount} pages</span>
                        </div>

                        <a class="navbar-item" title="Next" onClick={this.handleNextClick.bind(this)}>
                            <span class="icon" innerHTML={icon({ prefix: 'fas', iconName: 'chevron-right' }).html[0]}></span>
                        </a>

                    </div>

                    <div class="navbar-end">
                        {
                            this.alternateFormats && this.alternateFormats.length > 0 &&

                            <div class="navbar-item has-dropdown">
                                <a class="navbar-link" onClick={this.handleDropdownClick.bind(this)}>
                                    <span class="icon" innerHTML={icon({ prefix: 'fas', iconName: 'download' }).html[0]}></span>
                                    <span class="text">Download</span>
                                </a>
                                <div class="navbar-dropdown is-right">
                                    {
                                        this.alternateFormats.map((alternateFormat) => {

                                            return (
                                                <a class="navbar-item" onClick={this.handleAlternateFormatClick.bind(this)}>
                                                    <span class="icon"></span>
                                                    <span class="text">{alternateFormat.label}</span>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}
