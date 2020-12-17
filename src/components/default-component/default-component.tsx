import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'default-component',
  styleUrl: 'default-component.scss',
  shadow: true,
})
export class DefaultComponent {
  @Prop() startTime: number = 0;

  render() {
    return <div>Default StencilJS component</div>;
  }

  componentDidRender() {
    console.log(`Render Time: ${performance.now() - this.startTime}`);
  }
}
