import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-noticias-details',
  templateUrl: './noticias-details.component.html',
  styleUrls: ['./noticias-details.component.scss'],
})
export class NoticiasDetailsComponent implements OnInit, OnChanges {
  @Input('item') noticia: any = {};

  @Output() onClear: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('details', this.noticia);
    console.log(this.noticia);
    console.log('Llegaron cambios: ', changes);
  }
  clearNoticia(): void {
    // this.noticia = { title: 'Notice' };
    this.onClear.emit();
  }
}
