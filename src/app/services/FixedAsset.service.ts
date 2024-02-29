import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FixedAssetModel } from '../models/FixedAsset.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FixedAssetService {
  constructor(private http: HttpClient) {}
  getAllAsset(): Observable<FixedAssetModel[]> {
    return this.http.get<FixedAssetModel[]>(`${environment.apiUrl}asset`);
  }
  updateAsset(
    id: number,
    updatedAsset: FixedAssetModel
  ): Observable<FixedAssetModel> {
    return this.http.put<FixedAssetModel>(
      `${environment.apiUrl}asset/${id}`,
      updatedAsset
    );
  }
  createAsset(asset: FixedAssetModel): Observable<FixedAssetModel> {
    return this.http.post<FixedAssetModel>(`${environment.apiUrl}asset`, asset);
  }
  findByTypeOrPurchaseDateOrSerial(
    type: 'INMUEBLE' | 'MAQUINARIA' | 'MATERIAL_OFICINA',
    purchaseDate: string,
    serial: string
  ): Observable<FixedAssetModel[]> {
    return this.http.get<FixedAssetModel[]>(`${environment.apiUrl}asset`, {
      params: {
        type,
        purchaseDate,
        serial,
      },
    });
  }
}
