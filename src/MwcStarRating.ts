import { html, css, LitElement, property } from 'lit-element';

export class MwcStarRating extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      color: var(--mwc-star-rating-text-color, #eeeeee);
    }
    :host(:not([readonly])) {
      cursor: pointer;
    }
    :host(:not([readonly])) iron-icon:hover,
    :host(:not([readonly])) iron-icon:hover ~ iron-icon {
      color: var(--mwc-star-rating-text-hover-color, #ffeb3b) !important;
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
