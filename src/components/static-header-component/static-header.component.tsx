import { Component, h } from '@stencil/core';

@Component({
  tag: 'static-header',
  styleUrl: 'static-header.component.scss',
  shadow: true,
})
export class DefaultComponent {
  render() {
    return (
      <div class="header">
        <form onsubmit="event.preventDefault();" role="search" class="search">
          <label for="search" class="search__label">
            Search
          </label>
          <input id="search" type="search" placeholder="Search..." class="search__input" autofocus required />
        </form>
        <nav class="nav">
          <a href="" class="nav__label">
            Home
          </a>
          <a href="" class="nav__label">
            Gallery
          </a>
          <a href="" class="nav__label">
            Team
          </a>
          <a href="" class="nav__label">
            Contact
          </a>
        </nav>
      </div>
    );
  }
}
