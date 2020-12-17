import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'static-header-component',
  styleUrl: 'static-header.component.scss',
  shadow: true,
})
export class DefaultComponent {
  @Prop() startTime: number = 0;

  render() {
    return (
      <div class="header">
        <form role="search" class="search">
          <input id="search" type="search" placeholder="Search..." class="search__input" autofocus required />
        </form>
        <nav class="nav">
          <a href="/home" class="nav__label">
            Home
          </a>
          <a href="/gallery" class="nav__label">
            Gallery
          </a>
        </nav>
      </div>
    );
  }

  componentDidRender(): void {
    console.log(`Render Time: ${performance.now() - this.startTime}`)
  }
}
