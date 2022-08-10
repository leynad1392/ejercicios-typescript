import {html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {MadreCss} from "./MadreCss";

@customElement('mi-hijacss')
export class HijaCss extends MadreCss {

    static override styles = [
        MadreCss.styles,
        css`div {
          color: blue
        }`
    ];


    override render() {
        return html`
            <div>Otro contenido</div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-hijacss': HijaCss;
    }
}