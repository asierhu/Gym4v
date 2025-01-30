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
      fechaInicio: "10/08/2014 00:00",
    },

    { 
      id: 2,
      img:"",
      name: "Aitor Lopez",
      email: "aitor_lopez@cuatrotientos.org",
      tel: "234567890",
      fechaInicio: "10/08/2014 00:00",
    },

    { 
      id: 3,
      img:"",
      name: "Asier Huarte",
      email: "asier_huarte@cuatrotientos.org",
      tel: "345678901",
      fechaInicio: "10/08/2014 00:00",
    },
    { 
      id: 4,
      img:"",
      name: "Miguel Lopez",
      email: "miguel_lopez@cuatrotientos.org",
      tel: "456789012",
      fechaInicio: "10/08/2014 00:00",
    },
    { 
      id: 5,
      img:"",
      name: "Aitor Huarte",
      email: "aitor_huarte@cuatrotientos.org",
      tel: "567890123",
      fechaInicio: "10/08/2014 00:00",
    },
    { 
      id: 6,
      img:"",
      name: "Asier Goyena",
      email: "asier_goyena@cuatrotientos.org",
      tel: "678901234",
      fechaInicio: "10/08/2014 00:00",
    },
    { 
      id: 7,
      img:"",
      name: "Miguel Huarte",
      email: "miguel_huarte@cuatrotientos.org",
      tel: "789012345",
      fechaInicio: "10/08/2014 00:00",
    },
    { 
      id: 8,
      img:"",
      name: "Aitor Goyena",
      email: "aitor_goyena@cuatrotientos.org",
      tel: "890123456",
      fechaInicio: "10/08/2014 00:00",
    },
    { 
      id: 9,
      img:"",
      name: "Asier Lopez",
      email: "asier_lopez@cuatrotientos.org",
      tel: "901234567",
      fechaInicio: "10/08/2014 00:00",
    }
  ];

  getMonitores(): Monitor[] {
    return this.monitores;
  }
  getMonitoresByName(name: string): Monitor[] {
    return this.monitores.filter(monitor => monitor.name.toLowerCase().includes(name.toLowerCase()));
  }
  postMonitor(newMonitor: Monitor){
    this.monitores.push(newMonitor);
  }
  postMonitorAutoIncrement(name: string, email: string, tel: string, fechaInicio: string, img: string){
    this.monitores.push(new Monitor(this.monitores.length + 1,name, email, tel, fechaInicio, img));
  }
  deleteMonitor(id: number){
    this.monitores.splice(id - 1, 1);
  }
  editMonitor(monitor: Monitor){ {
    const index = this.monitores.findIndex(monitor => monitor.id === monitor.id);
    if (index !== -1) {
      this.monitores[index] = { 
        id: monitor.id,
        img:"",
        name: monitor.name,
        email: monitor.email,
        tel: monitor.tel,
        fechaInicio: "10/08/2014 00:00",
       };
      }
    }
  }
  constructor() { 

  }
}
