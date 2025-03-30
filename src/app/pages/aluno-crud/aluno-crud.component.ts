import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { AlunoService } from '../../services/aluno.service';

import { Aluno } from '../../interfaces/aluno';

import { MenuComponent } from "../../components/menu/menu.component";
import { ModalAlunoVisualizacaoComponent } from './modal-aluno-visualizacao/modal-aluno-visualizacao.component';
import { ModalAlunoAdicaoEdicaoComponent } from './modal-aluno-adicao-edicao/modal-aluno-adicao-edicao.component';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-aluno-crud',
  standalone: true,
  imports: [MenuComponent, MatFormField, MatInputModule, MatIconModule, MatPaginatorModule, MatTableModule, MatSortModule, MatDialogModule, MatButtonModule],
  templateUrl: './aluno-crud.component.html',
  styleUrl: './aluno-crud.component.scss'
})
export class AlunoCrudComponent implements OnInit, AfterViewInit {
  constructor(
    private alunoService: AlunoService,
    private dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'cep', 'logradouro', 'numero', 'acao'];

  dataSource = new MatTableDataSource<Aluno>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.listarAlunoes();
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.firstPageLabel = 'Primeira página';
    this.paginator._intl.lastPageLabel = 'Última página';
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
  }

  aplicarFiltroBackendExato(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alunoService.buscarPorNomeExato(filterValue).subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  aplicarFiltroBackendQueComeceCom(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alunoService.buscarPorNomeQueComeceCom(filterValue).subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  //-----

  exibirModalVisualizacaoAluno(aluno: Aluno) {
    this.dialog.open(ModalAlunoVisualizacaoComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '80%',
      data: aluno
    })
  }

  exibirModalAdicaoAluno() {
    this.dialog.open(ModalAlunoAdicaoEdicaoComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '80%'
    }) //.afterClosed().subscribe(() => this.listarAlunoes());  (Usar somente quando for um banco dedas relacional com API em .NET ou JAVA)
  }

  exibirModalEdicaoAluno(aluno: Aluno) {
    this.dialog.open(ModalAlunoAdicaoEdicaoComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '80%',
      data: aluno
    }) //.afterClosed().subscribe(() => this.listarAlunoes());  (Usar somente quando for um banco dedas relacional com API em .NET ou JAVA)
  }

  listarAlunoes() {
    this.alunoService.listar().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  excluir(id: string) {
    this.alunoService.excluir(id)
    .then(() => {
      alert('Aluno excluído com sucesso!');
    })
    .catch(error => {
      alert('Erro ao excluir aluno!');
      console.error(error)
    });
  }
}
