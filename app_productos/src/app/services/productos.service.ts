import { Injectable } from '@angular/core';
import { Firestore, doc, addDoc, collection, collectionData, getDoc, getDocs, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Producto } from '../classes/producto';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private firestore:Firestore) { }

  traer() {
    const collectionRef = collection(this.firestore, 'productos');
    return collectionData(collectionRef, {idField:'id'}) as Observable<Producto[]>;
  }

  agregar(p:Producto) {
    const collectionRef = collection(this.firestore, 'productos');
    return addDoc(collectionRef, {codigo: p.codigo, descripcion: p.descripcion, precio: p.precio, stock: p.stock, paisDeOrigen: p.paisDeOrigen, bandera: p.bandera, comestible: p.comestible});
  }

}
