import { html, TemplateResult } from 'lit';
import '../mwc-star-rating.js';

export default {
  title: 'MwcStarRating',
  component: 'mwc-star-rating',
  argTypes: {
    value: { control: 'number' },
    icon: { control: 'text' },
    textColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  value?: number;
  icon?: string;
  textColor?: string;
}

const Template: Story<ArgTypes> = ({
  value = 3.5,
  icon = 'star',
  textColor,
}: ArgTypes) => html`
  <mwc-star-rating
    style="--mwc-star-rating-text-color: ${textColor || 'unset'}"
    .value=${value}
    .icon=${icon}
  ></mwc-star-rating>
`;

export const Regular = Template.bind({});
