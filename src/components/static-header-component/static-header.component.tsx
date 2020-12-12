import { Component, h } from '@stencil/core';

@Component({
  tag: 'static-header-component',
  styleUrl: 'static-header.component.scss',
  shadow: true,
})
export class DefaultComponent {
  render() {
    return (
      <div class="header">
        <form role="search" class="search">
          <label class="search__label">
            <input id="search" type="search" placeholder="Search..." class="search__input" autofocus required />
          </label>
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
}
