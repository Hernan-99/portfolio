import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-sobre-mi',
  templateUrl: './btn-sobre-mi.component.html',
  styleUrls: ['./btn-sobre-mi.component.css'],
})
export class BtnSobreMiComponent {
  @Input() valorBtn!: string;
}
