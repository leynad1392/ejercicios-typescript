import {LitElement, html, css, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('mi-madrecss')
export class MadreCss extends LitElement {

    static override styles = css`
    div {
      border: 1px solid gray;
      padding: 8px;
    }
  ` as CSSResultGroup;


    override render() {
        return html`
            <div>Content</div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-madrecss': MadreCss;
    }
}