import { Component, OnInit } from '@angular/core';
import { PresensiService } from './presensi.service';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-presensi',
  templateUrl: './presensi.component.html',
  styleUrls: ['./presensi.component.css']
})
export class PresensiComponent implements OnInit {

  scanResult: any='';
  presensiResult: any='';

  constructor(
    private readonly presensiService: PresensiService
  ) { }
  
  ngOnInit(): void {
  }
  async onCodeResult(qrCode:string) {
    this.presensiResult = await this.presensiService.presensiCode(qrCode,'20.11.3714')
    this.scanResult=qrCode;
    alert(await this.presensiResult)
  }
}