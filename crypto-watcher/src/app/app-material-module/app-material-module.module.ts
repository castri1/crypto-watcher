import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule]
})
export class AppMaterialModuleModule { }
