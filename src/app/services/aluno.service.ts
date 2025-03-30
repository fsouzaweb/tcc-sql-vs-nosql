import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../interfaces/aluno';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  constructor(private firestore: Firestore) { }

  private alunosColllection = collection(this.firestore, 'alunos');

  listar() {
    return collectionData(this.alunosColllection, {idField: 'id'}) as Observable<Aluno[]>;
  }

  buscarPorNomeExato(nome: string) {
    if (!nome) {
      return this.listar();
    }

    const filtro = query(this.alunosColllection, where('nome', '==', nome));
    return collectionData(filtro, {idField: 'id'}) as Observable<Aluno[]>;
  }

  buscarPorNomeQueComeceCom(nome: string) {
    if (!nome) {
      return this.listar();
    }

    const filtro = query(this.alunosColllection,
      where('nome', '>=', nome),
      where('nome', '<', nome + '\uf8ff'));
    return collectionData(filtro, {idField: 'id'}) as Observable<Aluno[]>;
  }

  //Sincrono
  // adicionar(aluno: Aluno) {
  //   return addDoc(this.alunosColllection, aluno);
  // }

  //Assincrono
  async adicionar(aluno: Aluno) {
    return await addDoc(this.alunosColllection, aluno);
  }

  async atualizar(id: string, aluno: Aluno) {
    const alunoDoc = doc(this.firestore, 'alunos', id);
    return await updateDoc(alunoDoc, {...aluno});
  }

  async excluir(id: string) {
    const alunoDoc = doc(this.firestore, `alunos/${id}`);
    return await deleteDoc(alunoDoc);
  }
}
