import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('mi-slot-chachi')
export class MiSlotChachi extends LitElement {

    override render() {

        return  html`
                <div>
                    <h4>Slot complejo</h4>
                    <slot name="HEADER"></slot>
                    <slot name="FOOTER"></slot>
                    <slot>I am fallback content</slot>
                </div>
        `;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-slot-chachi': MiSlotChachi;
    }
}