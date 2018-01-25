import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule, 
  MatCardModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatSelectModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule, MatIconModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule, MatIconModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatSelectModule]
})
export class AppMaterialModuleModule { }
