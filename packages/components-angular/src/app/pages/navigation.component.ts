import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <p-headline [variant]="'headline-2'">Navigation</p-headline>
    <p-divider></p-divider>
    <p-grid>
      <p-grid-item [size]="2">
        <p-headline [variant]="'headline-4'" [tag]="'h4'">&lt;p-link&gt;</p-headline>
      </p-grid-item>
      <p-grid-item [size]="5">
        <div class="playground light spacing-inline">
          <p-link [variant]="'primary'" [href]="'https://designsystem.porsche.com'">Some label</p-link>
        </div>
        <div class="playground light spacing-inline">
          <p-link [href]="'https://designsystem.porsche.com'">Some label</p-link>
        </div>
        <div class="playground light spacing-inline">
          <p-link [variant]="'tertiary'" [href]="'https://designsystem.porsche.com'">Some label</p-link>
        </div>
        <div class="playground light spacing-inline">
          <p-link [icon]="'phone'" [href]="'https://designsystem.porsche.com'">Some label</p-link>
        </div>
        <div class="playground light spacing-inline">
          <p-link [href]="'https://designsystem.porsche.com'" style="width: 240px;">Lorem ipsum dolor sit amet,
            consetetur sadipscing
          </p-link>
        </div>
        <p-divider></p-divider>
        <div class="playground light spacing-inline">
          <p-link [variant]="'primary'" [href]="'https://designsystem.porsche.com'" [hideLabel]="true">Some label
          </p-link>
        </div>
        <div class="playground light spacing-inline">
          <p-link [href]="'https://designsystem.porsche.com'" [hideLabel]="true">Some label</p-link>
        </div>
        <div class="playground light spacing-inline">
          <p-link [variant]="'tertiary'" [href]="'https://designsystem.porsche.com'" [hideLabel]="true">Some label
          </p-link>
        </div>
        <div class="playground light spacing-inline">
          <p-link [icon]="'phone'" [href]="'https://designsystem.porsche.com'" [hideLabel]="true">Some label</p-link>
        </div>
        <p-divider></p-divider>
      </p-grid-item>
      <p-grid-item [size]="5">
        <div class="playground dark spacing-inline">
          <p-link [variant]="'primary'" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Some label
          </p-link>
        </div>
        <div class="playground dark spacing-inline">
          <p-link [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Some label</p-link>
        </div>
        <div class="playground dark spacing-inline">
          <p-link [variant]="'tertiary'" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Some label
          </p-link>
        </div>
        <div class="playground dark spacing-inline">
          <p-link [icon]="'phone'" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Some label</p-link>
        </div>
        <div class="playground dark spacing-inline">
          <p-link [href]="'https://designsystem.porsche.com'" [theme]="'dark'" style="width: 240px;">Lorem ipsum dolor
            sit amet, consetetur sadipscing
          </p-link>
        </div>
        <p-divider></p-divider>
        <div class="playground dark spacing-inline">
          <p-link [variant]="'primary'" [href]="'https://designsystem.porsche.com'" [hideLabel]="true"
                  [theme]="'dark'">Some
            label
          </p-link>
        </div>
        <div class="playground dark spacing-inline">
          <p-link [href]="'https://designsystem.porsche.com'" [hideLabel]="true" [theme]="'dark'">Some label</p-link>
        </div>
        <div class="playground dark spacing-inline">
          <p-link [variant]="'tertiary'" [href]="'https://designsystem.porsche.com'" [hideLabel]="true"
                  [theme]="'dark'">Some
            label
          </p-link>
        </div>
        <div class="playground dark spacing-inline">
          <p-link [icon]="'phone'" [href]="'https://designsystem.porsche.com'" [hideLabel]="true" [theme]="'dark'">
            Some label
          </p-link>
        </div>
        <p-divider></p-divider>
      </p-grid-item>
    </p-grid>
    <p-grid>
      <p-grid-item [size]="2">
        <p-headline [variant]="'headline-4'" [tag]="'h4'">&lt;p-link-pure&gt;</p-headline>
      </p-grid-item>
      <p-grid-item [size]="5">
        <div class="playground light spacing-inline">
          <p-link-pure [href]="'https://designsystem.porsche.com'">Some label</p-link-pure>
        </div>
        <div class="playground light spacing-inline">
          <p-link-pure [hideLabel]="true" [href]="'https://designsystem.porsche.com'">Some label</p-link-pure>
        </div>
        <div class="playground light spacing-inline">
          <p-link-pure [size]="'medium'" [href]="'https://designsystem.porsche.com'">Medium</p-link-pure>
          <p-link-pure [size]="'inherit'" [href]="'https://designsystem.porsche.com'" style="font-size: 48px;">
            Inherit
          </p-link-pure>
        </div>
        <div class="playground light spacing-inline">
          <p-link-pure [weight]="'thin'" [href]="'https://designsystem.porsche.com'">Thin</p-link-pure>
          <p-link-pure [weight]="'regular'" [href]="'https://designsystem.porsche.com'">Regular</p-link-pure>
          <p-link-pure [weight]="'semibold'" [href]="'https://designsystem.porsche.com'">Semibold</p-link-pure>
          <p-link-pure [weight]="'bold'" [href]="'https://designsystem.porsche.com'">Bold</p-link-pure>
        </div>
        <div class="playground light spacing-inline">
          <p-link-pure [active]="true" [href]="'https://designsystem.porsche.com'">Some label</p-link-pure>
        </div>
        <div class="playground light spacing-inline">
          <p-link-pure [icon]="'phone'" [href]="'https://designsystem.porsche.com'">Some link with a custom icon
          </p-link-pure>
        </div>
        <div class="playground light spacing-inline">
          <p-link-pure [href]="'https://designsystem.porsche.com'" style="width: 240px;">Lorem ipsum dolor sit amet,
            consetetur sadipscing
          </p-link-pure>
        </div>
        <div class="playground light spacing-inline">
          <p-link-pure [href]="'https://designsystem.porsche.com'" [weight]="'semibold'" [size]="'medium'">
            Some Label
            <p [slot]="'subline'">Some Subline</p>
          </p-link-pure>
          <p-link-pure [weight]="'semibold'" [size]="'medium'">
            <a [href]="'https://designsystem.porsche.com'">
              Some Label
            </a>
            <p [slot]="'subline'">Some Subline</p>
          </p-link-pure>
          <a [href]="'https://designsystem.porsche.com'" style="display: inline-block">
            <p-link-pure [weight]="'semibold'" [size]="'medium'">
              Some Label
              <p [slot]="'subline'">Some Subline</p>
            </p-link-pure>
          </a>
        </div>
        <p-divider></p-divider>
      </p-grid-item>
      <p-grid-item [size]="5">
        <div class="playground dark spacing-inline">
          <p-link-pure [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Some label</p-link-pure>
        </div>
        <div class="playground dark spacing-inline">
          <p-link-pure [hideLabel]="true" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Some label
          </p-link-pure>
        </div>
        <div class="playground dark spacing-inline">
          <p-link-pure [size]="'medium'" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Medium
          </p-link-pure>
          <p-link-pure [size]="'inherit'" [href]="'https://designsystem.porsche.com'" [theme]="'dark'"
                       style="font-size: 48px;">Inherit
          </p-link-pure>
        </div>
        <div class="playground dark spacing-inline">
          <p-link-pure [weight]="'thin'" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Thin
          </p-link-pure>
          <p-link-pure [weight]="'regular'" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Regular
          </p-link-pure>
          <p-link-pure [weight]="'semibold'" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Semibold
          </p-link-pure>
          <p-link-pure [weight]="'bold'" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Bold
          </p-link-pure>
        </div>
        <div class="playground dark spacing-inline">
          <p-link-pure [active]="true" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Some label
          </p-link-pure>
        </div>
        <div class="playground dark spacing-inline">
          <p-link-pure [icon]="'phone'" [href]="'https://designsystem.porsche.com'" [theme]="'dark'">Some link with a
            custom icon
          </p-link-pure>
        </div>
        <div class="playground dark spacing-inline">
          <p-link-pure [href]="'https://designsystem.porsche.com'" [theme]="'dark'" style="width: 240px;">Lorem ipsum
            dolor sit amet, consetetur sadipscing
          </p-link-pure>
        </div>
        <div class="playground dark spacing-inline">
          <p-link-pure [href]="'https://designsystem.porsche.com'" [theme]="'dark'" [weight]="'semibold'" [size]="'medium'">
            Some Label
            <p [slot]="'subline'">Some Subline</p>
          </p-link-pure>
          <p-link-pure [theme]="'dark'" [weight]="'semibold'" [size]="'medium'">
            <a [href]="'https://designsystem.porsche.com'">
              Some Label
            </a>
            <p [slot]="'subline'">Some Subline</p>
          </p-link-pure>
          <a [href]="'https://designsystem.porsche.com'">
            <p-link-pure [theme]="'dark'" [weight]="'semibold'" [size]="'medium'">
              Some Label
              <p [slot]="'subline'">Some Subline</p>
            </p-link-pure>
          </a>
        </div>
        <p-divider></p-divider>
      </p-grid-item>
    </p-grid>
    <p-grid>
      <p-grid-item [size]="2">
        <p-headline [variant]="'headline-4'" [tag]="'h4'">&lt;p-link-social&gt;</p-headline>
      </p-grid-item>
      <p-grid-item [size]="5">
        <div class="playground light spacing-inline">
          <p-link-social [href]="'https://www.facebook.com'" [icon]="'logo-facebook'">Some label</p-link-social>
        </div>
        <div class="playground light spacing-inline">
          <p-link-social [href]="'https://www.facebook.com'" [icon]="'logo-facebook'" [hideLabel]="true">Some label</p-link-social>
        </div>
        <div class="playground light spacing-inline">
          <p-link-social [icon]="'logo-delicious'" [href]="'https://www.delicious.com'">Some label</p-link-social>
        </div>
        <div class="playground light spacing-inline">
          <p-link-social style="width: 240px;" [icon]="'logo-facebook'" [href]="'https://www.facebook.com'">Lorem ipsum dolor sit amet, consetetur sadipscing</p-link-social>
        </div>
        <p-divider></p-divider>
      </p-grid-item>
      <p-grid-item [size]="5">
        <div class="playground dark spacing-inline">
          <p-link-social [href]="'https://www.facebook.com'" [icon]="'logo-facebook'" [theme]="'dark'">Some label</p-link-social>
        </div>
        <div class="playground dark spacing-inline">
          <p-link-social [href]="'https://www.facebook.com'" [icon]="'logo-facebook'" [hideLabel]="true" [theme]="'dark'">Some label</p-link-social>
        </div>
        <div class="playground dark spacing-inline">
          <p-link-social [icon]="'logo-delicious'" [href]="'https://www.delicious.com'" [theme]="'dark'">Some label</p-link-social>
        </div>
        <div class="playground dark spacing-inline">
          <p-link-social style="width: 240px;" [icon]="'logo-facebook'" [href]="'https://www.facebook.com'" [theme]="'dark'">Lorem ipsum dolor sit amet, consetetur sadipscing</p-link-social>
        </div>
        <p-divider></p-divider>
      </p-grid-item>
    </p-grid>
    <p-grid>
      <p-grid-item [size]="2">
        <p-headline [variant]="'headline-4'" [tag]="'h4'">&lt;p-pagination&gt;</p-headline>
      </p-grid-item>
      <p-grid-item [size]="5">
        <div class="playground light spacing-block">
          <p-pagination [totalItemsCount]="500" [itemsPerPage]="25" [activePage]="1"></p-pagination>
        </div>
        <p-divider></p-divider>
      </p-grid-item>
      <p-grid-item [size]="5">
        <div class="playground dark spacing-block">
          <p-pagination [theme]="'dark'" [totalItemsCount]="500" [itemsPerPage]="25" [activePage]="1"></p-pagination>
        </div>
        <p-divider></p-divider>
      </p-grid-item>
    </p-grid>
  `
})
export class NavigationComponent {

}
