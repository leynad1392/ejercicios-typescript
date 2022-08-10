import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';

@customElement('mi-listado')
export class Repeat extends LitElement {

    static override styles = css`
    
  `;
    @property()
    items: Array<{id: number, name: string}> = [
        {
            id: 2,
            name: "Pepe"
        },
        {
            id: 3,
            name: "Estela"
        },
        {
            id: 4,
            name: "Marcos"
        },
    ];

    override render() {

        return  html`      
            <ul>
                ${repeat(
                    this.items, 
                        (item) => item.id,
                        (item, index) => 
                                html`<li>${index}: ${item.name}</li>`
                )}
            </ul>
        `;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-listado': Repeat;
    }
}
