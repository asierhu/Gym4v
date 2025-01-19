import { Injectable } from '@angular/core';
import { Monitor } from '../models/monitor';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private monitores: Monitor[] = [
    { 
      id: 1,
      img:"",
      name: "Miguel Goyena",
      email: "miguel_goyena@cuatrotientos.org",
      tel: "123456789",
    },

    { 
      id: 2,
      img:"",
      name: "Aitor Lopez",
      email: "aitor_lopez@cuatrotientos.org",
      tel: "234567890",
    },

    { 
      id: 3,
      img:"",
      name: "Asier Huarte",
      email: "asier_huarte@cuatrotientos.org",
      tel: "345678901",
    },
    { 
      id: 4,
      img:"",
      name: "Miguel Lopez",
      email: "miguel_lopez@cuatrotientos.org",
      tel: "456789012",
    },
    { 
      id: 5,
      img:"",
      name: "Aitor Huarte",
      email: "aitor_huarte@cuatrotientos.org",
      tel: "567890123",
    },
    { 
      id: 6,
      img:"",
      name: "Asier Goyena",
      email: "asier_goyena@cuatrotientos.org",
      tel: "678901234",
    },
    { 
      id: 7,
      img:"",
      name: "Miguel Huarte",
      email: "miguel_huarte@cuatrotientos.org",
      tel: "789012345",
    },
    { 
      id: 8,
      img:"",
      name: "Aitor Goyena",
      email: "aitor_goyena@cuatrotientos.org",
      tel: "890123456",
    },
    { 
      id: 9,
      img:"",
      name: "Asier Lopez",
      email: "asier_lopez@cuatrotientos.org",
      tel: "901234567",
    }
  ];

  // Creamos un método para devolver todos los monitores
  getMonitores(): Monitor[] {
    return this.monitores;
  }
  constructor() { }
}
