import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-descargar-cv',
  templateUrl: './btn-descargar-cv.component.html',
  styleUrls: ['./btn-descargar-cv.component.css'],
})
export class BtnDescargarCvComponent {
  @Input() valorBtn!: string;
}
