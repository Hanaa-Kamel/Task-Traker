import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Tracker';
  showAddTask:boolean=false;
  subscription:Subscription;
  constructor(private uiServse:UiService,private router:Router) { 
    this.subscription= this.uiServse.onToggle().
    subscribe((value)=>(this.showAddTask=value))
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
    this.uiServse.toggleAddTask()
  }

  hasRoute(route:string){
    return this.router.url === route ;
  }

}
