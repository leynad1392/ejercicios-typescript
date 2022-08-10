import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('css-shadowdom')
export class CssShadowDom extends LitElement {

    static override styles = css`
      :host {
        color: green;
        display: block;
        background-color: lightgray;
        padding: 8px;
      }
      :host(.red) {
        color: red;
      }
    `;


    override render() {
        return html`
            <p>hola como estas </p>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'css-shadowdom': CssShadowDom;
    }
}