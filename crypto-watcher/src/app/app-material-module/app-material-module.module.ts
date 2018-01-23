import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule, MatIconModule]
})
export class AppMaterialModuleModule { }
