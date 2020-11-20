import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'default-component',
  styleUrl: 'default-component.scss',
  shadow: true,
})
export class DefaultComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return <div>Default StencilJS component</div>;
  }
}
