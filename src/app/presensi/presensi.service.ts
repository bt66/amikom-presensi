import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PresensiService {

  constructor() { }

  async presensiCode(qrCode:string,NIM:string) {
    let body = {
      "data":`${qrCode};${NIM}`
    }
    console.log(`============service ${qrCode} & nim ${NIM}=============`)
    const reqHeader = {
      'User-Agent':'@m!k0mXv=#neMob!le',
      'Content-Type':'application/json',
    }
    try {
      const result = await axios.post(`${environment.presensiEndpoint}`, body, {headers: reqHeader})
      console.log(await result)
      return await result.data.message
    }
    catch(err) {
      console.log(err)
      return(err)
    }
  }
}
