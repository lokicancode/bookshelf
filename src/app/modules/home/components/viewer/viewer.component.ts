import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit {
  @Input('pdfUrl') pdfUrl!: string;
  @Output('closeEvent') closeEvent = new EventEmitter();

  sanitizedPdfUrl: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pdfUrl']) {
      this.sanitizedPdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.pdfUrl
      );

      window.scrollTo({ top: 0 });
    }
  }

  onViewerClose() {
    this.closeEvent.emit();
  }
}
