import { html, fixture, expect } from '@open-wc/testing';
import { Icon } from '@material/mwc-icon';

import { MwcStarRating } from '../src/MwcStarRating.js';
import '../mwc-star-rating.js';

describe('MwcStarRating', () => {
  it('has a default values', async () => {
    const el = await fixture<MwcStarRating>(
      html`<mwc-star-rating></mwc-star-rating>`
    );

    expect(el.value).to.equal(0);
    expect(el.readonly).to.equal(false);
    expect(el.icon).to.equal('star');
  });

  it('sets value on icon click', async () => {
    const el = await fixture<MwcStarRating>(
      html`<mwc-star-rating></mwc-star-rating>`
    );
    const icon = el.shadowRoot!.querySelector('mwc-icon:first-of-type') as Icon;
    icon!.click();

    expect(el.value).to.equal(5);
  });

  it('can set the value', async () => {
    const el = await fixture<MwcStarRating>(
      html`<mwc-star-rating .value="${3}"></mwc-star-rating>`
    );

    expect(el.value).to.equal(3);
  });

  it('can set readonly via attribute', async () => {
    const el = await fixture<MwcStarRating>(
      html`<mwc-star-rating readonly></mwc-star-rating>`
    );

    expect(el.readonly).to.equal(true);
  });

  it('can set readonly via binding', async () => {
    const el = await fixture<MwcStarRating>(
      html`<mwc-star-rating ?readonly="${true}"></mwc-star-rating>`
    );

    expect(el.readonly).to.equal(true);
  });

  it('can set icon via attribute', async () => {
    const el = await fixture<MwcStarRating>(
      html`<mwc-star-rating icon="person"></mwc-star-rating>`
    );

    expect(el.icon).to.equal('person');
  });
});
