import { Component } from '@angular/core';

@Component({
  selector: 'page-textarea-wrapper',
  template: `
    <div class="playground light" title="should render with label">
      <p-textarea-wrapper [label]="'Some label'">
        <textarea name="some-name"></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with label and placeholder">
      <p-textarea-wrapper [label]="'Some label'">
        <textarea name="some-name" placeholder="Some placeholder text"></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with label, description and placeholder">
      <p-textarea-wrapper [label]="'Some label'" [description]="'Some description'">
        <textarea name="some-name" placeholder="Some placeholder text"></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render without label and without description">
      <p-textarea-wrapper [label]="'Some label'" [description]="'Some description'" [hideLabel]="true">
        <textarea name="some-name"></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with responsive label and description">
      <p-textarea-wrapper
        [label]="'Some label'"
        [description]="'Some description'"
        [hideLabel]="{ base: true, xs: false, s: true, m: false, l: true, xl: false }"
      >
        <textarea name="some-name"></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render in required state">
      <p-textarea-wrapper [label]="'Some label'">
        <textarea name="some-name" required></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render in disabled state">
      <p-textarea-wrapper [label]="'Some label'" [description]="'Some description'">
        <textarea name="some-name" disabled></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with placeholder in disabled state">
      <p-textarea-wrapper [label]="'Some label'">
        <textarea name="some-name" disabled placeholder="Some placeholder"></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render in readonly state">
      <p-textarea-wrapper [label]="'Some label'">
        <textarea name="some-name" readonly>Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with error state and error message">
      <p-textarea-wrapper [label]="'Some label'" [state]="'error'" [message]="'error message'">
        <textarea name="some-name">Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with error state and no error message">
      <p-textarea-wrapper [label]="'Some label'" [state]="'error'">
        <textarea name="some-name">Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with success state and success message">
      <p-textarea-wrapper [label]="'Some label'" [state]="'success'" [message]="'success message'">
        <textarea name="some-name">Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with success state and no success message">
      <p-textarea-wrapper [label]="'Some label'" [state]="'success'">
        <textarea name="some-name">Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with default state and no message">
      <p-textarea-wrapper [label]="'Some label'" [state]="'none'" [message]="'this message should be hidden'">
        <textarea name="some-name">Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div
      class="playground light"
      title="should render label, description and message by slotted content with error state"
    >
      <p-textarea-wrapper [state]="'error'">
        <span slot="label">Some label with a <a href="https://designsystem.porsche.com">link</a>.</span>
        <span slot="description">Some description with a <a href="https://designsystem.porsche.com">link</a>.</span>
        <textarea name="some-name">Some value</textarea>
        <span slot="message">Some error message with a <a href="https://designsystem.porsche.com">link</a>.</span>
      </p-textarea-wrapper>
    </div>

    <div
      class="playground light"
      title="should render label, description and message by slotted content with success state"
    >
      <p-textarea-wrapper [state]="'success'">
        <span slot="label">Some label with a <a href="https://designsystem.porsche.com">link</a>.</span>
        <span slot="description">Some description with a <a href="https://designsystem.porsche.com">link</a>.</span>
        <textarea name="some-name">Some value</textarea>
        <span slot="message">Some success message with a <a href="https://designsystem.porsche.com">link</a>.</span>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render in focus state">
      <p-textarea-wrapper [label]="'Some label'">
        <textarea id="test-focus-state" name="some-name" style="caret-color: transparent;"></textarea>
      </p-textarea-wrapper>
    </div>

    <div
      class="playground light"
      title="should render with multiline label, description and message and cut off too long option text"
    >
      <p-textarea-wrapper
        [label]="'Lorem ipsum dolor sit amet, consetetur sadipscing'"
        [description]="'Lorem ipsum dolor sit amet, consetetur sadipscing lorem ipsum dolor sit amet'"
        [state]="'error'"
        [message]="'At vero eos et accusam et justo duo dolores et ea rebum.'"
        style="width: 240px;"
      >
        <textarea name="some-name">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,</textarea
        >
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with label and multiline text">
      <p-textarea-wrapper [label]="'Some label'">
        <textarea name="some-name">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,</textarea
        >
      </p-textarea-wrapper>
    </div>
  `
})
export class TextareaWrapperComponent {}
