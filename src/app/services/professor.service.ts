import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../interfaces/professor';
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
export class ProfessorService {
  constructor(private firestore: Firestore) { }

  private professoresColllection = collection(this.firestore, 'professores');

  listar() {        
    return collectionData(this.professoresColllection, {idField: 'id'}) as Observable<Professor[]>;
  }

  buscarPorNomeExato(nome: string) {
    if (!nome) {
      return this.listar();
    }

    const filtro = query(this.professoresColllection, where('nome', '==', nome));
    return collectionData(filtro, {idField: 'id'}) as Observable<Professor[]>;
  } 

  buscarPorNomeQueComeceCom(nome: string) {
    if (!nome) {
      return this.listar();
    }

    const filtro = query(this.professoresColllection, 
      where('nome', '>=', nome),
      where('nome', '<', nome + '\uf8ff'));
    return collectionData(filtro, {idField: 'id'}) as Observable<Professor[]>;
  }    

  //Sincrono  
  // adicionar(professor: Professor) {
  //   return addDoc(this.professoresColllection, professor);
  // }

  //Assincrono
  async adicionar(professor: Professor) {
    return await addDoc(this.professoresColllection, professor);
  }  

  async atualizar(id: string, professor: Professor) {
    const professorDoc = doc(this.firestore, 'professores', id);
    return await updateDoc(professorDoc, {...professor});    
  }

  async excluir(id: string) {
    const professorDoc = doc(this.firestore, `professores/${id}`);
    return await deleteDoc(professorDoc);      
  }
}
