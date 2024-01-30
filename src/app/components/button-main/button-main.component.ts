import { Component, Input } from '@angular/core';
import { STYLES_BUTTONS } from '../../data/constants';

@Component({
  selector: 'app-button-main',
  standalone: true,
  imports: [],
  templateUrl: './button-main.component.html',
  styleUrl: './button-main.component.css',
})
export class ButtonMainComponent {
  @Input() btnText = '' as string;
  @Input() btnType = '' as string;
  styling = '' as string | undefined;

  ngOnInit() {
    switch (this.btnType) {
      case 'main':
        this.styling = STYLES_BUTTONS.find(
          (style) => style['key'] === 'main'
        )?.styles;
        break;
      case 'main-red':
        this.styling = STYLES_BUTTONS.find(
          (style) => style['key'] === 'main-red'
        )?.styles;
        break;
      case 'warning':
        this.styling = STYLES_BUTTONS.find(
          (style) => style['key'] === 'warning'
        )?.styles;
        break;
      case 'danger':
        this.styling = STYLES_BUTTONS.find(
          (style) => style['key'] === 'danger'
        )?.styles;
        break;
      default:
        this.styling = STYLES_BUTTONS.find(
          (style) => style['key'] === 'default'
        )?.styles;
    }
  }
}
