import { html, css, LitElement, property, PropertyValues } from 'lit-element';
import '@material/mwc-icon';

export class MwcStarRating extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      color: var(--mwc-star-rating-text-color, #c0c0c0);
      --mdc-icon-size: var(--mwc-star-rating-size, 24px);
    }
    :host([readonly]) {
      cursor: default;
    }
    :host(:not([readonly])) {
      cursor: pointer;
    }
    :host(:not([readonly])) mwc-icon:hover,
    :host(:not([readonly])) mwc-icon:hover ~ mwc-icon {
      color: var(--mwc-star-rating-text-hover-color, #ffeb3b) !important;
    }

    mwc-icon {
      float: right;
    }
    mwc-icon.whole {
      -webkit-clip-path: inset(0 0 0 50%);
      -moz-clip-path: inset(0 0 0 50%);
      -ms-clip-path: inset(0 0 0 50%);
      -o-clip-path: inset(0 0 0 50%);
      clip-path: inset(0 0 0 50%);
      position: relative;
      left: calc(var(--mdc-icon-size) * -1);
      margin-right: calc(var(--mdc-icon-size) * -1);
    }
    mwc-icon.half {
      -webkit-clip-path: inset(0 50% 0 0);
      -moz-clip-path: inset(0 50% 0 0);
      -ms-clip-path: inset(0 50% 0 0);
      -o-clip-path: inset(0 50% 0 0);
      clip-path: inset(0 50% 0 0);
      position: relative;
    }
    mwc-icon[selected],
    mwc-icon[selected] ~ mwc-icon {
      color: var(--mwc-star-rating-text-selected-color, #fdd835);
    }
  `;

  @property({ type: Number }) value = 0;

  @property({ type: String, reflect: true }) icon = 'star';

  @property({ type: Boolean, reflect: true}) readonly = false;

  private ratings = [
    {value: 5, class: 'whole', selected: false},
    {value: 4.5, class: 'half', selected: false},
    {value: 4, class: 'whole', selected: false},
    {value: 3.5, class: 'half', selected: false},
    {value: 3, class: 'whole', selected: false},
    {value: 2.5, class: 'half', selected: false},
    {value: 2, class: 'whole', selected: false},
    {value: 1.5, class: 'half', selected: false},
    {value: 1, class: 'whole', selected: false},
    {value: 0.5, class: 'half', selected: false},
  ];

  render() {
    return html`
      ${this.ratings.map(item => html`<mwc-icon class="${item.class}" value="${item.value}" ?selected="${item.selected}" @click="${(e: Event) => this._starClicked(e, item.value)}">${this.icon}</mwc-icon>`)}
    `;
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('value')) {
      this._valueChanged(this.value);
    }
  }

  _valueChanged(value: number) {
    if (value !== 0 && !value) {
      return;
    }

    this.ratings.forEach((rating) => {
      const item = rating;
      if (item.value === value) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    this.requestUpdate();
  }

  _starClicked(e: Event, value: number) {
    e.preventDefault();

    if (this.readonly) {
        return;
    }

    this.value = value;

    this.dispatchEvent(new CustomEvent('rating-selected', {detail: {'value': value}}));
  }
}
