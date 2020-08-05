import { Component } from '@angular/core';

@Component({
  selector: 'page-link',
  template: `
    <div class="playground light" title="should render primary with label">
      <p-link variant="primary" href="https://www.porsche.com">Some label</p-link>
      <p-link variant="primary"><a href="https://www.porsche.com">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render primary with label on dark theme">
      <p-link variant="primary" href="https://www.porsche.com" theme="dark">Some label</p-link>
      <p-link variant="primary" theme="dark"><a href="https://www.porsche.com">Some label</a></p-link>
    </div>

    <div class="playground light" title="should render primary without label">
      <p-link variant="primary" href="https://www.porsche.com" hide-label="true">Some label</p-link>
      <p-link variant="primary" hide-label="true"><a href="https://www.porsche.com">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render primary without label on dark theme">
      <p-link variant="primary" href="https://www.porsche.com" hide-label="true" theme="dark">Some label</p-link>
      <p-link variant="primary" hide-label="true" theme="dark"><a href="https://www.porsche.com">Some label</a></p-link>
    </div>


    <div class="playground light" title="should render secondary with label">
      <p-link href="https://www.porsche.com">Some label</p-link>
      <p-link><a href="https://www.porsche.com">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render secondary with label on dark theme">
      <p-link theme="dark" href="https://www.porsche.com">Some label</p-link>
      <p-link theme="dark"><a href="https://www.porsche.com">Some label</a></p-link>
    </div>

    <div class="playground light" title="should render secondary without label">
      <p-link href="https://www.porsche.com" hide-label="true">Some label</p-link>
      <p-link hide-label="true"><a href="https://www.porsche.com">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render secondary without label on dark theme">
      <p-link theme="dark" href="https://www.porsche.com" hide-label="true">Some label</p-link>
      <p-link hide-label="true" theme="dark"><a href="https://www.porsche.com">Some label</a></p-link>
    </div>


    <div class="playground light" title="should render tertiary with label">
      <p-link variant="tertiary" href="https://www.porsche.com">Some label</p-link>
      <p-link variant="tertiary"><a href="https://www.porsche.com">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render tertiary with label on dark theme">
      <p-link variant="tertiary" href="https://www.porsche.com" theme="dark">Some label</p-link>
      <p-link variant="tertiary" theme="dark"><a href="https://www.porsche.com">Some label</a></p-link>
    </div>

    <div class="playground light" title="should render tertiary without label">
      <p-link variant="tertiary" href="https://www.porsche.com" hide-label="true">Some label</p-link>
      <p-link variant="tertiary" hide-label="true"><a href="https://www.porsche.com">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render tertiary without label on dark theme">
      <p-link variant="tertiary" href="https://www.porsche.com" hide-label="true" theme="dark">Some label</p-link>
      <p-link variant="tertiary" hide-label="true" theme="dark"><a href="https://www.porsche.com">Some label</a>
      </p-link>
    </div>


    <div class="playground light" title="should render secondary with responsive label">
      <p-link hide-label="{'base': true, 'xs': false, 's': true, 'm': false, 'l': true, 'xl': false}"
              href="https://www.porsche.com">Some label
      </p-link>
    </div>


    <div class="playground light" title="should render secondary with specific icon">
      <p-link icon="phone" href="https://www.porsche.com">Some label</p-link>
      <p-link icon-source="assets/icon-custom-kaixin.svg" href="https://www.porsche.com">Some label</p-link>
    </div>

    <div class="playground light" title="should render with multiline label">
      <p-link style="width: 240px;" href="https://www.porsche.com">Lorem ipsum dolor sit amet, consetetur sadipscing
      </p-link>
      <p-link style="width: 240px;"><a href="https://www.porsche.com">Lorem ipsum dolor sit amet, consetetur
        sadipscing</a></p-link>
    </div>

    <div class="playground light" title="should render with explicit anchor tag">
      <p-link><a href="https://www.porsche.com" id="test-focus-state">Some label</a></p-link>
      <a class="example-link" href="#">
        <p-link>Some label</p-link>
      </a>
    </div>
  `,
  styles: [`
    .example-link {
      display: inline-block;
      outline: none;
      text-decoration: none;
    }
  `]
})
export class LinkComponent {
}
