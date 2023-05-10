import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent {
  categoria: Categoria = {
    id:'',
  nome: '',
  descricao: ''

}
  
  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
     this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome
      this.categoria.descricao = resposta.descricao
      console.log(this.categoria)
     })

  }

  update(): void{
    this.service.update(this.categoria).subscribe((resposta) => {
      
      this.router.navigate(['categorias'])
      this.service.mensagem('Serviço  atualizado com sucesso!!')
      
    }, err => {
      this.service.mensagem('Valide se todos os campos foram preenchidos corretamente')
    })
  }
  cancelar(): void{
    this.router.navigate(['categorias'])
  }



  
}
