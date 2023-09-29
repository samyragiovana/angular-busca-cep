import { Component } from '@angular/core';
import { CepService } from './service/cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cep:string = ''
  cepData: any = []

  constructor(private cepService:CepService){}
  pesquisarCep(){
    this.cepService.getCep(this.cep).subscribe((data:any) =>{
      this.cepData = data
      console.log(this.cepData)
    }
    )
  }
}
