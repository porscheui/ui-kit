/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-select-wrapper',
  styles: [
    `
      @media only screen and (min-width: 760px) {
        #app,
        :host {
          display: grid;
          grid-template-columns: repeat(2, 50%);
        }
      }
    `,
  ],
  template: `
    <div class="playground light" title="should render native dropdown with label">
      <p-select-wrapper [label]="'Native'" [native]="true">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render native dropdown with label on dark theme">
      <p-select-wrapper [label]="'Native'" [native]="true" [theme]="'dark'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with label">
      <p-select-wrapper [label]="'Some label'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with label on dark theme">
      <p-select-wrapper [label]="'Some label'" [theme]="'dark'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with label and description">
      <p-select-wrapper [label]="'Some label'" [description]="'Some description'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with label and description on dark theme">
      <p-select-wrapper [label]="'Some label'" [description]="'Some description'" [theme]="'dark'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render without label and without description">
      <p-select-wrapper [label]="'Some label'" [description]="'Some description'" [hideLabel]="true">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render without label and without description on dark theme">
      <p-select-wrapper [label]="'Some label'" [description]="'Some description'" [hideLabel]="true" [theme]="'dark'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with responsive label and description">
      <p-select-wrapper
        [label]="'Some label'"
        [description]="'Some description'"
        [hideLabel]="{ base: true, xs: false, s: true, m: false, l: true, xl: false }"
      >
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with responsive label and description on dark theme">
      <p-select-wrapper
        [label]="'Some label'"
        [description]="'Some description'"
        [hideLabel]="{ base: true, xs: false, s: true, m: false, l: true, xl: false }"
        [theme]="'dark'"
      >
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with filter">
      <p-select-wrapper [label]="'Some label with filter'" [filter]="true">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with filter on dark theme">
      <p-select-wrapper [label]="'Some label with filter'" [filter]="true" [theme]="'dark'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render in disabled state with filter">
      <p-select-wrapper [label]="'Some label disabled with filter'" [filter]="true">
        <select disabled>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render in disabled state with filter on dark theme">
      <p-select-wrapper [label]="'Some label disabled with filter'" [filter]="true" [theme]="'dark'">
        <select disabled>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render in required state">
      <p-select-wrapper [label]="'Some label'">
        <select required>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
      <p-select-wrapper [label]="'This is a very insanely super long label across multiple lines'">
        <select required>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground dark" title="should render in required state on dark theme">
      <p-select-wrapper [label]="'Some label'" [theme]="'dark'">
        <select required>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
      <p-select-wrapper [label]="'This is a very insanely super long label across multiple lines'" [theme]="'dark'">
        <select required>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render in disabled state">
      <p-select-wrapper [label]="'Some label disabled'" [description]="'Some description'">
        <select disabled>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render in disabled state on dark theme">
      <p-select-wrapper [label]="'Some label disabled'" [description]="'Some description'" [theme]="'dark'">
        <select disabled>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with error state and error message">
      <p-select-wrapper [label]="'Some label'" [state]="'error'" [message]="'Some error message.'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with error state and error message on dark theme">
      <p-select-wrapper [label]="'Some label'" [state]="'error'" [message]="'Some error message.'" [theme]="'dark'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with error state and error message with filter">
      <p-select-wrapper [label]="'Some label with filter'" [filter]="true" [state]="'error'" [message]="'Some error message.'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with error state and error message with filter on dark theme">
      <p-select-wrapper
        [label]="'Some label with filter'"
        [filter]="true"
        [state]="'error'"
        [message]="'Some error message.'"
        [theme]="'dark'"
      >
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with error state and no error message">
      <p-select-wrapper [label]="'Some label'" [state]="'error'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with error state and no error message on dark theme">
      <p-select-wrapper [label]="'Some label'" [state]="'error'" [theme]="'dark'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with success state and success message">
      <p-select-wrapper [label]="'Some label'" [state]="'success'" [message]="'Some success message.'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with success state and success message on dark theme">
      <p-select-wrapper [label]="'Some label'" [state]="'success'" [message]="'Some success message.'" [theme]="'dark'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with success state and success message with filter">
      <p-select-wrapper [label]="'Some label with filter'" [filter]="true" [state]="'success'" [message]="'Some success message.'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with success state and success message with filter on dark theme">
      <p-select-wrapper
        [label]="'Some label with filter'"
        [filter]="true"
        [state]="'success'"
        [message]="'Some success message.'"
        [theme]="'dark'"
      >
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with success state and no success message">
      <p-select-wrapper [label]="'Some label'" [state]="'success'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with success state and no success message on dark theme">
      <p-select-wrapper [label]="'Some label'" [state]="'success'" [theme]="'dark'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render with default state and no message">
      <p-select-wrapper [label]="'Some label'" [state]="'none'" [message]="'Some message which should not be rendered.'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>
    <div class="playground dark" title="should render with default state and no message on dark theme">
      <p-select-wrapper [label]="'Some label'" [state]="'none'" [message]="'Some message which should not be rendered.'" [theme]="'dark'">
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
      </p-select-wrapper>
    </div>

    <div class="playground light" title="should render label, description and message by slotted content with error state">
      <p-select-wrapper [state]="'error'">
        <span slot="label">Some label with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
        <span slot="description">Some description with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
        <span slot="message">Some error message with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
      </p-select-wrapper>
    </div>
    <div
      class="playground dark"
      title="should render label, description and message by slotted content with error state on dark theme"
    >
      <p-select-wrapper [state]="'error'" [theme]="'dark'">
        <span slot="label">Some label with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
        <span slot="description">Some description with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
        <span slot="message">Some error message with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
      </p-select-wrapper>
    </div>

    <div
      class="playground light"
      title="should render label, description and message by slotted content with success state"
    >
      <p-select-wrapper [state]="'success'">
        <span slot="label">Some label with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
        <span slot="description">Some description with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
        <span slot="message">Some success message with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
      </p-select-wrapper>
    </div>
    <div
      class="playground dark"
      title="should render label, description and message by slotted content with success state on dark theme"
    >
      <p-select-wrapper [state]="'success'" [theme]="'dark'">
        <span slot="label">Some label with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
        <span slot="description">Some description with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
        <select>
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
        </select>
        <span slot="message">Some success message with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
      </p-select-wrapper>
    </div>

    <div
      class="playground light"
      title="should render with multiline label, description and message and cut off too long option text"
    >
      <p-select-wrapper
        [label]="'Lorem ipsum dolor sit amet, consetetur sadipscing'"
        [description]="'Lorem ipsum dolor sit amet, consetetur sadipscing lorem ipsum dolor sit amet'"
        [state]="'error'"
        [message]="'At vero eos et accusam et justo duo dolores et ea rebum.'"
        style="width: 15rem"
      >
        <select>
          <option [value]="'a'">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</option>
          <option [value]="'b'">sed diam nonumy eirmod tempor invidunt ut labore</option>
          <option [value]="'c'">et dolore magna aliquyam erat, sed diam voluptua</option>
        </select>
      </p-select-wrapper>
    </div>
    <div
      class="playground dark"
      title="should render with multiline label, description and message and cut off too long option text on dark theme"
    >
      <p-select-wrapper
        [label]="'Lorem ipsum dolor sit amet, consetetur sadipscing'"
        [description]="'Lorem ipsum dolor sit amet, consetetur sadipscing lorem ipsum dolor sit amet'"
        [state]="'error'"
        [message]="'At vero eos et accusam et justo duo dolores et ea rebum.'"
        [theme]="'dark'"
        style="width: 15rem"
      >
        <select>
          <option [value]="'a'">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</option>
          <option [value]="'b'">sed diam nonumy eirmod tempor invidunt ut labore</option>
          <option [value]="'c'">et dolore magna aliquyam erat, sed diam voluptua</option>
        </select>
      </p-select-wrapper>
    </div>

    <div
      class="playground light"
      title="should render in focus state and be open"
      style="padding-bottom: calc(1rem + 422px)"
    >
      <p-select-wrapper [label]="'Some label'" id="last-select-on-page">
        <select id="open-options">
          <option [value]="'a'">Option A</option>
          <option [value]="'b'">Option B</option>
          <option [value]="'c'">Option C</option>
          <option [value]="'d'">Option D</option>
          <option [value]="'e'">Option E</option>
          <option [value]="'f'">Option F</option>
          <option [value]="'g'">Option G</option>
          <option [value]="'h'">Option H</option>
          <option [value]="'i'">Option I</option>
          <option [value]="'j'">Option J</option>
          <option [value]="'k'">Option K</option>
        </select>
      </p-select-wrapper>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectWrapperComponent {}
