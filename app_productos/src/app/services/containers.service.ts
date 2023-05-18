import { Injectable } from '@angular/core';
import { Container } from '../classes/container';
import { Firestore, doc, addDoc, collection, collectionData, getDoc, getDocs, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ContainersService {

  constructor(private firestore:Firestore) { }

  traer() {
    const collectionRef = collection(this.firestore, 'containers');
    return collectionData(collectionRef, {idField:'id'}) as Observable<Container[]>;
  }

  agregar(c:Container) {
    const collectionRef = collection(this.firestore, 'containers');
    return addDoc(collectionRef, {codigo: c.codigo, color: c.color, empresa: c.empresa,capacidad: c.capacidad});
  }

  borrar(c:Container) { 
    const collectionRef = collection(this.firestore, 'containers');
    const documento = doc(collectionRef, c.id);
    return deleteDoc(documento);
  }

  modificar(c:Container) {
    const col = collection(this.firestore, 'containers');

    const documento = doc(col, c.id);
    updateDoc(documento, {
      color: c.color,
      empresa : c.empresa,
      capacidad: c.capacidad
    });
    
  }
}
