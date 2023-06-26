import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  
  quantidade:number = 0;

  adiconar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

  //checked -> content -> view

  //quando o primeiro conteúdo é iniciado.
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  //deposi da inicialização da view.
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  //após alguma alteração, verifica o conteúdo.
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  //após alguma alteração, verifica a view.
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }  

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnDestroy(): void {
    console.log("Goodbye, my friend!");
  }

}
