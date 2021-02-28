import { html, css, LitElement, property, PropertyValues } from 'lit-element';
import '@material/mwc-icon';

export class MwcStarRating extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      color: var(--mwc-star-rating-text-color, #c0c0c0);
      cursor: pointer;
      --mdc-icon-size: var(--mwc-star-rating-size, 24px);
    }
    :host mwc-icon:hover,
    :host mwc-icon:hover ~ mwc-icon {
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

  /**
   * The current rating value (0-5).
   */
  @property({ type: Number })
  public value = 0;

  /**
   * The icon to use. Values should correspond to the configured icon font.
   * Defaults to 'star'.
   */
  @property({ type: String, reflect: true })
  public icon = 'star';

  private _ratings = [
    { value: 5.0, class: 'whole', selected: false },
    { value: 4.5, class: 'half', selected: false },
    { value: 4.0, class: 'whole', selected: false },
    { value: 3.5, class: 'half', selected: false },
    { value: 3.0, class: 'whole', selected: false },
    { value: 2.5, class: 'half', selected: false },
    { value: 2.0, class: 'whole', selected: false },
    { value: 1.5, class: 'half', selected: false },
    { value: 1.0, class: 'whole', selected: false },
    { value: 0.5, class: 'half', selected: false },
  ];

  protected render() {
    return html`
      ${this._ratings.map(
        item =>
          html`<mwc-icon
            class="${item.class}"
            value="${item.value}"
            ?selected="${item.selected}"
            @click="${(e: Event) => this._starClicked(e, item.value)}"
            >${this.icon}</mwc-icon
          >`
      )}
    `;
  }

  protected updated(changedProperties: PropertyValues) {
    if (changedProperties.has('value')) {
      this._valueChanged(this.value);
    }
  }

  private _valueChanged(value: number) {
    if (value !== 0 && !value) {
      return;
    }

    const roundedValue = (Math.round(value * 2) / 2).toFixed(1);
    this._ratings.forEach(rating => {
      const item = rating;
      if (item.value.toFixed(1) === roundedValue) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    this.requestUpdate();
  }

  private _starClicked(e: Event, value: number) {
    e.preventDefault();

    this.value = value;

    this.dispatchEvent(
      new CustomEvent('rating-selected', { detail: { rating: value } })
    );
  }
}
